"use client";

import { useEffect, useState } from "react";

type ContributionDay = {
  date: string;
  color: string;
  contributionCount: number;
};

type Week = {
  contributionDays: ContributionDay[];
};

export default function GithubCalendar() {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/github-calendar");
        const json = await res.json();

        if (!json.data || !json.data.viewer) {
          console.error("GitHub API error:", json);
          setWeeks([]);
          setLoading(false);
          return;
        }

        const weeksData =
          json.data.viewer.contributionsCollection.contributionCalendar.weeks;

        setWeeks(weeksData);
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
      <h2 className="text-xl font-semibold mb-3">
        GitHub Contributions
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-[4px] min-w-max pl-1">
          {weeks.map((week, i) => (
            <div
              key={i}
              className="flex flex-col gap-[4px]"
            >
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
