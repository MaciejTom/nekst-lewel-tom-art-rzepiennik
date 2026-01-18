import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  className?: string
  light?: boolean // for dark backgrounds
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  maxWidth = "3xl",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto",
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {badge && (
        <p
          className={cn(
            "mb-3 font-semibold md:mb-4 text-sm tracking-wider",
            light ? "text-white/80" : "text-accent"
          )}
        >
          {badge}
        </p>
      )}
      <h2
        className={cn(
          "mb-5 text-[2.25rem]/[1.2] font-bold md:mb-6 md:text-[2.75rem]/[1.2] lg:text-[3rem]/[1.2]",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "md:text-lg",
            light ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
