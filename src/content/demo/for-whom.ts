import type { ForWhomContent } from '@/types'

export const demoForWhom: ForWhomContent = {
  tagline: "/ WHO WE WORK WITH",
  title: "BUILT FOR",
  titleAccent: "YOUR BUSINESS",
  availabilityLabel: "AVAILABILITY:",
  availabilityValue: "ACCEPTING NEW PROJECTS",

  items: [
    {
      icon: "building",
      title: "ENTERPRISES",
      description: "Large teams that need a reliable agency partner for design systems, product redesigns and digital transformation at scale.",
      image: "/ai-third.jpg",
      tags: ["Design Systems", "Dedicated Team"]
    },
    {
      icon: "briefcase",
      title: "GROWING BUSINESSES",
      description: "Companies ready to level up their online presence — new website, better SEO, higher conversion rates, consistent branding.",
      image: "/ai-first.jpg",
      tags: ["Website Redesign", "SEO & Growth"]
    },
    {
      icon: "rocket",
      title: "STARTUPS",
      description: "Founders who need to go from idea to live product fast. We build MVPs, validate with users, and iterate until product-market fit.",
      image: "/ai-fourth.jpg",
      tags: ["MVP in 4 Weeks", "Rapid Iteration"]
    },
    {
      icon: "user",
      title: "PERSONAL BRANDS",
      description: "Consultants, creators and freelancers who need a professional online presence that reflects their expertise and attracts clients.",
      image: "/ai-second.jpg",
      tags: ["Portfolio Sites", "Personal Branding"]
    }
  ],
}
