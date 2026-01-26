"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "hero", label: "Hero", count: 5 },
  { id: "offer", label: "Offer", count: 8 },
  { id: "process", label: "Process", count: 1 },
  { id: "faq", label: "FAQ", count: 1 },
  { id: "contact", label: "Contact", count: 1 },
  { id: "footer", label: "Footer", count: 1 },
]

export function ShowcaseNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-all duration-200",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {section.label}
              <span className="ml-1 opacity-60">({section.count})</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
