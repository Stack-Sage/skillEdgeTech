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
        className="font-sans min-h-screen scrollbar-thin scrollbar-thumb-[#bfeff3] scrollbar-track-[#eaf7f9] selection:bg-primary-light/40 selection:text-primary-dark transition-colors"
        style={{
          position: "relative",
          overflowX: "hidden",
          background:
            "linear-gradient(120deg, #fafdff 0%, #e6f6fa 20%, #c7eaf6 50%, #aee7f7 80%, #5edfff 100%)",
        }}
      >
        {/* Advanced animated canvas background */}
        <canvas
          id="bluvia-bg-canvas"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
            background: "transparent"
          }}
          aria-hidden="true"
        />
        {/* SVG background effect with interactive overlay */}
        <div
          className="layout-bg-interactive"
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1,
            pointerEvents: "none",
            overflow: "hidden",
            background:
              "radial-gradient(ellipse at 50% 40%, #fff 0%, #e6f6fa 25%, #c7eaf6 55%, #aee7f7 80%, #5edfff 100%)"
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
                <stop offset="20%" stopColor="#e6f6fa" />
                <stop offset="50%" stopColor="#c7eaf6" />
                <stop offset="80%" stopColor="#aee7f7" />
                <stop offset="100%" stopColor="#5edfff" />
              </linearGradient>
              <filter id="noise" x="0" y="0">
                <feTurbulence type="fractalNoise" baseFrequency="0.38" numOctaves="2" result="turb" />
                <feColorMatrix type="saturate" values="0.92" />
                <feBlend in="SourceGraphic" in2="turb" mode="multiply" />
              </filter>
              <radialGradient id="glow-cyan" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5edfff" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#5edfff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow-green" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00e5b0" stopOpacity="0.13" />
                <stop offset="100%" stopColor="#00e5b0" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0099cc" stopOpacity="0.09" />
                <stop offset="100%" stopColor="#0099cc" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-gradient)" filter="url(#noise)" />
            {/* Subtle, professional glowing color blobs */}
            <circle cx="80%" cy="12%" r="140" fill="url(#glow-cyan)" />
            <circle cx="18%" cy="85%" r="100" fill="url(#glow-green)" />
            <circle cx="50%" cy="60%" r="80" fill="url(#glow-blue)" />
            <circle cx="60%" cy="80%" r="60" fill="url(#glow-cyan)" />
            {/* Subtle white highlight */}
            <ellipse cx="60%" cy="18%" rx="90" ry="30" fill="#fff" opacity="0.06" filter="blur(10px)" />
          </svg>
          {/* Interactive mouse-following glow */}
          <div
            className="layout-bg-glow"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
              zIndex: 2,
              background:
                "radial-gradient(50px at var(--bg-mouse-x,50vw) var(--bg-mouse-y,50vh), #5edfff77 0%, #00e5b044 60%, transparent 100%)",
              transition: "background 0.13s cubic-bezier(.4,0,.2,1)",
              mixBlendMode: "lighten"
            }}
          />
        </div>
        <Navbar />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        <Footer />
        {/* Advanced animated background script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  // Advanced animated particles background
  var canvas = document.getElementById('bluvia-bg-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var particles = [];
  var colors = ["#5edfff", "#00e5b0", "#0099cc", "#aee7f7"];
  for (var i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 1.5,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.3
    });
  }
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var p of particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.restore();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
            `
          }}
        />
        {/* Global style for lazy loading images */}
        <style>{`
          img:not([loading]), img[loading="lazy"] {
            filter: blur(0.03rem);
            transition: filter 0.3s;
          }
          img[loading="lazy"]:not([src=""]) {
            filter: none;
          }
        `}</style>
        {/* Interactive background CSS */}
        <style>{`
          a, button, .btn-primary, .btn-secondary, .glossy-card, .glass, .oceanic-glass {
            transition: 
              box-shadow 0.18s cubic-bezier(.4,0,.2,1),
              background 0.18s cubic-bezier(.4,0,.2,1),
              color 0.18s cubic-bezier(.4,0,.2,1),
              transform 0.13s cubic-bezier(.4,0,.2,1);
            cursor: pointer;
          }
          a:hover, button:hover, .btn-primary:hover, .btn-secondary:hover, .glossy-card:hover, .glass:hover, .oceanic-glass:hover {
            box-shadow: 0 4px 24px 0 #5edfff44, 0 12px 40px 0 #00e5b022, 0 2px 12px 0 #bfeff333;
            filter: brightness(1.03) saturate(1.08);
            transform: translateY(-2px) scale(1.025);
          }
          a:active, button:active, .btn-primary:active, .btn-secondary:active, .glossy-card:active, .glass:active, .oceanic-glass:active {
            filter: brightness(0.98) saturate(0.96);
            transform: scale(0.98);
          }
          .glossy-card:focus-within, .glass:focus-within, .oceanic-glass:focus-within {
            outline: 2px solid #5edfff;
            outline-offset: 2px;
          }
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  if (typeof window === "undefined") return;
  let bgDiv = null, glowDiv = null;
  function updateDivs() {
    bgDiv = document.querySelector(".layout-bg-interactive");
    glowDiv = document.querySelector(".layout-bg-glow");
  }
  window.addEventListener("DOMContentLoaded", updateDivs);
  window.addEventListener("load", updateDivs);

  window.addEventListener("mousemove", function(e) {
    if (!glowDiv) updateDivs();
    if (glowDiv) {
      glowDiv.style.background = 
        "radial-gradient(50px at " + e.clientX + "px " + e.clientY + "px, #5edfff77 0%, #00e5b044 60%, transparent 100%)";
    }
  });
  window.addEventListener("mouseleave", function() {
    if (!glowDiv) updateDivs();
    if (glowDiv) {
      glowDiv.style.background =
        "radial-gradient(50px at 50vw 50vh, #5edfff00 0%, #00e5b000 60%, transparent 100%)";
    }
  });
})();
            `
          }}
        />
      </body>
    </html>
  );
}
