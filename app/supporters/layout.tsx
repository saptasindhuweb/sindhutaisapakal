import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Supporters",
  description:
    "Saptasindhu NGO is grateful to its supporters — including Bharati Vidyapeeth, Nobel Hospital, Villo Poonawala Foundation, and Kalyani Technoforge Limited — whose generosity enables us to provide care, shelter, and education to orphaned children across Maharashtra.",
  keywords: [
    "Sindhutai Sapakal supporters",
    "Saptasindhu NGO donors",
    "Bharati Vidyapeeth NGO support",
    "Nobel Hospital Pune charity",
    "Villo Poonawala Foundation",
    "Kalyani Technoforge charity",
    "NGO partners Maharashtra",
  ],
  alternates: {
    canonical: "/supporters",
  },
  openGraph: {
    title: "Our Supporters | Sindhutai Sapakal",
    description:
      "Meet the generous organisations supporting Saptasindhu NGO's mission — helping provide care, shelter, and education to orphaned children across Maharashtra.",
    url: "/supporters",
    images: [
      {
        url: "/assets/images/founders/1.png",
        width: 1200,
        height: 630,
        alt: "Supporters of Saptasindhu NGO",
      },
    ],
  },
  twitter: {
    title: "Our Supporters | Sindhutai Sapakal",
    description:
      "Generous organisations supporting Saptasindhu NGO's mission of care, shelter, and education for orphaned children.",
  },
};

export default function SupportersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
