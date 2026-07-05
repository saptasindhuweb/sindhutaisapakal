import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha — founded in 1998 by Padma Shri Dr. Sou. Sindhutai Sapakal. Discover our founders, managing committee, mission, values, and the journey of the organisation across Maharashtra.",
  keywords: [
    "Saptasindhu about",
    "Sindhutai Sapakal NGO",
    "about orphanage Maharashtra",
    "Mamata Sindhutai Sapakal",
    "NGO mission Maharashtra",
    "Saptasindhu founders",
    "child welfare organisation India",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Sindhutai Sapakal",
    description:
      "Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha — founded in 1998 by Padma Shri Sindhutai Sapakal, serving orphaned and underprivileged children for over 25 years.",
    url: "/about",
    images: [
      {
        url: "/assets/images/founders/1.png",
        width: 1200,
        height: 630,
        alt: "Founders of Saptasindhu NGO",
      },
    ],
  },
  twitter: {
    title: "About Us | Sindhutai Sapakal",
    description:
      "Saptasindhu NGO — founded in 1998 by Padma Shri Sindhutai Sapakal, serving orphaned and underprivileged children for over 25 years across Maharashtra.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
