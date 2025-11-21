# CribConnects AI Strategie - Presentatie met Voice-over

Een interactieve presentatie-applicatie die automatisch door slides scrollt, gesynchroniseerd met een voice-over audio bestand.

## 📁 Project Structuur

```
HTML-Scroller-Audio-/
├── index.html              # Hoofd HTML bestand
├── css/
│   └── styles.css          # Custom CSS stijlen
├── js/
│   └── app.js              # Applicatie logica
├── audio/
│   └── PLACE_YOUR_AUDIO_HERE.txt  # Placeholder voor audio
└── README.md               # Deze documentatie
```

## 🎵 Audio Bestand Toevoegen

### BELANGRIJK: Voeg uw audio bestand toe!

1. **Locatie**: Plaats uw audio bestand in de `audio/` folder
2. **Bestandsnaam**: `cribconnects-voiceover.mp3` (exact deze naam)
3. **Specificaties**:
   - Format: MP3
   - Duur: 80 seconden (1:20)
   - Aanbevolen kwaliteit: 128kbps of hoger

### Timing Guide voor Voice-over

Uw voice-over moet de volgende secties dekken:

| Tijdstempel | Duur | Sectie | Beschrijving |
|-------------|------|--------|--------------|
| 0:00-0:08 | 8 sec | Hero | Introductie en titel |
| 0:08-0:25 | 17 sec | Het Probleem | Huidige situatie beschrijven |
| 0:25-0:45 | 20 sec | Onze Strategie | Strategische aanpak uitleggen |
| 0:45-1:05 | 20 sec | Onze Aanpak | Concrete stappen presenteren |
| 1:05-1:20 | 15 sec | Call to Action | Afsluiting en call to action |

### Zonder Audio

De applicatie werkt ook zonder audio bestand! Het gebruikt dan een ingebouwde timer om door de slides te bewegen. Het is echter aanbevolen om een voice-over toe te voegen voor de beste ervaring.

## 🚀 Hoe te Gebruiken

### Optie 1: Direct Openen (Lokaal)

Gewoon `index.html` openen in een moderne browser (Chrome, Firefox, Safari, Edge).

### Optie 2: Lokale Server (Aanbevolen)

Voor de beste ervaring, gebruik een lokale webserver:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (met npx):**
```bash
npx http-server
```

**PHP:**
```bash
php -S localhost:8000
```

Ga dan naar: `http://localhost:8000`

## 🎮 Bediening

### Knoppen

- **Play/Pause knop** (▶/⏸): Start of pauzeer de presentatie
- **Geluid knop** (🔊/🔇): Geluid aan/uit

### Toetsenbord Shortcuts

- **Spatiebalk**: Play/Pause
- **M**: Mute/Unmute

### Automatisch Starten

De presentatie start automatisch 1 seconde na het laden van de pagina.

## ✨ Features

- **Automatisch scrollen**: Slides bewegen automatisch mee met de audio
- **Audio synchronisatie**: Perfecte timing tussen voice-over en visuals
- **Timer fallback**: Werkt ook zonder audio bestand
- **Smooth transitions**: Vloeiende animaties tussen secties
- **Progress bar**: Visuele voortgangsindicator bovenaan
- **Responsive design**: Werkt op desktop, tablet en mobiel
- **Glassmorphism UI**: Moderne, elegante interface
- **Keyboard controls**: Eenvoudige bediening met toetsenbord

## 🎨 Customization

### Kleuren Aanpassen

De primaire kleur is een cyan/turquoise gradient (`#88D8E8` naar `#66C5D6`). Om deze te wijzigen:

1. Open `css/styles.css`
2. Zoek en vervang de hex codes:
   - `#88D8E8` (licht cyan)
   - `#66C5D6` (donker cyan)

### Timing Aanpassen

Om de timing van secties aan te passen:

1. Open `index.html`
2. Wijzig de `data-start` en `data-end` attributen op elke `<section>`

Bijvoorbeeld:
```html
<section class="demo-section" data-start="0" data-end="8">
```

### Content Wijzigen

Alle content staat in `index.html`. Bewerk de HTML binnen elke `<section>` tag.

## 🔧 Technische Details

### Afhankelijkheden

- **Tailwind CSS**: Via CDN (geen installatie nodig)
- **Google Fonts**: Libre Baskerville & Inter (via CDN)

### Browser Compatibiliteit

Getest en werkend in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance

- Lichtgewicht: ~30KB totaal (zonder audio)
- Geen build proces nodig
- Geen externe npm packages
- Pure vanilla JavaScript

## 📝 Voice-over Script Suggestie

### Hero (0:00-0:08)
"CribConnects AI Strategie: Van licenties naar cultuurverandering."

### Het Probleem (0:08-0:25)
"Bedrijven investeren flink in AI-tools. Ze kopen software in, bouwen eigen oplossingen, en kennen licenties toe. Maar bij implementatie gebeurt er vrij weinig. De tools worden nauwelijks gebruikt."

### Onze Strategie (0:25-0:45)
"Wij zien AI als een kans om de workforce te moderniseren en een cultuurverandering teweeg te brengen. We benaderen het vanuit een menselijk perspectief: werk leuker maken, ruimte creëren voor creativiteit, en focus leggen op productieve taken."

### Onze Aanpak (0:45-1:05)
"Onze aanpak bestaat uit vier stappen: Een kick-off workshop om te enthousiasmeren, hands-on coaching op de werkvloer, continue helpdesk support, en viering van successen om te meten en optimaliseren."

### Call to Action (1:05-1:20)
"Van licenties naar cultuurverandering, met praktische coaching en meetbare resultaten. Klaar om te beginnen? Plan een kennismaking."

## 🐛 Troubleshooting

### Audio speelt niet af
- Controleer of het bestand `cribconnects-voiceover.mp3` in de `audio/` folder staat
- Zorg dat de bestandsnaam exact klopt (inclusief kleine letters)
- Sommige browsers blokkeren autoplay - klik op de play knop

### Slides scrollen niet
- Open de browser console (F12) voor foutmeldingen
- Controleer of JavaScript is ingeschakeld
- Ververs de pagina (Ctrl/Cmd + R)

### Styling ziet er niet goed uit
- Zorg voor een stabiele internetverbinding (voor CDN fonts en Tailwind)
- Probeer de pagina hard te vernieuwen (Ctrl/Cmd + Shift + R)

## 📄 Licentie

© 2024 CribConnects. Alle rechten voorbehouden.

## 🤝 Support

Voor vragen of ondersteuning, neem contact op met het CribConnects team.

---

**Veel succes met uw presentatie! 🚀**
