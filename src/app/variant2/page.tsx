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
import { Phone, ArrowRight, Check, Building2, Factory, Home, Warehouse } from "lucide-react"

// ============================================
// VARIANT 2: Full-width Hero + Bento Grid
// Design System: Industrial Boldness
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
    icon: Building2,
    title: "Generalni wykonawcy",
    description: "Szukacie solidnego podwykonawcy na żelbet? Wchodzimy w Wasz harmonogram, dowozimy terminowo, raportujemy postępy. Doświadczenie w pracy z dużymi GW."
  },
  {
    icon: Home,
    title: "Deweloperzy",
    description: "Budynki wielorodzinne, osiedla, apartamentowce. Fundamenty i konstrukcje żelbetowe dla inwestycji mieszkaniowych. Skala nie jest problemem."
  },
  {
    icon: Factory,
    title: "Inwestorzy przemysłowi",
    description: "Hale magazynowe, zakłady produkcyjne, obiekty logistyczne. Fundamenty pod maszyny, zbiorniki technologiczne, konstrukcje specjalne."
  },
  {
    icon: Warehouse,
    title: "Inwestorzy prywatni",
    description: "Dom jednorodzinny lub mały obiekt? Zajmiemy się fundamentami i konstrukcją żelbetową. Ten sam zespół, ta sama jakość."
  }
]

const services = [
  {
    title: "Fundamenty pod każdy obiekt",
    description: "Ławy fundamentowe, płyty fundamentowe, stopy. Pod hale magazynowe, budynki mieszkalne, zakłady produkcyjne. Także fundamenty pod maszyny i urządzenia przemysłowe wymagające specjalnych parametrów.",
    items: ["Ławy i stopy fundamentowe", "Płyty fundamentowe", "Fundamenty pod maszyny przemysłowe", "Fundamenty pod hale i magazyny"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop"
  },
  {
    title: "Ściany nośne i mury oporowe",
    description: "Ściany żelbetowe o dowolnym formacie - nośne, osłonowe, oporowe. Szalunki systemowe dla precyzji wykonania. Piwnice, podziemia garaży, ściany hal przemysłowych.",
    items: ["Ściany nośne żelbetowe", "Mury oporowe", "Ściany piwnic i garaży", "Ściany hal przemysłowych"],
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=600&h=400&fit=crop"
  },
  {
    title: "Stropy monolityczne i prefabrykowane",
    description: "Stropy żelbetowe monolityczne, gęstożebrowe, z elementów prefabrykowanych. Dobór technologii do projektu i budżetu inwestora.",
    items: ["Stropy monolityczne", "Stropy gęstożebrowe", "Stropy prefabrykowane", "Belki i podciągi"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
  },
  {
    title: "Zbiorniki, mosty, przepusty",
    description: "Zbiorniki okrągłe metodą studniarską, oczyszczalnie ścieków, przepompownie. Mosty, przepusty drogowe, kanały rewizyjne. Konstrukcje wymagające specjalistycznego doświadczenia.",
    items: ["Zbiorniki żelbetowe (metoda studniarska)", "Oczyszczalnie i przepompownie", "Mosty i przepusty drogowe", "Komory kanalizacyjne"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
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

// HERO - Full-width image background
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
          alt="Plac budowy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>
      <div className="flex-1 flex items-end">
        <div className="px-[5%] w-full">
          <div className="container relative z-10 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div>
                <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-medium mb-6 rounded">
                  KONSTRUKCJE ŻELBETOWE
                </span>
                <h1 className="text-[2.5rem]/[1.1] font-bold text-white md:text-[3.5rem]/[1.1] lg:text-[4rem]/[1.1]">
                  Żelbet dla budownictwa przemysłowego i mieszkaniowego
                </h1>
              </div>
              <div>
                <p className="text-lg text-white/80 mb-6">
                  Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów gotowy do wejścia na budowę.
                  Tarnów i 4 województwa południowej Polski.
                </p>
                <div className="flex flex-wrap gap-4">
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
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                <div className="text-2xl font-bold text-accent">4</div>
                <div className="text-sm text-white/80">województwa</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                <div className="text-2xl font-bold text-accent">24h</div>
                <div className="text-sm text-white/80">wycena</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-white/80">lat doświadczenia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// WHY US - Bento Grid
function WhyUs() {
  return (
    <SectionWrapper background="default" id="dlaczego-my">
      <SectionHeader
        badge="NASZE ATUTY"
        title="Dlaczego zlecić nam roboty żelbetowe"
        description="Specjalizujemy się w konstrukcjach żelbetowych od fundamentów po stropy. Pracujemy jako podwykonawca dla generalnych wykonawców i bezpośrednio dla inwestorów."
        align="left"
        maxWidth="2xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Large card - accent */}
        <div className="md:col-span-2 p-8 bg-accent text-white rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">{features[0].title}</h3>
          <p className="opacity-90 mb-6">{features[0].description}</p>
          <div className="flex flex-wrap gap-2">
            {["Fundamenty", "Ściany", "Stropy", "Zbiorniki"].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm">{tag}</span>
            ))}
          </div>
        </div>
        {/* Small cards */}
        <FeatureCard
          title={features[3].title}
          description={features[3].description}
          variant="default"
        />
        <FeatureCard
          title={features[2].title}
          description={features[2].description}
          variant="default"
        />
        {/* Wide card */}
        <div className="md:col-span-2 p-8 bg-card border border-border rounded-2xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-foreground">{features[1].title}</h3>
            <p className="text-muted-foreground text-sm">{features[1].description}</p>
          </div>
          <div className="flex-1">
            <ul className="space-y-2">
              {["Zbrojarze", "Cieśle szalunkowi", "Murarze", "Operatorzy sprzętu"].map((role, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent" />
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

// FOR WHOM - Cards with icons
function ForWhom() {
  return (
    <SectionWrapper background="card">
      <SectionHeader
        title="Dla kogo pracujemy"
        description="Realizujemy zlecenia dla firm budowlanych i inwestorów prywatnych."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((segment, index) => (
          <div key={index} className="group p-6 bg-background rounded-xl border border-border hover:border-accent transition-colors">
            <segment.icon className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-lg font-bold mb-2 text-foreground">{segment.title}</h3>
            <p className="text-muted-foreground text-sm">{segment.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

// SERVICES - Alternating layout with images
function Services() {
  return (
    <SectionWrapper background="default" id="uslugi">
      <SectionHeader
        badge="OFERTA"
        title="Zakres robót żelbetowych"
        description="Wykonujemy konstrukcje żelbetowe dla budownictwa przemysłowego, mieszkaniowego i infrastrukturalnego."
      />
      <div className="space-y-16">
        {services.map((service, index) => (
          <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-2xl" />
            </div>
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="grid grid-cols-2 gap-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

// PROCESS - Horizontal steps on accent background
function Process() {
  return (
    <SectionWrapper background="accent" id="proces">
      <SectionHeader
        badge="PROCES"
        title="Jak wygląda współpraca"
        description="Przejrzysty proces od zapytania do odbioru. Wiemy, że liczy się terminowość i brak niespodzianek na budowie."
        light
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <ProcessStep
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            variant="circle"
            isLast={index === processSteps.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

// FAQ - Two columns
function FAQ() {
  const half = Math.ceil(faqQuestions.length / 2)

  return (
    <SectionWrapper background="card" id="faq">
      <SectionHeader title="Najczęściej zadawane pytania" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
        <Accordion type="multiple" className="w-full">
          {faqQuestions.slice(0, half).map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-foreground text-left py-5 text-base md:text-lg">{question.title}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="multiple" className="w-full">
          {faqQuestions.slice(half).map((question, index) => (
            <AccordionItem key={index + half} value={`item-${index + half}`}>
              <AccordionTrigger className="text-foreground text-left py-5 text-base md:text-lg">{question.title}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">Masz inne pytanie?</p>
        <Button className="bg-accent hover:bg-accent/90 text-white">
          Skontaktuj się z nami
        </Button>
      </div>
    </SectionWrapper>
  )
}

// CONTACT - Split with map
function Contact() {
  return (
    <SectionWrapper background="default" id="kontakt">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.5!2d20.9869!3d50.0147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAwJzUzLjAiTiAyMMKwNTknMTIuOCJF!5e0!3m2!1spl!2spl!4v1600000000000!5m2!1spl!2spl"
            className="w-full h-full min-h-[400px] rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div>
          <SectionHeader
            badge="KONTAKT"
            title="Skontaktuj się z nami"
            description="Zadzwoń lub wyślij zapytanie. Wycenę przygotujemy w 24h."
            align="left"
            className="mb-8"
          />
          <ContactInfo className="mb-8" />
          <ContactForm variant="card" />
        </div>
      </div>
    </SectionWrapper>
  )
}

// MAIN PAGE
export default function Variant2Page() {
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
