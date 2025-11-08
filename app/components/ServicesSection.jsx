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
              className="relative glossy-card card-content transition-transform duration-150 hover:scale-105 flex flex-col items-center text-center"
              onClick={playClick}
            >
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 md:mb-3 text-main">
                {s.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-secondary">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
