import type { PortfolioContent } from '@/types'

export const wireframePortfolio: PortfolioContent = {
  tagline: "/ section tagline",
  title: "Section",
  titleAccent: "Title",

  stats: [
    { value: "00+", label: "Stat Label" },
    { value: "00%", label: "Stat Label", highlight: true }
  ],

  projects: [
    {
      title: "Lorem ipsum dolor sit",
      category: "Category",
      specs: "Technology",
      image: "",
      featured: true
    },
    {
      title: "Amet consectetur",
      category: "Category",
      specs: "Technology",
      image: ""
    },
    {
      title: "Adipiscing elit sed",
      category: "Category",
      specs: "Technology",
      image: ""
    },
    {
      title: "Do eiusmod tempor incididunt",
      category: "Category",
      specs: "Technology",
      image: "",
      wide: true
    }
  ],

  galleryButton: {
    text: "Button Label",
    href: "#"
  }
}
