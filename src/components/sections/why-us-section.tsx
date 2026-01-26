"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import type { WhyUsContent } from "@/types"

// ============================================
// DEFAULTS
// ============================================

const defaults = {
  layoutVariant: 'auto' as const,
  showPattern: true,
}

// ============================================
// STYLES
// ============================================

const baseStyles = {
  section: "bg-background py-24 relative overflow-hidden",
  pattern: "absolute inset-0 z-0 opacity-[0.1]",
  container: "container mx-auto px-6 relative z-10",

  // Header
  header: "text-center mb-20 max-w-3xl mx-auto",
  title: "text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight font-display uppercase",
  titleAccent: "text-primary border-b-4 border-primary pb-2",
  subtitle: "text-muted-foreground text-lg leading-relaxed",

  // Grid variants
  gridVariants: {
    'grid-3': "grid grid-cols-1 md:grid-cols-3 gap-8",
    'grid-4': "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
    'grid-6': "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    'cards': "grid grid-cols-1 md:grid-cols-2 gap-6",
  },

  // Special layout for 5 items (3 top, 2 bottom centered)
  grid5Wrapper: "flex flex-col gap-8",
  grid5TopRow: "grid grid-cols-1 md:grid-cols-3 gap-8",
  grid5BottomRow: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[66%] mx-auto",

  // Item
  item: "group relative p-4 transition-all duration-300 flex flex-col items-center text-center",

  // Image container
  imageWrapper: "relative w-64 h-64 mb-6 flex items-center justify-center",
  imageGlow: "absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  imageContainer: "relative w-56 h-56 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2",

  // Text
  itemTitle: "text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors uppercase",
  itemDescription: "text-muted-foreground text-sm leading-relaxed",

  // Decoration
  cornerDot: "absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
} as const

// ============================================
// COMPONENT
// ============================================

interface WhyUsSectionProps {
  content: WhyUsContent
  className?: string
}

export function WhyUsSection({ content, className }: WhyUsSectionProps) {
  const {
    title,
    titleAccent,
    subtitle,
    items,
    layoutVariant = defaults.layoutVariant,
    showPattern = defaults.showPattern,
  } = content

  const patternStyle = {
    backgroundImage: "linear-gradient(hsl(var(--muted)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--muted)) 1px, transparent 1px)",
    backgroundSize: '40px 40px'
  }

  // Determine grid layout based on item count or explicit variant
  const getGridClass = () => {
    if (layoutVariant !== 'auto') {
      return baseStyles.gridVariants[layoutVariant]
    }

    // Auto layout based on item count
    switch (items.length) {
      case 2:
        return baseStyles.gridVariants['cards']
      case 3:
        return baseStyles.gridVariants['grid-3']
      case 4:
        return baseStyles.gridVariants['grid-4']
      case 6:
        return baseStyles.gridVariants['grid-6']
      default:
        // 5 or other - handled separately
        return baseStyles.gridVariants['grid-3']
    }
  }

  // Check if we need special 5-item layout
  const use5ItemLayout = layoutVariant === 'auto' && items.length === 5

  // Render single item
  const renderItem = (item: typeof items[0], index: number) => (
    <div key={index} className={baseStyles.item}>
      {item.image && (
        <div className={baseStyles.imageWrapper}>
          <div className={baseStyles.imageGlow} />
          <div className={baseStyles.imageContainer}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      )}

      <h3 className={baseStyles.itemTitle}>{item.title}</h3>
      <p className={baseStyles.itemDescription}>{item.description}</p>

      <div className={baseStyles.cornerDot} />
    </div>
  )

  return (
    <section id="dlaczego-my" className={cn(baseStyles.section, className)}>
      {showPattern && (
        <div className={baseStyles.pattern} style={patternStyle} />
      )}

      <div className={baseStyles.container}>
        <div className={baseStyles.header}>
          <h2 className={baseStyles.title}>
            {title}
            {titleAccent && (
              <>
                <br />
                <span className={baseStyles.titleAccent}>{titleAccent}</span>
              </>
            )}
          </h2>
          {subtitle && (
            <p className={baseStyles.subtitle}>{subtitle}</p>
          )}
        </div>

        {use5ItemLayout ? (
          // Special 5-item layout: 3 on top, 2 centered below
          <div className={baseStyles.grid5Wrapper}>
            <div className={baseStyles.grid5TopRow}>
              {items.slice(0, 3).map((item, index) => renderItem(item, index))}
            </div>
            <div className={baseStyles.grid5BottomRow}>
              {items.slice(3, 5).map((item, index) => renderItem(item, index + 3))}
            </div>
          </div>
        ) : (
          // Standard grid layout
          <div className={getGridClass()}>
            {items.map((item, index) => renderItem(item, index))}
          </div>
        )}
      </div>
    </section>
  )
}
