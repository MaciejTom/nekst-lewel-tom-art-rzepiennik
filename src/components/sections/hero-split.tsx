"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle, ThumbsUp } from "lucide-react"
import type { HeroSplitContent } from "@/types/content"

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
  section: "relative bg-secondary pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden",
  decoration: "absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4 pointer-events-none",
  container: "max-w-[1280px] mx-auto px-4 md:px-8 relative z-10",
  grid: "grid lg:grid-cols-2 gap-12 items-center",

  // Left content
  content: "flex flex-col gap-6 lg:max-w-xl",

  // Badge (rounded-lg używa --radius-lg z CSS)
  badge: "inline-flex items-center gap-2 bg-background px-3 py-1 rounded-lg border border-border w-fit shadow-sm",
  badgeDot: "flex h-2 w-2 rounded-full",
  badgeText: "text-xs font-bold uppercase tracking-wider text-muted-foreground",

  // Headline
  headline: "text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground font-display",
  headlineHighlight: "bg-primary px-2 text-primary-foreground",

  // Subheadline
  subheadline: "text-lg text-muted-foreground font-medium leading-relaxed max-w-md",

  // CTA
  ctaWrapper: "flex flex-wrap gap-4 pt-4",
  ctaPrimary: "flex items-center justify-center gap-2 h-14 px-8 bg-primary text-primary-foreground text-base font-bold rounded-lg shadow-[0_4px_0_0_hsl(var(--primary)/0.7)] active:shadow-none active:translate-y-1 transition-all",
  ctaSecondary: "flex items-center justify-center gap-2 h-14 px-8 bg-background border-2 border-foreground text-foreground text-base font-bold rounded-lg hover:bg-muted transition-colors",

  // Stats
  statsWrapper: "flex items-center gap-6 pt-6 border-t border-border mt-4",
  statItem: "flex items-center gap-3",
  statIcon: "bg-primary/20 p-2 rounded-full text-foreground",
  statValue: "font-black text-xl leading-none",
  statLabel: "text-xs font-medium text-muted-foreground uppercase",
  statDivider: "w-px h-10 bg-border",

  // Image
  imageWrapper: "relative lg:h-[600px] w-full flex items-center justify-center",
  imageContainer: "relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl bg-background border-4 border-background",
  image: "w-full h-full object-cover",

  // Image overlay
  imageOverlay: "absolute bottom-6 left-6 bg-primary px-6 py-4 rounded-xl shadow-lg flex flex-col items-start gap-1 max-w-[200px]",
  overlayLabel: "text-xs font-bold uppercase tracking-wider text-primary-foreground/70",
  overlayValue: "text-2xl font-black text-primary-foreground",
} as const

// ============================================
// COMPONENT
// ============================================

interface HeroSplitProps {
  content: HeroSplitContent
  className?: string
}

export function HeroSplit({ content, className }: HeroSplitProps) {
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
      {/* Decorative skewed background */}
      <div className={baseStyles.decoration} />

      <div className={baseStyles.container}>
        <div className={baseStyles.grid}>
          {/* Left: Content */}
          <div className={baseStyles.content}>
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
                className={cn("flex items-center justify-center gap-2 h-14 px-8 text-base font-bold", buttonVariants.primary[buttonVariant])}
              >
                {ctaPrimary.text}
                <ArrowRight className="w-5 h-5" />
              </a>

              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className={cn("flex items-center justify-center gap-2 h-14 px-8 text-base font-bold", buttonVariants.secondary[buttonVariant])}
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

          {/* Right: Image */}
          <div className={baseStyles.imageWrapper}>
            <div className={baseStyles.imageContainer}>
              <img
                src={image.src}
                alt={image.alt}
                className={baseStyles.image}
              />

              {/* Overlay card */}
              {imageOverlay && (
                <div className={baseStyles.imageOverlay}>
                  <span className={baseStyles.overlayLabel}>{imageOverlay.label}</span>
                  <span className={baseStyles.overlayValue}>{imageOverlay.value}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
