import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Sindhutai Sapakal's official website. Learn about Padma Shri Dr. Sou. Sindhutai Sapakal (Maai) — the Mother of Orphans — and the Saptasindhu NGO's mission to shelter, educate, and uplift orphaned children across Maharashtra.",
  keywords: [
    "Sindhutai Sapakal home",
    "Saptasindhu NGO",
    "Maai Mother of Orphans",
    "orphan welfare Maharashtra",
    "donate to orphans India",
    "Padma Shri Sindhutai",
  ],
  alternates: {
    canonical: "/home",
  },
  openGraph: {
    title: "Home | Sindhutai Sapakal",
    description:
      "Discover the story of Padma Shri Sindhutai Sapakal and the Saptasindhu NGO — over two decades of compassion, shelter, and education for orphaned children in Maharashtra.",
    url: "/home",
    images: [
      {
        url: "/assets/images/founders/1.png",
        width: 1200,
        height: 630,
        alt: "Sindhutai Sapakal – Mother of Orphans",
      },
    ],
  },
  twitter: {
    title: "Home | Sindhutai Sapakal",
    description:
      "Discover the story of Padma Shri Sindhutai Sapakal and the Saptasindhu NGO — over two decades of compassion, shelter, and education for orphaned children.",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
