'use client'
export default function StickyCTA() {
  return (
    <a
      href="/booking"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg hover:scale-105 transition"
      style={{ minWidth: 180, textAlign: "center" }}
    >
      Get Started
    </a>
  );
}
