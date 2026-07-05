/**
 * Run with:  npx tsx scripts/seed-milestones.ts
 *
 * Reads MONGODB_URI from .env.local and seeds all milestone data
 * directly into MongoDB — no running server required.
 */

import "dotenv/config";
import mongoose from "mongoose";
import path from "node:path";
import { config } from "dotenv";

// Load .env.local
config({ path: path.resolve(process.cwd(), ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("❌  MONGODB_URI not found in .env.local");
  process.exit(1);
}

// ─── inline schema (avoids TS path-alias resolution issues) ──────────────────

const MilestoneSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    thumbnail: { type: String, default: "" },
    youtubeLink: { type: String, default: "" },
    photos: [{ type: String }],
    description: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    date: { type: Date, required: true },
    type: { type: String, enum: ["zep", "yashodamai", "update"], required: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Milestone =
  mongoose.models?.Milestone ?? mongoose.model("Milestone", MilestoneSchema);

// ─── seed data ────────────────────────────────────────────────────────────────

const zhepDesc =
  "This initiative is conducted so that the children in the institution are introduced to subjects beyond their regular school curriculum and develop interest in them. Under the theme experts from different fields are invited over a period of ten days to share knowledge and interact with the children. Their sessions, along with follow-up discussions, are organised as part of the programme. In addition, activities like trekking and visits to various organisations are also included. Zep is not just a camp. It is a platform that goes beyond academics, helping children discover their hidden talents and laying the foundation for essential life skills.";

const yashodamaiDesc =
  "Padma Shri Dr. Sau. Sindhutai Sapakal's work, her contribution to the upliftment of the underprivileged, and her love for orphaned children are well known. Even today, there are many individuals and organisations in society who continue to work in their own way for disadvantaged and vulnerable communities, especially orphaned and destitute children and women. Among these, one individual and one organisation are honoured each year with the Padma Shri Dr. Sau. Sindhutai Sapakal Yashodamaai National Award on Maai's remembrance day, that is, 4th January. The selection of both the individual and the organisation for this award is done with great thought and care. On Maai's Remembrance Day, these awards are presented by respected dignitaries. The purpose of these awards is to ensure that Maai's blessings and the inspiration drawn from her life's work reach as many social workers as possible, giving them the strength and energy to continue their journey of service.";

const seeds = [
  // ── ZEP ────────────────────────────────────────────────────────────────
  { slug: "zhep-2022", title: "Zhep 2022", type: "zep", date: "2022-01-01", thumbnail: "/assets/images/backgrounds/bg-legacy.png", shortDescription: "A life-skills and talent-discovery camp for children.", description: zhepDesc, youtubeLink: "", photos: [] },
  { slug: "zhep-2023", title: "Zhep 2023", type: "zep", date: "2023-01-01", thumbnail: "/assets/images/backgrounds/bg-legacy.png", shortDescription: "A life-skills and talent-discovery camp for children.", description: zhepDesc, youtubeLink: "", photos: [] },
  { slug: "zhep-2024", title: "Zhep 2024", type: "zep", date: "2024-01-01", thumbnail: "/assets/images/backgrounds/bg-legacy.png", shortDescription: "A life-skills and talent-discovery camp for children.", description: zhepDesc, youtubeLink: "", photos: [] },
  { slug: "zhep-2025", title: "Zhep 2025", type: "zep", date: "2025-01-01", thumbnail: "/assets/images/backgrounds/bg-legacy.png", shortDescription: "A life-skills and talent-discovery camp for children.", description: zhepDesc, youtubeLink: "https://www.youtube.com/watch?v=-uyFrWYJa7U&list=PL8gCb0gPpoBzaV06cjOFTE8-3ZdW5Y9xa", photos: [] },

  // ── Yashodamaai ─────────────────────────────────────────────────────────
  { slug: "yashodamai-2023", title: "Padma Shri. Dr. Sau. Sindhutai Sapakal Yashodamaai National Award 2023", type: "yashodamai", date: "2023-01-04", thumbnail: "/assets/images/backgrounds/bg-legacy.png", shortDescription: "Honouring outstanding social workers on Maai's remembrance day.", description: yashodamaiDesc, youtubeLink: "https://youtu.be/loVWoDlhiNk?si=0WCM3icUaae2GH4h", photos: [] },
  { slug: "yashodamai-2024", title: "Padma Shri. Dr. Sau. Sindhutai Sapakal Yashodamaai National Award 2024", type: "yashodamai", date: "2024-01-04", thumbnail: "/assets/images/backgrounds/bg-legacy.png", shortDescription: "Honouring outstanding social workers on Maai's remembrance day.", description: yashodamaiDesc, youtubeLink: "https://youtu.be/loVWoDlhiNk?si=0WCM3icUaae2GH4h", photos: [] },
  { slug: "yashodamai-2025", title: "Padma Shri. Dr. Sau. Sindhutai Sapakal Yashodamaai National Award 2025", type: "yashodamai", date: "2025-01-04", thumbnail: "/assets/images/backgrounds/bg-legacy.png", shortDescription: "Honouring outstanding social workers on Maai's remembrance day.", description: yashodamaiDesc, youtubeLink: "https://youtu.be/pw_2yDHoU38?si=hg4XF_T_anPqIYDC", photos: [] },
  { slug: "yashodamai-2026", title: "Padma Shri. Dr. Sau. Sindhutai Sapakal Yashodamaai National Award 2026", type: "yashodamai", date: "2026-01-04", thumbnail: "/assets/images/backgrounds/bg-legacy.png", shortDescription: "Honouring outstanding social workers on Maai's remembrance day.", description: yashodamaiDesc, youtubeLink: "https://youtu.be/9hG98a4ccao?si=BIHprC4Cy4k8uKmO", photos: [] },

  // ── General updates ─────────────────────────────────────────────────────
  { slug: "health-camp-2025", title: "Multi-Center Health Camp", type: "update", date: "2025-01-10", thumbnail: "/assets/images/mamtatai/mamta-4.png", shortDescription: "Free medical checkups across multiple centers.", description: "A large-scale health camp was organized providing medical consultations, diagnostics, and medicines to children and staff.", youtubeLink: "", photos: ["/assets/images/tirthrup/tirthrup1.png", "/assets/images/gopika/gopika1.jpg", "/assets/images/gopika/gopika2.jpg", "/assets/images/gopika/gopika3.jpg"] },
  { slug: "education-drive-2025", title: "Education Support Drive", type: "update", date: "2025-03-15", thumbnail: "/assets/images/founders/2.png", shortDescription: "Books, uniforms and mentoring support.", description: "The education drive focused on providing essential learning material and mentorship to children across homes.", youtubeLink: "", photos: [] },
  { slug: "anniversary-2025", title: "Foundation Anniversary Celebration", type: "update", date: "2025-06-01", thumbnail: "/assets/images/gopika/gopika2.jpg", shortDescription: "Celebrating years of service and compassion.", description: "A commemorative event celebrating the foundation's journey with supporters and well-wishers.", youtubeLink: "", photos: [] },
  { slug: "tree-plantation-2026", title: "Tree Plantation Drive", type: "update", date: "2026-02-05", thumbnail: "/assets/images/gopika/gopika3.jpg", shortDescription: "Planting for a greener future.", description: "An environmental initiative involving children and volunteers to plant saplings.", youtubeLink: "", photos: [] },
  { slug: "sports-meet-2026", title: "Annual Sports Meet", type: "update", date: "2026-04-20", thumbnail: "/assets/images/gopika/gopika4.jpg", shortDescription: "Encouraging fitness and teamwork.", description: "Children from different homes participated in track, field, and team sports.", youtubeLink: "", photos: [] },
  { slug: "fundraiser-2026", title: "Annual Fundraiser Event", type: "update", date: "2026-08-10", thumbnail: "/assets/images/gopika/gopika5.png", shortDescription: "Supporting future initiatives.", description: "A fundraiser event aimed at raising support for upcoming projects.", youtubeLink: "", photos: [] },
];

// ─── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🔗  Connecting to MongoDB…");
  await mongoose.connect(MONGODB_URI as string, { appName: "seed-script" });
  console.log("✅  Connected.\n");

  let inserted = 0;
  let skipped = 0;

  for (const doc of seeds) {
    const result = await Milestone.updateOne(
      { slug: doc.slug },
      { $setOnInsert: { ...doc, date: new Date(doc.date), published: true } },
      { upsert: true }
    );
    if (result.upsertedCount > 0) {
      console.log(`  ➕  Inserted: ${doc.slug}`);
      inserted++;
    } else {
      console.log(`  ⏭   Skipped (already exists): ${doc.slug}`);
      skipped++;
    }
  }

  console.log(`\n🎉  Done — inserted: ${inserted}, skipped: ${skipped}`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error("❌  Seed failed:", err);
  process.exit(1);
});
