"use client"

/**
 * Demo page - pokazuje różne warianty sekcji pod sobą
 */

import { useState } from "react"
import { SectionWrapper, SectionHeader } from "@/components/builder"

// Import variant components directly for demo
import { HeroVariantsDemo } from "./hero-variants"
import { WhyUsVariantsDemo } from "./whyus-variants"
import { ServicesVariantsDemo } from "./services-variants"
import { FaqVariantsDemo } from "./faq-variants"

export default function VariantsDemoPage() {
  const [activeSection, setActiveSection] = useState<string>("hero")

  const sections = [
    { id: "hero", label: "Hero" },
    { id: "whyus", label: "Why Us" },
    { id: "services", label: "Services" },
    { id: "faq", label: "FAQ" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-8">
            <span className="text-primary font-bold">VARIANTS DEMO</span>
            <div className="flex gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-20">
        {activeSection === "hero" && <HeroVariantsDemo />}
        {activeSection === "whyus" && <WhyUsVariantsDemo />}
        {activeSection === "services" && <ServicesVariantsDemo />}
        {activeSection === "faq" && <FaqVariantsDemo />}
      </main>
    </div>
  )
}
