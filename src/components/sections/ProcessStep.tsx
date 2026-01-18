import { cn } from "@/lib/utils"

type ProcessStepProps = {
  number: string | number
  title: string
  description: string
  variant?: "default" | "circle" | "large-number"
  isLast?: boolean
  className?: string
}

export function ProcessStep({
  number,
  title,
  description,
  variant = "default",
  isLast = false,
  className,
}: ProcessStepProps) {
  const formattedNumber = typeof number === "number"
    ? number.toString().padStart(2, "0")
    : number

  if (variant === "circle") {
    return (
      <div className={cn("text-center relative", className)}>
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-accent text-white font-bold text-xl md:text-2xl flex items-center justify-center mb-4 relative z-10">
          {formattedNumber}
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    )
  }

  if (variant === "large-number") {
    return (
      <div className={cn("relative", className)}>
        <div className="text-5xl md:text-6xl font-bold text-accent/20 mb-4">
          {formattedNumber}
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        {!isLast && (
          <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-accent/20" />
        )}
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center flex-shrink-0">
          {formattedNumber}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-accent/20 mt-2" />}
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
