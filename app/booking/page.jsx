'use client'
import { useEffect, useState, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "emailjs-com";
import { useRouter, useSearchParams } from "next/navigation";

const serviceId = "service_kv038bt";
const templateId = "template_mnsq05k";
const userId = "ylfphfzXIJRLFZohj";

const websiteTypes = [
  "Gym Website",
  "Hotel Website",
  "Portfolio",
  "Restaurant Website",
  "Saloon Business",
  "SaaS Website",
  "E-commerce",
  "Other"
];

const plans = [
  { tier: "Starter Pack", price: "₹500" },
  { tier: "Business Pack", price: "₹1,000" },
  { tier: "Pro Pack", price: "₹2,000" },
  { tier: "Premium Pack", price: "₹4,000" }
];

const showcaseImages = [
  "/assets/website.png",
  "/assets/saas_website.png",
  "/assets/restaruant.png",
  "/assets/gym_website.png"
];

function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [fields, setFields] = useState({
    websiteType: "",
    customType: "",
    plan: "Business Pack",
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef();

  // Set plan from query param if present
  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam && plans.some(p => p.tier === planParam)) {
      setFields(f => ({ ...f, plan: planParam }));
    }
  }, [searchParams]);

  // Scroll to section if hash is present in URL (for /#features etc.)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash) {
      // Wait for navigation, then scroll to section on home page
      window.location.href = "/" + hash;
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    // Only allow digits for phone field
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setFields({ ...fields, [name]: digits });
    } else {
      setFields({ ...fields, [name]: value });
    }
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Validate website type
    if (!fields.websiteType && !fields.customType.trim()) {
      setError("Please select or enter a website type.");
      return;
    }
    // Validate name
    if (!fields.name.trim() || fields.name.length < 2) {
      setError("Please enter your name.");
      return;
    }
    // Validate email or phone (at least one required)
    const emailFilled = !!fields.email.trim();
    const phoneFilled = !!fields.phone.trim();
    if (!emailFilled && !phoneFilled) {
      setError("Please provide at least an email or a phone number.");
      return;
    }
    // Email validation (if filled)
    if (emailFilled && !/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(fields.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    // Phone validation (if filled)
    if (phoneFilled && !/^[6-9]\d{9}$/.test(fields.phone.trim())) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    // Validate message
    if (!fields.message.trim() || fields.message.length < 5) {
      setError("Please enter a message (at least 5 characters).");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const form = formRef.current;

      // Remove any existing hidden fields to avoid duplicates
      Array.from(form.querySelectorAll('input[type="hidden"][name="websiteType"],input[type="hidden"][name="customType"]')).forEach(input => input.remove());

      // Always add hidden fields for websiteType and customType
      const websiteTypeInput = document.createElement("input");
      websiteTypeInput.type = "hidden";
      websiteTypeInput.name = "websiteType";
      // Always send the actual answer (customType if filled, else websiteType)
      websiteTypeInput.value = fields.customType.trim()
        ? fields.customType
        : fields.websiteType;
      form.appendChild(websiteTypeInput);

      const customTypeInput = document.createElement("input");
      customTypeInput.type = "hidden";
      customTypeInput.name = "customType";
      customTypeInput.value = fields.customType;
      form.appendChild(customTypeInput);

      await emailjs.sendForm(serviceId, templateId, form, userId);
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send booking. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="container-max py-10 min-h-screen flex flex-col items-center justify-center"
      style={{ paddingTop: "120px" }}
    >
      {/* Top heading and intro */}
      <div className="w-full max-w-3xl mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 text-center mb-3">
          Book Your Website
        </h1>
        <p className="text-blue-700 text-center max-w-2xl mx-auto mb-6 text-lg md:text-xl">
          Start your digital journey with Bluvia. Fill out the form below to book your website project—fast, modern, and tailored for your business.
        </p>
      </div>
      <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-xl p-6 sm:p-10 mb-16">
        {!submitted ? (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="font-semibold text-base text-blue-700 mb-1 block">
                What type of website do you need?
              </label>
              <select
                name="websiteType"
                value={fields.websiteType}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
              >
                <option value="">Select type...</option>
                {websiteTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {fields.websiteType === "Other" && (
                <input
                  name="customType"
                  placeholder="Enter your business type"
                  className="mt-2 w-full p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                  style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                  value={fields.customType}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
            <div>
              <label className="font-semibold text-base text-blue-700 mb-1 block">
                Choose a plan
              </label>
              <select
                name="plan"
                value={fields.plan}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
              >
                {plans.map(p => (
                  <option key={p.tier} value={p.tier}>
                    {p.tier} ({p.price}){p.tier === "Business Pack" ? " - Recommended" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-semibold text-base text-blue-700 mb-1 block">
                Your Name
              </label>
              <input
                name="name"
                placeholder="Your name"
                className="w-full p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                value={fields.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div>
              <label className="font-semibold text-base text-blue-700 mb-1 block">
                Email
              </label>
              <input
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                type="email"
                value={fields.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div>
              <label className="font-semibold text-base text-blue-700 mb-1 block">
                Phone
              </label>
              <input
                name="phone"
                placeholder="Phone number"
                className="w-full p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                type="tel"
                value={fields.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-semibold text-base text-blue-700 mb-1 block">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 border rounded-lg bg-white text-base focus:ring-2 focus:ring-blue-300"
                style={{ borderColor: "#7dd3fc", color: "#0f172a" }}
                rows={3}
                value={fields.message}
                onChange={handleChange}
                required
              />
            </div>
            {/* Hidden fields for EmailJS */}
            <input type="hidden" name="websiteType" value={fields.customType.trim() ? fields.customType : fields.websiteType} />
            <input type="hidden" name="customType" value={fields.customType} />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            {error && (
              <div className="md:col-span-2 text-red-600 font-semibold text-sm text-center">
                {error}
              </div>
            )}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold shadow text-base mt-2"
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
                  "Book Now"
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 text-center text-blue-700 font-semibold text-lg">
            <span className="block text-2xl mb-2">Thank you!</span>
            <span className="block mb-2">Your booking has been received. We'll contact you soon.</span>
            <span className="block text-sm text-blue-500">
              (Powered by EmailJS)
            </span>
          </div>
        )}
      </div>
      {/* --- More content below the form --- */}
      <div className="flex flex-col items-center w-full mt-24 mb-16 px-2 max-w-6xl">
        <Image
          src="/assets/logo_round.png"
          alt="Bluvia Logo"
          width={110}
          height={110}
          className="rounded-full mb-8 shadow-lg"
          priority
          decoding="async"
        />
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 text-center">Why Choose Bluvia?</h2>
        <p className="text-blue-700 text-center max-w-3xl mb-10 text-xl">
          <b>We don't just build websites, we build your digital brand.</b> Our team combines creativity, technology, and business insight to deliver results that matter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 w-full max-w-4xl">
          <ul className="text-blue-800 text-lg list-disc list-inside space-y-4">
            <li>⚡ <b>Lightning-fast</b> and SEO-optimized websites for every device.</li>
            <li>🌊 <b>Oceanic, glassy, and modern</b> design language that stands out.</li>
            <li>🤝 <b>Personalized support</b> and unlimited revisions on Pro & Premium plans.</li>
            <li>🔒 <b>Free hosting</b>, secure setup, and analytics included.</li>
          </ul>
          <ul className="text-blue-800 text-lg list-disc list-inside space-y-4">
            <li>💡 <b>Experience with all business types</b>: SaaS, e-commerce, portfolio, restaurant, and more.</li>
            <li>🎨 <b>Custom branding</b> and UI/UX for your unique vision.</li>
            <li>🚀 <b>Transparent pricing</b> and no hidden fees.</li>
            <li>🧑‍💻 <b>Full support</b> from a passionate, creative team.</li>
          </ul>
        </div>
        <div className="flex gap-8 flex-wrap justify-center mb-12">
          {showcaseImages.map((img, idx) => (
            <div key={idx} className="relative w-40 h-28 sm:w-56 sm:h-40 rounded-2xl overflow-hidden shadow-xl" style={{ background: "#eaf7f9" }}>
              <Image
                src={img}
                alt="Website example"
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 224px"
              />
            </div>
          ))}
        </div>
        <div className="text-blue-700 text-center max-w-3xl mb-10 text-xl">
          <b>Ready to make your mark online?</b> Book your project now and join dozens of happy clients who trust Bluvia for their digital presence.<br />
          <span className="block mt-4 text-base text-blue-800">
            Need help choosing a plan or have questions? <a href="/#contact" className="underline text-blue-600 hover:text-blue-800">Contact us</a> anytime.
          </span>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold btn-secondary border border-blue-200 text-blue-900 hover:bg-blue-50 text-lg"
          >
            ← Back to Home
          </Link>
          <a
            href="/#features"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold btn-secondary border border-blue-200 text-blue-900 hover:bg-blue-50 text-lg"
            onClick={e => {
              e.preventDefault();
              window.location.href = "/#features";
            }}
          >
            Go to Features
          </a>
          <a
            href="/#pricing"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold btn-secondary border border-blue-200 text-blue-900 hover:bg-blue-50 text-lg"
            onClick={e => {
              e.preventDefault();
              window.location.href = "/#pricing";
            }}
          >
            Go to Pricing
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold btn-secondary border border-blue-200 text-blue-900 hover:bg-blue-50 text-lg"
            onClick={e => {
              e.preventDefault();
              window.location.href = "/#contact";
            }}
          >
            Contact Us
          </a>
        </div>
        <div className="mt-20 max-w-4xl w-full flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 text-center">What Makes Us Different?</h3>
          <p className="text-blue-700 text-center max-w-2xl mb-6 text-lg">
            At Bluvia, we believe in building relationships, not just websites. Our process is transparent, collaborative, and focused on your goals. We use the latest tech and design trends to ensure your site is future-proof and impactful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-3">🚀</span>
              <div className="font-bold text-blue-800 mb-2">Launch Fast</div>
              <div className="text-blue-700 text-center">Get your site live in days, not weeks. Our streamlined process ensures speed without sacrificing quality.</div>
            </div>
            <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-3">🎯</span>
              <div className="font-bold text-blue-800 mb-2">Results-Driven</div>
              <div className="text-blue-700 text-center">We focus on your business goals—whether it's leads, sales, or brand awareness, your success is our mission.</div>
            </div>
            <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-3">💬</span>
              <div className="font-bold text-blue-800 mb-2">Always Connected</div>
              <div className="text-blue-700 text-center">Direct communication, regular updates, and support even after launch. We're your digital partners.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Wrap BookingForm in Suspense for useSearchParams support
export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-blue-700 text-xl">Loading booking form...</div>}>
      <BookingForm />
    </Suspense>
  );
}
