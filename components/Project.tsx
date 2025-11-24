"use client";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Project() {
  const projects = [
    {
      name: "Group Chat-App",
      description: "Full Stack Group Chat-App",
      tech: [
        "Turborepo",
        "HTTP",
        "WebSocket",
        "NextJS",
        "Prisma",
        "NeonDB",
        "Tailwind",
        "Postgres",
        "Typescript",
      ],
      github: "https://github.com/sid2487/Group-Chat-App.git",
      live: "https://github.com/sid2487/Group-Chat-App.git",
    },
    {
      name: "Fynly",
      description: "A budget management platform",
      tech: ["NextJS", "Prisma", "Clerk", "Tailwind", "Postgres", "Typescript"],
      github: "https://github.com/sid2487/Fynly.git",
      live: "https://fynly-5fj3.vercel.app/",
    },
    {
      name: "AI Resume Roaster",
      description: "Roast your resume",
      tech: [
        "NextJS",
        "Prisma",
        "PostgreSQL",
        "Next-Auth",
        "Tailwind",
        "Postgres",
        "Typescript",
        "	Groq API",
      ],
      github: "https://github.com/sid2487/AI-Resume-Roaster.git",
      live: "https://ai-resume-roaster.vercel.app/",
    },
    {
      name: "Syncly",
      description: "A language learning platform",
      tech: [
        "ReactJs",
        "Tanstack",
        "Tailwind",
        "DaisyUI",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Mongoose",
        "Zustand",
        "Stream Chat API",
      ],
      github: "https://github.com/sid2487/Syncly.git",
      live: "https://syncly-git-main-siddharths-projects-a91d5754.vercel.app/",
    },
    {
      name: "Eduverse",
      description: "A course selling platform",
      tech: [
        "ReactJs",
        "Tailwind",
        "NodeJs",
        "ExpressJs",
        "Multer",
        "Cloudinary",
        "MongoDB",
        "Mongoose",
        "Stripe",
      ],
      github: "https://github.com/sid2487/EduVerse.git",
      live: "https://edu-verse-vert.vercel.app/",
    },
  ];

  const borderColors = [
    "border-l-4 border-blue-500",
    "border-l-4 border-green-500",
    "border-l-4 border-purple-500",
  ];

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-black dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2 transition-colors duration-300">
        Projects
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={
            `relative flex flex-col sm:flex-row sm:justify-between sm:items-center
             bg-white dark:bg-neutral-900 p-5 rounded-lg shadow-lg gap-4 transition-colors duration-300
             hover:shadow-xl hover:scale-[1.01] ${
               borderColors[index % borderColors.length]
             }`
          }
        >
          <div className="">
            <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-1">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-gray-200 dark:bg-neutral-800 ring-1 ring-gray-300 dark:ring-neutral-700 rounded text-xs text-gray-700 dark:text-gray-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 text-2xl mt-2 sm:mt-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-50 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-200"
              title="GitHub Repo"
            >
              <FaGithub />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-50 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-200"
              title="Live Project"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
