# Lista sekcji

> **UWAGA:** Aktualizuj ta tabele po kazdym dodaniu/usunieciu wireframe'a lub styled komponentu.

## Sekcje (5)

| # | Sekcja | Layout | Wireframe | Styled | Spec | Oryginal |
|---|--------|--------|-----------|--------|------|----------|
| 1 | **Hero** | Full-screen, badge + 3-line headline + 2 CTA + stats + scroll indicator. Background image za contentem. | `hero-wireframe.tsx` | — | `hero-fullscreen.md` | `hero-fullscreen.tsx` |
| 2 | **Services Editorial** | Alternating 50/50 image+text rows (odd: img left, even: img right). Step badges z numerem. CTA na dole z border-top. | `services-editorial-wireframe.tsx` | `services-editorial-section.tsx` | `editorial-alternating.md` | `editorial-alternating.html` |
| 3 | **Services Overlay** | Flex-wrap 3+2 tall cards (h-500). Image background + gradient overlay + content na dole. Ikona + tytul + features. | `services-overlay-wireframe.tsx` | `services-overlay-section.tsx` | `overlay-cards.md` | `overlay-cards.html` |
| 4 | **Services Cards** | Grid 3+2. Karty z obrazem, tytulem, opisem, feature list. Shadow, h2 z akcentem. | — | `services-cards-section.tsx` | — | — |
| 5 | **Portfolio** | Mosaic grid 4-col: featured (2x2) + normal (1x1) + wide (2x1). Stats w headerze. Gallery button. | `portfolio-wireframe.tsx` | `portfolio-section.tsx` | — | — |

## Brakuje (TODO)

- Hero: styled komponent
- Services Cards: wireframe + spec + oryginal
- Portfolio: spec + oryginal

## Legenda

- **Wireframe** = neutralny layout (bg-muted, border-dashed, placeholders) w `src/components/wireframe/`
- **Styled** = ostylowany komponent z dekoracjami w `src/components/sections/`
- **Spec** = opis dekoracji (co mozna zmieniac, jakie treatments) w `src/agent/wireframe/specs/`
- **Oryginal** = oryginalny HTML/TSX ze Stitch w `src/agent/wireframe/originals/`
