import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import nodetalk from "../../public/images/nodetalk.png";
import glamourease from "../../public/images/glamourease.png";
import filefinder from "../../public/images/filefinder.png";
import tsmusic from "../../public/images/tsmusic.png";
import shootscheduler from "../../public/images/shootscheduler.png";

const projects = [
  {
    title: "ShootSchedluer",
    date: "March 2025",
    description:
      "ShootSchedluer is a web application designed to streamline the process of scheduling photoshoots for photographers and clients. It offers an intuitive interface for booking, managing appointments, and coordinating details.",
    tech: ["Next.js", "TypeScript", "Gemini"],
    image: shootscheduler,
    website: "https://shoot-scheduler.vercel.app/",
    source: "#",
  },
  {
    title: "FileFinder",
    date: "July 2025",
    description:
      "FileFinder is a file management application that helps users organize, search, and access their files efficiently.",
    tech: ["NextJS", "ShadCN UI", "NodeJS", "Firebase"],
    image: filefinder,
    source: "https://file-finder.vercel.app/",
    website: "https://file-finder.vercel.app/",
  },
  {
    title: "NodeTalk",
    date: "January 2025",
    description:
      "A chat application built with Node.js and Socket.io that allows real-time communication between users.",
    tech: ["ReactJS", "Express JS", "Socket IO", "Tailwind CSS"],
    image: nodetalk,
    source: "https://nodetalk.vercel.app/home",
    website: "https://nodetalk.vercel.app/home",
  },
  {
    title: "GlamourEase",
    date: "June 2024",
    description:
      "GlamourEase is a beauty salon booking application that simplifies the appointment scheduling process for both clients and salon staff.",
    tech: ["ReactJS", "Express JS", "mongo DB", "Tailwind CSS"],
    image: glamourease,
    website: "https://glamourease.vercel.app/",
    source: "https://glamourease.vercel.app/",
  },
  {
    title: "TSMusic",
    date: "January 2023",
    description:
      "TSMusic is a music streaming platform that allows swifties users to discover, play, and manage their favorite songs about their favorite artist Taylor Swift.",
    tech: ["Vanilla JS", "Tailwind CSS"],
    image: tsmusic,
    website: "https://domingodominic.github.io/tasMUSIC/",
    source: "https://domingodominic.github.io/tasMUSIC/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" px-6 py-24 text-white">
      {/* Section header */}
      <header className="max-w-6xl mb-16">
        {/* Badge */}
        <span
          className="inline-block mb-4 rounded-full bg-neutral-800 px-4 py-1 text-sm text-neutral-300"
          data-aos="fade-right"
        >
          Projects
        </span>

        <h2
          className=" text-2xl md:text-4xl font-bold mb-4"
          data-aos="fade-right"
        >
          Check out my latest work
        </h2>

        <p className="max-w-2xl text-neutral-400">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>
      </header>

      {/* Projects list */}
      <div className="max-w-6xl space-y-20">
        {projects.map((project) => (
          <article key={project.title}>
            <Card
              className="bg-transparent border-0"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <CardContent className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 p-0">
                {/* Image */}
                <figure className="overflow-hidden rounded-lg bg-neutral-800 dark:bg-white">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-contain"
                    width={100}
                    height={100}
                  />
                </figure>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    {project.title}
                  </h3>

                  <p className="mb-3 text-sm text-neutral-400">
                    {project.date}
                  </p>

                  <p className="mb-4 text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <ul className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <li key={item}>
                        <Badge
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-300"
                        >
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.website && (
                      <Button asChild>
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          🌐 Website
                        </a>
                      </Button>
                    )}

                    {project.source && (
                      <Button asChild variant="outline">
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          🐙 Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}
