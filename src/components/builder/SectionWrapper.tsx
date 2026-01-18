"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  /** Alternatywne tło (bg-black zamiast bg-background) */
  darkBg?: boolean
  /** Pokaż grid pattern na tle */
  showGrid?: boolean
  /** Customowa opacity dla gridu (default: 0.07) */
  gridOpacity?: number
}

/**
 * Wrapper dla każdej sekcji.
 * Zapewnia spójny padding, container i opcjonalny grid pattern.
 */
export function SectionWrapper({
  id,
  children,
  className,
  darkBg = false,
  showGrid = true,
  gridOpacity = 0.07
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 relative overflow-hidden",
        darkBg ? "bg-black" : "bg-background",
        className
      )}
    >
      {/* Grid Pattern */}
      {showGrid && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: gridOpacity,
            backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      )}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  )
}
