# Wzorce kontenerów ikon

> ZASADA: Wybierz jeden z 4 wariantów. Zachowuj spójność w ramach sekcji.

## Wariant 1: Solid Primary (wyróżnienie)

```tsx
<div className="p-3 bg-primary text-black">
  <Icon className="w-6 h-6" />
</div>
```

**Użycie**: Główna ikona sekcji, wyróżniony element, CTA

**Przykład**: Services section - ikona aktywnej usługi

---

## Wariant 2: Outlined (neutralny)

```tsx
<div className="w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center">
  <Icon className="w-5 h-5" />
</div>
```

**Opcjonalnie z glow:**
```tsx
<div className="w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,94,0,0.2)]">
```

**Użycie**: Kroki procesu, numerowane elementy

**Przykład**: Process section

---

## Wariant 3: Ghost/Transparent (subtelny)

```tsx
<div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/40">
  <Icon className="text-primary w-6 h-6" />
</div>
```

**Z hover:**
```tsx
<div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/40 group-hover:bg-primary/30 group-hover:border-primary/60 transition-all duration-300">
```

**Użycie**: Badge na obrazie, element na tle zdjęcia

**Przykład**: For Whom section - ikona kategorii

---

## Wariant 4: Naked (bez kontenera)

```tsx
<Icon className="w-6 h-6 text-primary" />
```

**Użycie**: Listy kontaktowe, prosta informacja

**Przykład**: Contact section - ikona telefonu, maila

---

## Rozmiary ikon

| Rozmiar | Klasa | Użycie |
|---------|-------|--------|
| Small | `w-4 h-4` | Inline z tekstem, checkmarki |
| Medium | `w-5 h-5` | Standardowa ikona |
| Large | `w-6 h-6` | Ikona w kontenerze |
| XL | `w-8 h-8` | Hero, duże elementy |

---

## Rozmiary kontenerów

| Kontener | Klasa | Dla ikony |
|----------|-------|-----------|
| Small | `p-2` lub `w-8 h-8` | w-4 h-4 |
| Medium | `p-3` lub `w-10 h-10` | w-5 h-5 |
| Large | `p-4` lub `w-12 h-12` | w-6 h-6 |

---

## Kiedy używać którego wariantu

| Kontekst | Wariant |
|----------|---------|
| Główna ikona sekcji | Solid Primary |
| Kroki/proces | Outlined |
| Na tle obrazu | Ghost/Transparent |
| Lista kontaktowa | Naked |
| Checkmarki w liście | Naked (small) |

---

## Przykład kompleksowy

```tsx
// Services - solid primary
<div className="p-3 bg-primary text-black rounded-sm">
  <Cuboid className="w-6 h-6" />
</div>

// Process - outlined with glow
<div className="w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,94,0,0.2)]">
  <FileText className="w-5 h-5" />
</div>

// For Whom - ghost on image
<div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/40">
  <Building2 className="text-primary w-6 h-6" />
</div>

// Contact - naked
<Phone className="w-6 h-6 text-primary" />

// Lista - naked small
<Check className="w-4 h-4 text-primary flex-shrink-0" />
```

---

## ZAKAZANE

```tsx
// ❌ Mieszanie wariantów w jednej sekcji
// Jeśli proces ma outlined, wszystkie kroki mają outlined

// ❌ Nieproporcjonalne rozmiary
<div className="p-3">           // kontener na p-3
  <Icon className="w-8 h-8" />  // ikona za duża
</div>

// ❌ Rounded w industrialnym designie (używaj ostrożnie)
rounded-lg  // → w tym designie preferujemy ostre kąty lub rounded-sm
```
