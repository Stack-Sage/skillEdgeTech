import "./globals.css";
import { defaultSEO } from "./utils/seo";
import { siteContent } from "./content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Build metadata from content.js and defaultSEO util
const seo = defaultSEO(siteContent);
const ogImage = seo?.openGraph?.images?.[0]?.url;

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.openGraph.url,
    type: seo.openGraph.type,
    images: [
      {
        url: ogImage,
        alt: siteContent.companyName,
      },
    ],
  },
  twitter: {
    card: seo.twitter.cardType,
  },
  icons: {
    icon: siteContent.logo,
  },
  metadataBase: new URL(siteContent.seo?.url || siteContent.url || "http://localhost:3000"),
  viewport: "width=device-width,initial-scale=1",
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
      </head>
      <body className="font-sans text-[#0F172A] bg-gradient-to-br from-[#f1f5f9] via-[#e0e7ef] to-[#c7d2fe] scrollbar-thin scrollbar-thumb-[#6366F1] scrollbar-track-[#E0E7FF]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
