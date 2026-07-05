import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Sindhutai Sapakal's mission by donating to Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha. Your contribution provides food, shelter, education, and medical care to over 1,200 orphaned and underprivileged children across Maharashtra.",
  keywords: [
    "donate Sindhutai Sapakal",
    "donate NGO India",
    "donate orphan children Maharashtra",
    "Saptasindhu donation",
    "support underprivileged children",
    "charity India",
    "NGO donation online",
  ],
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    title: "Donate | Sindhutai Sapakal",
    description:
      "Your donation to Saptasindhu NGO directly supports food, shelter, education, and medical care for orphaned children across Maharashtra. Help us carry forward Maai's legacy.",
    url: "/donate",
    images: [
      {
        url: "/assets/images/founders/1.png",
        width: 1200,
        height: 630,
        alt: "Donate to Sindhutai Sapakal NGO",
      },
    ],
  },
  twitter: {
    title: "Donate | Sindhutai Sapakal",
    description:
      "Support food, shelter, and education for orphaned children in Maharashtra. Donate to the Saptasindhu NGO today.",
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
