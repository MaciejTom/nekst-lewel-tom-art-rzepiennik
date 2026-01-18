# System Zmiennych - Config-Driven Website Builder

## Idea

Cała strona jest opisana przez **zmienne** w plikach JSON:

```
_config/
├── _schema/                    # Definicje zmiennych (co jest dozwolone)
│   ├── project.schema.json     # Zmienne globalne projektu
│   ├── hero.schema.json        # Zmienne sekcji Hero
│   ├── services.schema.json    # Zmienne sekcji Services
│   └── ...
│
├── sites/                      # Rzeczywiste konfiguracje stron
│   ├── niedziela-klusek.json   # Obecny projekt
│   ├── example-deweloper.json  # Inny klient
│   └── ...
│
└── README.md                   # Ten plik
```

## Przepływ

```
1. SCHEMA (jakie zmienne istnieją?)
   ↓
2. SITE CONFIG (wartości dla konkretnego klienta)
   ↓
3. AI/BUILDER (generuje kod na podstawie config)
   ↓
4. GOTOWA STRONA
```

## Poziomy zmiennych

### Poziom 1: PROJEKT (globalne)
```json
{
  "project": {
    "name": "Niedziela & Kłusek",
    "industry": "construction",
    "phone": "696 092 434",
    "email": "pbitarnow@gmail.com"
  },
  "theme": {
    "primaryColor": "#FF5E00",
    "style": "industrial-dark"
  }
}
```

### Poziom 2: SEKCJA (np. Hero)
```json
{
  "hero": {
    "variant": "hero-image",
    "elements": {
      "badge": { "show": true, "text": "KONSTRUKCJE ŻELBETOWE" },
      "stats": { "show": true, "count": 3 }
    }
  }
}
```

### Poziom 3: ELEMENT (np. Button w Hero)
```json
{
  "hero.cta.primary": {
    "style": "solid",
    "size": "lg",
    "icon": "ArrowRight",
    "iconPosition": "right"
  }
}
```

### Poziom 4: SZCZEGÓŁ (np. Hover na buttonie)
```json
{
  "hero.cta.primary.hover": {
    "background": "primary/90",
    "scale": false,
    "transition": "duration-300"
  }
}
```
