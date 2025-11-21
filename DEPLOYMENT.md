# 🚀 Deployment Guide

## Quick Start

### 1. Add Your Audio File

Place your voice-over audio in the `audio/` folder:
```
audio/cribconnects-voiceover.mp3
```

**Specifications:**
- Format: MP3
- Duration: 79 seconds (1:19)
- Quality: 128kbps or higher

### 2. Test Locally

Open `test.html` in your browser to verify everything works:
```bash
# Option 1: Direct
open test.html

# Option 2: Local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000/test.html
```

### 3. Present

Once verified, open `index.html` to start your presentation!

---

## Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select branch: `main`
   - Select folder: `/` (root)
   - Click "Save"

3. **Access your presentation:**
   - URL will be: `https://[username].github.io/[repo-name]/`
   - Example: `https://cribconnects.github.io/ai-strategy-presentation/`

### Option 2: Netlify (Drag & Drop)

1. **Visit:** https://app.netlify.com/drop
2. **Drag folder:** Drag the entire project folder
3. **Done!** Get instant URL like: `https://[random-name].netlify.app`

**For custom domain:**
- Go to "Domain settings"
- Add your custom domain
- Update DNS records

### Option 3: Vercel (CLI or Git)

**Via CLI:**
```bash
npm i -g vercel
vercel
```

**Via Git:**
1. Connect your GitHub repo at https://vercel.com
2. Auto-deploys on every push
3. Get URL: `https://[project-name].vercel.app`

### Option 4: Traditional Web Hosting

Upload these files via FTP/SFTP:
```
index.html
test.html
css/styles.css
js/app.js
audio/cribconnects-voiceover.mp3
```

**Required:**
- Any web server (Apache, Nginx, etc.)
- No PHP, database, or special requirements needed
- Just static file hosting

---

## Pre-Presentation Checklist

- [ ] Audio file added and tested
- [ ] Run `test.html` to verify all files load
- [ ] Test in your presentation browser
- [ ] Check audio volume levels
- [ ] Test keyboard shortcuts (Spacebar, M)
- [ ] Verify on presentation display/projector
- [ ] Have backup: Save offline copy
- [ ] Test internet connection (for CDN resources)

---

## Presentation Tips

### During Presentation

1. **Start Automatically:** Presentation auto-starts after 1 second
2. **Pause if Needed:** Press Spacebar or click Play button
3. **Mute Option:** Press M or click speaker icon
4. **Full Screen:** Press F11 (browser) for immersive view

### Troubleshooting Live

| Issue | Solution |
|-------|----------|
| No audio | Check volume, unmute tab, or use timer mode |
| Slides don't scroll | Refresh page (Ctrl/Cmd + R) |
| Out of sync | Pause and restart, or click play button |
| Frozen | Hard refresh (Ctrl/Cmd + Shift + R) |

### Backup Plan

If technical issues occur:
- Presentation works without audio (timer mode)
- Can manually scroll through sections
- All content is visible and readable

---

## Performance Optimization

### For Faster Loading

1. **Optimize Audio:**
   ```bash
   # Reduce file size while maintaining quality
   ffmpeg -i input.mp3 -b:a 128k -ar 44100 audio/cribconnects-voiceover.mp3
   ```

2. **Self-host Fonts** (optional):
   - Download Google Fonts locally
   - Update `index.html` to reference local files
   - Reduces external dependencies

3. **Self-host Tailwind** (optional):
   ```bash
   # Generate minimal Tailwind CSS
   npx tailwindcss -o css/tailwind.min.css --minify
   ```

### For Offline Use

1. Download Tailwind CSS and Google Fonts
2. Update CDN links to local files
3. Test without internet connection

---

## Custom Domain Setup

### For GitHub Pages

1. Add `CNAME` file with your domain:
   ```
   presentation.cribconnects.com
   ```

2. Update DNS records:
   ```
   Type: CNAME
   Name: presentation
   Value: [username].github.io
   ```

### For Netlify/Vercel

1. Go to domain settings in dashboard
2. Add custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

---

## Security Notes

- No backend or database = No security concerns
- No user input = No XSS/injection risks
- Static files only = Safe to host anywhere
- HTTPS recommended for professional appearance

---

## Support & Maintenance

### Updating Content

1. Edit `index.html` for content changes
2. Edit `css/styles.css` for styling
3. Edit `js/app.js` for functionality
4. Commit and push changes

### Updating Audio

1. Replace `audio/cribconnects-voiceover.mp3`
2. Keep same filename and duration
3. Test with `test.html`
4. Deploy updated file

### Analytics (Optional)

Add Google Analytics to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

**Ready to deploy! 🎉**

For questions, refer to README.md or contact CribConnects support.
