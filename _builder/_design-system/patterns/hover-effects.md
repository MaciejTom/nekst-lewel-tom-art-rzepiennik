# Wzorce hover effects

> ZASADA: Wybierz jeden z poniższych wzorców. Nie mieszaj. Zachowuj spójność w sekcji.

## 1. Karta z obrazem (Portfolio, For Whom)

```tsx
<div className="group relative overflow-hidden border border-border hover:border-primary/30 transition-colors duration-300">
  {/* Obraz */}
  <Image className="transition-transform duration-500 group-hover:scale-105" />

  {/* Tytuł */}
  <h3 className="text-white group-hover:text-primary transition-colors duration-300">
    Tytuł
  </h3>

  {/* Elementy pojawiające się */}
  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Ukryty content
  </div>
</div>
```

### Checklist:
- [x] `group` na kontenerze
- [x] `overflow-hidden` (żeby scale nie wychodziło poza)
- [x] Border: `border-border hover:border-primary/30`
- [x] Obraz: `group-hover:scale-105 duration-500`
- [x] Tytuł: `group-hover:text-primary duration-300`

---

## 2. Karta bez obrazu (Process, FAQ)

```tsx
<div className="group border border-border hover:border-primary/30 transition-colors duration-300 bg-card">
  {/* Ikona (opcjonalnie scale) */}
  <div className="group-hover:scale-105 transition-transform duration-300">
    <Icon />
  </div>

  {/* Tytuł - BEZ zmiany koloru (już wystarczy border) */}
  <h3 className="text-white">Tytuł</h3>
</div>
```

### Checklist:
- [x] Border hover: `hover:border-primary/30`
- [x] Ikona może mieć scale
- [x] Tekst zazwyczaj bez zmiany koloru (border wystarczy)

---

## 3. Link/Button tekstowy

```tsx
<a className="text-white hover:text-primary transition-colors duration-300">
  Link
</a>
```

### Wariant z border-bottom:
```tsx
<a className="text-white border-b border-primary hover:text-primary transition-colors">
  Link z podkreśleniem
</a>
```

---

## 4. Lista nawigacyjna (Services tabs)

```tsx
<button className={`
  border-l-4 transition-all duration-300
  ${active
    ? "border-primary bg-white/5 text-white"
    : "border-transparent text-muted-foreground hover:text-white hover:bg-white/[0.02]"
  }
`}>
```

---

## 5. Corner accents (ozdobne rogi)

```tsx
{/* Pojawiające się rogi przy hover */}
<div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
<div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
<div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
<div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
```

---

## 6. Top accent line (Process)

```tsx
{/* Linia rozszerzająca się od lewej */}
<div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
```

---

## Kiedy używać którego wzorca

| Sytuacja | Wzorzec |
|----------|---------|
| Karta z dużym obrazem | #1 - pełny zestaw |
| Karta informacyjna | #2 - tylko border |
| Link w tekście | #3 - text color |
| Nawigacja/tabs | #4 - active state |
| Elegancki akcent | #5 - corner accents |
| Krok procesu | #6 - top line |

## ZAKAZANE kombinacje

```tsx
// ❌ Zbyt wiele efektów naraz
<div className="
  hover:border-primary/30
  group-hover:bg-white/10
  group-hover:shadow-lg
">

// ✅ Wybierz jeden główny efekt
<div className="hover:border-primary/30 transition-colors duration-300">
```
