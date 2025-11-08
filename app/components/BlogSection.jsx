'use client'
import { siteContent } from "../content";

export default function BlogSection() {
  return (
    <section className="px-2 py-16">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-blue-900">Blog & Resources</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {siteContent.blogPosts?.map((post, idx) => (
            <article
              key={idx}
              className="rounded-xl border border-blue-100 bg-white/80 p-6 shadow hover:shadow-lg transition-transform duration-150 hover:scale-105"
            >
              <h3 className="font-bold text-xl mb-2 text-blue-700">
                {post.title} | Bluvia Web Design Insights
              </h3>
              <p className="mb-2 text-blue-900">
                {post.summary}
              </p>
              <a
                href={post.link}
                className="text-blue-600 underline inline-block transition-transform duration-150 hover:scale-105 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full article: {post.title}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
