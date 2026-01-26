import type { PortfolioContent } from '@/types'

export const portfolioContent: PortfolioContent = {
  tagline: "/ REALIZACJE",
  title: "PRZYKŁADOWE",
  titleAccent: "REALIZACJE",

  stats: [
    { value: "45+", label: "Zakończonych Inwestycji" },
    { value: "100%", label: "Terminowości", highlight: true }
  ],

  projects: [
    {
      title: "Obiekt przemysłowy",
      category: "Konstrukcja żelbetowa",
      specs: "Fundamenty płytowe + ściany żelbetowe",
      image: "/1.jpg",
      featured: true
    },
    {
      title: "Budynek mieszkalny",
      category: "Ściany żelbetowe",
      specs: "Ściany piwnic i kondygnacji",
      image: "/3.jpg"
    },
    {
      title: "Strop monolityczny",
      category: "Strop żelbetowy",
      specs: "Zbrojenie i deskowanie",
      image: "/2.jpg"
    },
    {
      title: "Fundamenty pod halę",
      category: "Ławy i stopy",
      specs: "Zbrojenie pod konstrukcję stalową",
      image: "/4.jpg",
      wide: true
    }
  ],

  galleryButton: {
    text: "Zobacz Pełną Galerię",
    href: "#galeria"
  }
}
