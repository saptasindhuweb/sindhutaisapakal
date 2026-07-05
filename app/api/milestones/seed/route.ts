import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/database/connection";
import Milestone from "@/lib/database/model/milestone.model";
import { isValidSessionToken } from "@/lib/adminAuth";
import { events } from "@/lib/data/events";
import { zhepEvents } from "@/lib/data/zhepEvents";
import { yashodamaiEvents } from "@/lib/data/yashodamaiEvents";

export const runtime = "nodejs";

const COOKIE_NAME = "admin_session";

/**
 * POST /api/milestones/seed
 * Admin-only. Inserts all static event data into MongoDB.
 * Uses upsert so it is safe to run multiple times.
 */
export async function POST(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!isValidSessionToken(token))
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connect();

    const seedDocs = [
      // ── ZEP events ──────────────────────────────────────
      ...zhepEvents.map((e) => ({
        slug: e.id,
        title: e.title,
        thumbnail: e.coverImage,
        youtubeLink: e.link ?? "",
        photos: e.images ?? [],
        description: e.description,
        shortDescription: e.shortDescription,
        date: new Date(e.date),
        type: "zep" as const,
        published: true,
      })),

      // ── Yashodamaai award events ─────────────────────────
      ...yashodamaiEvents.map((e) => ({
        slug: e.id,
        title: e.title,
        thumbnail: e.coverImage,
        youtubeLink: e.link ?? "",
        photos: e.images ?? [],
        description: e.description,
        shortDescription: e.shortDescription,
        date: new Date(e.date),
        type: "yashodamai" as const,
        published: true,
      })),

      // ── General updates ──────────────────────────────────
      ...events.map((e) => ({
        slug: e.id,
        title: e.title,
        thumbnail: e.coverImage,
        youtubeLink: e.link ?? "",
        photos: e.images ?? [],
        description: e.description,
        shortDescription: e.shortDescription,
        date: new Date(e.date),
        type: "update" as const,
        published: true,
      })),
    ];

    let inserted = 0;
    let skipped = 0;

    for (const doc of seedDocs) {
      const result = await Milestone.updateOne(
        { slug: doc.slug },
        { $setOnInsert: doc },
        { upsert: true }
      );
      if (result.upsertedCount > 0) inserted++;
      else skipped++;
    }

    return NextResponse.json({
      message: `Seed complete. Inserted: ${inserted}, already existed: ${skipped}.`,
      inserted,
      skipped,
    });
  } catch (err) {
    console.error("[POST /api/milestones/seed]", err);
    return NextResponse.json({ message: "Seed failed" }, { status: 500 });
  }
}
