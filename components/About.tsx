"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="flex flex-col gap-6 bg-white/50 dark:bg-neutral-900/50 p-6 rounded-md shadow-md backdrop-blur-sm transition-colors duration-300">
      <h2 className="text-3xl font-bold text-black dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
        About Me
      </h2>

      <div className="text-gray-800 dark:text-gray-300 text-base leading-relaxed space-y-4">
        <p>
          {`Trying to be useful!`}
        </p>

        {/* <Link href="/blogs" className="text-blue-600 hover:underline">
          Read Blogs
        </Link> */}
      </div>
    </section>
  );
}
