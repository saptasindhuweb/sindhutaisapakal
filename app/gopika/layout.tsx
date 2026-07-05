import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gopika Gai Rakshan Kendra",
  description:
    "Gopika Gai Rakshan Kendra — established in 2007 under Saptasindhu NGO, founded by Padma Shri Sindhutai Sapakal. Providing shelter, medical care, and dignity to old, sick, stray, and abandoned cows, continuing Maai's compassion for all living beings.",
  keywords: [
    "Gopika Gai Rakshan Kendra",
    "cow shelter Maharashtra",
    "Sindhutai Sapakal cow shelter",
    "Saptasindhu animal care",
    "abandoned cows India",
    "goshala Maharashtra",
  ],
  alternates: {
    canonical: "/gopika",
  },
  openGraph: {
    title: "Gopika Gai Rakshan Kendra | Sindhutai Sapakal",
    description:
      "Gopika Gai Rakshan Kendra, established in 2007, provides shelter and medical care to old, sick, and abandoned cows — carrying forward Maai's compassion for all living beings.",
    url: "/gopika",
    images: [
      {
        url: "/assets/images/gopika/gopika-heros-1.png",
        width: 1200,
        height: 630,
        alt: "Gopika Gai Rakshan Kendra – Cow Shelter",
      },
    ],
  },
  twitter: {
    title: "Gopika Gai Rakshan Kendra | Sindhutai Sapakal",
    description:
      "Established in 2007, providing shelter and care to old, sick, and abandoned cows — continuing Maai's compassion for all living beings.",
  },
};

export default function GopikaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
