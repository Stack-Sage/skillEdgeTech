/* eslint-disable @next/next-script-for-ga */
import "./globals.css";
import { defaultSEO } from "./utils/seo";
import { siteContent } from "./content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Build metadata from content.js and defaultSEO util
const seo = defaultSEO(siteContent);
const ogImage = seo?.openGraph?.images?.[0]?.url;

export const metadata = {
  title: "Bluvia – Modern Web Design & Development",
  description: "Bluvia builds stunning, high-performance websites and digital experiences for businesses, startups, and creators. Get a modern, SEO-optimized website that stands out.",
  openGraph: {
    title: "Bluvia – Modern Web Design & Development",
    description: "Bluvia builds stunning, high-performance websites and digital experiences for businesses, startups, and creators. Get a modern, SEO-optimized website that stands out.",
    url: seo.openGraph.url.replace(/skilledge\.tech/gi, "bluvia.tech"),
    type: seo.openGraph.type,
    images: [
      {
        url: ogImage,
        alt: "Bluvia Logo",
      },
    ],
  },
  twitter: {
    card: seo.twitter.cardType,
  },
  icons: {
    icon: "/assets/logo_square.png", // Use logo_square.png as favicon
  },
  metadataBase: new URL(
    (siteContent.seo?.url || siteContent.url || "http://localhost:3000").replace(/skilledge\.tech/gi, "bluvia.tech")
  ),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.openGraph.url} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/assets/logo_square.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": siteContent.companyName.replace(/SkillEdge/gi, "Bluvia"),
              "url": metadata.openGraph.url,
              "logo": "/assets/logo_square.png", // Use logo_square.png for structured data
              "sameAs": [
                siteContent.contact.instagram
              ]
            })
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body
        className="font-sans text-[#0F172A] min-h-screen scrollbar-thin scrollbar-thumb-[#38bdf8] scrollbar-track-[#e0e7ff]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #fff 0%, #e0e7ff 35%, #38bdf8 70%, #2563eb 90%, #312e81 100%)",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* SVG background effect */}
        <svg
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 w-full h-full z-0"
          style={{ opacity: 0.22 }} // increased from 0.13 for more vibrancy
        >
          <defs>
            <radialGradient id="bg-gradient" cx="50%" cy="40%" r="80%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="20%" stopColor="#e0f2fe" />
              <stop offset="35%" stopColor="#e0e7ff" />
              <stop offset="60%" stopColor="#a5b4fc" />
              <stop offset="80%" stopColor="#38bdf8" />
              <stop offset="90%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#312e81" />
            </radialGradient>
            <filter id="noise" x="0" y="0">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" result="turb" />
              <feColorMatrix type="saturate" values="0.7" />
              <feBlend in="SourceGraphic" in2="turb" mode="multiply" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-gradient)" filter="url(#noise)" />
          <circle cx="80%" cy="12%" r="160" fill="#38bdf8" opacity="0.18" />
          <circle cx="18%" cy="85%" r="120" fill="#2563eb" opacity="0.14" />
          <circle cx="50%" cy="60%" r="90" fill="#312e81" opacity="0.12" />
          <circle cx="60%" cy="80%" r="60" fill="#a5b4fc" opacity="0.13" />
        </svg>
        <Navbar />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
