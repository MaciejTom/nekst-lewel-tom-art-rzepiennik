import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { HeroSplit } from "@/components/sections/hero-split"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ForWhomSection } from "@/components/sections/for-whom-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/Footer"

// Content
import {
  navigationContent,
  heroContent,
  heroContent2,
  heroContent3,
  heroSplitContent,
  whyUsContent,
  servicesContent,
  forWhomContent,
  processContent,
  portfolioContent,
  faqContent,
  contactContent,
  footerContent,
} from "@/content/niedziela-klusek"

export default function HomePage() {
  return (
    <>
      <Navigation content={navigationContent} />
      <main>
        {/* Hero 1 - Konstrukcje żelbetowe (accent na linii 1) */}
        <HeroSection content={heroContent} />

        {/* Hero 2 - Usługi remontowe (accent na linii 0) */}
        <HeroSection content={heroContent2} />

        {/* Hero 3 - Fotowoltaika (minimalna - bez stats) */}
        <HeroSection content={heroContent3} />

        {/* Hero 4 - Split (Fixman - tekst + zdjęcie) */}
        <HeroSplit content={heroSplitContent} />

        <WhyUsSection content={whyUsContent} />
        <ServicesSection content={servicesContent} />
        <ForWhomSection content={forWhomContent} />
        <ProcessSection content={processContent} />
        <PortfolioSection content={portfolioContent} />
        <FaqSection content={faqContent} />
        <ContactSection content={contactContent} />
      </main>
      <Footer content={footerContent} />
    </>
  )
}