/**
 * Run with:  npx tsx scripts/seed-blogs.ts
 */

import path from "node:path";
import { config } from "dotenv";
config({ path: path.resolve(process.cwd(), ".env.local") });

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) { console.error("❌  MONGODB_URI not found"); process.exit(1); }

const BlogSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    thumbnail: { type: String, default: "" },
    content: { type: String, default: "" },
    excerpt: { type: String, default: "" },
    author: { type: String, default: "Saptasindhu" },
    date: { type: Date, required: true },
    tags: [{ type: String }],
    readTimeMinutes: { type: Number, default: 5 },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Blog = mongoose.models?.Blog ?? mongoose.model("Blog", BlogSchema);

const seeds = [
  {
    slug: "maais-legacy-lives-on",
    title: "Maai's Legacy Lives On — A Mother to Thousands",
    thumbnail: "/assets/images/founders/1.png",
    excerpt: "Padma Shri Dr. Sou. Sindhutai Sapakal gave everything she had to the orphaned and the voiceless. Born from hardship, she became a mother to more than 1,200 children. Her story is not just one of survival — it is one of extraordinary compassion.",
    content: `Padma Shri Dr. Sou. Sindhutai Sapakal gave everything she had to the orphaned and the voiceless. Born from hardship, she became a mother to more than 1,200 children. Her story is not just one of survival — it is one of extraordinary compassion.

Abandoned at the age of 20 while pregnant, Sindhutai — affectionately known as Maai — found herself begging on streets and railway platforms in Amravati. She sheltered in crematoriums, survived on scraps, and sang to sustain herself. Yet, even in those desperate moments, she began gathering orphaned children around her, feeding them from whatever little she had.

Over decades, her small act of compassion grew into a movement. She founded multiple institutions across Maharashtra, providing shelter, food, clothing, education, and medical care to thousands of children.

In January 2022, Maai passed away, leaving behind a profound legacy and a family of over 260 adopted children who remember her as nothing less than a goddess of compassion.

Her daughter, Mamata Sindhutai Sapakal, now carries forward this mission with the same dedication and love, ensuring that Maai's dream of a compassionate world continues to live.`,
    author: "Saptasindhu NGO",
    date: "2025-01-04",
    tags: ["Maai", "Legacy", "Story"],
    readTimeMinutes: 4,
    published: true,
  },
  {
    slug: "zep-what-is-it",
    title: "What is ZEP? A Camp That Changes Lives",
    thumbnail: "/assets/images/backgrounds/bg-legacy.png",
    excerpt: "ZEP is more than a camp. For the children of Saptasindhu institutions, it is ten transformative days that open doors to a world beyond textbooks — filled with expert sessions, trekking adventures, and the joy of discovery.",
    content: `ZEP is more than a camp. For the children of Saptasindhu institutions, it is ten transformative days that open doors to a world beyond textbooks — filled with expert sessions, trekking adventures, and the joy of discovery.

Every year, experts from diverse fields — science, art, entrepreneurship, sports, law, and more — are invited to spend time with the children. These aren't just lectures. They are conversations, workshops, and experiences designed to ignite curiosity.

Children who have never left their hometown find themselves trekking through forests, visiting research institutions, and meeting professionals who look like them — people who came from nothing and built something remarkable.

ZEP was born from a simple belief: every child deserves access to a wider world. When you come from an orphanage, the world can feel very small. ZEP makes it infinite.

The ripple effect of ZEP is visible every year. Children who attended a ZEP session on astronomy become the ones who want to study physics. Children who met a woman entrepreneur start thinking about their own business ideas.

In many ways, ZEP is the most powerful thing we do. Not because it costs the most — it doesn't. But because it changes the way a child sees themselves, and that changes everything.`,
    author: "Saptasindhu NGO",
    date: "2025-06-15",
    tags: ["ZEP", "Children", "Education"],
    readTimeMinutes: 5,
    published: true,
  },
  {
    slug: "sanmati-bal-niketan-25-years",
    title: "25 Years of Sanmati Bal Niketan — A Home That Shapes Futures",
    thumbnail: "/assets/images/sanmati/sanmati-heros-1.png",
    excerpt: "In 2001, a small home for boys opened its doors in Manjari, Pune. Twenty-five years later, Sanmati Bal Niketan has become one of the most trusted child-welfare institutions in Maharashtra, having transformed hundreds of young lives.",
    content: `In 2001, a small home for boys opened its doors in Manjari, Pune. Twenty-five years later, Sanmati Bal Niketan has become one of the most trusted child-welfare institutions in Maharashtra, having transformed hundreds of young lives.

Sanmati Bal Niketan was established under the Saptasindhu Mahila Adhar, Balsangopan And Shikshan Sanstha — the organisation founded by Padma Shri Sindhutai Sapakal. Today, it is managed with dedication by Mamata Sindhutai Sapakal, Maai's biological daughter and the organisation's president.

The institution currently houses and educates boys from underprivileged, abandoned, and orphaned backgrounds. Every child receives food, shelter, clothing, education, and above all — a family.

What makes Sanmati special is not just what it provides, but how it provides it. Cultural programs during Diwali, Ganesh Festival, and Shiv Jayanti ensure children grow up connected to their heritage and traditions. Each child is supervised closely, not as a student in an institution, but as a child in a home.

The admission process, governed strictly by the Child Welfare Committee of Maharashtra, ensures that every child who needs care receives it — regardless of religion, caste, or background.

Over 25 years, the children of Sanmati have gone on to become engineers, teachers, farmers, social workers, and proud members of society. That is Maai's greatest achievement.`,
    author: "Saptasindhu NGO",
    date: "2026-03-01",
    tags: ["Sanmati", "Orphanage", "Children", "Maharashtra"],
    readTimeMinutes: 6,
    published: true,
  },
  {
    slug: "gopika-gai-rakshan-caring-for-cows",
    title: "Gopika Gai Rakshan — Because Compassion Has No Boundaries",
    thumbnail: "/assets/images/gopika/gopika1.jpg",
    excerpt: "Maai's love was not limited to orphaned children. It extended to every living being in need — including abandoned cows. The Gopika Gai Rakshan Kendra, established in 2007, is a testament to that boundless compassion.",
    content: `Maai's love was not limited to orphaned children. It extended to every living being in need — including abandoned cows. The Gopika Gai Rakshan Kendra, established in 2007, is a testament to that boundless compassion.

In rural India, cows that are no longer productive are often abandoned on the streets — left to wander, starve, or be injured in traffic. Gopika Gai Rakshan Kendra provides these old, sick, and stray cows with shelter, veterinary care, and dignity.

The centre is home to dozens of rescued cows at any given time. Staff work tirelessly to ensure each animal receives proper nutrition, medical attention, and space to live out its remaining years with peace.

For Maai, caring for animals was an extension of caring for all life. "If you have compassion in your heart," she often said, "it finds its way to everyone — human or animal."

Supporting Gopika Gai Rakshan Kendra is one way to honour Maai's philosophy and contribute to a gentler world. Your donations help keep this sanctuary running and ensure that no creature is abandoned to suffer alone.`,
    author: "Saptasindhu NGO",
    date: "2025-09-20",
    tags: ["Gopika", "Animal Welfare", "Compassion"],
    readTimeMinutes: 4,
    published: true,
  },
  {
    slug: "how-to-support-our-mission",
    title: "How You Can Support the Mission of Saptasindhu",
    thumbnail: "/assets/images/founders/2.png",
    excerpt: "There are many ways to contribute to the work of Saptasindhu NGO — from a one-time donation to becoming a long-term volunteer. Every gesture, big or small, makes a difference in the lives of the children we serve.",
    content: `There are many ways to contribute to the work of Saptasindhu NGO — from a one-time donation to becoming a long-term volunteer. Every gesture, big or small, makes a difference in the lives of the children we serve.

FINANCIAL DONATIONS
Your monetary contributions fund food, shelter, clothing, medical care, and education for the children of our institutions. You can donate online through our secure payment portal — every rupee goes directly to the children.

SPONSORSHIP
Consider sponsoring a child's education or an annual programme like ZEP. Sponsorships create a direct, personal connection between you and the child whose life you are helping transform.

VOLUNTEERING
If you have skills in teaching, healthcare, legal aid, counselling, or any other field, we welcome you as a volunteer. Even a single visit to our institutions can inspire a child for a lifetime.

SPREADING THE WORD
Follow us, share our stories, and tell your community about the work being done here. Awareness is the first step to support.

IN-KIND DONATIONS
We accept donations of books, clothes, stationery, sports equipment, and other essentials. Please contact us for the current needs of each institution.

CORPORATE PARTNERSHIPS
If your organisation is looking to fulfil its CSR obligations meaningfully, we invite you to partner with us. Together, we can create programmes that make a lasting impact.

To get involved, write to us through the Contact page or reach out to our team directly. We are grateful for every form of support.`,
    author: "Saptasindhu NGO",
    date: "2026-05-10",
    tags: ["Donate", "Support", "Volunteer"],
    readTimeMinutes: 5,
    published: true,
  },
];

async function main() {
  console.log("🔗  Connecting to MongoDB…");
  await mongoose.connect(MONGODB_URI as string, { appName: "seed-blogs" });
  console.log("✅  Connected.\n");

  let inserted = 0, skipped = 0;

  for (const doc of seeds) {
    const result = await Blog.updateOne(
      { slug: doc.slug },
      { $setOnInsert: { ...doc, date: new Date(doc.date) } },
      { upsert: true }
    );
    if (result.upsertedCount > 0) { console.log(`  ➕  Inserted: ${doc.slug}`); inserted++; }
    else { console.log(`  ⏭   Skipped (exists): ${doc.slug}`); skipped++; }
  }

  console.log(`\n🎉  Done — inserted: ${inserted}, skipped: ${skipped}`);
  await mongoose.disconnect();
}

main().catch((err) => { console.error("❌  Seed failed:", err); process.exit(1); });
