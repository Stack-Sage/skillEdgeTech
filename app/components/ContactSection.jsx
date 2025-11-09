"use client";
import { useState, useRef } from "react";
import { siteContent } from "../content";
import emailjs from "emailjs-com";

const serviceId = "service_kv038bt";
const templateId = "template_mnsq05k";
const userId = "ylfphfzXIJRLFZohj";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const formRef = useRef();

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!fields.email.trim() && !fields.phone.trim()) {
      setError("Please provide at least an email or a phone number.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, userId);
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative px-2 py-16"
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
              Please provide <span className="font-semibold">at least</span> your email{" "}
              <span className="font-semibold">or</span> phone number.
            </span>
          </div>
          {!submitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative grid gap-8 grid-cols-1 sm:grid-cols-2 p-6 sm:p-10 rounded-2xl border border-white/20 shadow-xl glossy-card bg-white/80 backdrop-blur-md no-scale-effect"
              style={{
                color: "#0f172a",
                maxWidth: 540,
                margin: "0 auto",
                boxShadow: "0 8px 40px 0 #2563eb22, 0 2px 8px 0 #38bdf822",
                transition: "box-shadow 0.18s, background 0.18s"
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
                />
                <span className="text-xs text-blue-500 mt-1">
                  Optional if phone is filled.
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
                />
                <span className="text-xs text-blue-500 mt-1">
                  Optional if email is filled.
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
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow sm:col-span-2 text-base sm:text-lg mt-2 no-scale-effect"
                style={{
                  background: "linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)",
                  color: "#fff",
                  letterSpacing: ".02em",
                  boxShadow: "0 2px 8px 0 #38bdf822",
                  transform: "none",
                  transition: "background 0.18s, color 0.18s"
                }}
                disabled={loading}
                tabIndex={0}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          ) : (
            <div
              className="p-6 sm:p-10 rounded-2xl border border-white/20 shadow-xl text-base sm:text-lg font-semibold glossy-card bg-white/80 backdrop-blur-md text-center"
              style={{
                color: "#0f172a",
                maxWidth: 540,
                margin: "0 auto",
                boxShadow: "0 8px 40px 0 #2563eb22, 0 2px 8px 0 #38bdf822",
              }}
            >
              <span className="block text-2xl mb-2 text-blue-700">Thank you!</span>
              <span className="block mb-2">Your message has been received.</span>
              <span className="block text-sm text-blue-500">
                (Powered by EmailJS)
              </span>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        .no-scale-effect,
        .no-scale-effect:hover,
        .no-scale-effect:active,
        .no-scale-effect:focus,
        .no-scale-effect:visited {
          transform: none !important;
          transition-property: background, color, box-shadow !important;
        }
        .no-scale-effect:hover,
        .no-scale-effect:active {
          box-shadow: 0 2px 8px 0 #38bdf822;
          filter: none !important;
        }
        .glossy-card.no-scale-effect:hover,
        .glossy-card.no-scale-effect:active {
          box-shadow: 0 8px 40px 0 #2563eb22, 0 2px 8px 0 #38bdf822;
          background: linear-gradient(145deg, #fff 70%, #f4fafb 100%);
        }
      `}</style>
    </section>
  );
}
