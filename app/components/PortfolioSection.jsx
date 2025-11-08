'use client'
import Image from "next/image";
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

const portfolioImages = [
  { name: "Gym Website", img: "/assets/gym_website.png" },
  { name: "Salon Beauty", img: "/assets/saloon_beauty.png" },
  { name: "SaaS Website", img: "/assets/saas_website.png" },
  { name: "Business Website", img: "/assets/website.png" },
  { name: "Portfolio", img: "/assets/portfolio.png" },
  { name: "Restaurant Website", img: "/assets/restaruant.png" },
];

export default function PortfolioSection() {
  const { playClick } = useSoundEffect();

  return (
    <section id="portfolio" className="px-2 py-16 md:py-24">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10"
            style={{ color: "#0f172a" }}>
          Portfolio: Recent Web Projects by Bluvia
        </h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mx-2">
          {portfolioImages.map((p, idx) => (
            <div
              key={p.name}
              className="relative overflow-hidden glossy-card rounded-2xl border border-white/20 shadow-sm transition-transform duration-150 hover:scale-105"
              style={{
                background: "transparent",
                color: "#0f172a"
              }}
              onClick={playClick}
            >
              <div>
                <Image
                  src={p.img}
                  alt={`${p.name} preview`}
                  width={400}
                  height={180}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <figcaption className="p-3 sm:p-4 font-semibold text-base sm:text-lg"
                  style={{ color: "#2563eb" }}>
                {p.name}
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
