import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

type ServiceCardProps = {
  title: string
  description: string
  items?: string[]
  image?: string
  variant?: "default" | "horizontal"
  className?: string
}

export function ServiceCard({
  title,
  description,
  items,
  image,
  variant = "default",
  className,
}: ServiceCardProps) {
  if (variant === "horizontal" && image) {
    return (
      <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", className)}>
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-64 lg:h-80 object-cover rounded-2xl"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          {items && items.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-accent transition-colors",
        className
      )}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-6"
        />
      )}
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {items && items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
