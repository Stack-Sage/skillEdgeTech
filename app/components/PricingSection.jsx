'use client'
import { useState, useRef } from "react";
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";

const serviceId = "service_kv038bt";
const templateId = "template_mnsq05k";
const userId = "ylfphfzXIJRLFZohj";

const plans = [
  {
    tier: "Starter Pack",
    price: "₹500",
    features: [
      "Single-page website",
      "Responsive design (mobile + desktop)",
      "Basic SEO setup",
      "1 revision",
      "Delivery: 3–4 days",
      "Free hosting included"
    ]
  },
  {
    tier: "Business Pack",
    price: "₹1,000",
    features: [
      "1–3 pages",
      "Advanced SEO setup",
      "Animations & interactive elements",
      "Better UI/UX design",
      "3 revisions",
      "Delivery: 4–5 days",
      "Free hosting included"
    ],
    recommended: true
  },
  {
    tier: "Pro Pack",
    price: "₹2,000",
    features: [
      "6–8 pages",
      "Premium SEO",
      "3D/advanced animations",
      "Custom integrations (forms, booking, payment, etc.)",
      "Unlimited revisions",
      "Full-time support",
      "Delivery: 5–7 days",
      "Free hosting included"
    ]
  },
  {
    tier: "Premium Pack",
    price: "₹4,000",
    features: [
      "Everything in Pro Pack included",
      "Dedicated analytics setup (Google Analytics, conversion tracking)",
      "Priority support & custom branding",
      "Delivery: 7–10 days",
      "Free hosting included"
    ]
  }
];

export default function PricingSection() {
  const { playClick } = useSoundEffect();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  function handleChoose(plan) {
    setSelectedPlan(plan);
    setShowModal(true);
    playClick();
    router.push(`/booking?plan=${encodeURIComponent(plan.tier)}`);
  }

  function closeModal() {
    setShowModal(false);
    setSelectedPlan(null);
  }

  return (
    <section id="pricing" className="px-2 py-16 md:py-24">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 md:mb-6" style={{ color: "#0f172a" }}>
          Website Pricing & Packages
        </h2>
        <div className="mb-6 text-center text-blue-700 text-base font-medium">
          <span className="font-semibold">Note:</span> Custom domain names (like <span className="font-mono">.com</span> or <span className="font-mono">.in</span>) cost extra, but we provide a free domain if you don't want a custom one.
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-2">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className="relative glossy-card card-content flex flex-col items-center justify-center text-center transition-transform duration-150 hover:scale-105"
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                minHeight: "370px",
                display: "flex"
              }}
            >
              {p.recommended && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10">
                  Recommended
                </div>
              )}
              <div className="flex flex-col items-center justify-center w-full h-full">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-1 md:mb-2 text-primary">
                  {p.tier}
                </h3>
                <p className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent">
                  {p.price}
                </p>
                <ul className="mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg text-secondary text-center flex flex-col items-center">
                  {p.features.map((f, idx2) => (
                    <li key={idx2} className="pl-2">
                      • {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 md:mt-8 flex justify-center w-full">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold btn-primary hover-glow text-base sm:text-lg"
                    onClick={() => handleChoose(p)}
                  >
                    Choose
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showModal && (
          <PlanModal plan={selectedPlan} onClose={closeModal} />
        )}
      </div>
    </section>
  );
}

function PlanModal({ plan, onClose }) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    plan: plan?.tier || ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
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
      // Add a time field for the template
      const form = formRef.current;
      const now = new Date();
      const timeStr = now.toLocaleString();
      // Create a FormData clone to append time
      const formData = new FormData(form);
      formData.set("time", timeStr);
      await emailjs.sendForm(serviceId, templateId, form, userId);
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-blue-700 text-2xl font-bold hover:text-blue-900"
          aria-label="Close"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          ×
        </button>
        <h3 className="text-xl font-bold mb-2 text-blue-900 text-center">
          Get Started with {plan?.tier}
        </h3>
        <div className="text-center text-blue-700 mb-4">{plan?.price}</div>
        {!submitted ? (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            style={{ color: "#0f172a" }}
          >
            <input type="hidden" name="plan" value={plan?.tier} />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-semibold text-base text-blue-700">Your Name</label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                className="p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                value={fields.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-base text-blue-700">Email</label>
              <input
                id="email"
                name="email"
                placeholder="Email"
                className="p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                type="email"
                value={fields.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="font-semibold text-base text-blue-700">Phone</label>
              <input
                id="phone"
                name="phone"
                placeholder="Phone number"
                className="p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                type="tel"
                value={fields.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-semibold text-base text-blue-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                rows={3}
                value={fields.message}
                onChange={handleChange}
                required
              />
            </div>
            {error && (
              <div className="text-red-600 font-semibold text-sm text-center">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow text-base mt-2"
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
                "Send Request"
              )}
            </button>
          </form>
        ) : (
          <div className="p-6 text-center text-blue-700 font-semibold">
            <span className="block text-2xl mb-2">Thank you!</span>
            <span className="block mb-2">Your request for the <b>{plan?.tier}</b> has been received.</span>
            <span className="block text-sm text-blue-500">
              (Powered by EmailJS)
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
