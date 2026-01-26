import type { FooterContent } from '@/types'

export const demoFooter: FooterContent = {
  companyName: "WEBSITE BUILDER",
  description: "Demo page showcasing all available components and theme variants. Built with Next.js and Tailwind CSS.",

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Components", href: "#hero-1" },
    { label: "Contact", href: "#contact" }
  ],

  companyInfo: {
    nip: "000-000-00-00",
    location: "Demo City",
    privacyPolicy: "Privacy Policy"
  },

  copyright: "2024 Website Builder Demo",
  designCredit: "Built with Next.js"
}
