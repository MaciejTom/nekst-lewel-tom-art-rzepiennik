import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { WhyUsAlternative } from "@/components/sections/why-us-alternative"
import { ForWhomSection } from "@/components/sections/for-whom-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/Footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WhyUsAlternative />
        <ServicesSection />
        <ForWhomSection />
        <ProcessSection />
        <PortfolioSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}