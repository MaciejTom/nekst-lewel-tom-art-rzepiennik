"use client"

import { motion } from "framer-motion"
import { FileText, MessageSquare, HardHat, ClipboardCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Zapytanie i wycena",
    subtitle: "Wycena w 24h",
    description: "Wyślij projekt lub zadzwoń. Wycenę przygotujemy w 24h. Określamy zakres, harmonogram, warunki współpracy."
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Ustalenie szczegółów",
    subtitle: "Spotkanie",
    description: "Spotkanie na budowie lub online. Omawiamy dokumentację, dostęp do placu, koordynację z innymi ekipami."
  },
  {
    number: "03",
    icon: HardHat,
    title: "Realizacja",
    subtitle: "Własny zespół",
    description: "Wchodzimy zgodnie z harmonogramem. Własny zespół, własny sprzęt szalunkowy. Raportujemy postępy, reagujemy na zmiany projektowe."
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Odbiór",
    subtitle: "Gwarancja",
    description: "Wspólny odbiór robót, protokół, dokumentacja powykonawcza. Gwarancja na wykonane prace."
  }
]

export function ProcessSection() {
  return (
    <section id="jak-pracujemy" className="bg-background py-24 relative overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              / PROCES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              JAK WYGLĄDA <span className="text-muted-foreground">WSPÓŁPRACA</span>
            </h2>
          </motion.div>
        </div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-border z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
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
                  <step.icon className="w-5 h-5" />
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
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Masz gotowy projekt?</p>
          <a href="#kontakt" className="inline-flex items-center gap-2 text-white font-bold border-b border-primary pb-1 hover:text-primary transition-colors">
            Zamów wycenę teraz <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  )
}
