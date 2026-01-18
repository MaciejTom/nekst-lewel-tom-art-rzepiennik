"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  /** Label nad tytułem, np. "/ USŁUGI" */
  label?: string
  /** Główny tytuł (część biała) */
  title: string
  /** Część tytułu z akcentem (primary lub muted) */
  titleAccent?: string
  /** Typ akcentu: primary (pomarańczowy) lub muted (szary) */
  accentType?: "primary" | "muted"
  /** Czy akcent ma być na nowej linii */
  accentOnNewLine?: boolean
  /** Opis pod tytułem */
  subtitle?: string
  /** Wyśrodkować header */
  centered?: boolean
  /** Dodatkowe elementy po prawej stronie (np. statystyki) */
  rightContent?: React.ReactNode
  /** Klasa CSS */
  className?: string
  /** Animować */
  animate?: boolean
}

/**
 * Uniwersalny header sekcji.
 * Zapewnia spójny styl dla label, title i subtitle.
 */
export function SectionHeader({
  label,
  title,
  titleAccent,
  accentType = "primary",
  accentOnNewLine = true,
  subtitle,
  centered = false,
  rightContent,
  className,
  animate = true
}: SectionHeaderProps) {
  const Wrapper = animate ? motion.div : "div"
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  } : {}

  const accentColorClass = accentType === "primary"
    ? "text-primary"
    : "text-muted-foreground"

  return (
    <div className={cn(
      "mb-16",
      centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
      rightContent && "flex items-end justify-between",
      className
    )}>
      <div>
        {/* Label */}
        {label && (
          <Wrapper {...animationProps}>
            <div className="flex items-center gap-2 mb-4">
              {!centered && <div className="w-2 h-2 bg-primary animate-pulse" />}
              <span className="text-primary font-mono text-sm tracking-widest uppercase">
                {label}
              </span>
            </div>
          </Wrapper>
        )}

        {/* Title */}
        <Wrapper
          {...animationProps}
          {...(animate ? { transition: { delay: 0.1 } } : {})}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {title}
            {titleAccent && (
              <>
                {accentOnNewLine ? <br /> : " "}
                <span className={accentColorClass}>{titleAccent}</span>
              </>
            )}
          </h2>
        </Wrapper>

        {/* Subtitle */}
        {subtitle && (
          <Wrapper
            {...animationProps}
            {...(animate ? { transition: { delay: 0.2 } } : {})}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              {subtitle}
            </p>
          </Wrapper>
        )}
      </div>

      {/* Right Content (np. statystyki) */}
      {rightContent && (
        <div className="hidden md:block">
          {rightContent}
        </div>
      )}
    </div>
  )
}
