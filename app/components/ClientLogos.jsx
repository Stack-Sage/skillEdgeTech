'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function ClientLogos() {
  const { playClick } = useSoundEffect();

  return (
    <motion.section
      className="px-2 py-8"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container-max">
        <h3 className="text-center text-lg font-semibold mb-6 text-blue-900">Trusted by</h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {siteContent.clientLogos?.map((logo, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden glossy-card rounded-full bg-white/60 backdrop-blur-md p-2 shadow-lg border border-blue-100 transition-all"
              whileHover={{
                scale: 1.14,
                boxShadow: "0 0 0 4px #38bdf8, 0 0 24px #38bdf8aa",
                transition: { duration: 0.13 }
              }}
              whileTap={{ scale: 0.97 }}
              onClick={playClick}
              style={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                src={logo.src.replace("/assets/logo.png", "/assets/logo_round.png")}
                alt={logo.alt}
                width={logo.width || 40}
                height={logo.height || 40}
                className="object-contain"
                loading="lazy"
                decoding="async"
                sizes="40px"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "transparent"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
