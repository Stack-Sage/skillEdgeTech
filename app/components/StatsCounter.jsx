'use client'
import { useEffect, useRef, useState } from "react";

export default function StatsCounter({ stats }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="container-max py-12 flex flex-wrap justify-center gap-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className="text-4xl font-extrabold text-blue-700" aria-live="polite">
            {visible ? <AnimatedNumber value={stat.value} /> : 0}
            {stat.suffix}
          </span>
          <span className="text-lg text-blue-900 mt-2">{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    function animate(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [value]);
  return display;
}
