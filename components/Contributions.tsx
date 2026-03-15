"use client";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BiGitPullRequest } from "react-icons/bi";

export default function Contributions() {
  const contributions = [
    {
      name: "Add tests for DropdownMenu component",
      repo: "processing/p5.js-web-editor",
      description: "Added comprehensive unit tests for the DropdownMenu component verifying rendering, opening/closing mechanisms, and accessibility features.",
      status: "Merged",
      tech: ["p5.js", "React", "Testing", "Jest"],
      github: "https://github.com/processing/p5.js-web-editor/pull/3974",
    },
    {
      name: "corrected hindi translatin JSON formatting",
      repo: "processing/p5.js-web-editor",
      description: "Resolved a bug where Hindi translations were not appearing on the homepage, ensuring consistent localization and proper formatting for the Hindi language support.",
      status: "Merged",
      tech: ["p5.js", "i18n", "JSON"],
      github: "https://github.com/processing/p5.js-web-editor/pull/3751",
    },
  ];

  const borderColors = [
    "border-l-4 border-pink-500",
    "border-l-4 border-orange-500",
  ];

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-black dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2 transition-colors duration-300">
        Open Source Contributions
      </h2>
      {contributions.map((contrib, index) => (
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
            <div className="flex items-center gap-2 mb-1 text-gray-900 dark:text-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-bold">{contrib.name}</h3>
              <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full border border-green-200 dark:border-green-800">
                <BiGitPullRequest /> {contrib.status}
              </span>
            </div>
            
            <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mb-2">
              {contrib.repo}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
              {contrib.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-1">
              {contrib.tech.map((t, i) => (
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
              href={contrib.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-50 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-200"
              title="View Pull Request"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}