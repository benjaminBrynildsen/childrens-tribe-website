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

## Hooking up the contact + tour-request forms (Google Forms)

Both `contact.html` and `admissions.html` have forms that submit silently to Google Forms — visitors stay on the page and see a thank-you message. Responses land in your Google Form's Responses tab (and optionally a Google Sheet).

**One-time setup (~10 minutes per form):**

1. Go to [forms.google.com](https://forms.google.com) and create two forms:
   - **Contact form** with fields: *Your name*, *Email*, *Subject*, *Message*
   - **Tour request form** with fields: *Your name*, *Email*, *Phone*, *Child's age / grade*, *Anything you'd like us to know?*
   - Set each field type to "Short answer" (or "Paragraph" for Message/Notes). Mark name + email as required.

2. For each form, click the **⋮ menu → Get pre-filled link**. Type placeholder text into every field (e.g. "TEST"), then click **Get link** → **Copy link**.

3. The copied URL looks like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxxxxxxxxxxxxxxx/viewform?usp=pp_url&entry.123456789=TEST&entry.987654321=TEST...
   ```
   From it, grab:
   - The **FORM_ID** — the long string between `/e/` and `/viewform` (e.g. `1FAIpQLSxxxxxxxxxxxxxxxxxxxxx`)
   - Each **entry.XXXXXXXXX** number — one per field, in the order they appear

4. Open `contact.html` and replace:
   - `REPLACE_WITH_CONTACT_FORM_ID` → your contact FORM_ID
   - `entry.REPLACE_NAME`, `entry.REPLACE_EMAIL`, `entry.REPLACE_SUBJECT`, `entry.REPLACE_MESSAGE` → matching entry numbers

5. Open `admissions.html` and replace:
   - `REPLACE_WITH_TOUR_FORM_ID` → your tour form FORM_ID
   - `entry.REPLACE_PARENT`, `entry.REPLACE_EMAIL`, `entry.REPLACE_PHONE`, `entry.REPLACE_AGE`, `entry.REPLACE_NOTES` → matching entry numbers

6. Commit and push. To get email notifications, open the form → **Responses** tab → **⋮ menu → Get email notifications for new responses**.

Test by submitting the live form and confirming the response shows up in Google Forms.

## Editing content

All content is inline in the HTML files — no CMS. Open any page and edit text directly. Contact info and address live in the footer of every page.

## Design

- Palette: cream, wheat, terracotta, sage, gold
- Type: **Fraunces** (display serif) + **Nunito Sans** (body)
- Accessible: semantic HTML, skip link, reduced-motion support, focus states
- Responsive: mobile nav at 720px, two-column layouts collapse at 960px
