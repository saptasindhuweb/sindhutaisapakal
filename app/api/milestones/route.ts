import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/database/connection";
import Milestone from "@/lib/database/model/milestone.model";
import { isValidSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

const COOKIE_NAME = "admin_session";

function isAdmin(req: NextRequest) {
  return isValidSessionToken(req.cookies.get(COOKIE_NAME)?.value);
}

/** GET /api/milestones
 *  Query params:
 *    type   – "zep" | "yashodamai" | "update"  (optional)
 *    limit  – number of results                 (optional)
 *    upcoming – "true" to return date >= today  (optional)
 *    past   – "true" to return date < today     (optional)
 */
export async function GET(req: NextRequest) {
  try {
    await connect();

    const { searchParams } = req.nextUrl;
    const type = searchParams.get("type");
    const limit = searchParams.get("limit");
    const upcomingOnly = searchParams.get("upcoming") === "true";
    const pastOnly = searchParams.get("past") === "true";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = { published: true };

    if (type) filter.type = type;

    const today = new Date();
    if (upcomingOnly) filter.date = { $gte: today };
    if (pastOnly) filter.date = { $lt: today };

    let query = Milestone.find(filter).sort({ date: -1 }).lean();
    if (limit) query = query.limit(Number(limit));

    const milestones = await query;
    return NextResponse.json({ milestones });
  } catch (err) {
    console.error("[GET /api/milestones]", err);
    return NextResponse.json({ message: "Failed to fetch milestones" }, { status: 500 });
  }
}

/** POST /api/milestones  —  admin only */
export async function POST(req: NextRequest) {
  if (!isAdmin(req))
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connect();
    const body = await req.json();

    const milestone = await Milestone.create(body);
    return NextResponse.json({ milestone }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create milestone";
    return NextResponse.json({ message }, { status: 400 });
  }
}
