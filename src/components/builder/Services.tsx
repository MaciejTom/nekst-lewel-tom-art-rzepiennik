"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Cuboid,
  Blocks,
  Layers3,
  Cylinder,
  Check,
  ArrowRight,
  ChevronDown,
  type LucideIcon
} from "lucide-react"
import { getServicesConfig, type ServicesConfig, type ServiceItem } from "@/lib/config"
import { SectionWrapper } from "./SectionWrapper"
import { SectionHeader } from "./SectionHeader"

// Icon mapping from string to component
const iconMap: Record<string, LucideIcon> = {
  Cuboid,
  Blocks,
  Layers3,
  Cylinder,
}

function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Cuboid
}

/**
 * Services Section - config-driven
 *
 * Warianty:
 * - tabs-with-image: Lista zakładek po lewej, obraz po prawej
 * - cards-grid: Grid kart z ikonami
 * - accordion: Accordion z rozwijalnymi opisami
 */
export function Services() {
  const config = getServicesConfig()

  switch (config.variant) {
    case 'cards-grid':
      return <ServicesCardsGrid config={config} />
    case 'accordion':
      return <ServicesAccordion config={config} />
    case 'tabs-with-image':
    default:
      return <ServicesTabsWithImage config={config} />
  }
}

// ============ VARIANTS ============

interface ServicesVariantProps {
  config: ServicesConfig
}

/**
 * Wariant: tabs-with-image
 * Lista zakładek po lewej, obraz z opisem po prawej
 */
function ServicesTabsWithImage({ config }: ServicesVariantProps) {
  const [activeService, setActiveService] = useState(config.items[0]?.id || '')

  return (
    <SectionWrapper id="uslugi" showGrid>
      <SectionHeader
        label={config.sectionLabel}
        title={config.title}
        titleAccent={config.titleAccent}
        subtitle={config.subtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[600px] h-auto mt-16">
        {/* Left Column: Navigation List */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <div className="flex flex-col h-full bg-card border border-border">
            {config.items.map((service) => {
              const Icon = getIcon(service.icon)
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`
                    group relative w-full text-left outline-none flex flex-col justify-center
                    flex-1 px-8 py-6 border-b lg:border-b-0 lg:border-l-4 transition-all duration-300
                    ${activeService === service.id
                      ? "border-primary bg-foreground/5"
                      : "border-transparent border-b-border hover:bg-foreground/[0.02]"
                    }
                  `}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`
                      text-lg lg:text-xl font-bold transition-colors
                      ${activeService === service.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}
                    `}>
                      {service.title}
                    </span>

                    {activeService === service.id && (
                      <ArrowRight className="text-primary w-5 h-5 lg:w-6 lg:h-6 animate-in slide-in-from-left-2" />
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 opacity-70">
                    {service.shortDesc}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Visual Display */}
        <div className="lg:col-span-8 relative min-h-[500px] lg:h-full bg-card border border-border overflow-hidden group">
          <AnimatePresence mode="wait">
            {config.items.map((service) => {
              const Icon = getIcon(service.icon)
              return (
                service.id === activeService && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col justify-end"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary text-primary-foreground rounded-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground/90">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: cards-grid
 * Grid kart z ikonami i krótkim opisem
 */
function ServicesCardsGrid({ config }: ServicesVariantProps) {
  return (
    <SectionWrapper id="uslugi" showGrid>
      <SectionHeader
        label={config.sectionLabel}
        title={config.title}
        titleAccent={config.titleAccent}
        subtitle={config.subtitle}
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {config.items.map((service, index) => {
          const Icon = getIcon(service.icon)
          return (
            <motion.div
              key={service.id}
              className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-sm mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors tracking-wide">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {service.shortDesc}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: accordion
 * Accordion z rozwijalnymi opisami
 */
function ServicesAccordion({ config }: ServicesVariantProps) {
  const [openItem, setOpenItem] = useState<string | null>(config.items[0]?.id || null)

  return (
    <SectionWrapper id="uslugi" showGrid>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Header */}
        <div>
          <SectionHeader
            label={config.sectionLabel}
            title={config.title}
            titleAccent={config.titleAccent}
            subtitle={config.subtitle}
          />
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4">
          {config.items.map((service, index) => {
            const Icon = getIcon(service.icon)
            const isOpen = openItem === service.id

            return (
              <motion.div
                key={service.id}
                className="border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenItem(isOpen ? null : service.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-sm transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground mb-4">
                          {service.fullDesc}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Services
