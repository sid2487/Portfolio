"use client";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Project() {
  const projects = [
    {
      name: "Eduverse",
      description: "A course selling platform",
      github: "https://github.com/sid2487/EduVerse.git",
      live: "https://edu-verse-vert.vercel.app/",
    },
    {
      name: "Syncly",
      description: "A language learning platform",
      github: "https://github.com/sid2487/Syncly.git",
      live: "https://syncly-git-main-siddharths-projects-a91d5754.vercel.app/",
    },
    {
      name: "Finly",
      description: "A budget management platform",
      github: "https://github.com/sid2487/Finly.git",
      live: "#",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
        Projects
      </h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-neutral-900 p-4 rounded-md shadow-md gap-2"
        >
          
          <div>
            <h3 className="text-white text-lg font-medium">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>

         
          <div className="flex gap-4 text-xl">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
              title="GitHub Repo"
            >
              <FaGithub />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
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
