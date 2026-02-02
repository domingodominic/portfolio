import React from "react";

const skills = [
  {
    title: "Languages",
    items: "Python, TypeScript, JavaScript, PHP",
    icon: "🟣",
  },
  {
    title: "Frameworks & Libraries",
    items:
      "React.js, Next.js, Node.js, Laravel, CodeIgniter, LangChain, LangGraph, LangSmith, Vue.js, Express.js",
    icon: "⚫",
  },
  {
    title: "AI / ML",
    items:
      "OpenAI, Google Gemini, Anthropic Claude, Hugging Face Transformers, Pinecone, Neo4j, Azure Document Intelligence",
    icon: "🟢",
  },
  {
    title: "Automation",
    items: "n8n, Make, Zapier",
    icon: "🔴",
  },
  {
    title: "Cloud & DevOps",
    items:
      "AWS, GCP, Firebase, Vercel, Netlify, GitHub Actions, CircleCI, Serverless Framework, Digital Ocean, Replit, cPanel",
    icon: "🟠",
  },
  {
    title: "Databases",
    items: "MySQL, PostgreSQL, DynamoDB, Supabase, Redis",
    icon: "🔵",
  },
  {
    title: "Version Control",
    items: "Git, GitHub, Bitbucket",
    icon: "🟥",
  },
  {
    title: "Design & Tools",
    items: "Figma, Photoshop, Canva, WordPress, Adobe Creative Suite",
    icon: "🟣",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen  px-6 py-20 text-white">
      {/* Section title */}
      {/* Badge */}
      <span className="inline-block mb-4 rounded-full bg-neutral-800 px-4 py-1 text-sm text-neutral-300">
        Skills
      </span>

      <div
        className="flex items-center gap-4 mb-12"
        data-aos="fade-right"
        data-aos-delay="1000"
      >
        <h2 className="text-2xl md:text-4xl font-medium text-black dark:text-white">
          What I can do
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-6xl">
        {skills.map((skill) => (
          <div key={skill.title} className="flex gap-4" data-aos="fade-up">
            {/* Icon circle */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-xl">
              {skill.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">
                {skill.title}
              </h3>
              <p className="text-sm text-black dark:text-white leading-relaxed">
                {skill.items}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
