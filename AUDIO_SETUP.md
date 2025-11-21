# 🎵 Audio File Setup Instructions

## Your Audio File

You have: `cribconnects-voiceover.mp3.mp3`
Duration: 1:19 (79 seconds) ✅

## Quick Setup

### Step 1: Rename Your File

Your file has a double `.mp3.mp3` extension. You need to remove one `.mp3`:

**On Windows:**
1. Navigate to where your audio file is located
2. Right-click the file → Rename
3. Change from: `cribconnects-voiceover.mp3.mp3`
4. Change to: `cribconnects-voiceover.mp3`
5. Press Enter

**On Mac:**
1. Find your audio file
2. Click the filename once to select it
3. Press Enter to edit the name
4. Remove the extra `.mp3` at the end
5. The correct name is: `cribconnects-voiceover.mp3`
6. Press Enter to save

**On Linux:**
```bash
mv cribconnects-voiceover.mp3.mp3 cribconnects-voiceover.mp3
```

### Step 2: Move File to Correct Location

Place the renamed file in the `audio/` folder of this project:

```
HTML-Scroller-Audio-/
└── audio/
    └── cribconnects-voiceover.mp3  ← Your file goes here
```

### Step 3: Test It

1. Open `test.html` in your browser
2. You should see: ✅ Audio file found!
3. Duration should show: 79 seconds

### Step 4: Present!

Open `index.html` and your presentation will automatically play with your voice-over!

---

## Timing Breakdown (79 seconds total)

Your audio timing has been configured as:

| Time | Duration | Section |
|------|----------|---------|
| 0:00-0:08 | 8 sec | **Hero** - Introduction |
| 0:08-0:25 | 17 sec | **Het Probleem** - The Problem |
| 0:25-0:45 | 20 sec | **Onze Strategie** - Our Strategy |
| 0:45-1:05 | 20 sec | **Onze Aanpak** - Our Approach |
| 1:05-1:19 | 14 sec | **Call to Action** - Closing |

**Total: 79 seconds (1:19)** ✅

---

## Troubleshooting

### File Won't Rename on Windows?

If you can't see the file extension:
1. Open File Explorer
2. Click "View" tab
3. Check "File name extensions"
4. Now you can see and edit the full filename

### File Not Found After Moving?

Make sure:
- File is in the `audio/` folder (not a subfolder)
- Filename is exactly: `cribconnects-voiceover.mp3`
- All lowercase letters
- No extra spaces

### Audio Doesn't Play?

1. Check browser console (F12) for errors
2. Make sure file is MP3 format
3. Try refreshing the page (Ctrl/Cmd + R)
4. Click the play button manually

---

## Command Line Quick Setup

If you're comfortable with command line:

```bash
# Navigate to your audio file location
cd /path/to/your/audio/file

# Rename the file
mv cribconnects-voiceover.mp3.mp3 cribconnects-voiceover.mp3

# Move to project audio folder
mv cribconnects-voiceover.mp3 /path/to/HTML-Scroller-Audio-/audio/

# Verify it's there
ls -lh /path/to/HTML-Scroller-Audio-/audio/
```

---

## Need Help?

If you encounter any issues:

1. ✅ Verify filename: `cribconnects-voiceover.mp3` (exactly)
2. ✅ Verify location: `audio/` folder
3. ✅ Check file size: Should be more than 0 bytes
4. ✅ Test with `test.html` first
5. ✅ Check browser console for errors (F12)

---

**Once your file is in place, your presentation is ready to go! 🚀**
