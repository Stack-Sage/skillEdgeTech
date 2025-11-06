'use client'
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  stats,
  website,
  restaruant,
  logo,
} from "../assets";
import { siteContent } from "../content";

const heroImages = [
  { src: stats, alt: "Analytics dashboard illustration" },
  { src: website, alt: "Modern business website preview" },
  { src: restaruant, alt: "Restaurant website design" },
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
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              style={{
                zIndex: 0,
                filter: "blur(16px)",
              }}
            >
              <div
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #a5b4fc 0%, #38bdf8 60%, #fff 100%)",
                }}
              />
            </motion.div>
            <div
              className="flex items-center justify-center rounded-full relative"
              style={{
                width: 90,
                height: 90,
                background: "#fff",
                border: "3px solid #c7d2fe",
                boxShadow: "0 4px 24px 0 rgba(37,99,235,0.10)",
                overflow: "hidden",
                zIndex: 1,
              }}
            >
              <Image
                src={logo}
                alt={siteContent.companyName}
                width={90}
                height={90}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "90px",
                  height: "90px",
                }}
                priority
                decoding="async"
              />
            </div>
            <span className="mt-5 text-3xl md:text-4xl font-extrabold text-blue-900 text-center drop-shadow-sm z-10">
              {siteContent.companyName}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-blue-900 drop-shadow-lg text-center md:text-left mb-4">
            Oceanic Web Experiences
          </h1>
          <motion.p
            className="mt-2 text-lg sm:text-xl md:text-2xl text-blue-700 max-w-2xl text-center md:text-left mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {siteContent.tagline}
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
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              Get started
            </motion.a>
            <motion.a
              href="#features"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-blue-200 bg-white/70 text-blue-900 text-lg sm:text-xl"
              whileHover={{ scale: 1.05 }}
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
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
                  tabIndex={0}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
