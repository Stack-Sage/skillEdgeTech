"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteContent } from "../content";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.section
      id="contact"
      className="px-2"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container-max">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10"
          style={{ color: "#0f172a" }}
        >
          Contact
        </h2>
        <p
          className="text-base sm:text-lg mb-6 sm:mb-8"
          style={{ color: "#64748b" }}
        >
          Reach us at{" "}
          <a
            className="underline font-semibold"
            href={`mailto:${siteContent.contact.email}`}
            style={{ color: "#2563eb" }}
          >
            {siteContent.contact.email}
          </a>{" "}
          or WhatsApp:{" "}
          <span className="font-semibold" style={{ color: "#0ea5e9" }}>
            {siteContent.contact.phone}
          </span>
        </p>
        {!submitted ? (
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 p-4 sm:p-8 rounded-2xl border border-white/20 shadow-sm"
            style={{
              background: "transparent",
              color: "#0f172a",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{
              scale: 1.025,
              boxShadow:
                "0 0 32px 0 rgba(139,92,246,0.18), 0 8px 32px 0 rgba(37,99,235,0.08)",
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-semibold text-base"
                style={{ color: "#2563eb" }}
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                className="p-2 sm:p-3 border rounded-md bg-white text-base sm:text-lg"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-base"
                style={{ color: "#2563eb" }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="Email"
                className="p-2 sm:p-3 border rounded-md bg-white text-base sm:text-lg"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                type="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label
                htmlFor="message"
                className="font-semibold text-base"
                style={{ color: "#2563eb" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="p-2 sm:p-3 border rounded-md bg-white text-base sm:text-lg"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold shadow sm:col-span-2 text-base sm:text-lg transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)",
                color: "#fff",
              }}
            >
              Send message
            </button>
          </motion.form>
        ) : (
          <motion.div
            className="p-4 sm:p-8 rounded-2xl border border-white/20 shadow-sm text-base sm:text-lg font-semibold"
            style={{
              background: "transparent",
              color: "#0f172a",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{
              scale: 1.025,
              boxShadow:
                "0 0 32px 0 rgba(139,92,246,0.18), 0 8px 32px 0 rgba(37,99,235,0.08)",
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
          >
            Thanks — your message is noted. (Integrate EmailJS/Nodemailer to wire
            real submissions.)
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
