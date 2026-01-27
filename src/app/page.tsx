import { SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { HeroWireframe } from "@/components/wireframe/hero-wireframe"
import { PortfolioWireframe } from "@/components/wireframe/portfolio-wireframe"
import { ServicesEditorialWireframe } from "@/components/wireframe/services-editorial-wireframe"
import { ServicesIconGridWireframe } from "@/components/wireframe/services-icon-grid-wireframe"
import { ServicesOverlayWireframe } from "@/components/wireframe/services-overlay-wireframe"
import { ServicesCardsWireframe } from "@/components/wireframe/services-cards-wireframe"
import { ReviewsWireframe } from "@/components/wireframe/reviews-wireframe"
import { FeaturesSplitWireframe } from "@/components/wireframe/features-split-wireframe"
import { HeroSplitWireframe } from "@/components/wireframe/hero-split-wireframe"
import { wireframeHero } from "@/content/wireframe/hero"
import { wireframePortfolio } from "@/content/wireframe/portfolio"
import { wireframeServicesEditorial } from "@/content/wireframe/services-editorial"
import { wireframeServicesIconGrid } from "@/content/wireframe/services-icon-grid"
import { wireframeServicesOverlay } from "@/content/wireframe/services-overlay"
import { wireframeServicesCards } from "@/content/wireframe/services-cards"
import { wireframeReviews } from "@/content/wireframe/reviews"
import { wireframeFeaturesSplit } from "@/content/wireframe/features-split"
import { wireframeHeroSplit } from "@/content/wireframe/hero-split"

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
