import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { isValidSessionToken } from "@/lib/adminAuth";
import { pageDataFiles, pageDataLabels, type PageDataKey } from "@/lib/pageDataFiles";

export const runtime = "nodejs";

const COOKIE_NAME = "admin_session";
const DATA_DIR = path.join(process.cwd(), "lib", "data");

function isValidKey(value: string): value is PageDataKey {
  return value in pageDataFiles;
}

function unauthenticated() {
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}

function getSessionFromRequest(request: NextRequest): boolean {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  return isValidSessionToken(token);
}

export async function GET(request: NextRequest) {
  if (!getSessionFromRequest(request)) return unauthenticated();

  const key = request.nextUrl.searchParams.get("page");

  if (!key) {
    return NextResponse.json({
      pages: Object.keys(pageDataFiles).map((k) => ({ key: k, label: pageDataLabels[k as PageDataKey] })),
    });
  }

  if (!isValidKey(key)) {
    return NextResponse.json({ message: "Invalid page key." }, { status: 400 });
  }

  const fileName = pageDataFiles[key];
  const filePath = path.join(DATA_DIR, fileName);

  try {
    const content = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(content);

    return NextResponse.json({ page: key, fileName, content: parsed });
  } catch {
    return NextResponse.json({ message: "Failed to read JSON file." }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!getSessionFromRequest(request)) return unauthenticated();

  const body = (await request.json().catch(() => null)) as
    | { page?: string; content?: unknown }
    | null;

  if (!body?.page || typeof body.page !== "string" || !isValidKey(body.page)) {
    return NextResponse.json({ message: "Invalid page key." }, { status: 400 });
  }

  if (typeof body.content === "undefined") {
    return NextResponse.json({ message: "Missing content payload." }, { status: 400 });
  }

  const filePath = path.join(DATA_DIR, pageDataFiles[body.page]);

  try {
    const serialized = `${JSON.stringify(body.content, null, 2)}\n`;
    await fs.writeFile(filePath, serialized, "utf8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Failed to save JSON file." }, { status: 500 });
  }
}
