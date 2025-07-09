"use client";
import Image from "next/image";
import jncu from "../public/jncu.jpeg";
import pu from "../public/pu.jpg";

export default function Education() {
  const education = [
    {
      img: jncu,
      alt: "jncu",
      university: "JNCU",
      degree: "Bachelor's (Mathematics)",
      year: "2019 - 2022",
    },
    {
      img: pu,
      alt: "pu",
      university: "Pondicherry University",
      degree: "Master's (MCA)",
      year: "2022 - 2024",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-black dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2 transition-colors duration-300">
        Education
      </h2>

      {education.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-neutral-900 p-4 rounded-md shadow-md transition-colors duration-300"
        >
          <div className="flex items-center gap-4">
            <Image
              src={item.img}
              alt={item.alt}
              width={60}
              height={60}
              className="rounded-md object-cover"
            />
            <div>
              <h3 className="text-black dark:text-white text-lg font-medium transition-colors duration-300">
                {item.university}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300">
                {item.degree}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-400 transition-colors duration-300">
            {item.year}
          </p>
        </div>
      ))}
    </section>
  );
}
