# STAND Lab — website

STAND — Seoul Trajectory of Aging and Neuro-Degeneration. The lab of Prof. Hanna Cho,
Gangnam Severance Hospital, Yonsei University College of Medicine.

A static website: plain HTML, CSS and JavaScript. Nothing to install, no build step,
and it is hosted free on GitHub Pages.

## Folder structure

```
hanna-cho-lab/
├── index.html              ← landing page: hero, mission, four cards, carousel
├── research.html           ← the questions we ask, four lines of work
├── publications.html       ← selected papers, filterable by year
├── about.html              ← Hanna, appointments, the team, join the lab
├── media.html              ← broadcast and press coverage
├── assets/
│   ├── css/style.css       ← colours, type and spacing, shared by every page
│   ├── js/main.js          ← menu, carousel, scroll animation, year filter
│   └── img/                ← photographs go here
└── .nojekyll               ← tells GitHub Pages to serve the files as they are
```

The header, menu and footer are repeated in each HTML file. If you change one of
them, change it in all five.

## Viewing it locally

Double-click `index.html` and it opens in your browser. That's all.

## Publishing it on GitHub (one-time setup)

1. On github.com, click **+** in the top right → **New repository**
2. Name it `hanna-cho-lab`, choose **Public**, and create it with no extra files
3. In Terminal:

```bash
cd /Users/yujinlee/CODE/hanna-cho-lab
git remote add origin https://github.com/<your-username>/hanna-cho-lab.git
git branch -M main
git push -u origin main
```

Then open the repository → **Settings** → **Pages** → Source: **Deploy from a branch**
→ Branch: **main** / **/ (root)** → **Save**.

After a minute or two the site is live at:
`https://<your-username>.github.io/hanna-cho-lab/`

## Publishing later changes

```bash
git add .
git commit -m "Update publications"
git push
```

## Where to change things

| What you want to change | File | Where |
|---|---|---|
| Text, names, publication list | `index.html` | the relevant section |
| Black-and-white tones | `assets/css/style.css` | `--text`, `--muted`, `--line` in `:root` |
| Amount of whitespace | `assets/css/style.css` | `--gap-y`, `--pad-x` in `:root` |
| Maximum text width | `assets/css/style.css` | `--measure` in `:root` |
| Typefaces | `index.html` (Google Fonts link) and `--serif-display` / `--serif-body` |
| Logo | `index.html` | the `<a class="logo">` element — it is live text, not an image |

## Adding photographs

1. Put the file in `assets/img/` (for example `hero.jpg`)
2. In `index.html`, uncomment the `<img>` line at that spot and delete the
   `<div class="ph">…</div>` line below it

Photographs are shown in full colour.

## Notes

- The site adapts to phones and tablets, and follows the reader's light or dark mode.
- The publication list filters by year using the buttons above it.
- The logo is an original STAND wordmark: the letters with a rising trajectory line
  ending in a data point — the study name drawn literally. It is an inline SVG in the
  header of each page, so it follows the header colour with no image files involved.

## Image credits

Stock photographs are served from Unsplash (free to use under the
[Unsplash License](https://unsplash.com/license); attribution appreciated, not required):

- Hero brain render — Shawn Day
- MRI film sheets — National Cancer Institute
- Open book — James Bold
- Laboratory bench — Trnava University
- Microphone — Kane Reinholdtsen
- Blood-sample tubes — Testalize.me
- Imaging scanner and scanner room — Accuray
- Auditorium — ARTO SURAJ
- Neurons — Bhautik Patel
- Imaging-room ambience — David Trinks

The PI portrait is cropped from the official Gangnam Severance Hospital profile.
The Yonsei University English wordmark is the header asset from yonsei.ac.kr,
placed temporarily until the official CI file replaces `assets/img/yonsei-logo-en.png`.
