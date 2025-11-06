'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import {
  gymWebsite,
  saloonBeauty,
  saasWebsite,
  website,
  portfolio,
  restaruant,
} from "../assets";
import { siteContent } from "../content";

const portfolioImages = [
  { name: "Gym Website", img: gymWebsite },
  { name: "Salon Beauty", img: saloonBeauty },
  { name: "SaaS Website", img: saasWebsite },
  { name: "Business Website", img: website },
  { name: "Portfolio", img: portfolio },
  { name: "Restaurant Website", img: restaruant },
];

export default function PortfolioSection() {
  return (
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
          Portfolio
        </h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {portfolioImages.map((p, idx) => (
            <motion.figure
              key={p.name}
              className="rounded-2xl overflow-hidden border border-white/20 shadow-sm"
              style={{
                background: "transparent",
                color: "#0f172a"
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{
                scale: 1.045,
                boxShadow: "0 0 32px 0 rgba(139,92,246,0.25), 0 8px 32px 0 rgba(37,99,235,0.10)",
                transition: { duration: 0.35, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <Image
                  src={p.img}
                  alt={`${p.name} preview`}
                  width={400}
                  height={180}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  loading="lazy"
                  decoding="async"
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
  );
}
