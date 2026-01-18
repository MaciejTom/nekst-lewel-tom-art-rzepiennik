import { cn } from "@/lib/utils"

type SectionWrapperProps = {
  children: React.ReactNode
  background?: "default" | "card" | "accent" | "primary"
  padding?: "sm" | "md" | "lg"
  id?: string
  className?: string
}

const bgClasses = {
  default: "bg-background",
  card: "bg-card",
  accent: "bg-accent text-white",
  primary: "bg-primary text-primary-foreground",
}

const paddingClasses = {
  sm: "py-12 md:py-16 lg:py-20",
  md: "py-16 md:py-24 lg:py-28",
  lg: "py-20 md:py-28 lg:py-32",
}

export function SectionWrapper({
  children,
  background = "default",
  padding = "md",
  id,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-[5%]",
        bgClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  )
}
