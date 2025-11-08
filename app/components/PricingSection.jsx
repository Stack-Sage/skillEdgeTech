'use client'
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function PricingSection() {
  const { playClick } = useSoundEffect();

  return (
    <section id="pricing" className="px-2 py-16 md:py-24">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10"
          style={{ color: "#0f172a" }}>
          Website Pricing & Packages
        </h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mx-2">
          {siteContent.pricing.map((p, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden glossy-card p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 shadow-sm text-center transition-transform duration-150 hover:scale-105"
              style={{
                background: "transparent",
                color: "#0f172a"
              }}
              onClick={playClick}
            >
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-1 md:mb-2"
                style={{ color: "#2563eb" }}>
                {p.tier}
              </h3>
              <p className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold"
                style={{ color: "#0ea5e9" }}>
                {p.price}
              </p>
              <ul className="mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg"
                style={{ color: "#64748b" }}>
                {p.features.map((f, idx2) => (
                  <li key={idx2} className="pl-2">
                    • {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 md:mt-8">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold shadow text-base sm:text-lg transition-transform duration-150 hover:scale-105"
                  style={{
                    background: "linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)",
                    color: "#fff"
                  }}
                  onClick={playClick}
                >
                  Choose
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
