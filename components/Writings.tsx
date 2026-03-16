"use client";
import { FiArrowUpRight } from "react-icons/fi";

export default function Writings() {
  const writings = [
    {
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Deep dive into the world of distributed systems and how to manage them effectively.",
      link: "https://medium.com",
      date: "Oct 2023",
    },
    {
      title: "The Power of TypeScript in Modern Web Development",
      excerpt: "Why static typing is essential for large-scale applications and how it improves developer productivity.",
      link: "https://dev.to",
      date: "Aug 2023",
    },
    {
      title: "Mastering Next.js Server Components",
      excerpt: "Bridging the gap between server and client with the latest Next.js features.",
      link: "https://hashnode.com",
      date: "Jun 2023",
    },
    {
      title: "Optimizing Frontend Performance",
      excerpt: "Strategies for reducing bundle sizes and improving Core Web Vitals.",
      link: "https://web.dev",
      date: "May 2023",
    },
    {
      title: "A Guide to Modern CSS Layouts",
      excerpt: "From Flexbox to Grid, mastering the art of responsive design.",
      link: "https://css-tricks.com",
      date: "Apr 2023",
    },
    {
      title: "Understanding React Server Actions",
      excerpt: "Simplifying data mutations in Next.js applications.",
      link: "https://nextjs.org",
      date: "Mar 2023",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2 transition-colors duration-300">
        Writings
      </h2>
      
      {/* Scrollable Container */}
      <div 
        className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
          {writings.map((writing, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-white dark:bg-neutral-900/80 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md uppercase">
                    {writing.date}
                  </span>
                  <div className="p-2 rounded-full bg-gray-50 dark:bg-neutral-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    <FiArrowUpRight className="text-gray-400 group-hover:text-blue-500 transition-colors" size={18} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 transition-colors duration-300 leading-snug">
                  {writing.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300 line-clamp-3 leading-relaxed">
                  {writing.excerpt}
                </p>
              </div>
              <a
                href={writing.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-2 group/link transition-all"
              >
                Read Article
                <span className="h-px w-0 group-hover/link:w-8 bg-blue-600 dark:bg-blue-400 transition-all duration-300"></span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.3);
          border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(64, 64, 64, 0.5);
        }
      `}</style>
    </section>
  );
}
