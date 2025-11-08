'use client'
import { siteContent } from "../content";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function CaseStudiesSection() {
  const { playClick } = useSoundEffect();

  return (
    <section className="px-2 py-16">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-blue-900">Case Studies</h2>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-2 mx-2">
          {siteContent.caseStudies?.map((c, idx) => (
            <article
              key={idx}
              className="relative overflow-hidden glossy-card rounded-xl border border-blue-100 p-6 shadow hover:shadow-lg transition-transform duration-150 hover:scale-105"
              style={{
                background: "transparent",
                color: "#0f172a"
              }}
              onClick={playClick}
            >
              <h3 className="font-bold text-xl mb-2 text-blue-700">{c.title}</h3>
              <p className="mb-2 text-blue-900">{c.summary}</p>
              <a
                href={c.link}
                className="text-blue-600 underline inline-block transition-colors duration-150 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
              >
                Read more about {c.title}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
