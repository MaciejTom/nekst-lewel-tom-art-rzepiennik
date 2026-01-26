import type { ProcessContent } from '@/types'

export const processContent: ProcessContent = {
  tagline: "/ PROCES",
  title: "JAK WYGLĄDA",
  titleAccent: "WSPÓŁPRACA",

  steps: [
    {
      number: "01",
      icon: "file-text",
      title: "Zapytanie i wycena",
      subtitle: "Wycena w 24h",
      description: "Wyślij projekt lub zadzwoń. Wycenę przygotujemy w 24h. Określamy zakres, harmonogram, warunki współpracy."
    },
    {
      number: "02",
      icon: "message-square",
      title: "Ustalenie szczegółów",
      subtitle: "Spotkanie",
      description: "Spotkanie na budowie lub online. Omawiamy dokumentację, dostęp do placu, koordynację z innymi ekipami."
    },
    {
      number: "03",
      icon: "hard-hat",
      title: "Realizacja",
      subtitle: "Własny zespół",
      description: "Wchodzimy zgodnie z harmonogramem. Własny zespół, własny sprzęt szalunkowy. Raportujemy postępy, reagujemy na zmiany projektowe."
    },
    {
      number: "04",
      icon: "clipboard-check",
      title: "Odbiór",
      subtitle: "Gwarancja",
      description: "Wspólny odbiór robót, protokół, dokumentacja powykonawcza. Gwarancja na wykonane prace."
    }
  ],

  bottomCta: {
    text: "Zamów wycenę teraz",
    label: "Masz gotowy projekt?",
    href: "#kontakt"
  }
}
