"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteContent } from "../content";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Require exactly one of email or phone
    const emailFilled = !!fields.email.trim();
    const phoneFilled = !!fields.phone.trim();
    if (!(emailFilled ^ phoneFilled)) {
      setError("Please provide either an email or a phone number (not both).");
      return;
    }
    setSubmitted(true);
    // Optionally: send form data to backend here
  }

  return (
    <motion.section
      id="contact"
      className="relative px-2"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="relative z-10">
        <div className="container-max">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10 text-center"
            style={{ color: "#0f172a", letterSpacing: ".01em" }}
          >
            Contact Bluvia – Start Your Web Project
          </h2>
          <div
            className="mb-8 text-base sm:text-lg text-center"
            style={{ color: "#64748b" }}
          >
            <span className="block mb-2">
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
            </span>
            <span className="block text-sm text-blue-700">
              Please provide <span className="font-semibold">either</span> your email{" "}
              <span className="font-semibold">or</span> phone number.
            </span>
          </div>
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="relative grid gap-8 grid-cols-1 sm:grid-cols-2 p-6 sm:p-10 rounded-2xl border border-white/20 shadow-xl glossy-card bg-white/80 backdrop-blur-md"
              style={{
                color: "#0f172a",
                maxWidth: 540,
                margin: "0 auto",
                boxShadow: "0 8px 40px 0 #2563eb22, 0 2px 8px 0 #38bdf822",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 0 32px 0 rgba(139,92,246,0.18), 0 8px 32px 0 rgba(37,99,235,0.08)",
                transition: { duration: 0.35, ease: "easeInOut" },
              }}
            >
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                  htmlFor="name"
                  className="font-semibold text-base"
                  style={{ color: "#2563eb" }}
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="p-3 border rounded-lg bg-white text-base sm:text-lg focus:ring-2 focus:ring-blue-300"
                  style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                  value={fields.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
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
                  className="p-3 border rounded-lg bg-white text-base sm:text-lg focus:ring-2 focus:ring-blue-300"
                  style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  autoComplete="email"
                  disabled={!!fields.phone.trim()}
                />
                <span className="text-xs text-blue-500 mt-1">
                  {fields.phone.trim()
                    ? "Email disabled when phone is filled."
                    : "Enter your email or fill phone below."}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-semibold text-base"
                  style={{ color: "#2563eb" }}
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  className="p-3 border rounded-lg bg-white text-base sm:text-lg focus:ring-2 focus:ring-blue-300"
                  style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                  type="tel"
                  value={fields.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  disabled={!!fields.email.trim()}
                />
                <span className="text-xs text-blue-500 mt-1">
                  {fields.email.trim()
                    ? "Phone disabled when email is filled."
                    : "Enter your phone or fill email above."}
                </span>
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
                  className="p-3 border rounded-lg bg-white text-base sm:text-lg focus:ring-2 focus:ring-blue-300"
                  style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                  rows={4}
                  value={fields.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && (
                <div className="sm:col-span-2 text-red-600 font-semibold text-sm text-center">
                  {error}
                </div>
              )}
              <motion.button
                type="submit"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow sm:col-span-2 text-base sm:text-lg transition-transform mt-2"
                style={{
                  background: "linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)",
                  color: "#fff",
                  letterSpacing: ".02em",
                  boxShadow: "0 2px 8px 0 #38bdf822",
                }}
                whileHover={{
                  scale: 1.08,
                  background: "linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)",
                  boxShadow: "0 0 24px #38bdf8aa",
                  transition: { duration: 0.18 },
                }}
                whileTap={{ scale: 0.97 }}
              >
                Send message
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              className="p-6 sm:p-10 rounded-2xl border border-white/20 shadow-xl text-base sm:text-lg font-semibold glossy-card bg-white/80 backdrop-blur-md text-center"
              style={{
                color: "#0f172a",
                maxWidth: 540,
                margin: "0 auto",
                boxShadow: "0 8px 40px 0 #2563eb22, 0 2px 8px 0 #38bdf822",
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
              <span className="block text-2xl mb-2 text-blue-700">Thank you!</span>
              <span className="block mb-2">Your message has been received.</span>
              <span className="block text-sm text-blue-500">
                (Integrate EmailJS/Nodemailer to wire real submissions.)
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
