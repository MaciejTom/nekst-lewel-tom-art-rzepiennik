import type { ServicesContent } from '@/types'

export const demoServices: ServicesContent = {
  tagline: "/ SERVICES",
  title: "WHAT WE",
  titleAccent: "DELIVER",
  subtitle: "End-to-end digital services — from strategy and design to development and growth. One team, one process, zero handoff friction.",

  items: [
    {
      id: "design",
      icon: "palette",
      title: "Design",
      shortDesc: "Brand identity and UI/UX that converts.",
      fullDesc: "We design interfaces people actually enjoy using. Research-driven wireframes, pixel-perfect UI, interactive prototypes — all grounded in your brand identity and business goals.",
      image: "/s-real-walls.jpg",
      features: ["Brand Identity", "UI/UX Design", "Design Systems", "Prototyping"]
    },
    {
      id: "development",
      icon: "code",
      title: "Development",
      shortDesc: "Fast, scalable web applications.",
      fullDesc: "Next.js, React, TypeScript — we build with the modern stack that powers the fastest websites on the internet. Clean architecture, tested code, optimized performance.",
      image: "/s-real-foundations.jpg",
      features: ["Web Applications", "E-commerce", "CMS Integration", "API Development"]
    },
    {
      id: "marketing",
      icon: "megaphone",
      title: "Growth",
      shortDesc: "SEO, content and paid ads that deliver ROI.",
      fullDesc: "Launching is just the start. We set up analytics, run SEO audits, create content strategies and manage ad campaigns — all focused on measurable business outcomes.",
      image: "/s-real-ceilings.png",
      features: ["SEO & Analytics", "Content Strategy", "Google & Meta Ads", "Conversion Optimization"]
    },
    {
      id: "consulting",
      icon: "users",
      title: "Consulting",
      shortDesc: "Strategy before execution.",
      fullDesc: "Not sure where to start? We run discovery workshops, audit your current digital presence, and create a roadmap with clear priorities, timelines and budgets.",
      image: "/s-real-special.jpg",
      features: ["Discovery Workshops", "Tech Audits", "Digital Roadmaps", "Team Training"]
    }
  ],
}
