# SDOF - St. John's Orthodox Church, Punalur

Static church website ready for deployment on Vercel.

## Project Structure

```
.
├── index.html          ← Homepage with hero carousel
├── about.html          ← About SDOF, mission, leadership
├── events.html         ← Upcoming events & livestream
├── contact.html        ← Contact form & info
├── donate.html         ← Donation page
├── assets/
│   ├── css/
│   │   └── styles.css  ← All shared styles
│   ├── js/
│   │   └── script.js   ← Menu, scroll reveal, carousel
│   └── images/
├── vercel.json         ← Routing, caching, security headers
├── sitemap.xml
├── robots.txt
└── .vercelignore
```

## Vercel Plumbing Included

- `vercel.json`
  - Clean URLs enabled (`/about`, `/events`, `/contact`, `/donate`)
  - Rewrites map clean routes to HTML files
  - Long cache headers for `/assets/*`
  - Basic security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`)
- `robots.txt` with sitemap declaration
- `sitemap.xml` updated to include all public pages, including `donate`

## Local Preview

Open with any static server (recommended), for example:

```powershell
cd c:\Users\jxc893\Documents\Learning
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to Vercel

### Option 1: Git Integration (recommended)

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New Project** -> import the repo.
3. Framework preset: **Other** (or let Vercel auto-detect static).
4. Build command: leave empty.
5. Output directory: leave empty.
6. Deploy.

### Option 2: Vercel CLI

```powershell
npm i -g vercel
cd c:\Users\jxc893\Documents\Learning
vercel
vercel --prod
```

## Post-Deploy Checklist

- Replace placeholder images and logo URLs in HTML.
- Replace phone/email placeholders.
- Update `sitemap.xml` domain if production domain changes.
- If contact form needs to work, connect to a form backend (Formspree, API, etc.).