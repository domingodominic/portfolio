"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ThemeToggle from "../components/ThemeToggle";
import { useActiveSection } from "./useActiveSection";
import { Briefcase, Code, Award, Mail, School } from "lucide-react";

const navItems = [
  { name: "Skills", id: "skills", icon: Code },
  { name: "Projects", id: "projects", icon: Briefcase },
  { name: "Education", id: "education", icon: School },
  { name: "Certification", id: "certifications", icon: Award },
  { name: "Contact", id: "contact", icon: Mail },
];

export default function StickyNavItems() {
  const activeSection = useActiveSection();

  console.log("Active Section:", activeSection);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-4 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-black/10 dark:border-white/20 shadow-lg px-5 py-3 transition-all duration-500 ease-out hover:px-7 hover:gap-5 hover:md:px-8 hover:md:gap-6">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <Tooltip key={item.id} open={isActive ? true : undefined}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`relative flex items-center justify-center h-7 w-7 md:h-10 md:w-10 rounded-full transition-all duration-300 ease-out hover:scale-110
                                        text-black/70 dark:text-white/80
                                        hover:text-black dark:hover:text-white
                                        before:absolute before:inset-0 before:rounded-full
                                        before:bg-black/10 dark:before:bg-white/20
                                        before:opacity-0 before:transition-opacity
                                        hover:before:opacity-100
                                        ${
                                          isActive
                                            ? "bg-gray-300 dark:bg-gray-700"
                                            : ""
                                        }
                                    `}
                >
                  <Icon className="relative z-10 h-4 w-4 md:h-5 md:w-5" />
                  {isActive && (
                    <span className="absolute inset-0 rounded-full border-2 border-black/50 dark:border-white/50 animate-pulse"></span>
                  )}
                </button>
              </TooltipTrigger>

              <TooltipContent
                side="top"
                className={`rounded-md bg-white/90 dark:bg-black/80 backdrop-blur-md
                                    text-black dark:text-white text-xs px-3 py-1
                                    border border-black/10 dark:border-white/20
                                    animate-in fade-in zoom-in-95
                                `}
              >
                {item.name}
              </TooltipContent>
            </Tooltip>
          );
        })}

        {/* Theme Toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="relative flex items-center justify-center h-10 w-10 rounded-full text-black/70 dark:text-white/80 transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:scale-110 before:absolute before:inset-0 before:rounded-full before:bg-black/10 dark:before:bg-white/20 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <ThemeToggle />
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="rounded-md bg-white/90 dark:bg-black/80 backdrop-blur-md text-black dark:text-white text-xs px-3 py-1 border border-black/10 dark:border-white/20"
          >
            Toggle theme
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
