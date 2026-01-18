"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Building2, Factory, Home, Users, type LucideIcon } from "lucide-react"
import { getForWhomConfig, type ForWhomConfig, type ForWhomItem } from "@/lib/config"
import { SectionWrapper } from "./SectionWrapper"
import { SectionHeader } from "./SectionHeader"

// Icon mapping from string to component
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Factory,
  Home,
  Users,
}

function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Building2
}

/**
 * ForWhom Section - config-driven
 *
 * Warianty:
 * - 2x2-grid: Grid 2x2 z obrazami i hover efektami
 * - 4-column: 4 karty w rzędzie
 * - carousel: Karuzela na mobile, grid na desktop
 */
export function ForWhom() {
  const config = getForWhomConfig()

  switch (config.variant) {
    case '4-column':
      return <ForWhom4Column config={config} />
    case 'carousel':
      return <ForWhomCarousel config={config} />
    case '2x2-grid':
    default:
      return <ForWhom2x2Grid config={config} />
  }
}

// ============ VARIANTS ============

interface ForWhomVariantProps {
  config: ForWhomConfig
}

/**
 * Wariant: 2x2-grid
 * Grid 2x2 z pełnoekranowymi obrazami i hover efektami
 */
function ForWhom2x2Grid({ config }: ForWhomVariantProps) {
  return (
    <SectionWrapper id="dla-kogo" darkBg>
      {/* Header */}
      <div className="flex items-end justify-between mb-12 border-b border-border pb-8">
        <div>
          {config.sectionLabel && (
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-primary font-mono text-sm tracking-widest uppercase">
                {config.sectionLabel}
              </span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {config.title}<br />
            {config.titleAccent && (
              <span className="text-muted-foreground">{config.titleAccent}</span>
            )}
          </h2>
        </div>
        {config.sideInfo && (
          <div className="hidden md:block text-right">
            <div className="text-sm text-muted-foreground font-mono">{config.sideInfo.label}</div>
            <div className="text-primary font-bold">{config.sideInfo.value}</div>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {config.items.map((item, index) => (
          <ForWhomImageCard key={index} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: 4-column
 * 4 karty w jednym rzędzie
 */
function ForWhom4Column({ config }: ForWhomVariantProps) {
  return (
    <SectionWrapper id="dla-kogo" showGrid>
      <SectionHeader
        label={config.sectionLabel}
        title={config.title}
        titleAccent={config.titleAccent}
        centered
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {config.items.map((item, index) => (
          <ForWhomSimpleCard key={index} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: carousel
 * Karuzela z większymi kartami
 */
function ForWhomCarousel({ config }: ForWhomVariantProps) {
  return (
    <SectionWrapper id="dla-kogo" showGrid>
      <SectionHeader
        label={config.sectionLabel}
        title={config.title}
        titleAccent={config.titleAccent}
      />

      {/* Scrollable row on mobile, grid on desktop */}
      <div className="mt-12 -mx-6 px-6 overflow-x-auto lg:overflow-visible">
        <div className="flex lg:grid lg:grid-cols-4 gap-6 pb-4 lg:pb-0" style={{ minWidth: 'max-content' }}>
          {config.items.map((item, index) => (
            <div key={index} className="w-[280px] lg:w-auto flex-shrink-0">
              <ForWhomSimpleCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

// ============ SHARED COMPONENTS ============

interface ForWhomCardProps {
  item: ForWhomItem
  index: number
}

/**
 * Karta z pełnoekranowym obrazem dla wariantu 2x2-grid
 */
function ForWhomImageCard({ item, index }: ForWhomCardProps) {
  const Icon = getIcon(item.icon)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative h-[420px] overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Icon Badge */}
      <div className="absolute top-6 left-6 z-[15] bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/40 group-hover:bg-primary/30 group-hover:border-primary/60 transition-all duration-300">
        <Icon className="text-primary w-6 h-6" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        {/* Top Row */}
        <div className="flex justify-end">
          <div className="bg-black/60 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="text-primary w-5 h-5" />
          </div>
        </div>

        {/* Bottom Content */}
        <div>
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h3>

          {/* Description - visible on hover */}
          <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider text-primary border border-primary/20 px-2 py-1 bg-primary/10 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Border */}
      <div className="absolute inset-0 border border-border group-hover:border-primary/30 transition-colors duration-300" />
    </motion.div>
  )
}

/**
 * Prosta karta dla wariantów 4-column i carousel
 */
function ForWhomSimpleCard({ item, index }: ForWhomCardProps) {
  const Icon = getIcon(item.icon)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

        {/* Icon Badge */}
        <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 border border-primary/40">
          <Icon className="text-primary w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-primary border border-primary/20 px-2 py-1 bg-primary/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ForWhom
