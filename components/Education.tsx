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
      <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
        Education
      </h2>

      {education.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-neutral-900 p-4 rounded-md shadow-md"
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
              <h3 className="text-white text-lg font-medium">
                {item.university}
              </h3>
              <p className="text-gray-400">{item.degree}</p>
            </div>
          </div>

          <p className="text-sm text-gray-400">{item.year}</p>
        </div>
      ))}
    </section>
  );
}
