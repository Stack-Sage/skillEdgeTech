'use client'
import { motion } from "framer-motion";
import { siteContent } from "../content";

export default function BlogSection() {
  return (
    <motion.section
      className="px-2 py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-blue-900">Blog & Resources</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {siteContent.blogPosts?.map((post, idx) => (
            <motion.article
              key={idx}
              className="rounded-xl border border-blue-100 bg-white/80 p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
            >
              <h3 className="font-bold text-xl mb-2 text-blue-700">{post.title}</h3>
              <p className="mb-2 text-blue-900">{post.summary}</p>
              <motion.a
                href={post.link}
                className="text-blue-600 underline inline-block"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.08,
                  color: "#2563eb",
                  textDecoration: "underline wavy",
                  transition: { duration: 0.18 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Read the full article: {post.title}
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
