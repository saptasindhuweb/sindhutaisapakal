import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://sindhutaisapakal.org");

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`,           lastModified: now, priority: 1.0,  changeFrequency: "weekly" },
    { url: `${SITE_URL}/about`,       lastModified: now, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${SITE_URL}/maii`,        lastModified: now, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${SITE_URL}/milestones`,  lastModified: now, priority: 0.85, changeFrequency: "weekly" },
    { url: `${SITE_URL}/blogs`,       lastModified: now, priority: 0.85, changeFrequency: "weekly" },
    { url: `${SITE_URL}/gallery`,     lastModified: now, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${SITE_URL}/donate`,      lastModified: now, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${SITE_URL}/supporters`,  lastModified: now, priority: 0.7,  changeFrequency: "monthly" },
    { url: `${SITE_URL}/contact`,     lastModified: now, priority: 0.7,  changeFrequency: "yearly" },
    { url: `${SITE_URL}/sanmati`,     lastModified: now, priority: 0.7,  changeFrequency: "monthly" },
    { url: `${SITE_URL}/mamtatai`,    lastModified: now, priority: 0.7,  changeFrequency: "monthly" },
    { url: `${SITE_URL}/gopika`,      lastModified: now, priority: 0.65, changeFrequency: "monthly" },
    { url: `${SITE_URL}/mamta`,       lastModified: now, priority: 0.65, changeFrequency: "monthly" },
    { url: `${SITE_URL}/savitribai`,  lastModified: now, priority: 0.65, changeFrequency: "monthly" },
    { url: `${SITE_URL}/shree`,       lastModified: now, priority: 0.65, changeFrequency: "monthly" },
    { url: `${SITE_URL}/tirthrup`,    lastModified: now, priority: 0.65, changeFrequency: "monthly" },
    { url: `${SITE_URL}/policy`,      lastModified: now, priority: 0.3,  changeFrequency: "yearly" },
  ];
}
