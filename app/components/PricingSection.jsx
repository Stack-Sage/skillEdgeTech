'use client'
import { motion } from "framer-motion";
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function PricingSection() {
  const { playClick } = useSoundEffect();

  return (
    <>
      <motion.section
        id="pricing"
        className="px-2"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10"
            style={{ color: "#0f172a" }}>
            Website Pricing & Packages
          </h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {siteContent.pricing.map((p, idx) => (
              <motion.article
                key={idx}
                className="relative overflow-hidden glossy-card p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 shadow-sm text-center"
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
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-1 md:mb-2"
                  style={{ color: "#2563eb" }}>
                  {p.tier}
                </h3>
                <p className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold"
                  style={{ color: "#0ea5e9" }}>
                  {p.price}
                </p>
                <ul className="mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg"
                  style={{ color: "#64748b" }}>
                  {p.features.map((f, idx2) => (
                    <li key={idx2} className="pl-2">
                      • {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 md:mt-8">
                  <motion.a
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold shadow text-base sm:text-lg transition-transform"
                    style={{
                      background: "linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)",
                      color: "#fff"
                    }}
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 0 24px 0 #8B5CF6, 0 2px 8px 0 rgba(37,99,235,0.10)",
                      transition: { duration: 0.35, ease: "easeInOut" }
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={playClick}
                  >
                    Choose
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
