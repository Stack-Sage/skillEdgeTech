'use client'
import { motion } from "framer-motion";
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function ServicesSection() {
  const { playClick } = useSoundEffect();

  return (
    <>
      <motion.section
        id="features"
        className="px-2"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10"
            style={{ color: "#0f172a" }}>
            Our Web Design & Development Services
          </h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.services.slice(0, 6).map((s, idx) => (
              <motion.article
                key={s.id}
                className="relative overflow-hidden glossy-card p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 shadow-sm"
                style={{
                  background: "transparent",
                  color: "#0f172a"
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: idx * 0.12, ease: "easeOut" }}
                onClick={playClick}
                whileHover={{
                  scale: 1.08,
                  rotate: [0, 2, -2, 0],
                  y: -8,
                  boxShadow: "0 8px 32px 0 #38bdf8cc, 0 16px 48px 0 #2563eb33",
                  borderColor: "#38bdf8",
                  transition: { duration: 0.18, ease: "easeInOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 md:mb-3"
                  style={{ color: "#2563eb" }}>
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg"
                  style={{ color: "#64748b" }}>
                  {s.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
