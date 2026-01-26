import type { FaqContent } from '@/types'

export const demoFaq: FaqContent = {
  title: "FREQUENTLY ASKED",
  titleAccent: "QUESTIONS",

  questions: [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer both fixed-price and hourly pricing depending on the project type. For well-defined projects, we prefer fixed pricing for budget certainty. For ongoing work or evolving projects, hourly rates work better."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance and support packages for all our projects. This includes bug fixes, security updates, and minor enhancements. Custom support plans are available for larger applications."
    },
    {
      question: "What technologies do you use?",
      answer: "We work with modern technologies including React, Next.js, Node.js, and various other frameworks. We choose the best tools for each project based on requirements, scalability needs, and team expertise."
    },
    {
      question: "Can you work with our existing team?",
      answer: "We often collaborate with in-house teams. We can augment your team, provide specialized expertise, or work alongside your developers. Communication and coordination are key to successful collaboration."
    }
  ]
}
