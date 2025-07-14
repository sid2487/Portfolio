"use client";

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "NextJS",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "C++",
    "Docker",
    "Linux",
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-black dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2 transition-colors duration-300">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-white/10 text-black dark:text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-gray-300 dark:hover:bg-white/20 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
