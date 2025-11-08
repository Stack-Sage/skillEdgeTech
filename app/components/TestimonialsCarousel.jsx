'use client'
import { useState, useEffect } from "react";
import { siteContent } from "../content";

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const reviews = siteContent.reviews || [];
  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);
  return (
    <section className="container-max py-12">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">What Our Clients Say</h2>
      <div className="relative flex flex-col items-center">
        <div
          key={idx}
          className="max-w-xl mx-auto bg-white/80 rounded-xl shadow p-8 flex flex-col items-center transition-all duration-300"
        >
          {reviews[idx]?.avatar && (
            <img src={reviews[idx].avatar} alt={reviews[idx].name} className="w-16 h-16 rounded-full mb-4" />
          )}
          <p className="text-lg text-blue-700 mb-4">“{reviews[idx]?.text}”</p>
          <span className="font-semibold text-blue-900">{reviews[idx]?.name}</span>
        </div>
        <div className="flex gap-2 mt-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === idx ? "bg-blue-600" : "bg-blue-200"}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
