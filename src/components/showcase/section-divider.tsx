interface SectionDividerProps {
  title: string
  description: string
  id: string
  dna?: string
  variables?: string
}

export function SectionDivider({ title, description, id, dna, variables }: SectionDividerProps) {
  return (
    <div id={id} className="bg-card border-y border-border scroll-mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col gap-4 max-w-4xl">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-foreground">
              {title}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg">
            {description}
          </p>

          {/* DNA / Variables info */}
          {(dna || variables) && (
            <div className="flex flex-col gap-2 mt-2 text-sm font-mono">
              {dna && (
                <div className="flex gap-2">
                  <span className="text-primary font-semibold shrink-0">DNA:</span>
                  <span className="text-muted-foreground">{dna}</span>
                </div>
              )}
              {variables && (
                <div className="flex gap-2">
                  <span className="text-accent font-semibold shrink-0">ZMIENNE:</span>
                  <span className="text-muted-foreground">{variables}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
