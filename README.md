# paulramirezmotion.com

Personal portfolio — Paul Jair Ramírez Flores.
Motion Designer · Broadcast Sports & Live Entertainment.

---

## Files in this project

```
paulramirezmotion.com/
├── index.html          ← main page (edit text here)
├── css/
│   └── style.css       ← all visual styling
├── js/
│   └── script.js       ← scroll reveals + smooth scroll
├── assets/
│   ├── README.md       ← which images to add (READ THIS)
│   ├── CV_Paul_Ramirez_EN.pdf
│   └── (your images go here)
├── README.md           ← this file
└── CNAME               ← maps custom domain to GitHub Pages
```

---

## ✍️ How to edit content

All text lives in `index.html`. Open it in any text editor (VS Code, Sublime, even Notepad). Every section is commented so you can find things fast.

### Common edits

- **Change your reel** → search for `REPLACE_WITH_VIMEO_ID` in `index.html` and put your Vimeo video ID (just the number from `vimeo.com/123456789`).
- **Change email** → search for `paul65159f@gmail.com` in `index.html` and replace everywhere.
- **Edit a case study** → scroll to `<!-- CASE 1 -->` etc. Change the title, description, dates, tools.
- **Change your bio** → scroll to `<!-- ABOUT -->` and edit the paragraphs inside `.about-text`.
- **Change colors** → open `css/style.css` and look at the `:root { }` section at the top. Change `--accent: #ff4a1f;` to any color you want.

### Need to rebuild your CV PDF

Your English CV lives at `assets/CV_Paul_Ramirez_EN.pdf`. To update:
1. Edit the `.docx` file (the master Word version).
2. In Word: File → Save As → PDF.
3. Name it `CV_Paul_Ramirez_EN.pdf`.
4. Replace the file in `assets/`.

---

## 🚀 Deployment to GitHub Pages

Full step-by-step instructions are in `DEPLOYMENT.md`.

Quick summary:
1. Create a repo on GitHub called `paulramirezmotion.com`.
2. Upload all these files to it.
3. Go to Settings → Pages → enable Pages on `main` branch, root folder.
4. Point your domain's DNS to GitHub Pages (4 A records + 1 CNAME).
5. Wait ~15 min. Site is live at `paulramirezmotion.com`.

---

## 🔧 Tech stack

Pure HTML + CSS + JavaScript. No build tools, no frameworks, no npm.
You can edit everything in a browser-based editor if you want.

**Why this approach?**
- Loads fast.
- Free hosting on GitHub Pages forever.
- No maintenance — this will still work in 10 years.
- Full ownership: you control every pixel.

---

## 📬 Credits

Design & code: Built with Claude in April 2026 for Paul Ramírez.
Typography: Fraunces (display) + Inter Tight (body) — both from Google Fonts.
