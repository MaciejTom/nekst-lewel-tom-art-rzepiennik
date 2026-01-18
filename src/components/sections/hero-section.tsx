"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { HeroContent } from "@/types/content"

// ============================================
// DEFAULTS - wartości domyślne
// ============================================

const defaults = {
  headlineAccentLine: 1,
  overlayOpacity: 0.7,
  showPattern: true,
  patternType: 'rebar' as const,
  patternOpacity: 0.3,
  contentPosition: 'left' as const,
  minHeight: 'screen' as const,
  showDecorations: true,
  showScrollIndicator: true,
  scrollIndicatorText: 'SCROLL',
  backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop',
  buttonVariant: 'default' as const,
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
// STYLES - klasy Tailwind (stałe)
// ============================================

const baseStyles = {
  container: "container px-[5%] py-32 relative z-10",
  content: "max-w-4xl",
  contentCenter: "max-w-4xl mx-auto text-center",

  // Badge (rounded-lg używa --radius-lg z CSS)
  badge: "inline-block px-4 py-1.5 border border-primary/50 text-primary text-sm font-medium mb-6 tracking-wider uppercase rounded-lg",

  // Headline
  headline: "font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-6 tracking-wide uppercase",
  headlineAccent: "text-primary",

  // Subtitle
  subtitle: "text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10",
  subtitleCenter: "text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 mx-auto",

  // CTA
  ctaWrapper: "flex flex-col sm:flex-row gap-4",
  ctaWrapperCenter: "flex flex-col sm:flex-row gap-4 justify-center",
  ctaPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group",
  ctaSecondary: "border-border text-foreground hover:border-primary hover:text-primary px-8 py-6 text-lg font-semibold bg-transparent",
  ctaIcon: "ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform",

  // Stats
  statsWrapper: "grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-border max-w-2xl",
  statsWrapperCenter: "grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-border max-w-2xl mx-auto",
  statValue: "font-display text-2xl sm:text-3xl text-primary tracking-wide",
  statLabel: "text-sm text-muted-foreground mt-1",

  // Decorative
  decoRight: "absolute top-1/4 right-0 w-64 h-64 border border-primary/20 transform rotate-45 translate-x-32",
  decoLeft: "absolute bottom-1/4 left-0 w-48 h-48 border border-primary/10 transform -rotate-12 -translate-x-24",

  // Scroll indicator
  scrollIndicator: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground",
  scrollLine: "w-px h-12 bg-gradient-to-b from-primary to-transparent",

  // Animations
  animFadeUp: "animate-fade-up",
  stagger1: "animate-fade-up stagger-1",
  stagger2: "animate-fade-up stagger-2",
  stagger3: "animate-fade-up stagger-3",
  stagger4: "animate-fade-up stagger-4",
} as const

// ============================================
// PATTERN STYLES
// ============================================

const patternStyles = {
  rebar: `
    repeating-linear-gradient(90deg, transparent 0px, transparent 20px, rgba(var(--primary-rgb, 59, 130, 246), 0.15) 20px, rgba(var(--primary-rgb, 59, 130, 246), 0.15) 21px),
    repeating-linear-gradient(0deg, transparent 0px, transparent 20px, rgba(var(--primary-rgb, 59, 130, 246), 0.15) 20px, rgba(var(--primary-rgb, 59, 130, 246), 0.15) 21px)
  `,
  grid: `
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
  `,
  dots: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
}

// ============================================
// COMPONENT
// ============================================

interface HeroSectionProps {
  content: HeroContent
  className?: string
}

export function HeroSection({ content, className }: HeroSectionProps) {
  // Destructure z defaults
  const {
    badge,
    headline,
    headlineAccentLine = defaults.headlineAccentLine,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    stats,
    buttonVariant = defaults.buttonVariant,
    backgroundImage = defaults.backgroundImage,
    overlayOpacity = defaults.overlayOpacity,
    showPattern = defaults.showPattern,
    patternType = defaults.patternType,
    patternOpacity = defaults.patternOpacity,
    contentPosition = defaults.contentPosition,
    minHeight = defaults.minHeight,
    showDecorations = defaults.showDecorations,
    showScrollIndicator = defaults.showScrollIndicator,
    scrollIndicatorText = defaults.scrollIndicatorText,
  } = content

  // Compute classes based on props
  const isCenter = contentPosition === 'center'
  const minHeightClass = {
    'screen': 'min-h-screen',
    '80vh': 'min-h-[80vh]',
    '70vh': 'min-h-[70vh]',
  }[minHeight]

  // Render headline
  const renderHeadline = () => {
    if (typeof headline === 'string') {
      return headline
    }

    return headline.map((line, index) => (
      <span key={index}>
        {index === headlineAccentLine ? (
          <span className={baseStyles.headlineAccent}>{line}</span>
        ) : (
          line
        )}
        {index < headline.length - 1 && <br />}
      </span>
    ))
  }

  // Handle CTA secondary click
  const handleSecondaryClick = () => {
    if (ctaSecondary?.scrollTo) {
      document.querySelector(ctaSecondary.scrollTo)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Pattern background style
  const getPatternStyle = () => {
    if (!showPattern || patternType === 'none') return {}

    const patternBg = patternStyles[patternType as keyof typeof patternStyles] || patternStyles.rebar
    return {
      backgroundImage: patternBg,
      backgroundSize: patternType === 'dots' ? '20px 20px' : '40px 40px',
    }
  }

  return (
    <section
      id="hero"
      className={cn(
        minHeightClass,
        "flex items-center relative overflow-hidden bg-background text-foreground",
        className
      )}
    >
      {/* Background Image with Gradient Overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom,
                rgba(5,5,5,0.6) 0%,
                rgba(5,5,5,0.8) 60%,
                rgba(5,5,5,1) 100%)`
            }}
          />
        </>
      )}

      {/* Pattern overlay */}
      {showPattern && patternType !== 'none' && (
        <div
          className="absolute inset-0"
          style={{
            ...getPatternStyle(),
            opacity: patternOpacity,
          }}
        />
      )}

      {/* Decorative elements */}
      {showDecorations && (
        <>
          <div className={baseStyles.decoRight} />
          <div className={baseStyles.decoLeft} />
        </>
      )}

      <div className={baseStyles.container}>
        <div className={isCenter ? baseStyles.contentCenter : baseStyles.content}>
          {/* Badge */}
          <div className={baseStyles.animFadeUp}>
            <span className={baseStyles.badge}>
              {badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className={cn(baseStyles.headline, baseStyles.stagger1)}>
            {renderHeadline()}
          </h1>

          {/* Subtitle */}
          <p className={cn(
            isCenter ? baseStyles.subtitleCenter : baseStyles.subtitle,
            baseStyles.stagger2
          )}>
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className={cn(
            isCenter ? baseStyles.ctaWrapperCenter : baseStyles.ctaWrapper,
            baseStyles.stagger3
          )}>
            <Button
              size="lg"
              asChild
              className={cn("px-8 py-6 text-lg font-semibold group", buttonVariants.primary[buttonVariant])}
            >
              <a href={ctaPrimary.href}>
                {ctaPrimary.text}
                <ArrowRight className={baseStyles.ctaIcon} />
              </a>
            </Button>

            {ctaSecondary && (
              <Button
                size="lg"
                variant="outline"
                onClick={ctaSecondary.href ? undefined : handleSecondaryClick}
                asChild={!!ctaSecondary.href}
                className={cn("px-8 py-6 text-lg font-semibold", buttonVariants.secondary[buttonVariant])}
              >
                {ctaSecondary.href ? (
                  <a href={ctaSecondary.href}>{ctaSecondary.text}</a>
                ) : (
                  <span>{ctaSecondary.text}</span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className={cn(
            isCenter ? baseStyles.statsWrapperCenter : baseStyles.statsWrapper,
            baseStyles.stagger4
          )}>
            {stats.map((stat, i) => (
              <div key={i} className={isCenter ? "text-center" : ""}>
                <div className={baseStyles.statValue}>{stat.value}</div>
                <div className={baseStyles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className={baseStyles.scrollIndicator}>
          <span className="text-xs tracking-widest">{scrollIndicatorText}</span>
          <div className={baseStyles.scrollLine} />
        </div>
      )}
    </section>
  )
}
