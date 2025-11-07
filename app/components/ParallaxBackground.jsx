'use client'
import { useEffect, useRef } from "react";

const SHAPES = [
  {
    id: "circle1",
    style: { left: "10%", top: "20%", width: 120, height: 120, opacity: 0.13 },
    speed: 0.2,
    color: "#38bdf8"
  },
  {
    id: "circle2",
    style: { left: "70%", top: "30%", width: 80, height: 80, opacity: 0.12 },
    speed: 0.35,
    color: "#2563eb"
  },
  {
    id: "circle3",
    style: { left: "50%", top: "70%", width: 160, height: 160, opacity: 0.09 },
    speed: 0.12,
    color: "#a5b4fc"
  },
  {
    id: "wave1",
    style: { left: "0%", top: "80%", width: 400, height: 80, opacity: 0.10 },
    speed: 0.18,
    color: "#38bdf8"
  }
];

export default function ParallaxBackground() {
  const refs = useRef([]);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const speed = SHAPES[i].speed;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 w-full h-full z-0"
      style={{ overflow: "hidden" }}
    >
      {SHAPES.map((shape, i) =>
        shape.id.startsWith("circle") ? (
          <svg
            key={shape.id}
            ref={el => (refs.current[i] = el)}
            style={{
              position: "absolute",
              ...shape.style,
              zIndex: 0,
              transition: "opacity 0.3s"
            }}
            width={shape.style.width}
            height={shape.style.height}
          >
            <circle
              cx={shape.style.width / 2}
              cy={shape.style.height / 2}
              r={shape.style.width / 2}
              fill={shape.color}
              opacity={shape.style.opacity}
            />
          </svg>
        ) : (
          <svg
            key={shape.id}
            ref={el => (refs.current[i] = el)}
            style={{
              position: "absolute",
              ...shape.style,
              zIndex: 0,
              transition: "opacity 0.3s"
            }}
            width={shape.style.width}
            height={shape.style.height}
            viewBox="0 0 400 80"
          >
            <path
              d="M0,40 Q100,80 200,40 T400,40 V80 H0 Z"
              fill={shape.color}
              opacity={shape.style.opacity}
            />
          </svg>
        )
      )}
    </div>
  );
}
