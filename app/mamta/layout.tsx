import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mamata Bal Sadan – Orphanage for Girls",
  description:
    "Mamata Bal Sadan, established in 1994 at Saswad, Pune — an orphanage for girls under Saptasindhu NGO. Providing food, shelter, education, and vocational skills to 75+ orphan girls, helping them build independent and stable lives.",
  keywords: [
    "Mamata Bal Sadan",
    "orphanage for girls Maharashtra",
    "Saptasindhu girls orphanage",
    "Saswad Pune orphanage",
    "Deepak Gaikwad Maai",
    "girl child welfare India",
  ],
  alternates: {
    canonical: "/mamta",
  },
  openGraph: {
    title: "Mamata Bal Sadan – Orphanage for Girls | Sindhutai Sapakal",
    description:
      "Established in 1994 at Saswad, Pune. Providing food, shelter, education, and vocational training to orphan girls, helping them build stable independent lives.",
    url: "/mamta",
    images: [
      {
        url: "/assets/images/mamtatai/mamta-1.png",
        width: 1200,
        height: 630,
        alt: "Mamata Bal Sadan – Orphanage for Girls",
      },
    ],
  },
  twitter: {
    title: "Mamata Bal Sadan – Orphanage for Girls | Sindhutai Sapakal",
    description:
      "Established in 1994 at Saswad, Pune — providing shelter, education, and vocational training to 75+ orphan girls.",
  },
};

export default function MamtaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
