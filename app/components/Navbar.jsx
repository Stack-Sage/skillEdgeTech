"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "../content";
import { logo } from "../assets";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const clickSound = useRef(null);
  const hoverSound = useRef(null);

  const playClick = () => clickSound.current && clickSound.current.play();
  const playHover = () => hoverSound.current && hoverSound.current.play();

  return (
    <>
      <audio ref={clickSound} src="/assets/sounds/click.mp3" preload="auto" />
      <audio ref={hoverSound} src="/assets/sounds/hover.mp3" preload="auto" />
      <motion.header
        className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm"
        style={{
          background: "rgba(255,255,255,0.7)",
          borderBottom: "1px solid #7dd3fc",
        }}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container-max flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={playClick}
          >
            <div
              className="flex items-center justify-center rounded-full bg-white shadow"
              style={{
                width: 44,
                height: 44,
                border: "2px solid #c7d2fe",
                overflow: "hidden",
              }}
            >
              <Image
                src={logo}
                alt={siteContent.companyName}
                width={44}
                height={44}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "44px",
                  height: "44px",
                }}
                decoding="async"
                priority
              />
            </div>
            <span className="font-semibold text-lg" style={{ color: "#0f172a" }}>
              {siteContent.companyName}
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 text-base items-center">
            {["features", "pricing", "portfolio", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="transition font-medium px-2 py-1 rounded"
                style={{
                  color: "#2563eb",
                }}
                onMouseEnter={playHover}
                onClick={playClick}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <Link
              href="/signup"
              className="ml-6 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold"
              style={{
                background: "linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)",
                color: "#fff",
                boxShadow: "0 2px 8px 0 rgba(37,99,235,0.10)",
              }}
              onMouseEnter={playHover}
              onClick={playClick}
            >
              Get started
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => {
                setOpen(!open);
                playClick();
              }}
              className="p-2 rounded-md border bg-white text-[#0f172a]"
              aria-label="Toggle menu"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            className="md:hidden container-max rounded-b-xl p-4 shadow transition-all"
            style={{
              background:
                "linear-gradient(135deg, #e0f7fa 0%, #b3c6ff 60%, #a7f3d0 100%)",
              borderBottom: "1px solid #7dd3fc",
            }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-4">
              {["features", "pricing", "portfolio", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="transition font-medium px-2 py-2 rounded"
                  style={{
                    color: "#2563eb",
                  }}
                  onMouseEnter={playHover}
                  onClick={() => {
                    setOpen(false);
                    playClick();
                  }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold"
                style={{
                  background: "linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)",
                  color: "#fff",
                  boxShadow: "0 2px 8px 0 rgba(37,99,235,0.10)",
                }}
                onMouseEnter={playHover}
                onClick={() => {
                  setOpen(false);
                  playClick();
                }}
              >
                Get started
              </Link>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
