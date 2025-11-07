'use client'
import { useRef, useEffect } from "react";

const sections = [];

function updateAll() {
  const scrollY = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  for (const { ref, speed, lastOffset } of sections) {
    if (!ref.current) continue;
    const isMobile = window.innerWidth < 768;
    const effectiveSpeed = isMobile ? 0 : speed;
    const rect = ref.current.getBoundingClientRect();
    const sectionTop = rect.top + scrollY;
    const sectionCenter = sectionTop + rect.height / 2;
    const distance = (scrollY + windowHeight / 2) - sectionCenter;
    const offset = distance * effectiveSpeed;
    if (lastOffset.current !== offset) {
      ref.current.style.transform = `translateY(${offset}px)`;
      lastOffset.current = offset;
    }
  }
  window.requestAnimationFrame(updateAll);
}

if (typeof window !== "undefined" && !window.__parallaxRAF) {
  window.__parallaxRAF = true;
  window.requestAnimationFrame(updateAll);
}

export default function ParallaxSection({ speed = 0.15, children, className = "", style = {}, ...props }) {
  const ref = useRef();
  const lastOffset = useRef(0);

  useEffect(() => {
    const entry = { ref, speed, lastOffset };
    sections.push(entry);
    // Initial update
    if (typeof window !== "undefined") {
      updateAll();
    }
    return () => {
      const idx = sections.indexOf(entry);
      if (idx !== -1) sections.splice(idx, 1);
    };
  }, [speed]);

  return (
    <section
      ref={ref}
      className={className}
      style={{
        ...style,
        willChange: "transform",
        transition: "transform 0.06s cubic-bezier(.4,0,.2,1)",
      }}
      {...props}
    >
      {children}
    </section>
  );
}
