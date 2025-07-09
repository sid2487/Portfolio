"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "@/app/hooks/useTheme";

export default function SocialBar() {
  const { toggleTheme } = useTheme();

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full flex items-center gap-5 shadow-lg z-50
                    bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm text-black dark:text-white transition-colors duration-300"
    >
      <a
        href="https://github.com/sid2487"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        title="GitHub"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/siddharth-mishra-02402b243/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        title="LinkedIn"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="mailto:misharsid0077@gmail.com?subject=Hi%20Siddharth&body=Hey%20there%2C%20I%20wanted%20to%20connect%20with%20you!"
        className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        title="Email me"
      >
        <FaEnvelope size={20} />
      </a>
      <a
        href="https://x.com/siddocode"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        title="Twitter/X"
      >
        <FaXTwitter size={20} />
      </a>

      <button
        onClick={toggleTheme}
        className="hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors"
        title="Toggle Theme"
      >
        <MdOutlineLightMode size={20} />
      </button>
    </div>
  );
}
