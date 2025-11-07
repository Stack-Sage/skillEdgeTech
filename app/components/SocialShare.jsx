'use client'
import { motion } from 'framer-motion'
export default function SocialShare({ url, title }) {
  return (
    <div className="flex gap-2 mt-4">
      <motion.a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-blue-500 text-white px-3 py-2"
        aria-label="Share on Twitter"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#2563eb",
          transition: { duration: 0.18 }
        }}
        whileTap={{ scale: 0.97 }}
      >
        Twitter
      </motion.a>
      <motion.a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-blue-700 text-white px-3 py-2"
        aria-label="Share on Facebook"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#1e40af",
          transition: { duration: 0.18 }
        }}
        whileTap={{ scale: 0.97 }}
      >
        Facebook
      </motion.a>
      <motion.a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-blue-800 text-white px-3 py-2"
        aria-label="Share on LinkedIn"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#312e81",
          transition: { duration: 0.18 }
        }}
        whileTap={{ scale: 0.97 }}
      >
        LinkedIn
      </motion.a>
    </div>
  );
}
