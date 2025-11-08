"use client";
import { siteContent } from "../content";

export default function Footer() {
  return (
    <footer className="w-full border-t border-divider shadow oceanic-footer">
      <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-secondary">
          © {new Date().getFullYear()} {siteContent.companyName.replace(/SkillEdge/gi, "Bluvia")}
        </div>
        <div className="flex gap-4 text-sm">
          <a
            href={siteContent.contact.instagram}
            className="underline transition text-primary"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="underline transition text-primary"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
