import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shree Manshanti Chatralay – Shirur",
  description:
    "Shree Manshanti Chatralay, established in 2017 at Shirur, Pune — a home for destitute and needy children under Saptasindhu NGO. Providing food, shelter, clothing, medical care, and education to 80+ children, and motivating them to build their futures through vocational skills.",
  keywords: [
    "Shree Manshanti Chatralay",
    "Shirur Pune orphanage",
    "Saptasindhu Shirur",
    "Vinay Sapkal",
    "destitute children shelter Pune",
    "Sindhutai Sapakal institutions",
  ],
  alternates: {
    canonical: "/shree",
  },
  openGraph: {
    title: "Shree Manshanti Chatralay – Shirur | Sindhutai Sapakal",
    description:
      "Established in 2017 at Shirur, Pune — providing shelter, education, and care to 80+ destitute children, empowering them through vocational skills.",
    url: "/shree",
    images: [
      {
        url: "/assets/images/shree/shree-1.png",
        width: 1200,
        height: 630,
        alt: "Shree Manshanti Chatralay – Shirur, Pune",
      },
    ],
  },
  twitter: {
    title: "Shree Manshanti Chatralay – Shirur | Sindhutai Sapakal",
    description:
      "Established in 2017 at Shirur, Pune — shelter, education, and care for 80+ destitute children.",
  },
};

export default function ShreeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
