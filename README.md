# Hanna Cho Lab — website

A static website: plain HTML, CSS and JavaScript. Nothing to install, no build step,
and it is hosted free on GitHub Pages.

## Folder structure

```
hanna-cho-lab/
├── index.html              ← all of the text lives here
├── assets/
│   ├── css/style.css       ← colours, type and spacing (start at :root)
│   ├── js/main.js          ← menu, scroll animation, publication filter
│   └── img/                ← photographs go here
└── .nojekyll               ← tells GitHub Pages to serve the files as they are
```

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

Colour photographs are converted to black and white automatically by the CSS,
so there is no need to edit them first.

## Notes

- The site adapts to phones and tablets, and follows the reader's light or dark mode.
- The publication list filters by year using the buttons above it.
- The logo is an original wordmark built from the words "Hanna Cho Lab".
