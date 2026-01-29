import {
  Phone,
  MapPin,
  FileText,
  Paintbrush,
  Grid3X3,
  Palette,
  Hammer,
  Thermometer,
  Wrench,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"

import { heroContent } from "@/content/tom-art/hero"
import { servicesContent } from "@/content/tom-art/services"
import { tomArtServicesEditorial } from "@/content/tom-art/services-editorial"
import { processContent } from "@/content/tom-art/process"
import { whyUsContent } from "@/content/tom-art/why-us"
import { aboutContent } from "@/content/tom-art/about"
import { faqContent } from "@/content/tom-art/faq"
import { contactContent } from "@/content/tom-art/contact"

// Icon map for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  Phone,
  MapPin,
  FileText,
  Paintbrush,
  Grid3X3,
  Palette,
  Hammer,
  Thermometer,
  Wrench,
  CheckCircle,
}

// ===========================================
// NAV SECTION
// ===========================================
const navLinks = [
  { label: "Uslugi", href: "#uslugi" },
  { label: "Proces", href: "#proces" },
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
]

function NavSection() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-foreground">
            TOM-ART
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:690651606"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            690 651 606
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

// ===========================================
// HERO SECTION
// ===========================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/tom-art/hero.jpg"
          alt="Odnowione wnetrze domu"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          {heroContent.badge && (
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 text-sm font-medium tracking-wide rounded-full mb-8 animate-fade-up">
              {heroContent.badge}
            </span>
          )}

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {heroContent.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line === heroContent.headlineAccent ? (
                  <span className="text-primary">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {heroContent.subtitle}
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="tel:690651606"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              {heroContent.ctaPrimary.text}
            </a>
            {heroContent.ctaSecondary && (
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-lg hover:bg-secondary/90 transition-all"
              >
                {heroContent.ctaSecondary.text}
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {heroContent.scrollText && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-sm">{heroContent.scrollText}</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      )}
    </section>
  )
}

// ===========================================
// SERVICES SECTION
// ===========================================
function ServicesSection() {
  return (
    <section id="uslugi" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            {servicesContent.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 h2-accent-center">
            {servicesContent.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {servicesContent.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesContent.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Hammer
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            )
          })}

          {/* CTA Card */}
          {servicesContent.ctaCard && (
            <div className="bg-secondary text-secondary-foreground p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold mb-3">
                {servicesContent.ctaCard.title}
              </h3>
              {servicesContent.ctaCard.description && (
                <p className="text-secondary-foreground/80 mb-6 text-sm">
                  {servicesContent.ctaCard.description}
                </p>
              )}
              <a
                href="tel:690651606"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {servicesContent.ctaCard.buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// PROCESS SECTION
// ===========================================
function ProcessSection() {
  return (
    <section id="proces" className="bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 h2-accent-center">
            {processContent.title}
          </h2>
          {processContent.subtitle && (
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {processContent.subtitle}
            </p>
          )}
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto space-y-6">
          {processContent.steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card border border-border/50 rounded-xl p-6 pl-20 hover:shadow-md transition-shadow"
            >
              {/* Step number */}
              <div className="absolute left-6 top-6 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              {/* Content */}
              <span className="text-xs text-primary font-medium tracking-wider uppercase mb-2 block">
                {step.badge}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// WHY US SECTION
// ===========================================
function WhyUsSection() {
  return (
    <section id="dlaczego" className="bg-secondary text-secondary-foreground py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            {whyUsContent.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{whyUsContent.title}</h2>
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {whyUsContent.services.map((usp, index) => {
            return (
              <div key={index} className="flex gap-5">
                {/* 3D Icon */}
                <div className="w-16 h-16 shrink-0">
                  <Image
                    src="/images/tom-art/icons/wrench.png"
                    alt=""
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">{usp.title}</h3>
                  <p className="text-secondary-foreground/80 leading-relaxed text-sm">
                    {usp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// ABOUT SECTION
// ===========================================
function AboutSection() {
  return (
    <section id="o-mnie" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - content */}
          <div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              {aboutContent.tagline}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 h2-accent">
              {aboutContent.title}
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 mb-8">
              {aboutContent.description.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {aboutContent.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="tel:690651606"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {aboutContent.cta.text}
            </a>
          </div>

          {/* Right - image placeholder */}
          <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
            {/* Placeholder for AI image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
              <div className="w-20 h-20 border-2 border-dashed border-border rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">T</span>
              </div>
              <span className="text-sm">Zdjecie wlasciciela</span>
              <span className="text-xs text-muted-foreground/60 mt-1">
                (placeholder)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// FAQ SECTION
// ===========================================
function FaqSection() {
  return (
    <section id="faq" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 h2-accent-center">
            {faqContent.title}
          </h2>
          {faqContent.subtitle && (
            <p className="text-muted-foreground max-w-xl mx-auto">
              {faqContent.subtitle}
            </p>
          )}
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqContent.items.map((item, index) => (
            <details
              key={index}
              className="group bg-card border border-border/50 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                <span className="font-semibold text-foreground pr-4">
                  {item.question}
                </span>
                <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// CONTACT SECTION
// ===========================================
function ContactSection() {
  return (
    <section id="kontakt" className="bg-background py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left - info */}
          <div>
            {contactContent.badge && (
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                {contactContent.badge}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 h2-accent">
              {contactContent.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {contactContent.description}
            </p>

            {/* Contact items */}
            {contactContent.contactItems && (
              <div className="space-y-4">
                {contactContent.contactItems.map((item, i) => {
                  const Icon = iconMap[item.icon || "Phone"] || Phone
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Right - form */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {contactContent.formTitle}
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactContent.fields.map((field, i) => (
                  <div
                    key={i}
                    className={field.half ? "" : "col-span-1 md:col-span-2"}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        placeholder={field.placeholder}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary min-h-[120px] resize-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      />
                    )}
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {contactContent.submitText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// FOOTER
// ===========================================
function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold">TOM-ART</span>
            <p className="text-secondary-foreground/70 text-sm mt-1">
              Uslugi remontowe — Rzepiennik i okolice Tarnowa
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-secondary-foreground/70">
            <a href="tel:690651606" className="hover:text-primary transition-colors">
              690 651 606
            </a>
            <span>NIP: 9930712739</span>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/50">
          &copy; {new Date().getFullYear()} TOM-ART Tomasz Wszolek. Wszelkie prawa
          zastrzezone.
        </div>
      </div>
    </footer>
  )
}

// ===========================================
// MAIN PAGE
// ===========================================
export default function TomArtPage() {
  return (
    <main>
      <NavSection />
      <HeroSection />
      <ServicesSection />
      <ServicesEditorialSection content={tomArtServicesEditorial} />
      <ProcessSection />
      <WhyUsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
