"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="py-4 md:py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <header className="max-w-xl text-center md:text-left">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl font-extrabold"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Hi, I&apos;m Dom 👋
          </h1>

          <p
            className="mt-4 text-lg text-muted-foreground"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            I am an aspiring software developer passionate about creating
            accessible, maintainable, and innovative web applications.
          </p>
          <div
            className="mt-6 flex justify-center md:justify-start gap-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button asChild>
              <a href="#contact">Contact me</a>
            </Button>
          </div>
        </header>

        <figure
          className="flex-shrink-0"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <Avatar className="w-32 h-32 md:w-40 md:h-40">
            <AvatarImage
              src="https://tse1.mm.bing.net/th/id/OIP.mGJ1f7vnODgLf59xvNhWHQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Portrait of Dom"
            />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
        </figure>
      </div>
      <section className="mt-10" aria-labelledby="about-heading">
        <header
          className="max-w-xl text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2 id="about-heading" className="text-xl font-semibold">
            About
          </h2>
        </header>

        <p
          className="md:text-left text-center mt-4 text-sm text-muted-foreground max-w-xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          I&apos;m a software developer focused on building accessible,
          maintainable web applications using Next.js, TypeScript, and Tailwind
          CSS. I enjoy pragmatic architecture, automated testing, and shipping
          user-centered features quickly.
        </p>

        <ul
          className="justify-center md:justify-start mt-4 flex flex-wrap gap-2 text-xs max-w-xl"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <li className="px-2 py-1 bg-muted rounded-md">Next.js</li>
          <li className="px-2 py-1 bg-muted rounded-md">TypeScript</li>
          <li className="px-2 py-1 bg-muted rounded-md">Tailwind CSS</li>
          <li className="px-2 py-1 bg-muted rounded-md">React</li>
          <li className="px-2 py-1 bg-muted rounded-md">Testing</li>
        </ul>
      </section>
    </section>
  );
}
