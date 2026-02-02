import React from "react";
import { Trophy } from "lucide-react";

const hackathons = [
  {
    date: "August, 2025",
    title: "KAHANGA-HACKATHON",
    location: "Balanga City, Bataan",
    description:
      "We developed system for early detection of natural disasters using real-time data analysis and arduino.  ",
    awards: ["Hackathon 4th place", "Kahanga-Hackathon Solution"],
  },  {
    date: "February, 2025",
    title: "Yoonet-Tech Folks",
    location: "Balanga City, Bataan",
    description:
      "We developed system for students to enhance their skills in Programming by incorporating Open AI to practice their logic ability.  ",
    awards: ["TechFolk 2nd place", "Best in Idea Awardee"],
  },
];

function Hackathon() {
  return (
    <section id="hackathon" className="w-full  text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <span
          className="inline-block mb-4 rounded-full bg-neutral-800 px-4 py-1 text-sm text-neutral-300"
          data-aos="fade-in"
        >
          Hackathons
        </span>

        {/* Heading */}
        <h2
          className="text-2xl md:text-4xl font-bold mb-4 dark:text-white text-black"
          data-aos="fade-right"
        >
          Joining competition
        </h2>

        {/* Description */}
        <p className="dark:text-neutral-400 text-black max-w-3xl mb-12">
          During my time in university, I attended 1 hackathon. People from
          around the province would come together and build incredible things in
          2 days.
        </p>

        {/* Timeline */}
        <div className="space-y-12" data-aos="zoom-in">
          {hackathons.map((item, index) => (
            <div key={index} className="flex gap-6">
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                </div>
                {index !== hackathons.length - 1 && (
                  <div className="w-px flex-1 bg-neutral-800 mt-2" />
                )}
              </div>

              {/* Content */}
              <div>
                <p className="text-sm dark:text-neutral-400 text-black">
                  {item.date}
                </p>
                <h3 className="text-xl font-semibold mt-1 text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm dark:text-neutral-400 tesxt-black">
                  {item.location}
                </p>

                <p className="dark:text-neutral-300 text-black mt-3 max-w-2xl">
                  {item.description}
                </p>

                {/* Awards */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.awards.map((award, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 rounded-full bg-neutral-900 border border-neutral-700 px-3 py-1 text-sm text-neutral-200"
                    >
                      🏆 {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hackathon;
