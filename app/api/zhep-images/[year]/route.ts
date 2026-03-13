import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

export async function GET(
  _request: Request,
  context: { params: Promise<{ year: string }> }
) {
  const { year } = await context.params;

  if (!/^\d{4}$/.test(year)) {
    return NextResponse.json({ images: [] }, { status: 200 });
  }

  const folderPath = path.join(process.cwd(), "public", "assets", "zhep", year);

  try {
    const entries = await fs.readdir(folderPath, { withFileTypes: true });

    const images = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "en"))
      .map((name) => `/assets/zhep/${year}/${encodeURIComponent(name)}`);

    return NextResponse.json({ images }, { status: 200 });
  } catch {
    return NextResponse.json({ images: [] }, { status: 200 });
  }
}
