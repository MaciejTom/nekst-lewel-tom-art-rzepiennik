"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const heroConfig = {
  badge: "KONSTRUKCJE ŻELBETOWE",
  headline: ["ŻELBET DLA BUDOWNICTWA", "PRZEMYSŁOWEGO", "I MIESZKANIOWEGO"],
  headlineAccent: 1,
  subtitle: "Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów gotowy do wejścia na budowę.",
  ctaPrimary: { text: "Zadzwoń: 696 092 434", href: "tel:696092434" },
  ctaSecondary: { text: "Wyślij projekt do wyceny", scrollTo: "#kontakt" },
  stats: [
    { value: "4", label: "Województwa zasięgu" },
    { value: "24h", label: "Wycena projektu" },
    { value: "100%", label: "Własny zespół" },
  ],
}

export function HeroVariantsDemo() {
  return (
    <div className="space-y-8">
      {/* Variant 1: fullscreen-left */}
      <VariantSection title="Wariant: fullscreen-left" variant="fullscreen-left">
        <HeroFullscreenLeft />
      </VariantSection>

      {/* Variant 2: fullscreen-center */}
      <VariantSection title="Wariant: fullscreen-center" variant="fullscreen-center">
        <HeroFullscreenCenter />
      </VariantSection>

      {/* Variant 3: split-left */}
      <VariantSection title="Wariant: split-left" variant="split-left">
        <HeroSplitLeft />
      </VariantSection>

      {/* Variant 4: split-right */}
      <VariantSection title="Wariant: split-right" variant="split-right">
        <HeroSplitRight />
      </VariantSection>
    </div>
  )
}

function VariantSection({ title, variant, children }: { title: string; variant: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border">
      <div className="bg-primary/10 border-b border-primary/30 px-6 py-3">
        <code className="text-primary font-mono text-sm">{title}</code>
        <span className="text-muted-foreground text-xs ml-4">
          config: {`"variant": "${variant}"`}
        </span>
      </div>
      {children}
    </div>
  )
}

function HeroFullscreenLeft() {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-background text-white">
      <div className="absolute inset-0 rebar-pattern opacity-30" />
      <div className="container px-[5%] py-24 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider">
              {heroConfig.badge}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-none mb-6 tracking-wide">
            {heroConfig.headline.map((line, index) => (
              <span key={index}>
                {index > 0 && <br />}
                <span className={index === heroConfig.headlineAccent ? "text-accent" : ""}>{line}</span>
              </span>
            ))}
          </h1>
          <p className="font-work text-lg text-muted-foreground max-w-2xl mb-10">{heroConfig.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold group">
              {heroConfig.ctaPrimary.text}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-white hover:border-primary px-8 py-6 text-lg">
              {heroConfig.ctaSecondary.text}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-border max-w-xl">
            {heroConfig.stats.map((stat, i) => (
              <div key={i}>
                <div className="font-display text-2xl text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroFullscreenCenter() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-background text-white">
      <div className="absolute inset-0 rebar-pattern opacity-30" />
      <div className="container px-[5%] py-24 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider">
            {heroConfig.badge}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-none mb-6 tracking-wide">
            {heroConfig.headline.map((line, index) => (
              <span key={index}>
                {index > 0 && <br />}
                <span className={index === heroConfig.headlineAccent ? "text-accent" : ""}>{line}</span>
              </span>
            ))}
          </h1>
          <p className="font-work text-lg text-muted-foreground max-w-2xl mx-auto mb-10">{heroConfig.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold group">
              {heroConfig.ctaPrimary.text}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-white hover:border-primary px-8 py-6 text-lg">
              {heroConfig.ctaSecondary.text}
            </Button>
          </div>
          <div className="flex justify-center gap-12 mt-16 pt-8 border-t border-border">
            {heroConfig.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroSplitLeft() {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-background text-white">
      <div className="container px-[5%] py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider">
              {heroConfig.badge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-none mb-6 tracking-wide">
              {heroConfig.headline.map((line, index) => (
                <span key={index}>
                  {index > 0 && <br />}
                  <span className={index === heroConfig.headlineAccent ? "text-accent" : ""}>{line}</span>
                </span>
              ))}
            </h1>
            <p className="font-work text-lg text-muted-foreground max-w-xl mb-8">{heroConfig.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold">
                {heroConfig.ctaPrimary.text}
              </Button>
              <Button size="lg" variant="outline" className="border-border text-white hover:border-primary px-8 py-6 text-lg">
                {heroConfig.ctaSecondary.text}
              </Button>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              {heroConfig.stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-2xl text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-card border border-border rounded-sm flex items-center justify-center">
              <span className="text-muted-foreground">[ Obraz po prawej ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroSplitRight() {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-background text-white">
      <div className="container px-[5%] py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] order-2 lg:order-1">
            <div className="absolute inset-0 bg-card border border-border rounded-sm flex items-center justify-center">
              <span className="text-muted-foreground">[ Obraz po lewej ]</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider">
              {heroConfig.badge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-none mb-6 tracking-wide">
              {heroConfig.headline.map((line, index) => (
                <span key={index}>
                  {index > 0 && <br />}
                  <span className={index === heroConfig.headlineAccent ? "text-accent" : ""}>{line}</span>
                </span>
              ))}
            </h1>
            <p className="font-work text-lg text-muted-foreground max-w-xl mb-8">{heroConfig.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold">
                {heroConfig.ctaPrimary.text}
              </Button>
              <Button size="lg" variant="outline" className="border-border text-white hover:border-primary px-8 py-6 text-lg">
                {heroConfig.ctaSecondary.text}
              </Button>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              {heroConfig.stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-2xl text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
