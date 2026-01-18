"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqConfig = {
  title: "NAJCZĘŚCIEJ ZADAWANE",
  titleAccent: "PYTANIA",
  questions: [
    { question: "Czy pracujecie jako podwykonawca?", answer: "Tak, większość naszych zleceń to współpraca z generalnymi wykonawcami." },
    { question: "Jaki jest Wasz zasięg działania?", answer: "Działamy w 4 województwach: Małopolskie, Podkarpackie, Śląskie, Świętokrzyskie." },
    { question: "Jak szybko możecie wejść na budowę?", answer: "Wycenę przygotujemy w 24h, termin wejścia ustalamy indywidualnie." },
    { question: "Czy macie własny sprzęt?", answer: "Tak, dysponujemy szalunkami systemowymi i podstawowym sprzętem." },
  ],
}

export function FaqVariantsDemo() {
  return (
    <div className="space-y-8">
      <VariantSection title="Wariant: accordion-centered" variant="accordion-centered">
        <FaqAccordionCentered />
      </VariantSection>

      <VariantSection title="Wariant: accordion-split" variant="accordion-split">
        <FaqAccordionSplit />
      </VariantSection>

      <VariantSection title="Wariant: grid" variant="grid">
        <FaqGrid />
      </VariantSection>
    </div>
  )
}

function VariantSection({ title, variant, children }: { title: string; variant: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border">
      <div className="bg-primary/10 border-b border-primary/30 px-6 py-3">
        <code className="text-primary font-mono text-sm">{title}</code>
        <span className="text-muted-foreground text-xs ml-4">config: {`"variant": "${variant}"`}</span>
      </div>
      {children}
    </div>
  )
}

function FaqAccordionCentered() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {faqConfig.title} <span className="text-primary">{faqConfig.titleAccent}</span>
        </h2>

        <div className="space-y-4">
          {faqConfig.questions.map((faq, index) => (
            <div key={index} className="border border-border bg-card/30 rounded-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center text-left hover:text-primary transition-colors"
              >
                <span className="mr-4 text-primary/50 font-mono text-sm">0{index + 1}</span>
                <span className="flex-1 font-medium text-foreground">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-6 pl-14 text-muted-foreground">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqAccordionSplit() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Header */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {faqConfig.title} <span className="text-primary">{faqConfig.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground">Nie znalazłeś odpowiedzi? Skontaktuj się z nami bezpośrednio.</p>
            <a href="#kontakt" className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:text-primary/80">
              Zadaj pytanie <span>&rarr;</span>
            </a>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqConfig.questions.map((faq, index) => (
              <div key={index} className="border border-border bg-card rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:text-primary transition-colors"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-5 text-muted-foreground">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {faqConfig.title} <span className="text-primary">{faqConfig.titleAccent}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqConfig.questions.map((faq, index) => (
            <div key={index} className="group bg-card border border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-primary/30 font-mono text-sm mb-4">0{index + 1}</div>
              <h3 className="text-white font-bold mb-4 group-hover:text-primary transition-colors">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
