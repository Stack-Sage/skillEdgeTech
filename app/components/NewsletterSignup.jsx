'use client'
import { useState } from "react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="px-2 py-12">
      <div className="container-max flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Subscribe to our Newsletter</h3>
        {!submitted ? (
          <form
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            aria-label="Newsletter signup form"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-full border border-blue-200"
              aria-label="Your email address"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold transition-transform duration-150 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-blue-700 font-semibold mt-2">Thank you for subscribing!</div>
        )}
      </div>
    </section>
  );
}
