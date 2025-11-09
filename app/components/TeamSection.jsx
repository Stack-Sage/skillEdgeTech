'use client'
import { siteContent } from "../content";

export default function TeamSection() {
  return (
    <section className="container-max py-16">
      <h2 className="text-2xl font-bold mb-8 text-blue-900 text-center">Meet Our Team</h2>
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mx-2">
        {siteContent.team?.map((member, idx) => (
          <div key={idx} className="bg-white/80 rounded-xl shadow p-6 flex flex-col items-center">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
              loading="lazy"
              decoding="async"
              width={96}
              height={96}
            />
            <div className="font-bold text-blue-900">{member.name}</div>
            <div className="text-blue-700 mb-2">{member.role}</div>
            <div className="text-blue-800 text-sm text-center">{member.bio}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
