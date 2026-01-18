"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { getWhyUsConfig, type WhyUsConfig, type WhyUsItem } from "@/lib/config"
import { SectionWrapper } from "./SectionWrapper"
import { SectionHeader } from "./SectionHeader"

/**
 * WhyUs Section - config-driven
 *
 * Warianty:
 * - 4-column-icons: 4 karty z ikonami w siatce
 * - 3-column-cards: 3 większe karty z większymi opisami
 * - 2-column-split: Header po lewej, karty po prawej (bento grid)
 */
export function WhyUs() {
  const config = getWhyUsConfig()

  switch (config.variant) {
    case '3-column-cards':
      return <WhyUs3ColumnCards config={config} />
    case '2-column-split':
      return <WhyUs2ColumnSplit config={config} />
    case '4-column-icons':
    default:
      return <WhyUs4ColumnIcons config={config} />
  }
}

// ============ VARIANTS ============

interface WhyUsVariantProps {
  config: WhyUsConfig
}

/**
 * Wariant: 4-column-icons
 * Standardowy grid 4 kolumn z ikonami na górze
 */
function WhyUs4ColumnIcons({ config }: WhyUsVariantProps) {
  return (
    <SectionWrapper id="dlaczego-my" showGrid>
      <SectionHeader
        label={config.sectionLabel || undefined}
        title={config.title}
        titleAccent={config.titleAccent}
        subtitle={config.subtitle}
        centered
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {config.items.map((item, index) => (
          <WhyUsIconCard key={index} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: 3-column-cards
 * 3 większe karty z rozbudowanymi opisami
 */
function WhyUs3ColumnCards({ config }: WhyUsVariantProps) {
  return (
    <SectionWrapper id="dlaczego-my" showGrid>
      <SectionHeader
        label={config.sectionLabel || undefined}
        title={config.title}
        titleAccent={config.titleAccent}
        subtitle={config.subtitle}
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {config.items.slice(0, 3).map((item, index) => (
          <WhyUsLargeCard key={index} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: 2-column-split
 * Header po lewej, bento grid po prawej (jak oryginalne WhyUs)
 */
function WhyUs2ColumnSplit({ config }: WhyUsVariantProps) {
  return (
    <SectionWrapper id="dlaczego-my">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Header Area - Left */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {config.title} <br />
              {config.titleAccent && (
                <span className="text-primary">{config.titleAccent}</span>
              )}
            </h2>
            {config.subtitle && (
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {config.subtitle}
              </p>
            )}
            <div className="h-1 w-20 bg-primary mb-8" />

            <div className="hidden lg:block text-sm text-muted-foreground font-mono">
              <p>STATUS: DOSTĘPNI</p>
              <p>LOKALIZACJA: TARNÓW</p>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid - Right */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {config.items.map((item, index) => (
            <WhyUsBentoCard
              key={index}
              item={item}
              index={index}
              colSpan={index === 0 || index === 3 ? 2 : 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

// ============ SHARED COMPONENTS ============

interface WhyUsCardProps {
  item: WhyUsItem
  index: number
}

/**
 * Karta z ikoną dla wariantu 4-column-icons
 */
function WhyUsIconCard({ item, index }: WhyUsCardProps) {
  return (
    <motion.div
      className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon */}
      <div className="w-16 h-16 mb-6 relative">
        {item.icon.startsWith('/') ? (
          <Image
            src={item.icon}
            alt={item.title}
            fill
            className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="w-full h-full bg-primary/10 rounded-sm flex items-center justify-center">
            <span className="text-primary text-2xl">{item.icon}</span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-lg text-white mb-3 group-hover:text-primary transition-colors tracking-wide">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {item.description}
      </p>

      {/* Hover accent line */}
      <div className="h-0.5 w-0 bg-primary mt-6 group-hover:w-12 transition-all duration-300" />
    </motion.div>
  )
}

/**
 * Większa karta dla wariantu 3-column-cards
 */
function WhyUsLargeCard({ item, index }: WhyUsCardProps) {
  return (
    <motion.div
      className="group bg-card border border-border p-10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-20 h-20 mb-8 relative">
          {item.icon.startsWith('/') ? (
            <Image
              src={item.icon}
              alt={item.title}
              fill
              className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
          ) : (
            <div className="w-full h-full bg-primary/10 rounded-sm flex items-center justify-center">
              <span className="text-primary text-3xl">{item.icon}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl text-white mb-4 group-hover:text-primary transition-colors tracking-wide">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

/**
 * Karta bento dla wariantu 2-column-split
 */
function WhyUsBentoCard({ item, index, colSpan }: WhyUsCardProps & { colSpan: number }) {
  const bgClass = index % 2 === 0 ? 'bg-card' : 'bg-secondary/10'

  return (
    <motion.div
      className={`${colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'} ${bgClass} group relative overflow-hidden border border-border hover:border-primary/50 transition-colors p-6 flex flex-col justify-between`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon */}
      <div className="w-10 h-10 mb-4 relative">
        {item.icon.startsWith('/') ? (
          <Image
            src={item.icon}
            alt={item.title}
            fill
            className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary">
            <span className="text-2xl">{item.icon}</span>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {item.description}
        </p>
      </div>

      {/* Hover Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

export default WhyUs
