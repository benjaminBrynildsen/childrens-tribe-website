# Children's Tribe — A Montessori Academy

A static website for [Children's Tribe](https://www.childrenstribe.org/), a Montessori farm school on 13 acres in Godfrey, Illinois.

## What's here

- `index.html` — Home
- `about.html` — Mission, philosophy, accreditations
- `programs.html` — Primary through High School + Farm curriculum
- `summer.html` — Eight-week summer program
- `admissions.html` — Process, tour request, tuition overview
- `contact.html` — Contact info + embedded map
- `assets/css/styles.css` — Warm, natural design system
- `assets/js/main.js` — Mobile nav, smooth scroll, reveal animations
- `assets/img/` — Favicon + SVG illustrations (drop real photos here)

The site is pure HTML/CSS/JS — no build step, no dependencies beyond Google Fonts.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `childrens-tribe-website`).
2. Push this branch (or merge it to `main`):
   ```bash
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin claude/childrens-tribe-website-dLfbW
   ```
3. In GitHub → **Settings → Pages**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your chosen branch) / root (`/`)
4. Optionally add a `CNAME` file with `www.childrenstribe.org` and configure DNS.

The `.nojekyll` file is already included so GitHub Pages serves files as-is.

## Adding real photos

The site uses decorative SVG illustrations as placeholders. To add real photos:

1. Save photos from the current site (or social media) into `assets/img/`.
2. Find `<div class="image-slot">...</div>` blocks and replace the inner `<svg>` with an `<img>`:
   ```html
   <img src="assets/img/farm-animals.jpg" alt="Students feeding farm animals" />
   ```
3. Suggested filenames (used in `image-slot-caption` hints):
   - `students-working.jpg` — about page
   - `farm-animals.jpg` — about page
   - `summer-program.jpg` — summer page
   - `hero.jpg` — can replace the `.card-stack` on the homepage hero

## Editing content

All content is inline in the HTML files — no CMS. Open any page and edit text directly. Contact info and address live in the footer of every page.

## Design

- Palette: cream, wheat, terracotta, sage, gold
- Type: **Fraunces** (display serif) + **Nunito Sans** (body)
- Accessible: semantic HTML, skip link, reduced-motion support, focus states
- Responsive: mobile nav at 720px, two-column layouts collapse at 960px
