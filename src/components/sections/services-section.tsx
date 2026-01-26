"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cuboid, Blocks, Layers3, Cylinder, Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { ServicesContent } from "@/types"

// ============================================
// ICON MAP
// ============================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  cuboid: Cuboid,
  blocks: Blocks,
  layers: Layers3,
  cylinder: Cylinder,
}

// ============================================
// STYLES
// ============================================

const baseStyles = {
  section: "bg-background py-24 relative overflow-hidden",
  pattern: "absolute inset-0 opacity-[0.07]",
  container: "container mx-auto px-6 relative z-10",

  // Header
  header: "mb-16 max-w-2xl",
  tagline: "text-primary font-mono text-sm tracking-widest uppercase mb-4 block",
  title: "text-4xl md:text-5xl font-bold text-white mb-6",
  titleAccent: "text-primary",
  subtitle: "text-muted-foreground text-lg",

  // Grid
  grid: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[600px] h-auto",

  // Navigation
  navColumn: "lg:col-span-4 flex flex-col h-full",
  navList: "flex flex-col h-full bg-card border border-border",
  navItem: "group relative w-full text-left outline-none flex flex-col justify-center flex-1 px-8 py-6 border-b lg:border-b-0 lg:border-l-4 transition-all duration-300",
  navItemActive: "border-primary bg-white/5",
  navItemInactive: "border-transparent border-b-border hover:bg-white/[0.02]",
  navTitle: "text-lg lg:text-xl font-bold transition-colors",
  navTitleActive: "text-white",
  navTitleInactive: "text-muted-foreground group-hover:text-white",
  navDesc: "text-sm text-muted-foreground line-clamp-2 opacity-70",
  navArrow: "text-primary w-5 h-5 lg:w-6 lg:h-6 animate-in slide-in-from-left-2",

  // Display
  displayColumn: "lg:col-span-8 relative min-h-[500px] lg:h-full bg-card border border-border overflow-hidden group",
  displayContent: "absolute inset-0 flex flex-col justify-end",
  displayImage: "absolute inset-0 z-0",
  displayImageInner: "object-cover opacity-80 transition-transform duration-500 group-hover:scale-105",
  displayGradient: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent",
  displayGradientTop: "absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent",
  displayOverlay: "relative z-10 p-8 md:p-12",
  displayHeader: "flex items-center gap-4 mb-6",
  displayIcon: "p-3 bg-primary text-black rounded-sm",
  displayTitle: "text-3xl md:text-4xl font-bold text-white",
  displayDesc: "text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed",
  displayFeatures: "grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8",
  featureItem: "flex items-center gap-3 text-sm font-medium text-white/90",
  featureIcon: "w-4 h-4 text-primary flex-shrink-0",
} as const

// ============================================
// COMPONENT
// ============================================

interface ServicesSectionProps {
  content: ServicesContent
  className?: string
}

export function ServicesSection({ content, className }: ServicesSectionProps) {
  const {
    tagline,
    title,
    titleAccent,
    subtitle,
    items,
  } = content

  const [activeId, setActiveId] = useState(items[0]?.id)

  const patternStyle = {
    backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName]
    return Icon || Cuboid
  }

  return (
    <section id="uslugi" className={cn(baseStyles.section, className)}>
      {/* Grid Pattern */}
      <div className={baseStyles.pattern} style={patternStyle} />

      <div className={baseStyles.container}>
        {/* Section Header */}
        <div className={baseStyles.header}>
          {tagline && (
            <span className={baseStyles.tagline}>{tagline}</span>
          )}
          <h2 className={baseStyles.title}>
            {title}{' '}
            {titleAccent && <span className={baseStyles.titleAccent}>{titleAccent}</span>}
          </h2>
          {subtitle && (
            <p className={baseStyles.subtitle}>{subtitle}</p>
          )}
        </div>

        <div className={baseStyles.grid}>
          {/* Navigation List */}
          <div className={baseStyles.navColumn}>
            <div className={baseStyles.navList}>
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    baseStyles.navItem,
                    activeId === item.id ? baseStyles.navItemActive : baseStyles.navItemInactive
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={cn(
                      baseStyles.navTitle,
                      activeId === item.id ? baseStyles.navTitleActive : baseStyles.navTitleInactive
                    )}>
                      {item.title}
                    </span>
                    {activeId === item.id && (
                      <ArrowRight className={baseStyles.navArrow} />
                    )}
                  </div>
                  <p className={baseStyles.navDesc}>{item.shortDesc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Visual Display */}
          <div className={baseStyles.displayColumn}>
            <AnimatePresence mode="wait">
              {items.map((item) => {
                if (item.id !== activeId) return null
                const Icon = getIcon(item.icon)

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={baseStyles.displayContent}
                  >
                    {/* Background Image */}
                    {item.image && (
                      <div className={baseStyles.displayImage}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className={baseStyles.displayImageInner}
                        />
                        <div className={baseStyles.displayGradient} />
                        <div className={baseStyles.displayGradientTop} />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className={baseStyles.displayOverlay}>
                      <div className={baseStyles.displayHeader}>
                        <div className={baseStyles.displayIcon}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className={baseStyles.displayTitle}>{item.title}</h3>
                      </div>

                      <p className={baseStyles.displayDesc}>{item.fullDesc}</p>

                      <div className={baseStyles.displayFeatures}>
                        {item.features.map((feature, idx) => (
                          <div key={idx} className={baseStyles.featureItem}>
                            <Check className={baseStyles.featureIcon} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
