import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest stories, updates, and articles from Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha — insights into the lives of the children, the organisation's journey, and the mission carried forward by Mamata Sindhutai Sapakal.",
  keywords: [
    "Sindhutai Sapakal blog",
    "Saptasindhu stories",
    "NGO blog India",
    "orphan children stories",
    "Mamata Sindhutai blog",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blog | Sindhutai Sapakal",
    description:
      "Stories, updates, and articles from Saptasindhu NGO — the mission continues.",
    url: "/blogs",
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
