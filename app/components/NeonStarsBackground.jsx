'use client'
import { useEffect, useRef } from "react";

export default function NeonStarsBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let animationId;
    const ctx = canvas.getContext("2d");
    const STAR_COUNT = Math.floor(width / 12);
    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.6,
      speed: Math.random() * 0.7 + 0.2,
      hue: 180 + Math.random() * 120,
      alpha: Math.random() * 0.7 + 0.3,
      dx: Math.random() * 0.2 - 0.1,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.shadowColor = `hsl(${star.hue},100%,70%)`;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = `hsl(${star.hue},100%,70%)`;
        ctx.fill();
        ctx.restore();

        // Move star
        star.y += star.speed;
        star.x += star.dx;
        if (star.y > height + 10) {
          star.y = -5;
          star.x = Math.random() * width;
        }
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    // Parallax on mouse move
    function onMouseMove(e) {
      const px = e.clientX / width - 0.5;
      for (let star of stars) {
        star.dx = (Math.random() - 0.5) * 0.2 + px * 0.8;
      }
    }
    window.addEventListener("mousemove", onMouseMove);

    // Resize handler
    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.7,
        mixBlendMode: "lighter",
      }}
      aria-hidden="true"
    />
  );
}
