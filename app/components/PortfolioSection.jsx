'use client'
import { motion } from "framer-motion";
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
    <>
      <motion.section
        id="portfolio"
        className="px-2"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10"
              style={{ color: "#0f172a" }}>
            Portfolio: Recent Web Projects by Bluvia
          </h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {portfolioImages.map((p, idx) => (
              <motion.figure
                key={p.name}
                className="relative overflow-hidden glossy-card rounded-2xl border border-white/20 shadow-sm"
                style={{
                  background: "transparent",
                  color: "#0f172a"
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 32px 0 #38bdf8, 0 8px 32px 0 #2563eb33",
                  borderColor: "#38bdf8",
                  transition: { duration: 0.16, ease: "easeInOut" }
                }}
                whileTap={{ scale: 0.98 }}
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
              </motion.figure>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
