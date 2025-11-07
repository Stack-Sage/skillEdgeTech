'use client'
import { motion } from "framer-motion";
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function CaseStudiesSection() {
  const { playClick } = useSoundEffect();

  return (
    <>
      <motion.section
        className="px-2 py-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-blue-900">Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {siteContent.caseStudies?.map((c, idx) => (
              <motion.article
                key={idx}
                className="relative overflow-hidden glossy-card rounded-xl border border-blue-100 p-6 shadow hover:shadow-lg transition"
                style={{
                  background: "transparent",
                  color: "#0f172a"
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                onClick={playClick}
                whileHover={{
                  scale: 1.045,
                  boxShadow: "0 0 32px 0 #38bdf8, 0 8px 32px 0 #2563eb33",
                  borderColor: "#38bdf8",
                  transition: { duration: 0.15, ease: "easeInOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-bold text-xl mb-2 text-blue-700">{c.title}</h3>
                <p className="mb-2 text-blue-900">{c.summary}</p>
                <motion.a
                  href={c.link}
                  className="text-blue-600 underline inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  whileHover={{
                    scale: 1.08,
                    color: "#2563eb",
                    textDecoration: "underline wavy",
                    transition: { duration: 0.18 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read more about {c.title}
                </motion.a>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
