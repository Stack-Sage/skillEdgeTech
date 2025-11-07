'use client'
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "../content";

const heroImages = [
  { src: "/assets/stats.png", alt: "Analytics dashboard illustration" },
  { src: "/assets/website.png", alt: "Modern business website preview" },
  { src: "/assets/restaruant.png", alt: "Restaurant website design" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const prev = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
      prev.current = current;
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [current]);

  const direction =
    current > prev.current ||
    (current === 0 && prev.current === heroImages.length - 1)
      ? 1
      : -1;

  return (
    <motion.section
      className="px-2"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="mb-8 flex flex-col items-center relative">
            {/* Animated gradient background behind logo */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
              initial={{ opacity: 0.7, scale: 0.95, rotate: 0 }}
              animate={{ opacity: 1, scale: 1.05, rotate: 360 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 18,
                ease: "linear",
              }}
              style={{
                zIndex: 0,
                filter: "blur(32px)",
              }}
            >
              <div
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 60% 40%, #38bdf8 0%, #a5b4fc 60%, #fff 100%)",
                  boxShadow: "0 0 60px 10px #38bdf8, 0 0 120px 40px #2563eb33",
                }}
              />
            </motion.div>
            <motion.div
              className="flex items-center justify-center rounded-full relative shadow-2xl group bg-white/70 backdrop-blur-md border border-blue-200"
              style={{
                width: 180,
                height: 180,
                overflow: "hidden",
                zIndex: 1,
                background: "transparent"
              }}
              whileHover={{
                scale: 1.10,
                rotate: [0, 8, -8, 0],
                boxShadow: "0 0 64px 0 #38bdf8, 0 8px 40px 0 #2563eb55",
                borderColor: "#38bdf8",
                transition: { duration: 0.7, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.96 }}
            >
              <Image
                src="/assets/logo_round.png"
                alt={siteContent.companyName}
                width={180}
                height={180}
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                  maxWidth: 180,
                  maxHeight: 180,
                  display: "block",
                  transition: "filter 0.3s",
                  filter: "drop-shadow(0 0 24px #38bdf8aa)",
                  background: "transparent"
                }}
                priority
                decoding="async"
              />
              {/* Animated glow ring */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2.8,
                  ease: "easeInOut"
                }}
                style={{
                  borderRadius: "50%",
                  border: "4px solid #38bdf8",
                  boxShadow: "0 0 32px #38bdf8aa",
                }}
              />
            </motion.div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-blue-900 drop-shadow-lg text-center md:text-left mb-4">
            <motion.span
              initial={{ letterSpacing: "0.01em" }}
              whileHover={{ letterSpacing: "0.08em", color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="inline-block transition-all"
            >
              Oceanic Web Experiences
            </motion.span>
          </h1>
          <motion.p
            className="mt-2 text-lg sm:text-xl md:text-2xl text-blue-700 max-w-2xl text-center md:text-left mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {siteContent.tagline.replace(/SkillEdge/gi, "Bluvia")}
          </motion.p>
          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.a
              href="/signup"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold oceanic-gradient text-white shadow scale-hover scale-press text-lg sm:text-xl"
              whileHover={{
                scale: 1.12,
                background: "linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)",
                boxShadow: "0 0 32px #38bdf8aa",
                transition: { duration: 0.25 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              Get started
            </motion.a>
            <motion.a
              href="#features"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-blue-200 bg-white/70 text-blue-900 text-lg sm:text-xl"
              whileHover={{
                scale: 1.08,
                background: "linear-gradient(90deg, #e0e7ff 0%, #a5b4fc 100%)",
                color: "#2563eb",
                boxShadow: "0 0 16px #a5b4fc88",
                transition: { duration: 0.25 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              Learn more
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center md:justify-end"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div
            className="relative rounded-xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-lg w-full shadow"
            style={{ background: "transparent" }}
            aria-live="polite"
          >
            <div className="relative w-full h-[250px]">
              {heroImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    zIndex: idx === current ? 2 : 1,
                    pointerEvents: idx === current ? "auto" : "none",
                  }}
                  initial={false}
                  animate={
                    idx === current
                      ? { x: 0, opacity: 1 }
                      : { x: direction * 60, opacity: 0 }
                  }
                  transition={{
                    x: { type: "spring", stiffness: 60, damping: 20 },
                    opacity: { duration: 0.7, ease: "easeInOut" }
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10" role="tablist" aria-label="Hero image carousel">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full ${current === idx ? "bg-blue-600" : "bg-blue-200"} transition`}
                  style={{
                    outline: "none",
                    border: "none",
                    minWidth: 44,
                    minHeight: 44,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label={`Show hero image ${idx + 1}`}
                  aria-selected={current === idx}
                  tabIndex={0}
                  onClick={() => setCurrent(idx)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") setCurrent(idx);
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
