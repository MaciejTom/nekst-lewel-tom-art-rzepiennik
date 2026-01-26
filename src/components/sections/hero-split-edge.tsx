"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle, ThumbsUp } from "lucide-react"
import type { HeroSplitContent } from "@/types"

// ============================================
// ICON MAP
// ============================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  verified: CheckCircle,
  thumb_up: ThumbsUp,
  phone: Phone,
}

// ============================================
// BUTTON VARIANTS
// ============================================

const buttonVariants = {
  primary: {
    default: "bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg",
    shadow: "bg-primary text-primary-foreground rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] hover:translate-y-[2px] active:shadow-none active:translate-y-1 transition-all",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg",
  },
  secondary: {
    default: "border border-border text-foreground hover:border-primary hover:text-primary bg-transparent rounded-lg",
    shadow: "bg-background border-2 border-foreground text-foreground rounded-lg hover:bg-muted transition-colors",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-lg",
  },
} as const

// ============================================
// STYLES
// ============================================

const baseStyles = {
  // Sekcja na cala szerokosc
  section: "relative bg-background min-h-[80vh] flex items-center overflow-hidden",

  // Grid: tekst w kontenerze, obraz do krawedzi
  grid: "grid lg:grid-cols-2 w-full",

  // Lewa strona - tekst w kontenerze
  contentSide: "flex items-center py-16 lg:py-24",
  contentInner: "w-full max-w-[640px] ml-auto px-6 md:px-12 lg:pr-16",

  // Badge
  badge: "inline-flex items-center gap-2 bg-secondary px-3 py-1 rounded-lg border border-border w-fit shadow-sm mb-6",
  badgeDot: "flex h-2 w-2 rounded-full",
  badgeText: "text-xs font-bold uppercase tracking-wider text-muted-foreground",

  // Headline
  headline: "text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight text-foreground font-display mb-6",
  headlineHighlight: "bg-primary px-2 text-primary-foreground",

  // Subheadline
  subheadline: "text-lg text-muted-foreground font-medium leading-relaxed max-w-md mb-8",

  // CTA
  ctaWrapper: "flex flex-wrap gap-4",

  // Stats
  statsWrapper: "flex items-center gap-6 pt-8 border-t border-border mt-8",
  statItem: "flex items-center gap-3",
  statIcon: "bg-primary/20 p-2 rounded-full text-foreground",
  statValue: "font-black text-xl leading-none",
  statLabel: "text-xs font-medium text-muted-foreground uppercase",
  statDivider: "w-px h-10 bg-border",

  // Prawa strona - obraz do krawedzi
  imageSide: "relative hidden lg:block",
  imageInner: "absolute inset-0",
  image: "w-full h-full object-cover",

  // Mobile image - widoczny na mobile pod tekstem
  imageMobile: "relative w-full aspect-[16/10] lg:hidden",
  imageMobileInner: "absolute inset-0",

  // Image overlay
  imageOverlay: "absolute bottom-8 left-8 bg-primary px-6 py-4 rounded-xl shadow-lg flex flex-col items-start gap-1 max-w-[200px] z-10",
  overlayLabel: "text-xs font-bold uppercase tracking-wider text-primary-foreground/70",
  overlayValue: "text-2xl font-black text-primary-foreground",

  // Dekoracyjna linia na krawedzi
  edgeLine: "absolute top-0 left-0 bottom-0 w-px bg-border",
} as const

// ============================================
// COMPONENT
// ============================================

interface HeroSplitEdgeProps {
  content: HeroSplitContent
  className?: string
}

export function HeroSplitEdge({ content, className }: HeroSplitEdgeProps) {
  const {
    badge,
    headline,
    headlineHighlight,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    buttonVariant = 'shadow',
    stats,
    image,
    imageOverlay,
  } = content

  // Render headline with highlight
  const renderHeadline = () => {
    return headline.map((line, index) => {
      if (headlineHighlight && line.includes(headlineHighlight)) {
        const parts = line.split(headlineHighlight)
        return (
          <span key={index}>
            {parts[0]}
            <span className={baseStyles.headlineHighlight}>{headlineHighlight}</span>
            {parts[1]}
            {index < headline.length - 1 && <br />}
          </span>
        )
      }
      return (
        <span key={index}>
          {line}
          {index < headline.length - 1 && <br />}
        </span>
      )
    })
  }

  // Get icon component
  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName]
    return Icon ? <Icon className="w-5 h-5" /> : null
  }

  return (
    <section className={cn(baseStyles.section, className)}>
      <div className={baseStyles.grid}>
        {/* Left: Text content - contained */}
        <div className={baseStyles.contentSide}>
          <div className={baseStyles.contentInner}>
            {/* Badge */}
            {badge && (
              <div className={baseStyles.badge}>
                <span
                  className={baseStyles.badgeDot}
                  style={{ backgroundColor: badge.dotColor || '#22c55e' }}
                />
                <span className={baseStyles.badgeText}>{badge.text}</span>
              </div>
            )}

            {/* Headline */}
            <h1 className={baseStyles.headline}>
              {renderHeadline()}
            </h1>

            {/* Subheadline */}
            <p className={baseStyles.subheadline}>
              {subheadline}
            </p>

            {/* CTA Buttons */}
            <div className={baseStyles.ctaWrapper}>
              <a
                href={ctaPrimary.href}
                className={cn(
                  "flex items-center justify-center gap-2 h-14 px-8 text-base font-bold",
                  buttonVariants.primary[buttonVariant]
                )}
              >
                {ctaPrimary.text}
                <ArrowRight className="w-5 h-5" />
              </a>

              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className={cn(
                    "flex items-center justify-center gap-2 h-14 px-8 text-base font-bold",
                    buttonVariants.secondary[buttonVariant]
                  )}
                >
                  {ctaSecondary.text}
                </a>
              )}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className={baseStyles.statsWrapper}>
                {stats.map((stat, index) => (
                  <div key={index} className="contents">
                    <div className={baseStyles.statItem}>
                      <div className={baseStyles.statIcon}>
                        {getIcon(stat.icon)}
                      </div>
                      <div className="flex flex-col">
                        <span className={baseStyles.statValue}>{stat.value}</span>
                        <span className={baseStyles.statLabel}>{stat.label}</span>
                      </div>
                    </div>
                    {index < stats.length - 1 && (
                      <div className={baseStyles.statDivider} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Image - bleeds to edge (desktop) */}
        <div className={baseStyles.imageSide}>
          <div className={baseStyles.edgeLine} />
          <div className={baseStyles.imageInner}>
            <img
              src={image.src}
              alt={image.alt}
              className={baseStyles.image}
            />

            {imageOverlay && (
              <div className={baseStyles.imageOverlay}>
                <span className={baseStyles.overlayLabel}>{imageOverlay.label}</span>
                <span className={baseStyles.overlayValue}>{imageOverlay.value}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile image - below text */}
      <div className={baseStyles.imageMobile}>
        <div className={baseStyles.imageMobileInner}>
          <img
            src={image.src}
            alt={image.alt}
            className={baseStyles.image}
          />
        </div>
      </div>
    </section>
  )
}
