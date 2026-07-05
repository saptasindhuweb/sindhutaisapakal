import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/database/connection";
import Blog from "@/lib/database/model/blog.model";
import { isValidSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

const COOKIE_NAME = "admin_session";
const isAdmin = (req: NextRequest) =>
  isValidSessionToken(req.cookies.get(COOKIE_NAME)?.value);

/** GET /api/blogs
 *  ?limit=N   — cap results
 *  ?tag=X     — filter by tag
 */
export async function GET(req: NextRequest) {
  try {
    await connect();
    const { searchParams } = req.nextUrl;
    const limit = searchParams.get("limit");
    const tag = searchParams.get("tag");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = { published: true };
    if (tag) filter.tags = tag;

    let query = Blog.find(filter).sort({ date: -1 }).lean();
    if (limit) query = query.limit(Number(limit));

    const blogs = await query;
    return NextResponse.json({ blogs });
  } catch (err) {
    console.error("[GET /api/blogs]", err);
    return NextResponse.json({ message: "Failed to fetch blogs" }, { status: 500 });
  }
}

/** POST /api/blogs  —  admin only */
export async function POST(req: NextRequest) {
  if (!isAdmin(req))
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connect();
    const body = await req.json();
    const blog = await Blog.create(body);
    return NextResponse.json({ blog }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create blog";
    return NextResponse.json({ message }, { status: 400 });
  }
}
