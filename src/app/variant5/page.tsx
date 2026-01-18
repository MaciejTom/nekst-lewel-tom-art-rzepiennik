"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  SectionWrapper,
  SectionHeader,
  FeatureCard,
  ServiceCard,
  ProcessStep,
  ContactForm,
  ContactInfo,
  Footer,
} from "@/components/sections"
import { Phone, ArrowRight, Check } from "lucide-react"

// ============================================
// VARIANT 5: Carousel Hero + Sidebar Layout
// Design System: Interactive & Engaging
// ============================================

// Data - identyczne jak variant1
const images = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=800&fit=crop"
]

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
    title: "GW",
    fullTitle: "Generalni wykonawcy",
    description: "Szukacie solidnego podwykonawcy na żelbet? Wchodzimy w Wasz harmonogram, dowozimy terminowo, raportujemy postępy. Doświadczenie w pracy z dużymi GW.",
    benefits: ["Wchodzimy w harmonogram", "Terminowa realizacja", "Raportujemy postępy", "Elastyczność"]
  },
  {
    title: "Deweloperzy",
    fullTitle: "Deweloperzy",
    description: "Budynki wielorodzinne, osiedla, apartamentowce. Fundamenty i konstrukcje żelbetowe dla inwestycji mieszkaniowych. Skala nie jest problemem.",
    benefits: ["Duże projekty", "Inwestycje mieszkaniowe", "Powtarzalność", "Jakość"]
  },
  {
    title: "Przemysł",
    fullTitle: "Inwestorzy przemysłowi",
    description: "Hale magazynowe, zakłady produkcyjne, obiekty logistyczne. Fundamenty pod maszyny, zbiorniki technologiczne, konstrukcje specjalne.",
    benefits: ["Obiekty przemysłowe", "Fundamenty pod maszyny", "Zbiorniki technologiczne", "Konstrukcje specjalne"]
  },
  {
    title: "Prywatni",
    fullTitle: "Inwestorzy prywatni",
    description: "Dom jednorodzinny lub mały obiekt? Zajmiemy się fundamentami i konstrukcją żelbetową. Ten sam zespół, ta sama jakość.",
    benefits: ["Domy jednorodzinne", "Indywidualne podejście", "Ten sam zespół", "Ta sama jakość"]
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

// HERO - Slider style with multiple images
function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <section className="px-[5%] py-8 md:py-12 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-white text-xs font-medium rounded mb-6">
              KONSTRUKCJE ŻELBETOWE
            </div>
            <h1 className="text-[2.5rem]/[1.1] font-bold md:text-[3rem]/[1.1] lg:text-[3.5rem]/[1.1] text-foreground mb-6">
              Żelbet dla budownictwa przemysłowego
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów gotowy do wejścia na budowę.
              Tarnów i 4 województwa południowej Polski.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Phone className="w-4 h-4 mr-2" />
                696 092 434
              </Button>
              <Button size="lg" variant="outline">
                Wyślij projekt
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                4 województwa
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                Wycena 24h
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={images[currentImage]}
                alt="Realizacja"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImage === index ? "bg-accent" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// WHY US - Sidebar layout
function WhyUs() {
  return (
    <SectionWrapper background="card" id="dlaczego-my">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider rounded">
            NASZE ATUTY
          </span>
          <h2 className="text-[2rem]/[1.2] font-bold md:text-[2.5rem]/[1.2] text-foreground mb-4">
            Dlaczego zlecić nam roboty żelbetowe
          </h2>
          <p className="text-muted-foreground">
            Specjalizujemy się w konstrukcjach żelbetowych od fundamentów po stropy. Pracujemy jako podwykonawca dla generalnych wykonawców i bezpośrednio dla inwestorów.
          </p>
        </div>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              variant="border-left"
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

// FOR WHOM - Tabs style
function ForWhom() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <SectionWrapper background="default">
      <SectionHeader title="Dla kogo pracujemy" />
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {segments.map((segment, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === index
                  ? "bg-accent text-white"
                  : "bg-card text-muted-foreground hover:bg-accent/10"
              }`}
            >
              {segment.title}
            </button>
          ))}
        </div>
        <div className="p-8 bg-card rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-foreground">{segments[activeTab].fullTitle}</h3>
          <p className="text-muted-foreground mb-6">{segments[activeTab].description}</p>
          <div className="grid grid-cols-2 gap-4">
            {segments[activeTab].benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

// SERVICES - Cards on default background
function Services() {
  return (
    <SectionWrapper background="default" id="uslugi">
      <SectionHeader
        badge="OFERTA"
        title="Zakres robót żelbetowych"
        description="Wykonujemy konstrukcje żelbetowe dla budownictwa przemysłowego, mieszkaniowego i infrastrukturalnego."
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

// PROCESS - Cards
function Process() {
  return (
    <SectionWrapper background="card" id="proces">
      <SectionHeader
        badge="PROCES"
        title="Jak wygląda współpraca"
        description="Przejrzysty proces od zapytania do odbioru. Wiemy, że liczy się terminowość i brak niespodzianek na budowie."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <ProcessStep
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            variant="large-number"
            isLast={index === processSteps.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

// FAQ - Expandable cards
function FAQ() {
  return (
    <SectionWrapper background="card" id="faq">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="Najczęściej zadawane pytania" />
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqQuestions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-xl border-0 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-foreground text-left hover:no-underline py-5 text-base md:text-lg">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}

// CONTACT - Cards with form
function Contact() {
  return (
    <SectionWrapper background="default" id="kontakt">
      <SectionHeader
        badge="KONTAKT"
        title="Skontaktuj się z nami"
        description="Zadzwoń lub wyślij zapytanie. Wycenę przygotujemy w 24h."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <ContactInfo />
        <div className="lg:col-span-2">
          <ContactForm variant="card" />
        </div>
      </div>
    </SectionWrapper>
  )
}

// MAIN PAGE
export default function Variant5Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhyUs />
      <ForWhom />
      <Services />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
