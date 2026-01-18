"use client"

import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  SectionWrapper,
  SectionHeader,
  FeatureCard,
  ServiceCard,
  ProcessStep,
  StatCard,
  ContactForm,
  ContactInfo,
  Footer,
} from "@/components/sections"
import { Phone, Mail, ArrowRight, Check } from "lucide-react"

// ============================================
// VARIANT 3: Video Hero + Stacked Sections
// Design System: Modern & Dynamic
// ============================================

// Data - identyczne jak variant1
const features = [
  {
    title: "Pełen zakres robót żelbetowych",
    description: "Fundamenty, ściany nośne, stropy monolityczne, zbiorniki, mury oporowe. Jeden wykonawca na cały żelbet - bez koordynowania kilku ekip."
  },
  {
    title: "Własny zespół specjalistów",
    description: "Wykwalifikowani zbrojarze, cieśle szalunkowi, murarze. Nie korzystamy z przypadkowych podwykonawców - mamy stały, sprawdzony zespół."
  },
  {
    title: "Zasięg 4 województw",
    description: "Małopolskie, Podkarpackie, Śląskie, Świętokrzyskie. Dojeżdżamy na budowy w całej południowej Polsce."
  },
  {
    title: "Wycena w 24h",
    description: "Wyślij projekt - wycenę otrzymasz w ciągu jednego dnia roboczego. Bez czekania tygodniami."
  }
]

const segments = [
  {
    title: "Generalni wykonawcy",
    description: "Szukacie solidnego podwykonawcy na żelbet? Wchodzimy w Wasz harmonogram, dowozimy terminowo, raportujemy postępy. Doświadczenie w pracy z dużymi GW."
  },
  {
    title: "Deweloperzy",
    description: "Budynki wielorodzinne, osiedla, apartamentowce. Fundamenty i konstrukcje żelbetowe dla inwestycji mieszkaniowych. Skala nie jest problemem."
  },
  {
    title: "Inwestorzy przemysłowi",
    description: "Hale magazynowe, zakłady produkcyjne, obiekty logistyczne. Fundamenty pod maszyny, zbiorniki technologiczne, konstrukcje specjalne."
  },
  {
    title: "Inwestorzy prywatni",
    description: "Dom jednorodzinny lub mały obiekt? Zajmiemy się fundamentami i konstrukcją żelbetową. Ten sam zespół, ta sama jakość."
  }
]

const services = [
  {
    title: "Fundamenty pod każdy obiekt",
    description: "Ławy fundamentowe, płyty fundamentowe, stopy. Pod hale magazynowe, budynki mieszkalne, zakłady produkcyjne. Także fundamenty pod maszyny i urządzenia przemysłowe wymagające specjalnych parametrów.",
    items: ["Ławy i stopy fundamentowe", "Płyty fundamentowe", "Fundamenty pod maszyny przemysłowe", "Fundamenty pod hale i magazyny"]
  },
  {
    title: "Ściany nośne i mury oporowe",
    description: "Ściany żelbetowe o dowolnym formacie - nośne, osłonowe, oporowe. Szalunki systemowe dla precyzji wykonania. Piwnice, podziemia garaży, ściany hal przemysłowych.",
    items: ["Ściany nośne żelbetowe", "Mury oporowe", "Ściany piwnic i garaży", "Ściany hal przemysłowych"]
  },
  {
    title: "Stropy monolityczne i prefabrykowane",
    description: "Stropy żelbetowe monolityczne, gęstożebrowe, z elementów prefabrykowanych. Dobór technologii do projektu i budżetu inwestora.",
    items: ["Stropy monolityczne", "Stropy gęstożebrowe", "Stropy prefabrykowane", "Belki i podciągi"]
  },
  {
    title: "Zbiorniki, mosty, przepusty",
    description: "Zbiorniki okrągłe metodą studniarską, oczyszczalnie ścieków, przepompownie. Mosty, przepusty drogowe, kanały rewizyjne. Konstrukcje wymagające specjalistycznego doświadczenia.",
    items: ["Zbiorniki żelbetowe (metoda studniarska)", "Oczyszczalnie i przepompownie", "Mosty i przepusty drogowe", "Komory kanalizacyjne"]
  }
]

const processSteps = [
  { number: "01", title: "Zapytanie i wycena", description: "Wyślij projekt lub zadzwoń. Wycenę przygotujemy w 24h. Określamy zakres, harmonogram, warunki współpracy." },
  { number: "02", title: "Ustalenie szczegółów", description: "Spotkanie na budowie lub online. Omawiamy dokumentację, dostęp do placu, koordynację z innymi ekipami." },
  { number: "03", title: "Realizacja", description: "Wchodzimy zgodnie z harmonogramem. Własny zespół, własny sprzęt szalunkowy. Raportujemy postępy, reagujemy na zmiany projektowe." },
  { number: "04", title: "Odbiór", description: "Wspólny odbiór robót, protokół, dokumentacja powykonawcza. Gwarancja na wykonane prace." }
]

const faqQuestions = [
  {
    title: "Czy pracujecie jako podwykonawca dla generalnych wykonawców?",
    answer: "Tak, większość naszych zleceń to współpraca z generalnymi wykonawcami. Wchodzimy w harmonogram, raportujemy postępy, dowozimy terminowo."
  },
  {
    title: "Jaki jest Wasz zasięg działania?",
    answer: "Działamy w 4 województwach: Małopolskie, Podkarpackie, Śląskie, Świętokrzyskie. Siedziba w Tarnowie, dojeżdżamy na budowy w całym regionie."
  },
  {
    title: "Jak szybko możecie wejść na budowę?",
    answer: "Zależy od aktualnego obłożenia. Wycenę przygotujemy w 24h, termin wejścia ustalamy indywidualnie. Przy pilnych zleceniach staramy się reagować elastycznie."
  },
  {
    title: "Czy macie własny sprzęt?",
    answer: "Tak, dysponujemy szalunkami systemowymi i podstawowym sprzętem. Przy większych realizacjach współpracujemy z wypożyczalniami sprzętu."
  },
  {
    title: "Firma działa od 2023 - czy macie doświadczenie?",
    answer: "Firma jest zarejestrowana od 2023 roku, ale właściciele mają wieloletnie doświadczenie w branży budowlanej. Pracowaliśmy przy konstrukcjach żelbetowych przez wiele lat przed założeniem własnej działalności."
  }
]

const stats = [
  { value: "4", label: "województwa zasięgu" },
  { value: "24h", label: "wycena" },
  { value: "15+", label: "lat doświadczenia zespołu" },
  { value: "100%", label: "własny zespół" }
]

// HERO - Video background
function Hero() {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container relative">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
          <div className="w-full max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-accent/90 text-white text-sm font-medium mb-6 rounded-full">
              KONSTRUKCJE ŻELBETOWE
            </span>
            <h1 className="mb-5 text-[2.5rem]/[1.2] font-bold text-white md:mb-6 md:text-[3.25rem]/[1.2] lg:text-[4rem]/[1.2]">
              Żelbet dla budownictwa przemysłowego i mieszkaniowego
            </h1>
            <p className="text-white/90 md:text-xl max-w-2xl mx-auto">
              Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów gotowy do wejścia na budowę.
              Tarnów i 4 województwa południowej Polski.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń: 696 092 434
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Wyślij projekt do wyceny
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
          <video
            className="absolute inset-0 aspect-video size-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>
    </section>
  )
}

// STATS BAR
function StatsBar() {
  return (
    <section className="px-[5%] py-8 bg-accent">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} value={stat.value} label={stat.label} variant="ghost" />
          ))}
        </div>
      </div>
    </section>
  )
}

// WHY US - Stacked cards with images
function WhyUs() {
  return (
    <SectionWrapper background="default" id="dlaczego-my">
      <SectionHeader
        badge="NASZE ATUTY"
        title="Dlaczego zlecić nam roboty żelbetowe"
        description="Specjalizujemy się w konstrukcjach żelbetowych od fundamentów po stropy. Pracujemy jako podwykonawca dla generalnych wykonawców i bezpośrednio dla inwestorów."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            variant="border-left"
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

// FOR WHOM - Cards with benefits
function ForWhom() {
  return (
    <SectionWrapper background="card">
      <SectionHeader
        title="Dla kogo pracujemy"
        description="Realizujemy zlecenia dla firm budowlanych i inwestorów prywatnych."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((segment, index) => (
          <FeatureCard
            key={index}
            title={segment.title}
            description={segment.description}
            variant="default"
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

// SERVICES - Cards grid on primary background
function Services() {
  return (
    <SectionWrapper background="primary" id="uslugi">
      <SectionHeader
        badge="OFERTA"
        title="Zakres robót żelbetowych"
        description="Wykonujemy konstrukcje żelbetowe dla budownictwa przemysłowego, mieszkaniowego i infrastrukturalnego."
        light
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            items={service.items}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

// PROCESS - Vertical timeline
function Process() {
  return (
    <SectionWrapper background="default" id="proces">
      <SectionHeader
        badge="PROCES"
        title="Jak wygląda współpraca"
        description="Przejrzysty proces od zapytania do odbioru. Wiemy, że liczy się terminowość i brak niespodzianek na budowie."
      />
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20" />
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-accent text-white font-bold text-xl flex items-center justify-center">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

// FAQ - Sidebar layout
function FAQ() {
  return (
    <SectionWrapper background="card" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <h2 className="text-[2.25rem]/[1.2] font-bold md:text-[2.75rem]/[1.2] text-foreground mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-muted-foreground mb-6">
              Odpowiedzi na pytania o naszą współpracę.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Skontaktuj się z nami
            </Button>
          </div>
          <Accordion type="multiple" className="w-full">
            {faqQuestions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-foreground text-left py-6 text-base md:text-lg">{question.title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionWrapper>
  )
}

// CTA
function CTA() {
  return (
    <SectionWrapper background="accent">
      <div className="text-center">
        <h2 className="text-[2.25rem]/[1.2] font-bold md:text-[2.75rem]/[1.2] lg:text-[3rem]/[1.2] text-white mb-6">
          Potrzebujesz wyceny?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Wyślij projekt lub zadzwoń - wycenę przygotujemy w 24h.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-accent hover:bg-white/90">
            <Phone className="w-4 h-4 mr-2" />
            Zadzwoń: 696 092 434
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Mail className="w-4 h-4 mr-2" />
            pbitarnow@gmail.com
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

// CONTACT - Centered form
function Contact() {
  return (
    <SectionWrapper background="default" id="kontakt">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <SectionHeader
            badge="KONTAKT"
            title="Skontaktuj się z nami"
            description="Zadzwoń lub wyślij zapytanie. Wycenę przygotujemy w 24h."
            align="left"
            className="mb-8"
          />
          <ContactInfo />
        </div>
        <ContactForm variant="card" />
      </div>
    </SectionWrapper>
  )
}

// MAIN PAGE
export default function Variant3Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <StatsBar />
      <WhyUs />
      <ForWhom />
      <Services />
      <Process />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
