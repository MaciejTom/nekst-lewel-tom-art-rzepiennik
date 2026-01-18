"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Cuboid, Blocks, Layers3, Check, ArrowRight, ChevronDown } from "lucide-react"

const servicesConfig = {
  sectionLabel: "/ USŁUGI",
  title: "ZAKRES",
  titleAccent: "ROBÓT ŻELBETOWYCH",
  subtitle: "Wykonujemy konstrukcje żelbetowe dla budownictwa przemysłowego i mieszkaniowego.",
  items: [
    {
      id: "fundamenty",
      icon: Cuboid,
      title: "Fundamenty",
      shortDesc: "Pod każdy obiekt budowlany.",
      fullDesc: "Ławy fundamentowe, płyty fundamentowe, stopy. Pod hale magazynowe, budynki mieszkalne.",
      image: "/s-real-walls.jpg",
      features: ["Ławy i stopy", "Płyty fundamentowe", "Fundamenty pod maszyny"],
    },
    {
      id: "sciany",
      icon: Blocks,
      title: "Ściany żelbetowe",
      shortDesc: "Nośne i mury oporowe.",
      fullDesc: "Ściany żelbetowe o dowolnym formacie - nośne, osłonowe, oporowe.",
      image: "/s-real-foundations.jpg",
      features: ["Ściany nośne", "Mury oporowe", "Ściany piwnic"],
    },
    {
      id: "stropy",
      icon: Layers3,
      title: "Stropy",
      shortDesc: "Monolityczne i prefabrykowane.",
      fullDesc: "Stropy żelbetowe monolityczne, gęstożebrowe, z elementów prefabrykowanych.",
      image: "/s-real-ceilings.png",
      features: ["Stropy monolityczne", "Stropy gęstożebrowe", "Belki i podciągi"],
    },
  ],
}

export function ServicesVariantsDemo() {
  return (
    <div className="space-y-8">
      <VariantSection title="Wariant: tabs-with-image" variant="tabs-with-image">
        <ServicesTabsWithImage />
      </VariantSection>

      <VariantSection title="Wariant: cards-grid" variant="cards-grid">
        <ServicesCardsGrid />
      </VariantSection>

      <VariantSection title="Wariant: accordion" variant="accordion">
        <ServicesAccordion />
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

function ServicesTabsWithImage() {
  const [activeService, setActiveService] = useState(servicesConfig.items[0].id)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">{servicesConfig.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {servicesConfig.title} <span className="text-primary">{servicesConfig.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">{servicesConfig.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[500px]">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-col bg-card border border-border">
            {servicesConfig.items.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`group w-full text-left flex-1 px-8 py-6 border-l-4 transition-all ${
                  activeService === service.id ? "border-primary bg-white/5" : "border-transparent hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-lg font-bold ${activeService === service.id ? "text-white" : "text-muted-foreground"}`}>
                    {service.title}
                  </span>
                  {activeService === service.id && <ArrowRight className="text-primary w-5 h-5" />}
                </div>
                <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8 relative bg-card border border-border overflow-hidden">
            <AnimatePresence mode="wait">
              {servicesConfig.items.map(
                (service) =>
                  service.id === activeService && (
                    <motion.div key={service.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col justify-end">
                      <div className="absolute inset-0">
                        <Image src={service.image} alt={service.title} fill className="object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      </div>
                      <div className="relative z-10 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-primary text-black rounded-sm">
                            <service.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-6">{service.fullDesc}</p>
                        <div className="flex flex-wrap gap-4">
                          {service.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                              <Check className="w-4 h-4 text-primary" /> {f}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesCardsGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">{servicesConfig.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {servicesConfig.title} <span className="text-primary">{servicesConfig.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{servicesConfig.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesConfig.items.map((service, index) => (
            <div key={service.id} className="group bg-card border border-border p-8 hover:border-primary/50 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-sm mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.shortDesc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(servicesConfig.items[0].id)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Header */}
          <div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">{servicesConfig.sectionLabel}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {servicesConfig.title} <span className="text-primary">{servicesConfig.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{servicesConfig.subtitle}</p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {servicesConfig.items.map((service) => {
              const isOpen = openItem === service.id
              return (
                <div key={service.id} className="border border-border bg-card">
                  <button onClick={() => setOpenItem(isOpen ? null : service.id)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-sm transition-colors ${isOpen ? "bg-primary text-black" : "bg-primary/10 text-primary"}`}>
                        <service.icon className="w-5 h-5" />
                      </div>
                      <span className={`font-bold text-lg ${isOpen ? "text-primary" : "text-white"}`}>{service.title}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-6 pb-6">
                          <p className="text-muted-foreground mb-4">{service.fullDesc}</p>
                          <ul className="grid grid-cols-2 gap-2">
                            {service.features.map((f, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                                <Check className="w-4 h-4 text-primary" /> {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
