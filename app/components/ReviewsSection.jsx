'use client'
import { motion } from "framer-motion";
import { siteContent } from "../content";

export default function ReviewsSection() {
  return (
    <motion.section
      className="px-2"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10"
            style={{ color: "#0f172a" }}>
          What clients say
        </h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          {siteContent.reviews.map((r, idx) => (
            <motion.blockquote
              key={idx}
              className="relative overflow-hidden glossy-card p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 shadow-sm flex items-center gap-4"
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
                boxShadow: "0 0 32px 0 #38bdf8, 0 8px 32px 0 #2563eb33",
                borderColor: "#38bdf8",
                transition: { duration: 0.15, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed"
                   style={{ color: "#2563eb" }}>
                  “{r.text}”
                </p>
                <footer className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold"
                        style={{ color: "#64748b" }}>
                  — {r.name}
                </footer>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
