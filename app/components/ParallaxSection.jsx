'use client'
import { useRef, useEffect, useState } from "react";

export default function ParallaxSection({ speed = 0.15, children, className = "", style = {}, ...props }) {
  const ref = useRef();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const sectionTop = rect.top + scrollY;
      const windowHeight = window.innerHeight;
      const sectionCenter = sectionTop + rect.height / 2;
      const distance = (scrollY + windowHeight / 2) - sectionCenter;
      setOffset(distance * speed);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <section
      ref={ref}
      className={className}
      style={{
        ...style,
        willChange: "transform",
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s cubic-bezier(.4,0,.2,1)",
      }}
      {...props}
    >
      {children}
    </section>
  );
}
