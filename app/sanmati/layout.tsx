import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanmati Bal Niketan – Boys Orphanage",
  description:
    "Sanmati Bal Niketan, established in 2001 in Manjari, Pune — an orphanage for boys under Saptasindhu NGO. Providing food, shelter, clothing, education, and rehabilitation to underprivileged boys, fostering their holistic development and social integration.",
  keywords: [
    "Sanmati Bal Niketan",
    "boys orphanage Pune",
    "Saptasindhu boys orphanage",
    "Manjari Pune orphanage",
    "Mamata Sindhutai Sapakal",
    "child welfare Pune",
    "orphan boys education Maharashtra",
  ],
  alternates: {
    canonical: "/sanmati",
  },
  openGraph: {
    title: "Sanmati Bal Niketan – Boys Orphanage | Sindhutai Sapakal",
    description:
      "Established in 2001 in Manjari, Pune. Providing food, shelter, education, and cultural development to underprivileged boys, helping them integrate into mainstream society.",
    url: "/sanmati",
    images: [
      {
        url: "/assets/images/sanmati/sanmati-heros-1.png",
        width: 1200,
        height: 630,
        alt: "Sanmati Bal Niketan – Boys Orphanage, Manjari Pune",
      },
    ],
  },
  twitter: {
    title: "Sanmati Bal Niketan – Boys Orphanage | Sindhutai Sapakal",
    description:
      "Established in 2001 in Manjari, Pune — sheltering and educating underprivileged boys and helping them thrive.",
  },
};

export default function SanmatiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
