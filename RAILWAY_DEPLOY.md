# 🚂 Railway Deployment Guide

## Quick Deploy to Railway

Your CribConnects AI Strategy Presentation is configured and ready to deploy to Railway!

### Prerequisites

- Railway account (sign up at [railway.app](https://railway.app))
- GitHub account (your repo is already on GitHub)

---

## Method 1: Deploy from GitHub (Recommended - Easiest!)

### Step 1: Connect to Railway

1. Go to [railway.app](https://railway.app)
2. Click **"Start a New Project"**
3. Select **"Deploy from GitHub repo"**
4. Authorize Railway to access your GitHub
5. Select your repository: `CribConnects/HTML-Scroller-Audio-`

### Step 2: Configure (Auto-detected!)

Railway will automatically detect:
- ✅ Node.js project (from `package.json`)
- ✅ Start command: `npm start`
- ✅ Port: 3000 (automatically configured)

### Step 3: Deploy!

1. Railway starts building automatically
2. Wait 1-2 minutes for deployment
3. Click **"Generate Domain"** to get your public URL
4. Your presentation is live! 🎉

### Your Live URL will be:
```
https://[your-project-name].railway.app
```

---

## Method 2: Deploy with Railway CLI

### Install Railway CLI

```bash
npm install -g @railway/cli
```

### Login to Railway

```bash
railway login
```

### Deploy

```bash
# Initialize Railway project
railway init

# Deploy to Railway
railway up

# Generate public domain
railway domain
```

---

## Configuration Details

### Project Structure for Railway

```
HTML-Scroller-Audio-/
├── package.json          ← Railway reads this
├── index.html            ← Main presentation
├── audio/
│   └── cribconnects-voiceover.mp3 (1.3MB)
└── ... other files
```

### How It Works

1. **Railway detects Node.js** from `package.json`
2. **Installs dependencies**: Runs `npm install`
3. **Starts server**: Runs `npm start`
4. **Serves static files**: The `serve` package serves all your HTML/CSS/JS/Audio

### Environment Variables

No environment variables needed! Everything is configured automatically.

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Open your Railway URL
- [ ] Check that index.html loads
- [ ] Verify audio file plays (may need to click play due to browser autoplay policies)
- [ ] Test navigation and controls
- [ ] Test on mobile/tablet

---

## Updating Your Presentation

### Automatic Deployments

Railway automatically redeploys when you push to your GitHub branch:

```bash
# Make changes to your files
git add .
git commit -m "Update presentation content"
git push origin claude/ai-strategy-presentation-016Z57cYFXWbFfQbBi1suJw3

# Railway automatically detects and deploys! 🚀
```

### Manual Deploy with CLI

```bash
railway up
```

---

## Custom Domain (Optional)

### Add Your Own Domain

1. Go to your Railway project dashboard
2. Click on **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter your domain: `presentation.cribconnects.com`
5. Add the CNAME record to your DNS:
   ```
   Type: CNAME
   Name: presentation
   Value: [your-project].railway.app
   ```
6. Wait for DNS propagation (5-30 minutes)

---

## Monitoring & Logs

### View Logs

**In Dashboard:**
- Go to your project
- Click **"View Logs"**

**With CLI:**
```bash
railway logs
```

### Check Build Status

- Green dot = Deployed successfully
- Yellow dot = Building
- Red dot = Failed (check logs)

---

## Troubleshooting

### Build Failed

**Check logs:**
```bash
railway logs
```

**Common issues:**
- Node version mismatch → Check `engines` in `package.json`
- Missing dependencies → Verify `package.json` is committed

### Audio Not Playing

**Browser autoplay policy:**
- Some browsers block autoplay
- User needs to click play button
- This is normal browser behavior

**File not found:**
- Verify `audio/cribconnects-voiceover.mp3` is committed to git
- Check file size (should be 1.3MB)
- Verify it's not in `.gitignore`

### Site Not Loading

**Check deployment:**
```bash
railway status
```

**Verify domain:**
- Generate domain if not done
- Check HTTPS is enabled
- Clear browser cache

---

## Cost & Resources

### Railway Free Tier

- ✅ 500 hours/month of usage (more than enough!)
- ✅ Shared CPU/RAM
- ✅ Perfect for this presentation

### Resource Usage

Your presentation is lightweight:
- **Size**: ~3MB total (with audio)
- **Memory**: ~50MB when running
- **CPU**: Minimal (static serving)

---

## Performance Optimization

### Current Setup
- ✅ Static file serving with `serve`
- ✅ Automatic gzip compression
- ✅ Fast startup time

### Optional Enhancements

**Add caching headers** - Create `serve.json`:
```json
{
  "headers": [
    {
      "source": "**/*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    },
    {
      "source": "audio/**/*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000"
        }
      ]
    }
  ]
}
```

---

## Security

### HTTPS
- ✅ Automatically enabled by Railway
- ✅ Free SSL certificate

### No Backend
- ✅ Static files only = secure by default
- ✅ No database or API vulnerabilities

---

## Support

### Railway Documentation
- [docs.railway.app](https://docs.railway.app)

### Railway Community
- [Discord](https://discord.gg/railway)
- [Help Center](https://help.railway.app)

### Project Issues
- Check your repository issues
- Review logs in Railway dashboard

---

## Quick Reference Commands

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up

# View logs
railway logs

# Check status
railway status

# Generate domain
railway domain

# Open in browser
railway open
```

---

## Summary

✅ **Your presentation is Railway-ready!**

1. Go to [railway.app](https://railway.app)
2. Click "Deploy from GitHub repo"
3. Select your repository
4. Click "Generate Domain"
5. **Done!** 🎉

Your live presentation will be available at:
`https://[your-project].railway.app`

---

**Happy presenting! 🚀**

Need help? Check Railway docs or your project logs.
