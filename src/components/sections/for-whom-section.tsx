"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Building2, Factory, Home, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ForWhomContent } from "@/types"

// ============================================
// ICON MAP
// ============================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  factory: Factory,
  users: Users,
  home: Home,
}

// ============================================
// STYLES
// ============================================

const baseStyles = {
  section: "bg-black py-24 relative overflow-hidden",
  container: "container mx-auto px-6",

  // Header
  header: "flex items-end justify-between mb-12 border-b border-border pb-8",
  headerLeft: "",
  headerBadge: "flex items-center gap-2 mb-4",
  headerDot: "w-2 h-2 bg-primary animate-pulse",
  tagline: "text-primary font-mono text-sm tracking-widest uppercase",
  title: "text-4xl md:text-5xl font-bold text-white tracking-tight",
  titleAccent: "text-muted-foreground",
  headerRight: "hidden md:block text-right",
  availabilityLabel: "text-sm text-muted-foreground font-mono",
  availabilityValue: "text-primary font-bold",

  // Grid
  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",

  // Card
  card: "group relative h-[420px] overflow-hidden cursor-pointer",
  cardImage: "absolute inset-0",
  cardImageInner: "object-cover transition-transform duration-500 group-hover:scale-105",
  cardGradient: "absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20",
  cardPattern: "absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]",
  cardBorder: "absolute inset-0 border border-border group-hover:border-primary/30 transition-colors duration-300",

  // Corner accents
  cornerTL: "absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10",
  cornerTR: "absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10",
  cornerBL: "absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10",
  cornerBR: "absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10",

  // Icon badge
  iconBadge: "absolute top-6 left-6 z-[15] bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/40 group-hover:bg-primary/30 group-hover:border-primary/60 transition-all duration-300",
  iconInner: "text-primary w-6 h-6",

  // Content
  content: "absolute inset-0 p-6 flex flex-col justify-between z-10",
  contentTop: "flex justify-end",
  arrowBtn: "bg-black/60 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0",
  arrowIcon: "text-primary w-5 h-5",
  contentBottom: "",
  cardTitle: "text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300",
  descWrapper: "overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100",
  cardDesc: "text-muted-foreground text-sm leading-relaxed mb-3",
  tagsWrapper: "flex flex-wrap gap-2",
  tag: "text-[10px] uppercase tracking-wider text-primary border border-primary/20 px-2 py-1 bg-primary/10 backdrop-blur-sm",
} as const

// ============================================
// COMPONENT
// ============================================

interface ForWhomSectionProps {
  content: ForWhomContent
  className?: string
}

export function ForWhomSection({ content, className }: ForWhomSectionProps) {
  const {
    tagline,
    title,
    titleAccent,
    availabilityLabel,
    availabilityValue,
    items,
  } = content

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Building2
  }

  return (
    <section id="dla-kogo" className={cn(baseStyles.section, className)}>
      <div className={baseStyles.container}>
        {/* Header */}
        <div className={baseStyles.header}>
          <div className={baseStyles.headerLeft}>
            <div className={baseStyles.headerBadge}>
              <div className={baseStyles.headerDot} />
              {tagline && <span className={baseStyles.tagline}>{tagline}</span>}
            </div>
            <h2 className={baseStyles.title}>
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className={baseStyles.titleAccent}>{titleAccent}</span>
                </>
              )}
            </h2>
          </div>
          {availabilityLabel && availabilityValue && (
            <div className={baseStyles.headerRight}>
              <div className={baseStyles.availabilityLabel}>{availabilityLabel}</div>
              <div className={baseStyles.availabilityValue}>{availabilityValue}</div>
            </div>
          )}
        </div>

        {/* Grid */}
        <div className={baseStyles.grid}>
          {items.map((item, index) => {
            const Icon = getIcon(item.icon)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={baseStyles.card}
              >
                {/* Background Image */}
                {item.image && (
                  <div className={baseStyles.cardImage}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={baseStyles.cardImageInner}
                    />
                    <div className={baseStyles.cardGradient} />
                    <div className={baseStyles.cardPattern} />
                  </div>
                )}

                {/* Corner Accents */}
                <div className={baseStyles.cornerTL} />
                <div className={baseStyles.cornerTR} />
                <div className={baseStyles.cornerBL} />
                <div className={baseStyles.cornerBR} />

                {/* Icon Badge */}
                <div className={baseStyles.iconBadge}>
                  <Icon className={baseStyles.iconInner} />
                </div>

                {/* Content */}
                <div className={baseStyles.content}>
                  <div className={baseStyles.contentTop}>
                    <div className={baseStyles.arrowBtn}>
                      <ArrowUpRight className={baseStyles.arrowIcon} />
                    </div>
                  </div>

                  <div className={baseStyles.contentBottom}>
                    <h3 className={baseStyles.cardTitle}>{item.title}</h3>
                    <div className={baseStyles.descWrapper}>
                      <p className={baseStyles.cardDesc}>{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <div className={baseStyles.tagsWrapper}>
                          {item.tags.map((tag) => (
                            <span key={tag} className={baseStyles.tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Border */}
                <div className={baseStyles.cardBorder} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
