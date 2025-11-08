'use client'
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function ServicesSection() {
  const { playClick } = useSoundEffect();

  return (
    <section id="features" className="px-2 py-16 md:py-24">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10" style={{ color: "#0f172a" }}>
          Our Web Design & Development Services
        </h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mx-2">
          {siteContent.services.slice(0, 6).map((s, idx) => (
            <div
              key={s.id}
              className="relative overflow-hidden glossy-card p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 shadow-sm transition-transform duration-150 hover:scale-105"
              style={{
                background: "transparent",
                color: "#0f172a"
              }}
              onClick={playClick}
            >
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 md:mb-3" style={{ color: "#2563eb" }}>
                {s.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg" style={{ color: "#64748b" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
