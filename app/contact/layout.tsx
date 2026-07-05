import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha. Reach out to learn more about our work, volunteer opportunities, or to support orphaned and underprivileged children across Maharashtra.",
  keywords: [
    "contact Sindhutai Sapakal NGO",
    "Saptasindhu contact",
    "NGO contact Maharashtra",
    "support orphan children",
    "volunteer NGO India",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Sindhutai Sapakal",
    description:
      "Connect with the Saptasindhu NGO to learn about our work, partnerships, or how you can support orphaned and underprivileged children across Maharashtra.",
    url: "/contact",
    images: [
      {
        url: "/assets/images/founders/1.png",
        width: 1200,
        height: 630,
        alt: "Contact Sindhutai Sapakal NGO",
      },
    ],
  },
  twitter: {
    title: "Contact Us | Sindhutai Sapakal",
    description:
      "Connect with the Saptasindhu NGO — supporting orphaned and underprivileged children across Maharashtra.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
