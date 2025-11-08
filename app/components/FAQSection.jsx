import { useState } from "react";
import { siteContent } from "../content";

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="px-2 py-16">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {siteContent.faqs?.map((faq, idx) => (
            <div key={idx} className="border rounded-lg bg-white/80">
              <button
                className="w-full text-left px-4 py-3 font-semibold text-blue-800 focus:outline-none transition-colors duration-150 hover:bg-blue-50 hover:text-blue-900"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                {faq.q}
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-4 pb-4 text-blue-700 transition-all duration-200 overflow-hidden ${open === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                style={{}}
              >
                {open === idx && faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
