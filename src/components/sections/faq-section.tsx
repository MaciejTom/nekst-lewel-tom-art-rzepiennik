"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Czy pracujecie jako podwykonawca dla generalnych wykonawców?",
    answer: "Tak, większość naszych zleceń to współpraca z generalnymi wykonawcami. Wchodzimy w harmonogram, raportujemy postępy, dowozimy terminowo."
  },
  {
    question: "Jaki jest Wasz zasięg działania?",
    answer: "Działamy w 4 województwach: Małopolskie, Podkarpackie, Śląskie, Świętokrzyskie. Siedziba w Tarnowie, dojeżdżamy na budowy w całym regionie."
  },
  {
    question: "Jak szybko możecie wejść na budowę?",
    answer: "Zależy od aktualnego obłożenia. Wycenę przygotujemy w 24h, termin wejścia ustalamy indywidualnie. Przy pilnych zleceniach staramy się reagować elastycznie."
  },
  {
    question: "Czy macie własny sprzęt?",
    answer: "Tak, dysponujemy szalunkami systemowymi i podstawowym sprzętem. Przy większych realizacjach współpracujemy z wypożyczalniami sprzętu."
  },
  {
    question: "Firma działa od 2023 - czy macie doświadczenie?",
    answer: "Firma jest zarejestrowana od 2023 roku, ale właściciele mają wieloletnie doświadczenie w branży budowlanej. Pracowaliśmy przy konstrukcjach żelbetowych przez wiele lat przed założeniem własnej działalności."
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-24 relative overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          NAJCZĘŚCIEJ ZADAWANE <span className="text-primary">PYTANIA</span>
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border bg-card/30 px-6 rounded-sm">
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-6">
                <span className="mr-4 text-primary/50 font-mono text-sm">0{index + 1}</span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pl-10 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}