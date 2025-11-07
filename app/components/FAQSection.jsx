'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "../content";

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <motion.section
      className="px-2 py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {siteContent.faqs?.map((faq, idx) => (
            <div key={idx} className="border rounded-lg bg-white/80">
              <motion.button
                className="w-full text-left px-4 py-3 font-semibold text-blue-800 focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
                whileHover={{
                  scale: 1.03,
                  color: "#2563eb",
                  backgroundColor: "#e0e7ff",
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                {faq.q}
              </motion.button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    id={`faq-panel-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 text-blue-700"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
