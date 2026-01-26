"use client"

import { motion } from "framer-motion"
import { FileText, MessageSquare, HardHat, ClipboardCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ProcessContent } from "@/types"

// ============================================
// ICON MAP
// ============================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "file-text": FileText,
  "message-square": MessageSquare,
  "hard-hat": HardHat,
  "clipboard-check": ClipboardCheck,
}

// ============================================
// STYLES
// ============================================

const baseStyles = {
  section: "bg-background py-24 relative overflow-hidden",
  pattern: "absolute inset-0 opacity-[0.07]",
  topLine: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent",
  container: "container mx-auto px-6 relative z-10",

  // Header
  header: "text-center mb-20",
  tagline: "text-primary font-mono text-sm tracking-widest uppercase mb-4 block",
  title: "text-4xl md:text-5xl font-bold text-white mb-6",
  titleAccent: "text-muted-foreground",

  // Steps
  stepsGrid: "relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
  connectingLine: "hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-border z-0",

  // Step card
  stepCard: "relative z-10 group",
  stepAccent: "absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
  stepInner: "bg-card border border-border p-8 h-full hover:border-primary/30 transition-colors duration-300 relative overflow-hidden",
  stepBigNumber: "absolute -right-4 -top-6 text-9xl font-bold text-white/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500",
  stepIcon: "w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center mb-8 relative z-20 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,94,0,0.2)]",
  stepContent: "relative z-20",
  stepTitle: "text-xl font-bold text-white mb-1",
  stepSubtitle: "text-xs font-mono text-primary mb-4 uppercase tracking-wider",
  stepDesc: "text-muted-foreground text-sm leading-relaxed border-t border-white/5 pt-4",

  // Bottom CTA
  bottomCta: "mt-16 text-center",
  ctaLabel: "text-muted-foreground mb-4",
  ctaLink: "inline-flex items-center gap-2 text-white font-bold border-b border-primary pb-1 hover:text-primary transition-colors",
} as const

// ============================================
// COMPONENT
// ============================================

interface ProcessSectionProps {
  content: ProcessContent
  className?: string
}

export function ProcessSection({ content, className }: ProcessSectionProps) {
  const {
    tagline,
    title,
    titleAccent,
    steps,
    bottomCta,
  } = content

  const patternStyle = {
    backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }

  const getIcon = (iconName?: string) => {
    if (!iconName) return FileText
    return iconMap[iconName] || FileText
  }

  return (
    <section id="jak-pracujemy" className={cn(baseStyles.section, className)}>
      {/* Grid Pattern */}
      <div className={baseStyles.pattern} style={patternStyle} />
      <div className={baseStyles.topLine} />

      <div className={baseStyles.container}>
        {/* Header */}
        <div className={baseStyles.header}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {tagline && <span className={baseStyles.tagline}>{tagline}</span>}
            <h2 className={baseStyles.title}>
              {title}{' '}
              {titleAccent && <span className={baseStyles.titleAccent}>{titleAccent}</span>}
            </h2>
          </motion.div>
        </div>

        {/* Steps */}
        <div className={baseStyles.stepsGrid}>
          <div className={baseStyles.connectingLine} />

          {steps.map((step, index) => {
            const Icon = getIcon(step.icon)

            return (
              <motion.div
                key={index}
                className={baseStyles.stepCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className={baseStyles.stepAccent} />
                <div className={baseStyles.stepInner}>
                  <div className={baseStyles.stepBigNumber}>{step.number}</div>
                  <div className={baseStyles.stepIcon}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className={baseStyles.stepContent}>
                    <h3 className={baseStyles.stepTitle}>{step.title}</h3>
                    {step.subtitle && (
                      <div className={baseStyles.stepSubtitle}>{step.subtitle}</div>
                    )}
                    <p className={baseStyles.stepDesc}>{step.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        {bottomCta && (
          <div className={baseStyles.bottomCta}>
            {bottomCta.label && <p className={baseStyles.ctaLabel}>{bottomCta.label}</p>}
            <a href={bottomCta.href} className={baseStyles.ctaLink}>
              {bottomCta.text} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
