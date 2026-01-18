"use client"

import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
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
import { Phone, Mail, MapPin, ArrowRight, Check, ChevronDown } from "lucide-react"

// ============================================
// VARIANT 4: Minimal Hero + Masonry Grid
// Design System: Clean & Modern
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
    description: "Szukacie solidnego podwykonawcy na żelbet? Wchodzimy w Wasz harmonogram, dowozimy terminowo, raportujemy postępy. Doświadczenie w pracy z dużymi GW.",
    color: "bg-blue-500"
  },
  {
    title: "Deweloperzy",
    description: "Budynki wielorodzinne, osiedla, apartamentowce. Fundamenty i konstrukcje żelbetowe dla inwestycji mieszkaniowych. Skala nie jest problemem.",
    color: "bg-green-500"
  },
  {
    title: "Inwestorzy przemysłowi",
    description: "Hale magazynowe, zakłady produkcyjne, obiekty logistyczne. Fundamenty pod maszyny, zbiorniki technologiczne, konstrukcje specjalne.",
    color: "bg-purple-500"
  },
  {
    title: "Inwestorzy prywatni",
    description: "Dom jednorodzinny lub mały obiekt? Zajmiemy się fundamentami i konstrukcją żelbetową. Ten sam zespół, ta sama jakość.",
    color: "bg-orange-500"
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

// HERO - Minimal centered
function Hero() {
  return (
    <section className="px-[5%] min-h-[80vh] flex items-center justify-center bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium">KONSTRUKCJE ŻELBETOWE</span>
          </div>
          <h1 className="text-[3rem]/[1.1] font-bold md:text-[4rem]/[1.1] lg:text-[5rem]/[1.1] text-foreground mb-8">
            Żelbet dla budownictwa{" "}
            <span className="text-accent">przemysłowego</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów gotowy do wejścia na budowę.
            Tarnów i 4 województwa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń: 696 092 434
            </Button>
            <Button size="lg" variant="outline">
              Wyślij projekt do wyceny
            </Button>
          </div>
          <div className="mt-16 flex justify-center">
            <button className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors">
              <span className="text-sm mb-2">Poznaj nas</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// WHY US - Masonry grid
function WhyUs() {
  return (
    <SectionWrapper background="card" id="dlaczego-my">
      <SectionHeader
        badge="NASZE ATUTY"
        title="Dlaczego zlecić nam roboty żelbetowe"
        description="Specjalizujemy się w konstrukcjach żelbetowych od fundamentów po stropy. Pracujemy jako podwykonawca dla generalnych wykonawców i bezpośrednio dla inwestorów."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tall card */}
        <div className="md:row-span-2 p-8 bg-accent text-white rounded-3xl flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-3xl font-bold mb-4">Pełen zakres robót żelbetowych</h3>
            <p className="opacity-90">
              Fundamenty, ściany nośne, stropy monolityczne, zbiorniki, mury oporowe. Jeden wykonawca na cały żelbet - bez koordynowania kilku ekip.
            </p>
          </div>
          <div className="mt-8">
            <div className="text-6xl font-bold opacity-20">01</div>
          </div>
        </div>

        {/* Small cards */}
        <div className="p-8 bg-background rounded-3xl border border-border">
          <div className="text-5xl font-bold text-accent mb-4">24h</div>
          <h3 className="text-xl font-bold mb-2 text-foreground">Wycena w 24h</h3>
          <p className="text-muted-foreground text-sm">
            Wyślij projekt - wycenę otrzymasz w ciągu jednego dnia roboczego. Bez czekania tygodniami.
          </p>
        </div>

        <div className="p-8 bg-background rounded-3xl border border-border">
          <div className="text-5xl font-bold text-accent mb-4">4</div>
          <h3 className="text-xl font-bold mb-2 text-foreground">Województwa</h3>
          <p className="text-muted-foreground text-sm">
            Małopolskie, Podkarpackie, Śląskie, Świętokrzyskie.
          </p>
        </div>

        {/* Wide card */}
        <div className="md:col-span-2 p-8 bg-background rounded-3xl border border-border">
          <h3 className="text-xl font-bold mb-2 text-foreground">Własny zespół specjalistów</h3>
          <p className="text-muted-foreground text-sm mb-4">Wykwalifikowani zbrojarze, cieśle szalunkowi, murarze. Nie korzystamy z przypadkowych podwykonawców - mamy stały, sprawdzony zespół.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Zbrojarze", "Cieśle szalunkowi", "Murarze", "Operatorzy sprzętu"].map((role, i) => (
              <div key={i} className="p-4 bg-card rounded-xl text-center">
                <span className="text-sm text-muted-foreground">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

// FOR WHOM - Horizontal scroll
function ForWhom() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-background overflow-hidden">
      <div className="container px-[5%] mb-12">
        <h2 className="text-[2.25rem]/[1.2] font-bold md:text-[2.75rem]/[1.2] lg:text-[3rem]/[1.2] text-foreground">
          Dla kogo pracujemy
        </h2>
      </div>
      <div className="flex gap-6 overflow-x-auto px-[5%] pb-4 snap-x snap-mandatory scrollbar-hide">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 p-8 bg-card rounded-3xl border border-border snap-start"
          >
            <div className={`w-12 h-12 ${segment.color} rounded-2xl mb-6`} />
            <h3 className="text-xl font-bold mb-3 text-foreground">{segment.title}</h3>
            <p className="text-muted-foreground">{segment.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// SERVICES - Grid with hover
function Services() {
  return (
    <SectionWrapper background="card" id="uslugi">
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
    <SectionWrapper background="default" id="proces">
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

// FAQ - Grid
function FAQ() {
  return (
    <SectionWrapper background="card" id="faq">
      <SectionHeader title="Najczęściej zadawane pytania" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {faqQuestions.map((item, index) => (
          <div key={index} className="p-6 bg-background rounded-2xl">
            <h3 className="font-bold mb-2 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.answer}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

// CONTACT - Split layout on accent
function Contact() {
  return (
    <SectionWrapper background="accent" id="kontakt">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <h2 className="text-[2.25rem]/[1.2] font-bold md:text-[2.75rem]/[1.2] lg:text-[3rem]/[1.2] mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Zadzwoń lub wyślij zapytanie. Wycenę przygotujemy w 24h.
          </p>
          <div className="space-y-4">
            <a href="tel:696092434" className="flex items-center gap-4 text-lg hover:text-white/80 transition-colors">
              <Phone className="w-6 h-6" />
              696 092 434
            </a>
            <a href="mailto:pbitarnow@gmail.com" className="flex items-center gap-4 text-lg hover:text-white/80 transition-colors">
              <Mail className="w-6 h-6" />
              pbitarnow@gmail.com
            </a>
            <div className="flex items-center gap-4 text-lg">
              <MapPin className="w-6 h-6" />
              Tarnów
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  )
}

// MAIN PAGE
export default function Variant4Page() {
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
