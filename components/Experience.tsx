"use client";

export default function Experience() {
  const exp = [
    {
      name: "Eminds",
      descriptions:
        "Worked on React Native, learned about UI design and API integrations.",
      date: "Apr 2024 - May 2024",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-black dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2 transition-colors duration-300">
        Experience
      </h2>

      {exp.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-start bg-white dark:bg-neutral-900 p-4 rounded-md shadow-md gap-2 transition-colors duration-300"
        >
          
          <div>
            <h3 className="text-black dark:text-white text-lg font-medium transition-colors duration-300">
              {item.name}
            </h3>
            <p className="text-gray-800 dark:text-gray-400 transition-colors duration-300">
              {item.descriptions}
            </p>
          </div>

         
          <p className="text-sm text-gray-700 dark:text-gray-400 transition-colors duration-300">
            {item.date}
          </p>
        </div>
      ))}
    </section>
  );
}
