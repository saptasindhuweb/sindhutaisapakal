import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mamata Sindhutai Sapakal",
  description:
    "Mamata Sindhutai Sapakal — the biological daughter of Padma Shri Sindhutai Sapakal (Maai) and President of Saptasindhu NGO. After Maai's passing in January 2022, Mamata Tai has taken on the responsibility of continuing her mother's legacy of care for 260+ children.",
  keywords: [
    "Mamata Sindhutai Sapakal",
    "Mamata Tai",
    "daughter of Sindhutai",
    "Saptasindhu president",
    "legacy Sindhutai",
    "Maai parivar",
    "orphan children caretaker Maharashtra",
  ],
  alternates: {
    canonical: "/mamtatai",
  },
  openGraph: {
    title: "Mamata Sindhutai Sapakal | Sindhutai Sapakal",
    description:
      "Mamata Tai — daughter of Padma Shri Sindhutai Sapakal — carrying forward her mother's extraordinary legacy of love and service to 260+ children after Maai's passing in 2022.",
    url: "/mamtatai",
    images: [
      {
        url: "/assets/images/mamtatai/mamta.png",
        width: 1200,
        height: 630,
        alt: "Mamata Sindhutai Sapakal – The Mother's Daughter",
      },
    ],
  },
  twitter: {
    title: "Mamata Sindhutai Sapakal | Sindhutai Sapakal",
    description:
      "Carrying forward Maai's legacy of compassion and service — Mamata Tai continues the mission for 260+ children.",
  },
};

export default function MamtataiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
