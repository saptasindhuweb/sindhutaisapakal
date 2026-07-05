import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the photo gallery of Saptasindhu NGO — capturing moments from the Yashodamaai National Award ceremonies, Zep youth festivals, and the everyday life of children at Sindhutai Sapakal's institutions across Maharashtra.",
  keywords: [
    "Sindhutai Sapakal gallery",
    "Saptasindhu NGO photos",
    "Yashodamaai award",
    "Zep festival gallery",
    "NGO Maharashtra photos",
    "orphan children gallery India",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Sindhutai Sapakal",
    description:
      "Browse photos from Yashodamaai National Award ceremonies, Zep festivals, and the vibrant daily lives at Saptasindhu NGO's institutions across Maharashtra.",
    url: "/gallery",
    images: [
      {
        url: "/assets/images/founders/1.png",
        width: 1200,
        height: 630,
        alt: "Sindhutai Sapakal NGO Gallery",
      },
    ],
  },
  twitter: {
    title: "Gallery | Sindhutai Sapakal",
    description:
      "Photos from Yashodamaai Award ceremonies, Zep festivals, and daily life at Saptasindhu's institutions across Maharashtra.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
