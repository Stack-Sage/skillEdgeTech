import { siteContent } from "../content";

export default function ReviewsSection() {
  return (
    <section className="px-2 py-16 md:py-24">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-10"
            style={{ color: "#0f172a" }}>
          What clients say
        </h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 mx-2">
          {siteContent.reviews.map((r, idx) => (
            <blockquote
              key={idx}
              className="relative glossy-card card-content flex items-center gap-4 transition-transform duration-150 hover:scale-105"
            >
              <div>
                <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-primary">
                  “{r.text}”
                </p>
                <footer className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-secondary">
                  — {r.name}
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
