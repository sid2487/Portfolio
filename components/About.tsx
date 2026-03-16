"use client";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <section className="flex flex-col gap-6 bg-white/50 dark:bg-neutral-900/50 p-6 rounded-md shadow-md backdrop-blur-sm transition-colors duration-300 relative">
        <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
            About Me
          </h2>
          <button
            onClick={toggleModal}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 transition-colors whitespace-nowrap"
          >
            Read More
          </button>
        </div>

        <div className="text-gray-800 dark:text-gray-300 text-base leading-relaxed space-y-4">
          <p className="font-medium">
            {`Full Stack Developer`}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Passionate about building scalable web applications and exploring new technologies.
          </p>
        </div>
      </section>

      {/* Modal Overlay - Moved outside the blurred section to fix stacking context */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={toggleModal}
        >
          {/* Modal Container */}
          <div 
            className="bg-white dark:bg-neutral-900 w-[95vw] sm:w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col relative animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 sm:p-6 border-b border-gray-100 dark:border-neutral-800 sticky top-0 bg-white dark:bg-neutral-900 z-20">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Detailed About Me</h3>
              <button 
                onClick={toggleModal}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <IoClose size={24} />
              </button>
            </div>
            
            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 text-gray-700 dark:text-gray-300 space-y-8 custom-scrollbar">
              <section className="space-y-4">
                <h4 className="text-lg font-semibold text-black dark:text-white border-l-4 border-blue-500 pl-3">Professional Background</h4>
                <p className="leading-relaxed">
                  Hello! I'm a passionate Full Stack Developer with experience in building modern web applications using technologies like React, Next.js, Node.js, and TypeScript.
                </p>
                <p className="leading-relaxed">
                  My journey in tech started with a curiosity about how things work on the internet, which led me to dive deep into frontend and backend development. I enjoy solving complex problems and creating intuitive user experiences.
                </p>
              </section>

              <section className="space-y-4">
                <h4 className="text-lg font-semibold text-black dark:text-white border-l-4 border-green-500 pl-3">Interests & Philosophy</h4>
                <p className="leading-relaxed">
                  In my free time, I love contributing to open-source projects, writing about technical topics, and staying up-to-date with the latest industry trends. I'm always looking for opportunities to learn and grow as a developer.
                </p>
                <p className="leading-relaxed">
                  I have a strong foundation in software engineering principles and a keen eye for design. I'm comfortable working across the entire stack, from designing database schemas to crafting polished user interfaces.
                </p>
              </section>

              <section className="space-y-4">
                <h4 className="text-lg font-semibold text-black dark:text-white border-l-4 border-purple-500 pl-3">Experience Highlights</h4>
                <p className="leading-relaxed">
                  Whether it's building a real-time chat application, a budget management platform, or a developer ranking arena, I bring dedication and a focus on quality to every project I work on.
                </p>
                <p className="leading-relaxed">
                  I'm also interested in AI and its applications in web development, as seen in projects like "AI Resume Roaster". I believe AI will play a significant role in the future of software development, and I'm excited to be part of that evolution.
                </p>
              </section>
            </div>
            
            {/* Footer */}
            <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-neutral-800 flex justify-end sticky bottom-0 bg-white dark:bg-neutral-900 z-20">
              <button 
                onClick={toggleModal}
                className="w-full sm:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.3);
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(64, 64, 64, 0.5);
        }
      `}</style>
    </>
  );
}
