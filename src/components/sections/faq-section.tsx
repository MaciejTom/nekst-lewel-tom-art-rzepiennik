"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import type { FaqContent } from "@/types"

// ============================================
// STYLES
// ============================================

const baseStyles = {
  section: "bg-background py-24 relative overflow-hidden",
  pattern: "absolute inset-0 opacity-[0.07]",
  container: "container mx-auto px-6 max-w-4xl relative z-10",

  // Header
  title: "text-4xl md:text-5xl font-bold text-white mb-12 text-center",
  titleAccent: "text-primary",

  // Accordion
  accordion: "w-full space-y-4",
  accordionItem: "border border-border bg-card/30 px-6 rounded-sm",
  accordionTrigger: "text-left font-medium text-foreground hover:text-primary hover:no-underline py-6",
  questionNumber: "mr-4 text-primary/50 font-mono text-sm",
  accordionContent: "text-muted-foreground pb-6 pl-10 leading-relaxed",
} as const

// ============================================
// COMPONENT
// ============================================

interface FaqSectionProps {
  content: FaqContent
  className?: string
}

export function FaqSection({ content, className }: FaqSectionProps) {
  const { title, titleAccent, questions } = content

  const patternStyle = {
    backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }

  return (
    <section id="faq" className={cn(baseStyles.section, className)}>
      {/* Grid Pattern */}
      <div className={baseStyles.pattern} style={patternStyle} />

      <div className={baseStyles.container}>
        <h2 className={baseStyles.title}>
          {title}{' '}
          {titleAccent && <span className={baseStyles.titleAccent}>{titleAccent}</span>}
        </h2>

        <Accordion type="single" collapsible className={baseStyles.accordion}>
          {questions.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={baseStyles.accordionItem}
            >
              <AccordionTrigger className={baseStyles.accordionTrigger}>
                <span className={baseStyles.questionNumber}>0{index + 1}</span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={baseStyles.accordionContent}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
