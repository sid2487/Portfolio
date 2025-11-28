"use client";

import { useEffect, useState } from "react";

export default function GithubCalendar() {
  const [weeks, setWeeks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/github-calendar");
      const json = await res.json();
      
      const weeksData =
        json.data.viewer.contributionsCollection.contributionCalendar.weeks;

      setWeeks(weeksData);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) return <p>Loading GitHub Heatmap...</p>;

  return (
    <div style={{ marginTop: "40px" }}>
   
      <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>
        GitHub Contributions
      </h2>

      <div style={{ display: "flex", gap: "4px" }}>
        {weeks.map((week, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
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
  );
}
