"use client";
import { siteContent } from "../content";

export default function Footer() {
  return (
    <footer
      className="w-full border-t shadow"
      style={{
        background:
          "linear-gradient(135deg, #1E1B4B 0%, #312E81 60%, #3730A3 100%)",
        borderTop: "1px solid #7dd3fc",
        color: "#e0e7ef",
      }}
    >
      <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm" style={{ color: "#a5b4fc" }}>
          © {new Date().getFullYear()} {siteContent.companyName}
        </div>
        <div className="flex gap-4 text-sm">
          <a
            href={siteContent.contact.instagram}
            className="underline transition"
            style={{ color: "#a5b4fc" }}
          >
            Instagram
          </a>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="underline transition"
            style={{ color: "#a5b4fc" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
