export default function VideoSection() {
  return (
    <section className="container-max py-16 flex flex-col items-center">
      <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="SkillEdge Intro"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
