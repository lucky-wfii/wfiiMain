import type { Metadata, Viewport } from "next";
import { Poppins, Source_Serif_4 } from "next/font/google"
import "./globals.css";

// Optimized font loading - only load primary font
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
  fallback: ['serif'],
})


// Enhanced viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// Comprehensive metadata for SEO and accessibility
export const metadata: Metadata = {
  title: {
    default: "WFII - World Forum for Innovation and Industry",
    template: "%s | WFII",
  },
  description:
    "Discover and showcase exhibitions on WFII, the premier online platform for virtual exhibitions, art galleries, and creative showcases. Connect with artists and explore curated collections worldwide.",
  applicationName: "WFII",
  referrer: "origin-when-cross-origin",
  keywords: [
    "WFII",
    "Exhibitions",
    "Online Platform",
    "Virtual Exhibitions",
    "Art Gallery",
    "Digital Showcase",
    "Creative Platform",
    "Art Events",
    "Virtual Expo",
    "Online Gallery",
    "Artist Showcase",
    "Cultural Events",
    "Digital Art",
    "Exhibition Platform",
  ],
  authors: [{ name: "WFII Team", url: "https://wfii.in" }],
  creator: "WFII Team",
  publisher: "WFII",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wfii.in"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
  openGraph: {
    title: "WFII - Online Platform for Exhibitions",
    description:
      "Discover and showcase exhibitions on WFII, the premier online platform for virtual exhibitions, art galleries, and creative showcases.",
    url: "https://wfii.in",
    siteName: "WFII",
    images: [
      {
        url: "/WFII-og-image.png",
        width: 1200,
        height: 630,
        alt: "WFII - Online Platform for Exhibitions",
        type: "image/png",
      },
      {
        url: "/WFII-og-square.png",
        width: 1200,
        height: 1200,
        alt: "WFII Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WFII - Online Platform for Exhibitions",
    description:
      "Discover and showcase exhibitions on WFII, the premier online platform for virtual exhibitions and art galleries.",
    site: "@WFII",
    creator: "@WFII",
    images: ["/WFII-twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/WFII_icon.png", sizes: "16x16", type: "image/png" },
      { url: "/WFII_icon.png", sizes: "32x32", type: "image/png" },
      { url: "/WFII_icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/WFII_icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
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
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          {/* Fallback fonts in case Google Fonts fail to load */}
          <style>{`
            .font-loading-fallback {
              font-family: system-ui, -apple-system, sans-serif;
            }
          `}</style>

          {/* DNS prefetch for external resources */}
          <link rel="dns-prefetch" href="//clerk.dev" />
          <link rel="dns-prefetch" href="//analytics.google.com" />

          {/* Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "WFII",
                description:
                  "Online platform for exhibitions and virtual galleries",
                url: "https://WFII.com",
                applicationCategory: "EntertainmentApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "INR",
                },
                author: {
                  "@type": "Organization",
                  name: "WFII Team",
                  url: "https://WFII.com",
                },
              }),
            }}
          />
        </head>
       <body className={`${poppins.variable} ${sourceSerif.variable} antialiased font-sans`}>{children}</body>
      </html>
  );
}
