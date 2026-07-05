import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maai – Sindhutai Sapakal",
  description:
    "The life and journey of Padma Shri Dr. Sou. Sindhutai Sapakal (Maai) — born 14th November 1948, Wardha, Maharashtra. From abandonment at age 20 to becoming the mother of over 1,200 orphaned children. Honoured with the Padma Shri in 2022.",
  keywords: [
    "Sindhutai Sapakal biography",
    "Maai Mother of Orphans",
    "Padma Shri Sindhutai",
    "Sindhutai Sapakal story",
    "Mother of orphans Maharashtra",
    "social worker India",
    "Sindhutai Sapakal life",
  ],
  alternates: {
    canonical: "/maii",
  },
  openGraph: {
    title: "Maai – Sindhutai Sapakal | Mother of Orphans",
    description:
      "From hardship and abandonment to becoming a Padma Shri recipient and mother of 1,200+ children — the extraordinary life of Sindhutai Sapakal (Maai).",
    url: "/maii",
    images: [
      {
        url: "/assets/images/backgrounds/bg-maii.png",
        width: 1200,
        height: 630,
        alt: "Padma Shri Dr. Sou. Sindhutai Sapakal – Maai",
      },
    ],
  },
  twitter: {
    title: "Maai – Sindhutai Sapakal | Mother of Orphans",
    description:
      "From hardship to Padma Shri — the extraordinary life of Sindhutai Sapakal, mother of over 1,200 orphaned children.",
  },
};

export default function MaiiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
