"use client";

import { useEffect, useState } from "react";

type ContributionDay = {
  date: string;
  color: string;
  contributionCount: number;
};

type Month = {
  name: string;
  year: number;
  firstDay: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

export default function GithubCalendar() {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [months, setMonths] = useState<Month[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/github-calendar");
        const json = await res.json();

        if (!json.data?.viewer) {
          console.error("GitHub API failed:", json);
          setLoading(false);
          return;
        }

        const cal =
          json.data.viewer.contributionsCollection.contributionCalendar;

        setWeeks(cal.weeks);
        setMonths(cal.months);
        setTotal(cal.totalContributions);

        setLoading(false);
      } catch (error) {
        console.error("Request failed:", error);
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <p>Loading GitHub Heatmap...</p>;

  return (
    <div style={{ marginTop: "40px" }}>
      <h2 className="text-xl font-semibold mb-2">
        {total} contributions in the last year
      </h2>

      <div className="flex text-sm text-gray-500 dark:text-gray-400 mb-2 pl-2 gap-10">
        {months.map((month, i) => (
          <span key={i}>{month.name}</span>
        ))}
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-[4px] min-w-max pl-1">
          {weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-[4px]">
              {week.contributionDays.map((day, j) => (
                <div
                  key={j}
                  title={`${day.date} — ${day.contributionCount} contributions`}
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: day.color,
                    borderRadius: 2,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
