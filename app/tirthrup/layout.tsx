import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tirthrup Shaikshanik Vasatigruh",
  description:
    "Tirthrup Shaikshanik Vasatigruh — a transitional child shelter founded in 2017 under Saptasindhu Mahila Adhar, Balsangopan And Shikshan Sanstha, Manjari, Pune. Providing care, education, emotional support, and a secure environment for children facing neglect, abandonment, or family disruption.",
  keywords: [
    "Tirthrup Shaikshanik Vasatigruh",
    "transitional child shelter Pune",
    "Saptasindhu Manjari",
    "Sindhutai Sapakal institutions",
    "child shelter Maharashtra",
    "vulnerable children support India",
    "orphan transitional shelter",
  ],
  alternates: {
    canonical: "/tirthrup",
  },
  openGraph: {
    title: "Tirthrup Shaikshanik Vasatigruh | Sindhutai Sapakal",
    description:
      "Founded in 2017 in Manjari, Pune — a transitional shelter providing education, care, and emotional support to children facing neglect, abandonment, or family disruption.",
    url: "/tirthrup",
    images: [
      {
        url: "/assets/images/tirthrup/tirthrup-heros-1.png",
        width: 1200,
        height: 630,
        alt: "Tirthrup Shaikshanik Vasatigruh – Transitional Child Shelter, Pune",
      },
    ],
  },
  twitter: {
    title: "Tirthrup Shaikshanik Vasatigruh | Sindhutai Sapakal",
    description:
      "Founded in 2017 in Manjari, Pune — providing care, education, and support to children in vulnerable situations.",
  },
};

export default function TirthrupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
