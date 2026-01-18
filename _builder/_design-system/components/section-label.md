# Section Label Component

> Reużywalny element "/ USŁUGI", "/ PROCES" itp.

## Warianty

### 1. Basic (sam label)
```tsx
<span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
  / USŁUGI
</span>
```

### 2. Z pulsującą kropką
```tsx
<div className="flex items-center gap-2 mb-4">
  <div className="w-2 h-2 bg-primary animate-pulse" />
  <span className="text-primary font-mono text-sm tracking-widest uppercase">
    / ODBIORCY
  </span>
</div>
```

### 3. Z prawą stroną (statystyka/status)
```tsx
<div className="flex items-end justify-between mb-12 border-b border-border pb-8">
  <div>
    <div className="flex items-center gap-2 mb-4">
      <div className="w-2 h-2 bg-primary animate-pulse" />
      <span className="text-primary font-mono text-sm tracking-widest uppercase">
        / ODBIORCY
      </span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-white">
      DLA KOGO<br />
      <span className="text-muted-foreground">PRACUJEMY?</span>
    </h2>
  </div>
  <div className="hidden md:block text-right">
    <div className="text-sm text-muted-foreground font-mono">DOSTĘPNOŚĆ EKIP:</div>
    <div className="text-primary font-bold">NATYCHMIASTOWA</div>
  </div>
</div>
```

---

## Props

| Prop | Typ | Default | Opis |
|------|-----|---------|------|
| `label` | string | - | Tekst labela (bez "/") |
| `showDot` | boolean | `false` | Pulsująca kropka |
| `rightContent` | ReactNode | - | Element po prawej stronie |
| `withBorder` | boolean | `false` | Border-bottom pod całością |

---

## Użycie w sekcjach

| Sekcja | Wariant | Prawa strona |
|--------|---------|--------------|
| Services | Basic | - |
| For Whom | Z kropką + prawa | Status dostępności |
| Process | Basic | - |
| Portfolio | Basic | Statystyki 45+ / 100% |
| Why Us | BRAK | - |
| FAQ | BRAK | - |
| Contact | BRAK | - |

---

## Implementacja komponentu

```tsx
interface SectionLabelProps {
  label: string
  showDot?: boolean
  rightContent?: React.ReactNode
  withBorder?: boolean
  className?: string
}

export function SectionLabel({
  label,
  showDot = false,
  rightContent,
  withBorder = false,
  className
}: SectionLabelProps) {
  const content = (
    <>
      <div>
        <div className="flex items-center gap-2 mb-4">
          {showDot && <div className="w-2 h-2 bg-primary animate-pulse" />}
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            / {label}
          </span>
        </div>
      </div>
      {rightContent && (
        <div className="hidden md:block text-right">
          {rightContent}
        </div>
      )}
    </>
  )

  if (rightContent || withBorder) {
    return (
      <div className={cn(
        "flex items-end justify-between",
        withBorder && "border-b border-border pb-8",
        className
      )}>
        {content}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-2 mb-4", className)}>
      {showDot && <div className="w-2 h-2 bg-primary animate-pulse" />}
      <span className="text-primary font-mono text-sm tracking-widest uppercase">
        / {label}
      </span>
    </div>
  )
}
```

---

## Decyzja: Czy dodawać do wszystkich sekcji?

**Rekomendacja**: NIE. Section labels działają najlepiej gdy:
- Są używane selektywnie (nie w każdej sekcji)
- Pomagają w nawigacji (szczególnie w długich stronach)
- Dodają "techniczny" charakter designu

**Gdzie NIE dodawać**:
- Hero (ma swój badge)
- FAQ (wystarczy H2)
- Contact (wystarczy H2)
- Why Us (nagłówek jest wystarczający)
