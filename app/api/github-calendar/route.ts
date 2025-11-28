import { NextResponse } from "next/server";

export async function GET(){
    const query = `
        query {
         viewer {
          contributionsCollection {
            contributionCalendar {
              totalContributions
                weeks {
                 contributionDays {
                   date
                   contributionCount
                   color
                 }
                }
            }
          }
         }
        }
    `;

    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({query}),
    });

    const data = await res.json();
    return NextResponse.json(data);
}