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
        {/* --- SEO: For top-notch SEO, set unique <title> and <meta name="description"> in each page/route if you add more pages. --- */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteContent.companyName.replace(/SkillEdge/gi, "Bluvia")} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:image:alt" content={metadata.openGraph.images[0].alt} />
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
        className="font-sans min-h-screen scrollbar-thin scrollbar-thumb-[#bfeff3] scrollbar-track-[#eaf7f9]"
        style={{
          position: "relative",
          overflowX: "hidden",
          background:
            "linear-gradient(120deg, #fafdff 0%, #e0f7fa 20%, #bff6f9 50%, #5edfff 80%, #00e5b0 100%)",
        }}
      >
        {/* SVG background effect with glowing/soft color effects and a strong oceanic gradient */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden",
            background:
              "radial-gradient(ellipse at 50% 40%, #fff 0%, #e0f7fa 25%, #bff6f9 55%, #5edfff 80%, #00e5b0 100%)"
          }}
        >
          <svg
            width="100%"
            height="100%"
            style={{
              width: "100vw",
              height: "100vh",
              minWidth: "100vw",
              minHeight: "100vh",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
              userSelect: "none"
            }}
            focusable="false"
          >
            <defs>
              <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fafdff" />
                <stop offset="20%" stopColor="#e0f7fa" />
                <stop offset="50%" stopColor="#bff6f9" />
                <stop offset="80%" stopColor="#5edfff" />
                <stop offset="100%" stopColor="#00e5b0" />
              </linearGradient>
              <filter id="noise" x="0" y="0">
                <feTurbulence type="fractalNoise" baseFrequency="0.42" numOctaves="2" result="turb" />
                <feColorMatrix type="saturate" values="0.95" />
                <feBlend in="SourceGraphic" in2="turb" mode="multiply" />
              </filter>
              <radialGradient id="glow-cyan" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5edfff" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#5edfff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow-green" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00e5b0" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#00e5b0" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0099cc" stopOpacity="0.13" />
                <stop offset="100%" stopColor="#0099cc" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-gradient)" filter="url(#noise)" />
            {/* Soft glowing color blobs */}
            <circle cx="80%" cy="12%" r="180" fill="url(#glow-cyan)" />
            <circle cx="18%" cy="85%" r="140" fill="url(#glow-green)" />
            <circle cx="50%" cy="60%" r="110" fill="url(#glow-blue)" />
            <circle cx="60%" cy="80%" r="80" fill="url(#glow-cyan)" />
            {/* Subtle white highlight */}
            <ellipse cx="60%" cy="18%" rx="120" ry="40" fill="#fff" opacity="0.08" filter="blur(12px)" />
          </svg>
        </div>
        <Navbar />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
