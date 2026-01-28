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
import { NavWireframe } from "@/components/wireframe/nav-wireframe"
import { FooterWireframe } from "@/components/wireframe/footer-wireframe"
import { ContactWireframe } from "@/components/wireframe/contact-wireframe"
import { CtaBannerWireframe } from "@/components/wireframe/cta-banner-wireframe"
import { FaqWireframe } from "@/components/wireframe/faq-wireframe"
import { PricingWireframe } from "@/components/wireframe/pricing-wireframe"
import { ProcessWireframe } from "@/components/wireframe/process-wireframe"
import { StatsWireframe } from "@/components/wireframe/stats-wireframe"
import { LogosWireframe } from "@/components/wireframe/logos-wireframe"
import { wireframeHero } from "@/content/wireframe/hero"
import { wireframeHeroSplit } from "@/content/wireframe/hero-split"
import { wireframeServicesEditorial } from "@/content/wireframe/services-editorial"
import { wireframeServicesOverlay } from "@/content/wireframe/services-overlay"
import { wireframeServicesCards } from "@/content/wireframe/services-cards"
import { wireframeServicesIconGrid } from "@/content/wireframe/services-icon-grid"
import { wireframeFeaturesSplit } from "@/content/wireframe/features-split"
import { wireframeReviews } from "@/content/wireframe/reviews"
import { wireframePortfolio } from "@/content/wireframe/portfolio"
import { wireframeNav } from "@/content/wireframe/nav"
import { wireframeFooter } from "@/content/wireframe/footer"
import { wireframeContact } from "@/content/wireframe/contact"
import { wireframeCtaBanner } from "@/content/wireframe/cta-banner"
import { wireframeFaq } from "@/content/wireframe/faq"
import { wireframePricing } from "@/content/wireframe/pricing"
import { wireframeProcess } from "@/content/wireframe/process"
import { wireframeStats } from "@/content/wireframe/stats"
import { wireframeLogos } from "@/content/wireframe/logos"

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
        {/* ── Hero Full-screen (brak styled) ──────────── */}
        <SectionGroup title="Hero Full-screen" href="/hero">
          <ComponentLabel label="Full-screen, badge + headline + CTA + stats + scroll" variant="wireframe" />
          <HeroWireframe content={wireframeHero} />
        </SectionGroup>

        {/* ── Hero Split (brak styled) ────────────────── */}
        <SectionGroup title="Hero Split" href="/hero">
          <ComponentLabel label="2-col grid, content left + image right, stats inline, image badge" variant="wireframe" />
          <HeroSplitWireframe content={wireframeHeroSplit} />
        </SectionGroup>

        {/* ── Services Editorial ───────────────────────── */}
        <SectionGroup title="Services Editorial" href="/services-editorial">
          <ComponentLabel label="ServicesEditorialSection — serif, Material Symbols, dekoracyjne ramki" variant="styled" />
          <ServicesEditorialSection content={tomArtServicesEditorial} />
          <ComponentLabel label="Alternating image+text rows, step badges" variant="wireframe" />
          <ServicesEditorialWireframe content={wireframeServicesEditorial} />
        </SectionGroup>

        {/* ── Services Overlay ─────────────────────────── */}
        <SectionGroup title="Services Overlay" href="/services-overlay">
          <ComponentLabel label="ServicesOverlaySection — gradient, hover scale, expanding line" variant="styled" />
          <ServicesOverlaySection content={tomArtServicesOverlay} />
          <ComponentLabel label="Overlay cards 5 items (3+2)" variant="wireframe" />
          <ServicesOverlayWireframe content={wireframeServicesOverlay} />
        </SectionGroup>

        {/* ── Services Cards ───────────────────────────── */}
        <SectionGroup title="Services Cards" href="/services-cards">
          <ComponentLabel label="ServicesCardsSection — serif, shadow-md, h2-accent" variant="styled" />
          <ServicesCardsSection content={tomArtServices} />
          <ComponentLabel label="Image cards + features, 5 items (3+2)" variant="wireframe" />
          <ServicesCardsWireframe content={wireframeServicesCards} />
        </SectionGroup>

        {/* ── Services Icon Grid (brak styled) ────────── */}
        <SectionGroup title="Services Icon Grid" href="/services-icon-grid">
          <ComponentLabel label="Icon cards 4 in a row, no images" variant="wireframe" />
          <ServicesIconGridWireframe content={wireframeServicesIconGrid} />
        </SectionGroup>

        {/* ── Features Split (brak styled) ────────────── */}
        <SectionGroup title="Features Split" href="/features-split">
          <ComponentLabel label="2-col: tagline + title + features checklist + CTA | image" variant="wireframe" />
          <FeaturesSplitWireframe content={wireframeFeaturesSplit} />
        </SectionGroup>

        {/* ── Reviews (brak styled) ───────────────────── */}
        <SectionGroup title="Reviews" href="/reviews">
          <ComponentLabel label="3-col grid, stars + quote + author, featured card" variant="wireframe" />
          <ReviewsWireframe content={wireframeReviews} />
        </SectionGroup>

        {/* ── Portfolio ────────────────────────────────── */}
        <SectionGroup title="Portfolio" href="/portfolio">
          <ComponentLabel label="PortfolioSection — framer-motion, corner accents" variant="styled" />
          <PortfolioSection content={tomArtPortfolio} />
          <ComponentLabel label="Mosaic: 1F + 2N + 1W (4 items)" variant="wireframe" />
          <PortfolioWireframe content={wireframePortfolio} />
        </SectionGroup>

        {/* ── Nav ────────────────────────────────────────── */}
        <SectionGroup title="Nav" href="/nav">
          <ComponentLabel label="Fixed navbar: logo + links pill + CTA + mobile menu" variant="wireframe" />
          <NavWireframe content={wireframeNav} />
        </SectionGroup>

        {/* ── CTA Banner ─────────────────────────────────── */}
        <SectionGroup title="CTA Banner" href="/cta-banner">
          <ComponentLabel label="Centered: icon + headline + subtitle + 2 buttons" variant="wireframe" />
          <CtaBannerWireframe content={wireframeCtaBanner} />
        </SectionGroup>

        {/* ── Process ────────────────────────────────────── */}
        <SectionGroup title="Process" href="/process">
          <ComponentLabel label="Vertical step cards: badge + title + description" variant="wireframe" />
          <ProcessWireframe content={wireframeProcess} />
        </SectionGroup>

        {/* ── Stats ──────────────────────────────────────── */}
        <SectionGroup title="Stats" href="/stats">
          <ComponentLabel label="4-col grid: icon + value + label, dividers" variant="wireframe" />
          <StatsWireframe content={wireframeStats} />
        </SectionGroup>

        {/* ── Logos ──────────────────────────────────────── */}
        <SectionGroup title="Logos" href="/logos">
          <ComponentLabel label="6-col grid: logo placeholders in bordered cells" variant="wireframe" />
          <LogosWireframe content={wireframeLogos} />
        </SectionGroup>

        {/* ── Pricing ────────────────────────────────────── */}
        <SectionGroup title="Pricing" href="/pricing">
          <ComponentLabel label="2-col: standard + featured tier, features checklist" variant="wireframe" />
          <PricingWireframe content={wireframePricing} />
        </SectionGroup>

        {/* ── FAQ ────────────────────────────────────────── */}
        <SectionGroup title="FAQ" href="/faq">
          <ComponentLabel label="Centered title + accordion items (all expanded)" variant="wireframe" />
          <FaqWireframe content={wireframeFaq} />
        </SectionGroup>

        {/* ── Contact ────────────────────────────────────── */}
        <SectionGroup title="Contact" href="/contact">
          <ComponentLabel label="2-col: info/image left + form right" variant="wireframe" />
          <ContactWireframe content={wireframeContact} />
        </SectionGroup>

        {/* ── Footer ─────────────────────────────────────── */}
        <SectionGroup title="Footer" href="/footer">
          <ComponentLabel label="CTA row + 4-col grid (brand, contact, links) + copyright" variant="wireframe" />
          <FooterWireframe content={wireframeFooter} />
        </SectionGroup>
      </main>
    </div>
  )
}
