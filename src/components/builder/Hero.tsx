"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getHeroConfig, getSiteMeta, type HeroConfig } from "@/lib/config"

/**
 * Hero Section - config-driven
 *
 * Warianty:
 * - fullscreen-left: Pełnoekranowe tło, content po lewej
 * - fullscreen-center: Pełnoekranowe tło, content wycentrowany
 * - split-left: Split layout, content po lewej, obraz po prawej
 * - split-right: Split layout, obraz po lewej, content po prawej
 */
export function Hero() {
  const config = getHeroConfig()
  const meta = getSiteMeta()

  // Wybierz wariant
  switch (config.variant) {
    case 'fullscreen-center':
      return <HeroFullscreenCenter config={config} meta={meta} />
    case 'split-left':
      return <HeroSplitLeft config={config} meta={meta} />
    case 'split-right':
      return <HeroSplitRight config={config} meta={meta} />
    case 'fullscreen-left':
    default:
      return <HeroFullscreenLeft config={config} meta={meta} />
  }
}

// ============ VARIANTS ============

interface HeroVariantProps {
  config: HeroConfig
  meta: { name: string; phone: string }
}

/**
 * Wariant: fullscreen-left
 * Pełnoekranowe tło z rebar pattern, content po lewej stronie
 */
function HeroFullscreenLeft({ config, meta }: HeroVariantProps) {
  return (
    <section
      id="hero"
      className="hero-section min-h-screen flex items-center relative overflow-hidden bg-background text-foreground"
    >
      {/* Rebar pattern overlay */}
      {config.showRebarPattern && (
        <div className="absolute inset-0 rebar-pattern opacity-30" />
      )}

      {/* Decorative elements */}
      {config.showDecorations && (
        <>
          <div className="absolute top-1/4 right-0 w-64 h-64 border border-accent/20 transform rotate-45 translate-x-32" />
          <div className="absolute bottom-1/4 left-0 w-48 h-48 border border-accent/10 transform -rotate-12 -translate-x-24" />
        </>
      )}

      <div className="container px-[5%] py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          {config.showBadge && config.badge && (
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider">
                {config.badge}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-none mb-6 animate-fade-up stagger-1 tracking-wide">
            {config.headline.map((line, index) => (
              <span key={index}>
                {index > 0 && <br />}
                <span className={index === config.headlineAccent ? "text-accent" : ""}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          {config.subtitle && (
            <p className="font-work text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up stagger-2">
              {config.subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold group"
            >
              <a href={config.ctaPrimary.href}>
                {config.ctaPrimary.text}
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            {config.ctaSecondary && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border text-foreground hover:border-primary hover:text-primary px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <a href={config.ctaSecondary.scrollTo}>
                  {config.ctaSecondary.text}
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Stats */}
        {config.showStats && config.stats && config.stats.length > 0 && (
          <div className={cn(
            "grid gap-6 mt-20 pt-10 border-t border-border max-w-2xl animate-fade-up stagger-4",
            `grid-cols-${config.stats.length}`
          )}>
            {config.stats.map((stat, i) => (
              <div key={i}>
                <div className="font-display text-2xl sm:text-3xl text-primary tracking-wide">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {config.showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </div>
      )}
    </section>
  )
}

/**
 * Wariant: fullscreen-center
 * Pełnoekranowe tło, content wycentrowany
 */
function HeroFullscreenCenter({ config, meta }: HeroVariantProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground"
    >
      {/* Rebar pattern overlay */}
      {config.showRebarPattern && (
        <div className="absolute inset-0 rebar-pattern opacity-30" />
      )}

      <div className="container px-[5%] py-32 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          {config.showBadge && config.badge && (
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider">
                {config.badge}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-none mb-6 animate-fade-up stagger-1 tracking-wide">
            {config.headline.map((line, index) => (
              <span key={index}>
                {index > 0 && <br />}
                <span className={index === config.headlineAccent ? "text-accent" : ""}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          {config.subtitle && (
            <p className="font-work text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
              {config.subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-3">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold group"
            >
              <a href={config.ctaPrimary.href}>
                {config.ctaPrimary.text}
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            {config.ctaSecondary && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border text-foreground hover:border-primary hover:text-primary px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <a href={config.ctaSecondary.scrollTo}>
                  {config.ctaSecondary.text}
                </a>
              </Button>
            )}
          </div>

          {/* Stats */}
          {config.showStats && config.stats && config.stats.length > 0 && (
            <div className="flex justify-center gap-12 mt-20 pt-10 border-t border-border animate-fade-up stagger-4">
              {config.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-2xl sm:text-3xl text-primary tracking-wide">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {config.showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </div>
      )}
    </section>
  )
}

/**
 * Wariant: split-left
 * Split layout - content po lewej, obraz/grafika po prawej
 */
function HeroSplitLeft({ config, meta }: HeroVariantProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-background text-foreground"
    >
      <div className="container px-[5%] py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left */}
          <div>
            {/* Badge */}
            {config.showBadge && config.badge && (
              <div className="animate-fade-up">
                <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider">
                  {config.badge}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none mb-6 animate-fade-up stagger-1 tracking-wide">
              {config.headline.map((line, index) => (
                <span key={index}>
                  {index > 0 && <br />}
                  <span className={index === config.headlineAccent ? "text-accent" : ""}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            {config.subtitle && (
              <p className="font-work text-lg text-muted-foreground max-w-xl mb-8 animate-fade-up stagger-2">
                {config.subtitle}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold group"
              >
                <a href={config.ctaPrimary.href}>
                  {config.ctaPrimary.text}
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              {config.ctaSecondary && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-border text-foreground hover:border-primary hover:text-primary px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  <a href={config.ctaSecondary.scrollTo}>
                    {config.ctaSecondary.text}
                  </a>
                </Button>
              )}
            </div>

            {/* Stats */}
            {config.showStats && config.stats && config.stats.length > 0 && (
              <div className="flex gap-8 mt-12 pt-8 border-t border-border animate-fade-up stagger-4">
                {config.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-display text-2xl text-primary tracking-wide">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image - Right */}
          <div className="relative h-[500px] lg:h-[600px]">
            {config.backgroundImage ? (
              <div
                className="absolute inset-0 bg-cover bg-center rounded-sm"
                style={{ backgroundImage: `url(${config.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
              </div>
            ) : (
              <div className="absolute inset-0 bg-card border border-border rounded-sm flex items-center justify-center">
                <span className="text-muted-foreground">Image placeholder</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Wariant: split-right
 * Split layout - obraz po lewej, content po prawej
 */
function HeroSplitRight({ config, meta }: HeroVariantProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-background text-foreground"
    >
      <div className="container px-[5%] py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Left */}
          <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
            {config.backgroundImage ? (
              <div
                className="absolute inset-0 bg-cover bg-center rounded-sm"
                style={{ backgroundImage: `url(${config.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent" />
              </div>
            ) : (
              <div className="absolute inset-0 bg-card border border-border rounded-sm flex items-center justify-center">
                <span className="text-muted-foreground">Image placeholder</span>
              </div>
            )}
          </div>

          {/* Content - Right */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            {config.showBadge && config.badge && (
              <div className="animate-fade-up">
                <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider">
                  {config.badge}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none mb-6 animate-fade-up stagger-1 tracking-wide">
              {config.headline.map((line, index) => (
                <span key={index}>
                  {index > 0 && <br />}
                  <span className={index === config.headlineAccent ? "text-accent" : ""}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            {config.subtitle && (
              <p className="font-work text-lg text-muted-foreground max-w-xl mb-8 animate-fade-up stagger-2">
                {config.subtitle}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold group"
              >
                <a href={config.ctaPrimary.href}>
                  {config.ctaPrimary.text}
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              {config.ctaSecondary && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-border text-foreground hover:border-primary hover:text-primary px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  <a href={config.ctaSecondary.scrollTo}>
                    {config.ctaSecondary.text}
                  </a>
                </Button>
              )}
            </div>

            {/* Stats */}
            {config.showStats && config.stats && config.stats.length > 0 && (
              <div className="flex gap-8 mt-12 pt-8 border-t border-border animate-fade-up stagger-4">
                {config.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-display text-2xl text-primary tracking-wide">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
