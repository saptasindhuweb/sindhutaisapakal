import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milestones & Events",
  description:
    "Explore the milestones and events of Saptasindhu NGO — including the Padma Shri Dr. Sou. Sindhutai Sapakal Yashodamaai National Award and the Zep youth festival, celebrating the achievements of orphaned children across Maharashtra.",
  keywords: [
    "Sindhutai Sapakal milestones",
    "Yashodamaai National Award",
    "Zep festival Saptasindhu",
    "NGO events Maharashtra",
    "orphan children awards",
    "Saptasindhu achievements",
  ],
  alternates: {
    canonical: "/milestones",
  },
  openGraph: {
    title: "Milestones & Events | Sindhutai Sapakal",
    description:
      "Celebrating achievements — from the Yashodamaai National Award to the Zep festival. Explore the milestones of Saptasindhu NGO and the children it serves.",
    url: "/milestones",
    images: [
      {
        url: "/assets/images/backgrounds/bg-legacy.png",
        width: 1200,
        height: 630,
        alt: "Saptasindhu NGO Milestones and Events",
      },
    ],
  },
  twitter: {
    title: "Milestones & Events | Sindhutai Sapakal",
    description:
      "Yashodamaai Award, Zep festival, and more — celebrating the milestones of Saptasindhu NGO and the children it has transformed.",
  },
};

export default function MilestonesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
