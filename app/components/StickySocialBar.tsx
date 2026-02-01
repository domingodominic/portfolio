"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Home,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const socials = [
  { name: "Home", icon: Home, href: "/" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "X (Twitter)", icon: Twitter, href: "https://x.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Contact", icon: MessageCircle, href: "#contact" },
];

export default function StickySocialBar() {
  return (
    <TooltipProvider>
      <div
        className="
          fixed bottom-6 left-1/2 z-50
          -translate-x-1/2
          flex items-center gap-4
          rounded-full

          bg-white/70 dark:bg-white/10
          backdrop-blur-xl

          border border-black/10 dark:border-white/20
          shadow-lg

          px-5 py-3
          transition-all duration-500 ease-out
          hover:px-7 hover:gap-5
          hover:md:px-8 hover:md:gap-6
        "
      >
        {socials.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <a
                href={item.href}
                target="_blank"
                className="
                  relative
                  flex items-center justify-center
                  h-7 w-7 md:10 md:10
                  rounded-full

                  text-black/70 dark:text-white/80
                  transition-all duration-300 ease-out

                  hover:text-black dark:hover:text-white
                  hover:scale-110

                  before:absolute
                  before:inset-0
                  before:rounded-full
                  before:bg-black/10 dark:before:bg-white/20
                  before:opacity-0
                  before:transition-opacity
                  hover:before:opacity-100
                "
              >
                <item.icon className="h-5 w-5 relative z-10" />
              </a>
            </TooltipTrigger>

            <TooltipContent
              side="top"
              className="
                rounded-md
                bg-white/90 dark:bg-black/80
                backdrop-blur-md

                text-black dark:text-white
                text-xs
                px-3 py-1

                border border-black/10 dark:border-white/20
                animate-in fade-in zoom-in-95
              "
            >
              {item.name}
            </TooltipContent>
          </Tooltip>
        ))}

        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="
        relative
        flex items-center justify-center
        h-10 w-10
        rounded-full

        text-black/70 dark:text-white/80
        transition-all duration-300 ease-out

        hover:text-black dark:hover:text-white
        hover:scale-110

        before:absolute
        before:inset-0
        before:rounded-full
        before:bg-black/10 dark:before:bg-white/20
        before:opacity-0
        before:transition-opacity
        hover:before:opacity-100
      "
            >
              <ThemeToggle />
            </div>
          </TooltipTrigger>

          <TooltipContent
            side="top"
            className="
      rounded-md
      bg-white/90 dark:bg-black/80
      backdrop-blur-md
      text-black dark:text-white
      text-xs
      px-3 py-1
      border border-black/10 dark:border-white/20
    "
          >
            Toggle theme
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
