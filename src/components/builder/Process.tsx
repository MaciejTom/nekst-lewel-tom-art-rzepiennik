"use client"

import { motion } from "framer-motion"
import { FileText, MessageSquare, HardHat, ClipboardCheck, type LucideIcon } from "lucide-react"
import { getProcessConfig, type ProcessConfig, type ProcessStep } from "@/lib/config"
import { SectionWrapper } from "./SectionWrapper"
import { SectionHeader } from "./SectionHeader"

// Icon mapping from string to component
const iconMap: Record<string, LucideIcon> = {
  FileText,
  MessageSquare,
  HardHat,
  ClipboardCheck,
}

function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || FileText
}

/**
 * Process Section - config-driven
 *
 * Warianty:
 * - 4-column-timeline: 4 kroki w rzędzie z linią łączącą
 * - vertical-steps: Kroki jeden pod drugim
 * - numbered-list: Prosta lista numerowana
 */
export function Process() {
  const config = getProcessConfig()

  switch (config.variant) {
    case 'vertical-steps':
      return <ProcessVerticalSteps config={config} />
    case 'numbered-list':
      return <ProcessNumberedList config={config} />
    case '4-column-timeline':
    default:
      return <Process4ColumnTimeline config={config} />
  }
}

// ============ VARIANTS ============

interface ProcessVariantProps {
  config: ProcessConfig
}

/**
 * Wariant: 4-column-timeline
 * 4 kroki w rzędzie z linią łączącą na desktopie
 */
function Process4ColumnTimeline({ config }: ProcessVariantProps) {
  return (
    <SectionWrapper id="jak-pracujemy" showGrid>
      {/* Header */}
      <SectionHeader
        label={config.sectionLabel}
        title={config.title}
        titleAccent={config.titleAccent}
        centered
      />

      {/* Steps Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-border z-0" />

        {config.steps.map((step, index) => (
          <ProcessTimelineCard key={index} step={step} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      {config.bottomCta && (
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Masz gotowy projekt?</p>
          <a
            href={config.bottomCta.href}
            className="inline-flex items-center gap-2 text-white font-bold border-b border-primary pb-1 hover:text-primary transition-colors"
          >
            {config.bottomCta.text} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      )}
    </SectionWrapper>
  )
}

/**
 * Wariant: vertical-steps
 * Kroki jeden pod drugim z linią pionową
 */
function ProcessVerticalSteps({ config }: ProcessVariantProps) {
  return (
    <SectionWrapper id="jak-pracujemy" showGrid>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Header */}
        <div>
          <SectionHeader
            label={config.sectionLabel}
            title={config.title}
            titleAccent={config.titleAccent}
          />

          {config.bottomCta && (
            <div className="mt-8">
              <a
                href={config.bottomCta.href}
                className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 font-bold hover:bg-primary/90 transition-colors"
              >
                {config.bottomCta.text} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          )}
        </div>

        {/* Right: Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {config.steps.map((step, index) => {
              const Icon = getIcon(step.icon)
              return (
                <motion.div
                  key={index}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  {/* Icon marker */}
                  <div className="absolute left-0 w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center z-10">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="bg-card border border-border p-6 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-mono text-sm">{step.number}</span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <div className="text-xs font-mono text-primary mb-3 uppercase tracking-wider">
                      {step.subtitle}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: numbered-list
 * Prosta lista numerowana bez kart
 */
function ProcessNumberedList({ config }: ProcessVariantProps) {
  return (
    <SectionWrapper id="jak-pracujemy" showGrid>
      <SectionHeader
        label={config.sectionLabel}
        title={config.title}
        titleAccent={config.titleAccent}
        centered
      />

      <div className="max-w-3xl mx-auto mt-16 space-y-6">
        {config.steps.map((step, index) => {
          const Icon = getIcon(step.icon)
          return (
            <motion.div
              key={index}
              className="flex gap-6 items-start group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Number */}
              <div className="flex-shrink-0 w-16 h-16 bg-card border border-border flex items-center justify-center text-2xl font-bold text-primary group-hover:border-primary/50 transition-colors">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      {config.bottomCta && (
        <div className="mt-16 text-center">
          <a
            href={config.bottomCta.href}
            className="inline-flex items-center gap-2 text-white font-bold border-b border-primary pb-1 hover:text-primary transition-colors"
          >
            {config.bottomCta.text} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      )}
    </SectionWrapper>
  )
}

// ============ SHARED COMPONENTS ============

interface ProcessCardProps {
  step: ProcessStep
  index: number
}

/**
 * Karta dla wariantu 4-column-timeline
 */
function ProcessTimelineCard({ step, index }: ProcessCardProps) {
  const Icon = getIcon(step.icon)

  return (
    <motion.div
      className="relative z-10 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="bg-card border border-border p-8 h-full hover:border-primary/30 transition-colors duration-300 relative overflow-hidden">
        {/* Background Big Number */}
        <div className="absolute -right-4 -top-6 text-9xl font-bold text-white/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
          {step.number}
        </div>

        {/* Icon Marker */}
        <div className="w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center mb-8 relative z-20 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,94,0,0.2)]">
          <Icon className="w-5 h-5" />
        </div>

        {/* Content */}
        <div className="relative z-20">
          <h3 className="text-xl font-bold text-white mb-1">
            {step.title}
          </h3>
          <div className="text-xs font-mono text-primary mb-4 uppercase tracking-wider">
            {step.subtitle}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed border-t border-white/5 pt-4">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Process
