import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Review the Privacy Policy, Terms & Conditions, Cancellation Policy, and Shipping & Delivery Policy of Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha (Sindhutai Sapakal NGO).",
  keywords: [
    "Sindhutai Sapakal privacy policy",
    "Saptasindhu NGO terms",
    "donation cancellation policy",
    "NGO refund policy India",
    "Saptasindhu terms and conditions",
  ],
  alternates: {
    canonical: "/policy",
  },
  openGraph: {
    title: "Policies | Sindhutai Sapakal",
    description:
      "Privacy Policy, Terms & Conditions, Cancellation Policy, and Shipping & Delivery Policy for Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha.",
    url: "/policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
