# Lista sekcji

> **UWAGA:** Aktualizuj ta tabele po kazdym dodaniu/usunieciu wireframe'a lub styled komponentu.

## Sekcje (9)

| # | Sekcja | Layout | Wireframe | Styled | Spec | Oryginal |
|---|--------|--------|-----------|--------|------|----------|
| 1 | **Hero Full-screen** | Full-screen, badge + 3-line headline + 2 CTA + stats + scroll indicator. Background image za contentem. | `hero-wireframe.tsx` | — | `hero-fullscreen.md` | `hero-fullscreen.tsx` |
| 2 | **Hero Split** | 2-col grid: content left (badge, headline, subtitle, CTA, stats inline) + image right (z overlay badge). Contained max-w-1280. | `hero-split-wireframe.tsx` | — | `hero-split.md` | w spec |
| 3 | **Services Editorial** | Alternating 50/50 image+text rows (odd: img left, even: img right). Step badges z numerem. CTA na dole z border-top. | `services-editorial-wireframe.tsx` | `services-editorial-section.tsx` | `editorial-alternating.md` | `editorial-alternating.html` |
| 4 | **Services Overlay** | Flex-wrap tall cards (h-500), auto-center. 3/4/5 items + opcjonalna CTA card. Image bg + gradient overlay + content na dole. | `services-overlay-wireframe.tsx` | `services-overlay-section.tsx` | `overlay-cards.md` | `overlay-cards.html` |
| 5 | **Services Cards** | Flex-wrap image cards + features. Dynamic grid (2-col/3-col) + opcjonalna CTA card. Left-aligned header. | `services-cards-wireframe.tsx` | `services-cards-section.tsx` | `services-cards.md` | `services-cards.tsx` |
| 6 | **Portfolio** | Dual mode: Mosaic (CSS grid 4-col, featured/wide) lub Gallery (flex-wrap, all normal). 7 wariantow. Stats w headerze. | `portfolio-wireframe.tsx` | `portfolio-section.tsx` | — | — |
| 7 | **Services Icon Grid** | Flex-wrap icon cards + opcjonalna CTA card. Dynamic grid (3/4-col). Centered header. No images. 5 wariantow. | `services-icon-grid-wireframe.tsx` | — | `services-icon-grid.md` | `services-icon-grid.html` |
| 8 | **Reviews** | 3-col grid kart z opiniami. Rating (stars) + cytat + autor (avatar + name + label). Featured card. Bottom link. | `reviews-wireframe.tsx` | — | `reviews.md` | w spec |
| 9 | **Features Split** | 2-col flex: content left (tagline, title, desc, features 2-col checklist, CTA) + image right. Dekoracje na obrazku w spec. | `features-split-wireframe.tsx` | — | `features-split.md` | w spec |

## Brakuje (TODO)

- Hero Full-screen: styled komponent
- Hero Split: styled komponent
- Portfolio: spec + oryginal
- Services Icon Grid: styled komponent
- Reviews: styled komponent
- Features Split: styled komponent

## Legenda

- **Wireframe** = neutralny layout (bg-muted, border-dashed, placeholders) w `src/components/wireframe/`
- **Styled** = ostylowany komponent z dekoracjami w `src/components/sections/`
- **Spec** = opis dekoracji (co mozna zmieniac, jakie treatments) w `src/agent/wireframe/specs/`
- **Oryginal** = oryginalny HTML/TSX ze Stitch w `src/agent/wireframe/originals/`
