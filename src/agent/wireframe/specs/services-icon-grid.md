# Services Icon Grid — Decoration Spec

## Layout Pattern
Centered header (tagline + title + subtitle) over a 4-column responsive grid of icon cards.
Each card: icon box (Material Symbols) + title + description.
No images, no feature lists.

## Wireframe
`src/components/wireframe/services-icon-grid-wireframe.tsx`

---

## Dekoracje

### Section
- Background: `bg-surface-dark`
- Border: `border-y border-border-dark`
- Spacing: `py-20`
- Container: `max-w-7xl mx-auto px-4 md:px-10`

### Header
- Layout: `text-center mb-16 max-w-3xl mx-auto`
- Tagline: `text-primary text-sm font-bold tracking-widest uppercase mb-3`
- Title: `text-3xl md:text-4xl font-bold text-white mb-6`
- Subtitle: `text-gray-400` (no explicit size — inherits base)

### Card Container
- Base: `bg-background-dark p-8 rounded-xl border border-border-dark`
- Layout: `flex flex-col gap-6`
- Hover: `hover:border-primary/50`
- Shadow hover: `hover:shadow-xl hover:shadow-primary/5`
- Transition: `transition-all`
- Group: `group` (for child hover effects)

### Icon Box
- Size: `w-14 h-14`
- Shape: `rounded-lg`
- Background: `bg-surface-dark`
- Border: `border border-border-dark`
- Layout: `flex items-center justify-center`
- Color: `text-primary`
- Hover: `group-hover:bg-primary group-hover:text-white`
- Transition: `transition-colors`
- Icon type: Material Symbols Outlined (`!text-3xl`)
- Icons used: `foundation`, `construction`, `domain`, `engineering`

### Card Title
- Font: `text-xl font-bold text-white`
- Spacing: `mb-3`

### Card Description
- Font: `text-gray-400 text-sm leading-relaxed`

---

## Hover Effects Summary

| Element | Effect | Timing |
|---------|--------|--------|
| Card border | `border-border-dark` -> `border-primary/50` | `transition-all` |
| Card shadow | none -> `shadow-xl shadow-primary/5` | `transition-all` |
| Icon box bg | `bg-surface-dark` -> `bg-primary` | `transition-colors` |
| Icon box text | `text-primary` -> `text-white` | `transition-colors` |

---

## Unique Elements

- **Tagline** is `text-primary` with `font-bold` (not just tracking-widest uppercase)
- **Section** uses `border-y` (top + bottom border) which is a decorative separator
- **Icon box** has `rounded-lg` (not rounded-full) and inverts on hover (bg + text swap)
- **No CTA**, no features list — pure icon + text cards
- **Dark theme** throughout: `bg-surface-dark`, `bg-background-dark`, `text-white`, `text-gray-400`
