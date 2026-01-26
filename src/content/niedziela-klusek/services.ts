import type { ServicesContent } from '@/types'

export const servicesContent: ServicesContent = {
  tagline: "/ USŁUGI",
  title: "ZAKRES",
  titleAccent: "ROBÓT ŻELBETOWYCH",
  subtitle: "Wykonujemy konstrukcje żelbetowe dla budownictwa przemysłowego, mieszkaniowego i infrastrukturalnego.",

  items: [
    {
      id: "fundamenty",
      icon: "cuboid",
      title: "Fundamenty",
      shortDesc: "Pod każdy obiekt budowlany.",
      fullDesc: "Ławy fundamentowe, płyty fundamentowe, stopy. Pod hale magazynowe, budynki mieszkalne, zakłady produkcyjne. Także fundamenty pod maszyny i urządzenia przemysłowe wymagające specjalnych parametrów.",
      image: "/s-real-walls.jpg",
      features: ["Ławy i stopy fundamentowe", "Płyty fundamentowe", "Fundamenty pod maszyny przemysłowe", "Fundamenty pod hale i magazyny"]
    },
    {
      id: "sciany",
      icon: "blocks",
      title: "Ściany żelbetowe",
      shortDesc: "Nośne i mury oporowe.",
      fullDesc: "Ściany żelbetowe o dowolnym formacie - nośne, osłonowe, oporowe. Szalunki systemowe dla precyzji wykonania. Piwnice, podziemia garaży, ściany hal przemysłowych.",
      image: "/s-real-foundations.jpg",
      features: ["Ściany nośne żelbetowe", "Mury oporowe", "Ściany piwnic i garaży", "Ściany hal przemysłowych"]
    },
    {
      id: "stropy",
      icon: "layers",
      title: "Stropy",
      shortDesc: "Monolityczne i prefabrykowane.",
      fullDesc: "Stropy żelbetowe monolityczne, gęstożebrowe, z elementów prefabrykowanych. Dobór technologii do projektu i budżetu inwestora.",
      image: "/s-real-ceilings.png",
      features: ["Stropy monolityczne", "Stropy gęstożebrowe", "Stropy prefabrykowane", "Belki i podciągi"]
    },
    {
      id: "specjalne",
      icon: "cylinder",
      title: "Konstrukcje specjalne",
      shortDesc: "Zbiorniki, mosty, przepusty.",
      fullDesc: "Zbiorniki okrągłe metodą studniarską, oczyszczalnie ścieków, przepompownie. Mosty, przepusty drogowe, kanały rewizyjne. Konstrukcje wymagające specjalistycznego doświadczenia.",
      image: "/s-real-special.jpg",
      features: ["Zbiorniki żelbetowe (metoda studniarska)", "Oczyszczalnie i przepompownie", "Mosty i przepusty drogowe", "Komory kanalizacyjne"]
    }
  ],
}
