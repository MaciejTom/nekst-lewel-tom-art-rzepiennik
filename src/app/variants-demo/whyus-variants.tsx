"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const whyUsConfig = {
  title: "DLACZEGO ZLECIĆ NAM",
  titleAccent: "ROBOTY ŻELBETOWE",
  subtitle: "Specjalizujemy się w konstrukcjach żelbetowych od fundamentów po stropy.",
  items: [
    { icon: "/iconFirst-removebg-preview.png", title: "PEŁEN ZAKRES ROBÓT", description: "Fundamenty, ściany nośne, stropy monolityczne, zbiorniki." },
    { icon: "/iconCrew.png", title: "WŁASNY ZESPÓŁ", description: "Wykwalifikowani zbrojarze, cieśle szalunkowi, murarze." },
    { icon: "/iconPol-removebg-preview.png", title: "ZASIĘG 4 WOJEWÓDZTW", description: "Małopolskie, Podkarpackie, Śląskie, Świętokrzyskie." },
    { icon: "/iconRegion-removebg-preview.png", title: "WYCENA W 24H", description: "Wyślij projekt - wycenę otrzymasz w ciągu jednego dnia." },
  ],
}

export function WhyUsVariantsDemo() {
  return (
    <div className="space-y-8">
      <VariantSection title="Wariant: 4-column-icons" variant="4-column-icons">
        <WhyUs4ColumnIcons />
      </VariantSection>

      <VariantSection title="Wariant: 3-column-cards" variant="3-column-cards">
        <WhyUs3ColumnCards />
      </VariantSection>

      <VariantSection title="Wariant: 2-column-split" variant="2-column-split">
        <WhyUs2ColumnSplit />
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

function WhyUs4ColumnIcons() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {whyUsConfig.title} <span className="text-primary">{whyUsConfig.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{whyUsConfig.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsConfig.items.map((item, index) => (
            <div key={index} className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 mb-6 relative">
                <Image src={item.icon} alt={item.title} fill className="object-contain filter brightness-0 invert opacity-80" />
              </div>
              <h3 className="font-display text-lg text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div className="h-0.5 w-0 bg-primary mt-6 group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs3ColumnCards() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {whyUsConfig.title} <span className="text-primary">{whyUsConfig.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{whyUsConfig.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUsConfig.items.slice(0, 3).map((item, index) => (
            <div key={index} className="group bg-card border border-border p-10 hover:border-primary/50 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-20 h-20 mb-8 relative">
                  <Image src={item.icon} alt={item.title} fill className="object-contain filter brightness-0 invert opacity-80" />
                </div>
                <h3 className="font-display text-xl text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs2ColumnSplit() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Header - Left */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {whyUsConfig.title} <br />
              <span className="text-primary">{whyUsConfig.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">{whyUsConfig.subtitle}</p>
            <div className="h-1 w-20 bg-primary mb-8" />
            <div className="text-sm text-muted-foreground font-mono">
              <p>STATUS: DOSTĘPNI</p>
              <p>LOKALIZACJA: TARNÓW</p>
            </div>
          </div>

          {/* Bento Grid - Right */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
            {whyUsConfig.items.map((item, index) => {
              const colSpan = index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
              const bgClass = index % 2 === 0 ? "bg-card" : "bg-secondary/10"
              return (
                <div
                  key={index}
                  className={`${colSpan} ${bgClass} group border border-border hover:border-primary/50 transition-colors p-6 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="w-10 h-10 mb-4 relative">
                    <Image src={item.icon} alt={item.title} fill className="object-contain filter brightness-0 invert opacity-80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
