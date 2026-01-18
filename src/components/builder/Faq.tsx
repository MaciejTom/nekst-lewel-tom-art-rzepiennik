"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getFaqConfig, type FaqConfig, type FaqQuestion } from "@/lib/config"
import { SectionWrapper } from "./SectionWrapper"
import { SectionHeader } from "./SectionHeader"

/**
 * FAQ Section - config-driven
 *
 * Warianty:
 * - accordion-centered: Wycentrowany accordion (jak oryginał)
 * - accordion-split: Header po lewej, accordion po prawej
 * - grid: Grid kart z pytaniami
 */
export function Faq() {
  const config = getFaqConfig()

  switch (config.variant) {
    case 'accordion-split':
      return <FaqAccordionSplit config={config} />
    case 'grid':
      return <FaqGrid config={config} />
    case 'accordion-centered':
    default:
      return <FaqAccordionCentered config={config} />
  }
}

// ============ VARIANTS ============

interface FaqVariantProps {
  config: FaqConfig
}

/**
 * Wariant: accordion-centered
 * Wycentrowany accordion
 */
function FaqAccordionCentered({ config }: FaqVariantProps) {
  return (
    <SectionWrapper id="faq" showGrid>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          {config.title}{" "}
          {config.titleAccent && (
            <span className="text-primary">{config.titleAccent}</span>
          )}
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {config.questions.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border bg-card/30 px-6 rounded-sm"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-6">
                <span className="mr-4 text-primary/50 font-mono text-sm">
                  0{index + 1}
                </span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pl-10 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: accordion-split
 * Header po lewej, accordion po prawej
 */
function FaqAccordionSplit({ config }: FaqVariantProps) {
  return (
    <SectionWrapper id="faq" showGrid>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Header */}
        <div>
          <SectionHeader
            title={config.title}
            titleAccent={config.titleAccent}
          />
          <p className="text-muted-foreground mt-4">
            Nie znalazłeś odpowiedzi na swoje pytanie? Skontaktuj się z nami bezpośrednio.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:text-primary/80 transition-colors"
          >
            Zadaj pytanie <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Right: Accordion */}
        <div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {config.questions.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border bg-card px-6 rounded-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: grid
 * Grid kart z pytaniami
 */
function FaqGrid({ config }: FaqVariantProps) {
  return (
    <SectionWrapper id="faq" showGrid>
      <SectionHeader
        title={config.title}
        titleAccent={config.titleAccent}
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {config.questions.map((faq, index) => (
          <FaqCard key={index} faq={faq} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}

// ============ SHARED COMPONENTS ============

interface FaqCardProps {
  faq: FaqQuestion
  index: number
}

/**
 * Karta FAQ dla wariantu grid
 */
function FaqCard({ faq, index }: FaqCardProps) {
  return (
    <motion.div
      className="group bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Number */}
      <div className="text-primary/30 font-mono text-sm mb-4">
        0{index + 1}
      </div>

      {/* Question */}
      <h3 className="text-foreground font-bold mb-4 group-hover:text-primary transition-colors">
        {faq.question}
      </h3>

      {/* Answer */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {faq.answer}
      </p>
    </motion.div>
  )
}

export default Faq
