import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savitribai Phule Mulinche Vasatigruh",
  description:
    "Savitribai Phule Mulinche Vasatigruh, established in 1992 at Chikhaldara, Amravati — providing refuge, food, shelter, and education to needy, destitute, and tribal girls in remote areas of Maharashtra.",
  keywords: [
    "Savitribai Phule Mulinche Vasatigruh",
    "tribal girls orphanage Maharashtra",
    "Chikhaldara Amravati NGO",
    "Saptasindhu tribal girls",
    "destitute girls shelter India",
    "Sindhutai Sapakal institutions",
  ],
  alternates: {
    canonical: "/savitribai",
  },
  openGraph: {
    title: "Savitribai Phule Mulinche Vasatigruh | Sindhutai Sapakal",
    description:
      "Established in 1992 at Chikhaldara, Amravati — providing refuge, education, and care to needy and tribal girls in remote Maharashtra.",
    url: "/savitribai",
    images: [
      {
        url: "/assets/images/savitribai/savitribai-1.png",
        width: 1200,
        height: 630,
        alt: "Savitribai Phule Mulinche Vasatigruh – Chikhaldara",
      },
    ],
  },
  twitter: {
    title: "Savitribai Phule Mulinche Vasatigruh | Sindhutai Sapakal",
    description:
      "Established in 1992 at Chikhaldara, Amravati — sheltering and educating needy and tribal girls in remote Maharashtra.",
  },
};

export default function SavitribaiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
