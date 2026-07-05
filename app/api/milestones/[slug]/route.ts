import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/database/connection";
import Milestone from "@/lib/database/model/milestone.model";
import { isValidSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

const COOKIE_NAME = "admin_session";

function isAdmin(req: NextRequest) {
  return isValidSessionToken(req.cookies.get(COOKIE_NAME)?.value);
}

/** GET /api/milestones/[slug] */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connect();
    const { slug } = await params;
    const milestone = await Milestone.findOne({ slug, published: true }).lean();
    if (!milestone)
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ milestone });
  } catch (err) {
    console.error("[GET /api/milestones/slug]", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/** PUT /api/milestones/[slug]  —  admin only */
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
    const updated = await Milestone.findOneAndUpdate({ slug }, body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!updated)
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ milestone: updated });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update";
    return NextResponse.json({ message }, { status: 400 });
  }
}

/** DELETE /api/milestones/[slug]  —  admin only */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!isAdmin(req))
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connect();
    const { slug } = await params;
    const deleted = await Milestone.findOneAndDelete({ slug }).lean();
    if (!deleted)
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    console.error("[DELETE /api/milestones/slug]", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
