import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { HeroSplit } from "@/components/sections/hero-split"
import { HeroSplitEdge } from "@/components/sections/hero-split-edge"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ForWhomSection } from "@/components/sections/for-whom-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/Footer"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { SectionDivider } from "@/components/showcase/section-divider"
import { ShowcaseNav } from "@/components/showcase/showcase-nav"
// Demo Content
import {
  demoNavigation,
  heroFullscreen,
  heroCentered,
  heroMinimal,
  heroSplit,
  heroSplitEdge,
  whyUsGrid3,
  whyUsGrid4,
  whyUsGrid6,
  whyUsCards,
  whyUsAuto5,
  demoServices,
  demoForWhom,
  demoProcess,
  demoPortfolio,
  demoFaq,
  demoContact,
  demoFooter,
} from "@/content/demo"

export default function DemoPage() {
  return (
    <>
      <Navigation content={demoNavigation} />

      {/* Theme Switcher */}
      <div className="fixed top-20 right-6 z-50">
        <ThemeSwitcher defaultTheme="sunny" />
      </div>

      {/* Showcase Navigation */}
      <ShowcaseNav />

      <main>
        {/* ── HERO ────────────────────────────────── */}
        <SectionDivider
          id="hero"
          title="HERO"
          description="5 wariantow: fullscreen left, centered, minimal, split contained, split edge-bleed"
          dna="badge, headline (font-display), subheadline, CTA primary + secondary, stats"
          variables="contentPosition, minHeight, backgroundImage, pattern, decorations, split vs full-bg"
        />

        <HeroSection content={heroFullscreen} />
        <HeroSection content={heroCentered} />
        <HeroSection content={heroMinimal} />
        <HeroSplit content={heroSplit} />
        <HeroSplitEdge content={heroSplitEdge} />

        {/* ── OFFER: WHY US + SERVICES + FOR WHOM ── */}
        <SectionDivider
          id="offer"
          title="OFFER"
          description="4 sekcje, 8 wariantow — Why Us (5 layoutow grid), Services (interactive nav), For Whom (image cards), Portfolio (mosaic grid). Spojny kontent jednej agencji kreatywnej."
          dna="section header (tagline + title + accent + subtitle), items grid/list, item (icon/image + title + description)"
          variables="layoutVariant, liczba itemow, ikony, obrazki, tagi, features"
        />

        <WhyUsSection content={whyUsGrid3} />
        <WhyUsSection content={whyUsGrid4} />
        <WhyUsSection content={whyUsGrid6} />
        <WhyUsSection content={whyUsCards} />
        <WhyUsSection content={whyUsAuto5} />
        <ServicesSection content={demoServices} />
        <ForWhomSection content={demoForWhom} />
        <PortfolioSection content={demoPortfolio} />

        {/* ── PROCESS ────────────────────────────── */}
        <SectionDivider
          id="process"
          title="PROCESS"
          description="1 wariant: horizontal step cards"
          dna="section header, horizontal scroll / grid, step card (number + icon + title + description)"
          variables="liczba krokow, ikony, opisy"
        />

        <ProcessSection content={demoProcess} />

        {/* ── FAQ ────────────────────────────────── */}
        <SectionDivider
          id="faq"
          title="FAQ"
          description="1 wariant: accordion z animacja"
          dna="section header, accordion list, item (question + answer + toggle icon)"
          variables="liczba pytan, tresci"
        />

        <FaqSection content={demoFaq} />

        {/* ── CONTACT ────────────────────────────── */}
        <SectionDivider
          id="contact"
          title="CONTACT"
          description="1 wariant: info cards + mapa"
          dna="section header, info grid (phone + email + address), map embed"
          variables="dane kontaktowe, pozycja mapy"
        />

        <ContactSection content={demoContact} />

        {/* ── FOOTER ─────────────────────────────── */}
        <SectionDivider
          id="footer"
          title="FOOTER"
          description="1 wariant: multi-column z logo i linkami"
          dna="logo + opis, column links, social icons, copyright"
          variables="kolumny linkow, social media, tresc copyright"
        />
      </main>

      <Footer content={demoFooter} />
    </>
  )
}
