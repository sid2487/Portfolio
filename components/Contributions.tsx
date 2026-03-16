"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiGitPullRequest } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export default function Contributions() {
  const [selectedContrib, setSelectedContrib] = useState<null | typeof contributions[0]>(null);

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
      name: "Fixed Hindi translation JSON formatting bug",
      repo: "processing/p5.js-web-editor",
      description: "Resolved a bug where Hindi translations were not appearing on the homepage, ensuring consistent localization and proper formatting for the Hindi language support.",
      status: "Merged",
      tech: ["p5.js", "i18n", "JSON"],
      github: "https://github.com/processing/p5.js-web-editor/pull/3751",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-black dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2 transition-colors duration-300">
        Open Source Contributions
      </h2>

      <div className="flex flex-col gap-3">
        {contributions.map((contrib, index) => (
          <div
            key={index}
            onClick={() => setSelectedContrib(contrib)}
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/50 dark:bg-neutral-900/50 rounded-xl border border-gray-200 dark:border-neutral-800 cursor-pointer hover:border-accent-blue/50 dark:hover:border-accent-blue/50 transition-all duration-300"
          >
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-accent-blue transition-colors">
                {contrib.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                {contrib.repo}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-500/20">
                <BiGitPullRequest size={12} /> {contrib.status}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedContrib && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedContrib(null)}
          />
          
          <div className="relative bg-white dark:bg-neutral-900 w-full max-w-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden animate-fade-in-up">
            <button 
              onClick={() => setSelectedContrib(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-500 transition-colors"
            >
              <IoMdClose size={24} />
            </button>

            <div className="p-8">
              <p className="text-sm font-bold text-accent-blue uppercase tracking-widest mb-2">
                {selectedContrib.repo}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pr-10">
                {selectedContrib.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-6">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full border border-green-500/20">
                  <BiGitPullRequest size={14} /> {selectedContrib.status}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {selectedContrib.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedContrib.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-lg text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-neutral-800">
                <a
                  href={selectedContrib.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold hover:opacity-80 transition-opacity"
                >
                  <FaGithub size={20} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}