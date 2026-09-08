# Ayush Sharma — Animated Portfolio

A fast, accessible, fully animated portfolio built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**, deployed as a fully static site to **GitHub Pages**.

---

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:5173/PortFolio/>. First start can take ~30s (Windows Defender scans `node_modules`); subsequent reloads are instant via HMR.

Other scripts:

```bash
npm run type-check   # TypeScript check, no emit
npm run build        # tsc + vite build + write dist/404.html SPA fallback
npm run preview      # serve dist/ locally to sanity-check the production build
```

---

## Deploy to GitHub Pages

Deployment is fully automated via the workflow at `.github/workflows/deploy.yml`. Every push to the `main` branch triggers a build and deploy. You only need to set this up once.

### Step 1 — Create a GitHub repository

1. Go to <https://github.com/new>.
2. Choose any repository name you want (e.g. `portfolio`, `my-portfolio`, `ayush-portfolio`). Whatever name you pick is automatically used as the URL path — the workflow handles this for you, you don't need to edit any file.
3. Set visibility to **Public** (required for free GitHub Pages on a personal account).
4. Do **not** initialize with a README, `.gitignore`, or license — this project already has them.
5. Click **Create repository**.

### Step 2 — Push this project to that repository

From the project folder (`C:\Personal_Projects\PortFolio`), in PowerShell, run:

```powershell
git init
git add .
git commit -m "Initial commit: animated portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<your-repo-name>` with your actual values from Step 1.

### Step 3 — Enable GitHub Pages (one-time)

1. On GitHub, open your repository.
2. Click **Settings** (top tab).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** → **Source**, select **GitHub Actions**.
5. (Nothing else to configure — you do **not** pick a branch.)

### Step 4 — Watch it deploy

1. Click the **Actions** tab on the repository.
2. You should see a workflow run named **"Deploy portfolio to GitHub Pages"** that started automatically when you pushed.
3. Wait ~1–2 minutes for both `build` and `deploy` jobs to turn green.
4. The deploy job will print the live URL, which will be:

   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

5. That's it. Open the URL — your portfolio is live.

### Step 5 — Update content later

Anything you change in this project, just commit and push:

```powershell
git add .
git commit -m "Update content"
git push
```

The workflow re-runs automatically on every push to `main` and re-deploys within ~2 minutes.

---

## How the URL path is auto-handled

GitHub Pages serves project sites under `https://<user>.github.io/<repo>/`, so the app needs to know this prefix at build time (Vite's `base` setting). The workflow reads it from the GitHub Pages config and passes it to Vite via the `VITE_BASE_PATH` environment variable, so **you don't need to edit `vite.config.ts` no matter what you name the repo**.

The `vite.config.ts` falls back to `/PortFolio/` only for local `npm run dev` — that's why the local URL shows `/PortFolio/` even if your repo is named differently. The deployed site will use the correct prefix automatically.

If you ever want the local URL to match your repo name exactly, change the fallback in `vite.config.ts`:

```ts
const BASE_PATH = process.env.VITE_BASE_PATH ?? '/<your-repo-name>/';
```

---

## Optional: use a custom domain

1. In your repo on GitHub, go to **Settings** → **Pages** → **Custom domain**.
2. Enter your domain (e.g. `ayushsharma.dev`) and save.
3. GitHub will create a `CNAME` file in the deployed site automatically.
4. At your DNS registrar, add either:
   - `CNAME` record: `www` → `<your-username>.github.io`, **or**
   - Four `A` records on the apex domain pointing to GitHub's Pages IPs (listed in the GitHub Pages docs).
5. Wait for DNS to propagate, then re-enable **Enforce HTTPS** in the Pages settings.

When using a custom domain, the site is served at the domain root (`/`), not under a `/<repo>/` subpath. The workflow handles this automatically because `actions/configure-pages` returns an empty base path for custom-domain sites.

---

## Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── public/                        # static assets (resume.pdf, favicon, OG image, .nojekyll)
├── scripts/postbuild-pages.mjs    # writes dist/404.html SPA fallback
├── src/
│   ├── components/                # UI sections (Hero, About, Projects, etc.)
│   ├── components/ui/             # reusable primitives (TiltCard, MagneticButton, ...)
│   ├── config/site.ts             # site-wide config (name, links, feature flags)
│   ├── data/*.ts                  # all portfolio content (resume + LinkedIn sourced)
│   ├── hooks/                     # custom React hooks
│   ├── lib/motion.ts              # Framer Motion variants/easing
│   ├── styles/globals.css         # Tailwind + theme tokens
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig*.json
└── package.json
```

---

## Troubleshooting

**Workflow fails on first run with `Pages site not yet created`**
Go to **Settings → Pages** and set **Source: GitHub Actions**, then re-run the failed workflow from the **Actions** tab.

**Deployed page shows blank screen / 404 on assets**
The `base` path is wrong. Check the workflow logs — the build step should show `VITE_BASE_PATH=/<your-repo-name>/`. If you renamed the repo, push a commit (even an empty one with `git commit --allow-empty -m "redeploy"`) to trigger a fresh build.

**404 on direct deep links (e.g. visiting `/projects` directly)**
This SPA only has a single route (`/`) with anchor scrolling, so this shouldn't happen. If you ever add client routing, the included `dist/404.html` SPA fallback (created by `scripts/postbuild-pages.mjs`) already handles it.

**Local dev shows `ERR_CONNECTION_REFUSED`**
Your `npm run dev` process stopped. Re-run it in your terminal — keep that terminal open while developing.
