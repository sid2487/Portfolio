"use client";

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "C++",
    "Docker",
    "Linux",
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
