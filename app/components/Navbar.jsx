"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { playClick } = useSoundEffect();

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-divider shadow-sm backdrop-blur-md"
      style={{
        background:
          "linear-gradient(135deg, #e0f7fa 0%, #bff6f9 60%, #5edfff 100%)",
        boxShadow: "0 2px 12px 0 #bfeff355",
        color: "#0e2e3b",
        // Slightly darker than main background
        borderBottom: "1.5px solid #d9e6e9",
      }}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="container-max flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={playClick}
        >
          <div
            className="flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-lg border border-divider transition-transform duration-150 hover:scale-110"
            style={{
              width: 48,
              height: 48,
              overflow: "hidden",
              padding: 0,
            }}
          >
            <Image
              src="/assets/logo_round.png"
              alt={siteContent.companyName}
              width={44}
              height={44}
              className="object-contain"
              decoding="async"
              priority
            />
          </div>
          <span
            className="font-semibold text-lg group-hover:text-primary transition-colors duration-150 text-main"
          >
            Bluvia
            <span className="ml-2 text-base font-normal text-primary hidden sm:inline">
              – Modern Web Design &amp; Development
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 text-base items-center" aria-label="Primary">
          {["features", "pricing", "portfolio", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="transition font-medium px-2 py-1 rounded hover:bg-primary-light/30 text-primary-dark"
              onClick={playClick}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <Link
            href="/signup"
            className="ml-6 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold btn-primary hover-glow"
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
            className="p-2 rounded-md border bg-white/90 text-main"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="md:hidden container-max rounded-b-xl p-4 shadow transition-all"
          style={{
            background:
              "linear-gradient(135deg, #e0f7fa 0%, #bff6f9 60%, #5edfff 100%)",
            borderBottom: "1.5px solid #d9e6e9",
          }}
        >
          <div className="flex flex-col gap-4">
            {["features", "pricing", "portfolio", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="transition font-medium px-2 py-2 rounded hover:bg-primary-light/30 text-primary-dark"
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
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold btn-primary hover-glow"
              onClick={() => {
                setOpen(false);
                playClick();
              }}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
