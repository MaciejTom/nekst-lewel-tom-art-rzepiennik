import type { ProcessContent } from '@/types'

export const demoProcess: ProcessContent = {
  tagline: "/ PROCESS",
  title: "HOW WE",
  titleAccent: "WORK",

  steps: [
    {
      number: "01",
      icon: "message-circle",
      title: "Discovery",
      subtitle: "Understanding",
      description: "We start by understanding your goals, audience, and requirements. This foundation guides everything we do."
    },
    {
      number: "02",
      icon: "pencil",
      title: "Design",
      subtitle: "Creativity",
      description: "Our designers create mockups and prototypes. We iterate based on your feedback until it's perfect."
    },
    {
      number: "03",
      icon: "code",
      title: "Development",
      subtitle: "Building",
      description: "Our developers bring the design to life with clean, efficient code. Regular updates keep you informed."
    },
    {
      number: "04",
      icon: "rocket",
      title: "Launch",
      subtitle: "Go Live",
      description: "We handle deployment, testing, and launch. Post-launch support ensures smooth operation."
    }
  ],

  bottomCta: {
    text: "Start Your Project",
    label: "Ready to begin?",
    href: "#contact"
  }
}
