import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/database/connection";
import Blog from "@/lib/database/model/blog.model";
import { isValidSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

const COOKIE_NAME = "admin_session";
const isAdmin = (req: NextRequest) =>
  isValidSessionToken(req.cookies.get(COOKIE_NAME)?.value);

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connect();
    const { slug } = await params;
    const blog = await Blog.findOne({ slug, published: true }).lean();
    if (!blog) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ blog });
  } catch (err) {
    console.error("[GET /api/blogs/slug]", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!isAdmin(req))
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connect();
    const { slug } = await params;
    const body = await req.json();
    const updated = await Blog.findOneAndUpdate({ slug }, body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!updated) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ blog: updated });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update";
    return NextResponse.json({ message }, { status: 400 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!isAdmin(req))
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connect();
    const { slug } = await params;
    const deleted = await Blog.findOneAndDelete({ slug }).lean();
    if (!deleted) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    console.error("[DELETE /api/blogs/slug]", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
