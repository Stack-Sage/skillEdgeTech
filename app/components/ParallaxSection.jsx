'use client'
import { useRef, useEffect } from "react";

const sections = [];
let ticking = false;

function updateAll() {
  for (const { ref, speed } of sections) {
    if (!ref.current) continue;
    const isMobile = window.innerWidth < 768;
    const effectiveSpeed = isMobile ? 0 : speed;
    const rect = ref.current.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const sectionTop = rect.top + scrollY;
    const windowHeight = window.innerHeight;
    const sectionCenter = sectionTop + rect.height / 2;
    const distance = (scrollY + windowHeight / 2) - sectionCenter;
    const offset = distance * effectiveSpeed;
    ref.current.style.transform = `translateY(${offset}px)`;
  }
  ticking = false;
}

function onScrollOrResize() {
  if (!ticking) {
    window.requestAnimationFrame(updateAll);
    ticking = true;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });
}

export default function ParallaxSection({ speed = 0.15, children, className = "", style = {}, ...props }) {
  const ref = useRef();

  useEffect(() => {
    const entry = { ref, speed };
    sections.push(entry);
    updateAll();
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
        transition: "transform 0.08s cubic-bezier(.4,0,.2,1)",
      }}
      {...props}
    >
      {children}
    </section>
  );
}
