# 🎥 Video Toevoegen - SNEL START

## Je Video is 1:46 (106 seconden) ✅

De presentatie is NU geconfigureerd voor jouw video van 1:46!

## Voeg Je Video Toe

### Stap 1: Plaats Je Video

Plaats je video bestand `fullsizerender` in de **video/** folder met één van deze namen:

```
video/fullsizerender.mp4  ← BESTE OPTIE (als MP4)
video/fullsizerender.mov  ← OK (als MOV/QuickTime)
```

### Stap 2: Controleer Het Formaat

**Als je video al MP4 is:**
✅ Perfect! Ga naar Stap 3

**Als je video MOV of ander formaat is:**
Converteer naar MP4:
- **Online**: [cloudconvert.com](https://cloudconvert.com/) (gratis)
- **macOS**: QuickTime kan exporteren naar MP4
- **Windows**: Gebruik VLC Media Player

### Stap 3: Git Commit & Push

```bash
# Voeg video toe aan git
git add video/fullsizerender.mp4

# Commit
git commit -m "Add presenter video (1:46)"

# Push naar Railway
git push origin claude/ai-strategy-presentation-016Z57cYFXWbFfQbBi1suJw3
```

## ✨ Nieuwe Timing (1:46 / 106 seconden)

De slides zijn aangepast naar jouw video duur:

| Tijd | Sectie |
|------|--------|
| 0:00-0:11 (11s) | Hero - Intro |
| 0:11-0:34 (23s) | Het Probleem |
| 0:34-1:01 (27s) | Onze Strategie |
| 1:01-1:28 (27s) | Onze Aanpak |
| 1:28-1:46 (18s) | Call to Action |

**Totaal: 106 seconden (1:46)** ✅

## Hoe Het Werkt

1. **Je video** (1:46) speelt ZONDER geluid (muted)
2. **Je audio** wordt GESYNCHRONISEERD met de video
3. **Video ballon** verschijnt rechtsonder (rond, mooi!)
4. **Slides** scrollen automatisch mee met de timing

## Video Specs (Aanbevolen)

- **Duur**: 106 seconden (1:46) ✅
- **Format**: MP4 (H.264)
- **Resolutie**: 1080x1080 (vierkant) of 1920x1080
- **Max grootte**: 50MB (Railway limiet)

## Grote Video? Comprimeer Het!

Als je video > 50MB is:

### Online Compressie
- [videosmaller.com](https://www.videosmaller.com/)
- [freeconvert.com](https://www.freeconvert.com/video-compressor)

### FFmpeg (Als Je Het Hebt)
```bash
ffmpeg -i fullsizerender.mov -vf scale=1080:1080 -c:v libx264 -crf 28 fullsizerender.mp4
```

## Test Lokaal Eerst

```bash
# Start server
python -m http.server 8000

# Open in browser
open http://localhost:8000/index.html

# Controleer:
# ✓ Video laadt
# ✓ Video ballon verschijnt
# ✓ Video loopt sync met timer
```

## Geen Video? Geen Probleem!

De presentatie werkt ook ZONDER video:
- Slides scrollen nog steeds
- Timing klopt (1:46)
- Video ballon blijft onzichtbaar

## Railway Deploy

Na push (Stap 3):
1. Railway detecteert wijziging
2. Bouwt in ~2 minuten
3. Video is live!

**Let op**: Grote bestanden (>100MB) kunnen problemen geven op Railway.

## Troubleshooting

**Video speelt niet?**
- Controleer bestandsnaam: `fullsizerender.mp4` of `.mov`
- Controleer locatie: `video/` folder
- Controleer formaat: MP4 of MOV

**Out of sync?**
- Code synchroniseert automatisch
- Video moet 106 seconden zijn (1:46)

**Te groot voor Railway?**
- Comprimeer video naar < 50MB
- Of host extern (Cloudinary, Vimeo) en update src

---

**Klaar! Voeg je video toe en push naar Railway! 🚀**
