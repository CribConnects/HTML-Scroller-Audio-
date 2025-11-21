# 🎥 Video Toevoegen aan Presentatie

## Video Bestand

Uw video bestand `fullsizerender` moet worden toegevoegd aan de `video/` folder.

### Stappen:

1. **Converteer uw video naar MP4** (als het nog niet in MP4 formaat is)
2. **Hernoem het bestand** naar één van de volgende:
   - `fullsizerender.mp4` (aanbevolen)
   - `fullsizerender.mov` (als QuickTime)

3. **Plaats het bestand** in de `video/` folder:
   ```
   HTML-Scroller-Audio-/
   └── video/
       └── fullsizerender.mp4  ← Hier!
   ```

## Video Specificaties

**Aanbevolen instellingen:**
- **Formaat**: MP4 (H.264 codec)
- **Duur**: 1:19 (79 seconden) - zelfde als audio
- **Resolutie**: 1080x1080 (vierkant) of 1920x1080 (landscape)
- **Bitrate**: 2-5 Mbps (goede kwaliteit, niet te groot)
- **Bestandsgrootte**: Maximaal 50MB voor snelle loading

## Video Conversie

Als uw video nog niet in MP4 is, gebruik dan een van deze opties:

### Optie 1: Online Converter
- [CloudConvert](https://cloudconvert.com/mov-to-mp4)
- [Online-Convert](https://www.online-convert.com/)

### Optie 2: FFmpeg (command line)
```bash
ffmpeg -i fullsizerender.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k fullsizerender.mp4
```

### Optie 3: HandBrake (gratis software)
- Download: [handbrake.fr](https://handbrake.fr/)
- Open uw video
- Selecteer "Fast 1080p30" preset
- Export naar MP4

## Hoe Het Werkt

### Video Ballon

De video wordt getoond in een mooi rond "ballon" element met de CribConnects kleuren:
- **Positie**: Rechtsonder (boven de controls)
- **Grootte**: 280x280 pixels (200x200 op mobiel)
- **Styling**: Ronde vorm met cyan gradient border
- **Animatie**: Fade-in wanneer presentatie start

### Synchronisatie

De video is volledig gesynchroniseerd met de audio:
- ✅ Start samen met audio
- ✅ Pauzeert samen met audio
- ✅ Eindigt samen met audio
- ✅ Blijft in sync (automatische correctie)

### Audio vs Video

**Audio**: Volledig geluid met voice-over (79 seconden)
**Video**: Stille video van presenteerder (79 seconden, muted)

De gebruiker hoort alleen de audio, maar ziet ook de presenteerder in de video ballon.

## Testen

Na het toevoegen van de video:

1. **Start lokale server**:
   ```bash
   python -m http.server 8000
   ```

2. **Open in browser**:
   ```
   http://localhost:8000/index.html
   ```

3. **Controleer**:
   - Video laadt correct
   - Video ballon verschijnt na "Start Presentatie" klik
   - Video loopt synchroon met audio
   - Video stopt wanneer audio stopt

## Console Logging

Als alles goed is, zie je in de browser console (F12):
```
📄 Page loaded, initializing media...
🎬 Pre-loading audio and video...
✅ Audio metadata loaded!
✅ Video metadata loaded!
📊 Video duration: 79.xx seconds
✅ Audio fully loaded and ready!
✅ Video fully loaded and ready!
🎬 User clicked start button
▶️ Audio started playing
```

## Geen Video?

**De presentatie werkt ook zonder video!**

Als je geen video toevoegt:
- Presentatie blijft normaal werken
- Audio speelt af zoals verwacht
- Video ballon blijft onzichtbaar
- Console toont: "⚠️ No video available (dit is OK, presentatie werkt nog steeds)"

## Troubleshooting

### Video speelt niet af

**Probleem**: Video laadt niet of speelt niet af

**Oplossingen**:
1. Controleer bestandsnaam: `fullsizerender.mp4` of `fullsizerender.mov`
2. Controleer bestandslocatie: moet in `video/` folder staan
3. Controleer formaat: moet MP4 (H.264) of MOV zijn
4. Controleer bestandsgrootte: niet te groot (max 50MB aanbevolen)

### Video niet synchroon met audio

**Probleem**: Video loopt voor of achter op audio

**Oplossing**:
- De code synchroniseert automatisch
- Als het verschil > 0.3 seconden is, wordt video gecorrigeerd
- Zorg dat video dezelfde duur heeft als audio (79 seconden)

### Video kwaliteit slecht

**Probleem**: Video ziet er wazig uit

**Oplossing**:
- Gebruik hogere resolutie (1080x1080 of 1920x1080)
- Verhoog bitrate bij conversie
- Gebruik betere compressie settings

### Video bestand te groot

**Probleem**: Video is > 50MB, laadt langzaam

**Oplossing**:
```bash
# Comprimeer video met FFmpeg
ffmpeg -i fullsizerender.mp4 -vf scale=1080:1080 -c:v libx264 -crf 28 -preset slow fullsizerender-compressed.mp4
```

## Railway Deployment

**Let op**: Grote video bestanden (> 100MB) kunnen problemen geven op Railway.

**Alternatief**: Host video extern
1. Upload video naar cloud storage (Cloudinary, AWS S3, etc.)
2. Update src in index.html:
   ```html
   <source src="https://your-cdn.com/fullsizerender.mp4" type="video/mp4">
   ```

## Styling Aanpassen

Wil je de video ballon anders positioneren of groter maken?

**In `index.html`, zoek naar `#videoBallon` CSS:**

```css
#videoBallon {
    bottom: 120px;      /* Afstand vanaf onderkant */
    right: 30px;        /* Afstand vanaf rechterkant */
    width: 280px;       /* Breedte */
    height: 280px;      /* Hoogte */
}
```

**Voorbeelden**:
- Linksonder: `left: 30px;` i.p.v. `right: 30px;`
- Groter: `width: 350px; height: 350px;`
- Vierkant: `border-radius: 20px;` i.p.v. `50%`

---

**Veel succes met je video presentatie! 🎥✨**
