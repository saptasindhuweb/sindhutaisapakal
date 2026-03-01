import { NextRequest, NextResponse } from "next/server";
import { createSessionToken, isPasswordConfigured, isValidSessionToken, verifyAdminPassword } from "@/lib/adminAuth";

export const runtime = "nodejs";

const COOKIE_NAME = "admin_session";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  return NextResponse.json({ authenticated: isValidSessionToken(token) });
}

export async function POST(request: NextRequest) {
  if (!isPasswordConfigured()) {
    return NextResponse.json(
      { message: "Admin password/session secret not configured on server." },
      { status: 500 }
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;

  if (!body?.password || !verifyAdminPassword(body.password)) {
    return NextResponse.json({ message: "Invalid password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
