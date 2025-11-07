'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-6xl font-extrabold text-blue-700 mb-4">404</h1>
      <p className="text-xl text-blue-800 mb-8">Sorry, that page could not be found.</p>
      <Link href="/" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-800 transition">
        Go Home
      </Link>
    </div>
  );
}
