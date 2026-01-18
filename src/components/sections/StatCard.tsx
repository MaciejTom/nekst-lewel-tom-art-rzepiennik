import { cn } from "@/lib/utils"

type StatCardProps = {
  value: string
  label: string
  variant?: "default" | "accent" | "ghost"
  className?: string
}

export function StatCard({
  value,
  label,
  variant = "default",
  className,
}: StatCardProps) {
  const variants = {
    default: "p-6 md:p-8 bg-card rounded-2xl border border-border",
    accent: "p-6 md:p-8 bg-accent text-white rounded-2xl",
    ghost: "p-4 bg-white/10 backdrop-blur rounded-lg text-center",
  }

  const isLight = variant === "accent" || variant === "ghost"

  return (
    <div className={cn(variants[variant], className)}>
      <div
        className={cn(
          "text-4xl md:text-5xl font-bold mb-2",
          isLight ? "text-white" : "text-accent"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "text-sm",
          isLight ? "text-white/80" : "text-muted-foreground"
        )}
      >
        {label}
      </div>
    </div>
  )
}
