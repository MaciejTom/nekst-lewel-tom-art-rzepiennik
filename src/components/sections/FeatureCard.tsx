import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

type FeatureCardProps = {
  title: string
  description: string
  icon?: LucideIcon
  variant?: "default" | "accent" | "border-left" | "ghost"
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  variant = "default",
  className,
}: FeatureCardProps) {
  const variants = {
    default: "p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-accent transition-colors",
    accent: "p-6 md:p-8 bg-accent text-white rounded-2xl",
    "border-left": "p-6 bg-background rounded-lg border-l-4 border-accent",
    ghost: "p-6 bg-background/10 backdrop-blur rounded-xl border border-white/10",
  }

  const isLight = variant === "accent" || variant === "ghost"

  return (
    <div className={cn(variants[variant], className)}>
      {Icon && (
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
            isLight ? "bg-white/20" : "bg-accent/10"
          )}
        >
          <Icon className={cn("w-6 h-6", isLight ? "text-white" : "text-accent")} />
        </div>
      )}
      <h3
        className={cn(
          "text-xl font-bold mb-3",
          isLight ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h3>
      <p className={cn(isLight ? "text-white/80" : "text-muted-foreground")}>
        {description}
      </p>
    </div>
  )
}
