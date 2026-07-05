import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ImageLoadTracker from "@/components/shared/ImageLoadTracker";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sindhutai Sapakal | Mother of Orphans",
    template: "%s | Sindhutai Sapakal",
  },
  description:
    "Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha – the NGO founded by Padma Shri Dr. Sou. Sindhutai Sapakal (Maai). Dedicated to providing shelter, education, and care for orphaned and underprivileged children across Maharashtra since 1998.",
  keywords: [
    "Sindhutai Sapakal",
    "Saptasindhu",
    "Maai",
    "Mother of Orphans",
    "orphanage Maharashtra",
    "donate NGO India",
    "Padma Shri Sindhutai",
    "Mamata Sindhutai Sapakal",
    "underprivileged children",
    "child welfare Maharashtra",
  ],
  authors: [{ name: "Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha" }],
  creator: "Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha",
  publisher: "Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha",
  // Resolves relative image paths in og/twitter tags.
  // NEXT_PUBLIC_SITE_URL → set in Vercel env vars (e.g. https://sindhutaisapakal.org)
  // VERCEL_URL           → automatically injected by Vercel on every deployment
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sindhutai Sapakal",
    title: "Sindhutai Sapakal | Mother of Orphans",
    description:
      "Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha – founded by Padma Shri Sindhutai Sapakal. Providing shelter, education, and care for orphaned children across Maharashtra since 1998.",
    images: [
      {
        url: "/assets/images/founders/1.png",
        width: 1200,
        height: 630,
        alt: "Padma Shri Dr. Sou. Sindhutai Sapakal – Mother of Orphans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sindhutai Sapakal | Mother of Orphans",
    description:
      "NGO founded by Padma Shri Sindhutai Sapakal — providing shelter, education, and love to orphaned children across Maharashtra.",
    images: ["/assets/images/founders/1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        {/* JSON-LD – Organisation structured data (boosts rich results + text-to-code ratio) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha",
              alternateName: "Sindhutai Sapakal NGO",
              url: "https://sindhutaisapakal.org",
              logo: "https://sindhutaisapakal.org/assets/images/branding/logo.png",
              image: "https://sindhutaisapakal.org/assets/images/founders/1.png",
              description:
                "Founded by Padma Shri Dr. Sou. Sindhutai Sapakal (Maai) in 1998. Provides shelter, education, food, and care to orphaned and underprivileged children across Maharashtra.",
              foundingDate: "1998",
              founder: {
                "@type": "Person",
                name: "Sindhutai Sapakal",
                honorificPrefix: "Padma Shri Dr.",
                birthDate: "1948-11-14",
                deathDate: "2022-01-04",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Belhekar Vasti, Near Vasantdada Sugar Institute, AM College Road",
                addressLocality: "Manjari (Bk)",
                addressRegion: "Maharashtra",
                postalCode: "412307",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-93265-35224",
                contactType: "general",
                availableLanguage: ["English", "Marathi"],
              },
              sameAs: [
                "https://www.facebook.com/sanmati.balniketan",
                "https://www.instagram.com/sanmatibalniketan",
                "https://www.youtube.com/@padmashridrsindhutaisapakal",
                "https://www.linkedin.com/company/saptasindhu-mahila-adhar-balsangopan-and-shikshan-sanstha/",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        <ImageLoadTracker />
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#f1f1f1",
              color: "#000000",
              textAlign: "center",
              padding: "16px 20px",
              borderRadius: "12px",
              fontWeight: "500",
              width: "fit",
            },
          }}
        />
        <a
          href="/donate"
          aria-label="Donate"
          className="donate-blink fixed right-4 bottom-6 z-[70] flex items-center gap-2 rounded-full bg-rose-600 text-white px-4 py-3 shadow-lg hover:bg-rose-700 active:scale-95 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="text-sm font-semibold">Donate</span>
        </a>
        <Footer />
      </body>
    </html>
  );
}

