import { SectionGroup, ComponentLabel } from "@/components/showcase/layout"

// Styled (originals)
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"
import { ServicesOverlaySection } from "@/components/sections/services-overlay-section"
import { ServicesCardsSection } from "@/components/sections/services-cards-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { tomArtServicesEditorial } from "@/content/tom-art/services-editorial"
import { tomArtServicesOverlay } from "@/content/tom-art/services-overlay"
import { tomArtServices } from "@/content/tom-art/services"
import { tomArtPortfolio } from "@/content/tom-art/portfolio"

// Wireframes
import { HeroWireframe } from "@/components/wireframe/hero-wireframe"
import { HeroSplitWireframe } from "@/components/wireframe/hero-split-wireframe"
import { ServicesEditorialWireframe } from "@/components/wireframe/services-editorial-wireframe"
import { ServicesOverlayWireframe } from "@/components/wireframe/services-overlay-wireframe"
import { ServicesCardsWireframe } from "@/components/wireframe/services-cards-wireframe"
import { ServicesIconGridWireframe } from "@/components/wireframe/services-icon-grid-wireframe"
import { FeaturesSplitWireframe } from "@/components/wireframe/features-split-wireframe"
import { ReviewsWireframe } from "@/components/wireframe/reviews-wireframe"
import { PortfolioWireframe } from "@/components/wireframe/portfolio-wireframe"
import { wireframeHero } from "@/content/wireframe/hero"
import { wireframeHeroSplit } from "@/content/wireframe/hero-split"
import { wireframeServicesEditorial } from "@/content/wireframe/services-editorial"
import { wireframeServicesOverlay } from "@/content/wireframe/services-overlay"
import { wireframeServicesCards } from "@/content/wireframe/services-cards"
import { wireframeServicesIconGrid } from "@/content/wireframe/services-icon-grid"
import { wireframeFeaturesSplit } from "@/content/wireframe/features-split"
import { wireframeReviews } from "@/content/wireframe/reviews"
import { wireframePortfolio } from "@/content/wireframe/portfolio"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border px-6 py-4">
        <h1 className="text-lg font-semibold text-foreground font-mono">
          Wireframe Templates
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          Klocki do skladania stron. Wybierz layout, podmien content.
        </p>
      </header>

      <main>
        {/* ── STYLED (originals) ─────────────────────────── */}

        <SectionGroup title="Services Editorial — Styled" href="/services-editorial">
          <ComponentLabel label="ServicesEditorialSection — serif, Material Symbols, dekoracyjne ramki" variant="styled" />
          <ServicesEditorialSection content={tomArtServicesEditorial} />
        </SectionGroup>

        <SectionGroup title="Services Overlay — Styled" href="/services-overlay">
          <ComponentLabel label="ServicesOverlaySection — gradient, hover scale, expanding line" variant="styled" />
          <ServicesOverlaySection content={tomArtServicesOverlay} />
        </SectionGroup>

        <SectionGroup title="Services Cards — Styled" href="/services-cards">
          <ComponentLabel label="ServicesCardsSection — serif, shadow-md, h2-accent" variant="styled" />
          <ServicesCardsSection content={tomArtServices} />
        </SectionGroup>

        <SectionGroup title="Portfolio — Styled" href="/portfolio">
          <ComponentLabel label="PortfolioSection — framer-motion, corner accents" variant="styled" />
          <PortfolioSection content={tomArtPortfolio} />
        </SectionGroup>

        {/* ── WIREFRAMES ─────────────────────────────────── */}

        <SectionGroup title="Hero Full-screen" href="/hero">
          <ComponentLabel label="Full-screen, badge + headline + CTA + stats + scroll" variant="wireframe" />
          <HeroWireframe content={wireframeHero} />
        </SectionGroup>

        <SectionGroup title="Hero Split" href="/hero">
          <ComponentLabel label="2-col grid, content left + image right, stats inline, image badge" variant="wireframe" />
          <HeroSplitWireframe content={wireframeHeroSplit} />
        </SectionGroup>

        <SectionGroup title="Services Editorial" href="/services-editorial">
          <ComponentLabel label="Alternating image+text rows, step badges" variant="wireframe" />
          <ServicesEditorialWireframe content={wireframeServicesEditorial} />
        </SectionGroup>

        <SectionGroup title="Services Overlay" href="/services-overlay">
          <ComponentLabel label="Overlay cards 5 items (3+2)" variant="wireframe" />
          <ServicesOverlayWireframe content={wireframeServicesOverlay} />
        </SectionGroup>

        <SectionGroup title="Services Cards" href="/services-cards">
          <ComponentLabel label="Image cards + features, 5 items (3+2)" variant="wireframe" />
          <ServicesCardsWireframe content={wireframeServicesCards} />
        </SectionGroup>

        <SectionGroup title="Services Icon Grid" href="/services-icon-grid">
          <ComponentLabel label="Icon cards 4 in a row, no images" variant="wireframe" />
          <ServicesIconGridWireframe content={wireframeServicesIconGrid} />
        </SectionGroup>

        <SectionGroup title="Features Split" href="/features-split">
          <ComponentLabel label="2-col: tagline + title + features checklist + CTA | image" variant="wireframe" />
          <FeaturesSplitWireframe content={wireframeFeaturesSplit} />
        </SectionGroup>

        <SectionGroup title="Reviews" href="/reviews">
          <ComponentLabel label="3-col grid, stars + quote + author, featured card" variant="wireframe" />
          <ReviewsWireframe content={wireframeReviews} />
        </SectionGroup>

        <SectionGroup title="Portfolio" href="/portfolio">
          <ComponentLabel label="Mosaic: 1F + 2N + 1W (4 items)" variant="wireframe" />
          <PortfolioWireframe content={wireframePortfolio} />
        </SectionGroup>
      </main>
    </div>
  )
}
