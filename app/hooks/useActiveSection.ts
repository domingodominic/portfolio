"use client"

import { useEffect, useState } from "react"
import { navItems } from "../lib/NavItems"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6,
        rootMargin: "-50% 0px -50% 0px",
      }
    )

    // Wait until sections are in the DOM
    const observeSections = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section) observer.observe(section)
      })
    }

    // Use requestAnimationFrame to ensure DOM is ready
    const rafId = requestAnimationFrame(observeSections)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return activeSection
}
