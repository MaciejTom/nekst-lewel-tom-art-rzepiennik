# Stat Display Component

> Wyświetlanie statystyk typu "45+", "100%", "24h"

## Warianty

### 1. Vertical (standardowy)
```tsx
<div>
  <div className="text-3xl font-bold text-white">45+</div>
  <div className="text-xs text-muted-foreground uppercase">Zakończonych Inwestycji</div>
</div>
```

### 2. Vertical z primary accent
```tsx
<div>
  <div className="text-3xl font-bold text-primary">100%</div>
  <div className="text-xs text-muted-foreground uppercase">Terminowości</div>
</div>
```

### 3. Hero stats (z border-top)
```tsx
<div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-border max-w-2xl">
  <div>
    <div className="font-display text-2xl sm:text-3xl text-primary">4</div>
    <div className="text-sm text-muted-foreground mt-1">Województwa zasięgu</div>
  </div>
  {/* ... */}
</div>
```

### 4. Inline z separatorem
```tsx
<div className="flex gap-4">
  <div className="text-right">
    <div className="text-3xl font-bold text-white">45+</div>
    <div className="text-xs text-muted-foreground uppercase">Zakończonych Inwestycji</div>
  </div>
  <div className="w-px h-12 bg-border" />
  <div className="text-right">
    <div className="text-3xl font-bold text-primary">100%</div>
    <div className="text-xs text-muted-foreground uppercase">Terminowości</div>
  </div>
</div>
```

---

## Props

| Prop | Typ | Default | Opis |
|------|-----|---------|------|
| `value` | string | - | Wartość (np. "45+", "100%", "24h") |
| `label` | string | - | Opis pod wartością |
| `accent` | boolean | `false` | Czy wartość ma kolor primary |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Rozmiar |
| `align` | `'left' \| 'right' \| 'center'` | `'left'` | Wyrównanie |

---

## Rozmiary

| Size | Value class | Label class |
|------|-------------|-------------|
| sm | `text-2xl` | `text-xs` |
| md | `text-3xl` | `text-xs` |
| lg | `text-4xl` | `text-sm` |

---

## Implementacja

```tsx
interface StatDisplayProps {
  value: string
  label: string
  accent?: boolean
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'right' | 'center'
  className?: string
}

const sizeClasses = {
  sm: { value: 'text-2xl', label: 'text-xs' },
  md: { value: 'text-3xl', label: 'text-xs' },
  lg: { value: 'text-4xl', label: 'text-sm' }
}

const alignClasses = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center'
}

export function StatDisplay({
  value,
  label,
  accent = false,
  size = 'md',
  align = 'left',
  className
}: StatDisplayProps) {
  return (
    <div className={cn(alignClasses[align], className)}>
      <div className={cn(
        sizeClasses[size].value,
        'font-bold',
        accent ? 'text-primary' : 'text-white'
      )}>
        {value}
      </div>
      <div className={cn(
        sizeClasses[size].label,
        'text-muted-foreground uppercase mt-1'
      )}>
        {label}
      </div>
    </div>
  )
}
```

---

## Użycie w sekcjach

| Sekcja | Gdzie | Wariant |
|--------|-------|---------|
| Hero | Pod CTA | Horizontal z border-t |
| Portfolio header | Prawy górny | Inline z separatorem |
| Why Us | - | Nie używa |
| For Whom header | Prawy górny | Single (NATYCHMIASTOWA) |
