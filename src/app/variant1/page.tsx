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
  ContactForm,
  ContactInfo,
  Footer,
} from "@/components/sections"
import { Phone, Check } from "lucide-react"

// ============================================
// VARIANT 1: Split Layout Hero + Grid Features
// Design System: Sophistication & Trust
// ============================================

// Data
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

// HERO - Split layout
function Hero() {
  return (
    <SectionWrapper background="default">
      <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider rounded">
            KONSTRUKCJE ŻELBETOWE
          </span>
          <h1 className="mb-6 text-[2.5rem]/[1.15] font-bold md:text-[3.25rem]/[1.15] lg:text-[3.5rem]/[1.15] text-foreground">
            Żelbet dla budownictwa przemysłowego i mieszkaniowego
          </h1>
          <p className="text-lg text-muted-foreground">
            Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów gotowy do wejścia na budowę.
            Tarnów i 4 województwa południowej Polski.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń: 696 092 434
            </Button>
            <Button size="lg" variant="outline">
              Wyślij projekt do wyceny
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {["4 województwa zasięgu", "Zespół zbrojarzy i cieśli szalunkowych", "Wycena w 24h"].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
            className="w-full object-cover rounded-2xl"
            alt="Konstrukcja żelbetowa w trakcie realizacji"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

// WHY US
function WhyUs() {
  return (
    <SectionWrapper background="card" id="dlaczego-my">
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

// FOR WHOM
function ForWhom() {
  return (
    <SectionWrapper background="primary">
      <SectionHeader
        title="Dla kogo pracujemy"
        description="Realizujemy zlecenia dla firm budowlanych i inwestorów prywatnych."
        light
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((segment, index) => (
          <FeatureCard
            key={index}
            title={segment.title}
            description={segment.description}
            variant="ghost"
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

// SERVICES
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

// PROCESS
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

// FAQ
function FAQ() {
  return (
    <SectionWrapper background="default" id="faq">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="Najczęściej zadawane pytania" />
        <Accordion type="multiple" className="w-full">
          {faqQuestions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-foreground text-left py-5 text-base md:text-lg">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Masz inne pytanie?</p>
          <Button className="bg-accent hover:bg-accent/90 text-white">
            Skontaktuj się z nami
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

// CONTACT
function Contact() {
  return (
    <SectionWrapper background="card" id="kontakt">
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
export default function Variant1Page() {
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
