'use client'
import Image from "next/image";
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function ClientLogos() {
  const { playClick } = useSoundEffect();

  return (
    <section className="px-2 py-8">
      <div className="container-max">
        <h3 className="text-center text-lg font-semibold mb-6 text-blue-900">Trusted by</h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {siteContent.clientLogos?.map((logo, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden glossy-card rounded-full bg-white/60 backdrop-blur-md p-2 shadow-lg border border-blue-100 transition-transform duration-150 hover:scale-110"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
