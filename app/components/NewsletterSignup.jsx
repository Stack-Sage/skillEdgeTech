'use client'
import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <motion.section
      className="px-2 py-12"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container-max flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Subscribe to our Newsletter</h3>
        {!submitted ? (
          <form
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-full border border-blue-200"
            />
            <motion.button
              type="submit"
              className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold"
              whileHover={{
                scale: 1.08,
                background: "linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)",
                boxShadow: "0 0 16px #38bdf8aa",
                transition: { duration: 0.18 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </form>
        ) : (
          <div className="text-blue-700 font-semibold mt-2">Thank you for subscribing!</div>
        )}
      </div>
    </motion.section>
  );
}
