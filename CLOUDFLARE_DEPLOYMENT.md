# Cloudflare Pages Deployment Guide

This guide walks you through deploying the MARC Portfolio website to **Cloudflare Pages**.

The repository is already configured with:
- **`public/_redirects`**: Ensures Single-Page Application (SPA) client-side routing works smoothly with zero 404 errors on page refresh or direct URLs.
- **`public/_headers`**: Enforces edge security headers (`HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) and immutable long-term caching for static assets.
- **`.node-version`**: Pins Node.js version 22 for Cloudflare's build environment.
- **`.github/workflows/deploy-cloudflare.yml`**: Optional automated CI/CD pipeline.

---

## Method 1: Cloudflare Pages Direct Git Integration (Recommended)

This is the easiest and most reliable method. Cloudflare automatically builds and deploys your site whenever you push commits to GitHub.

### Step 1: Log in to Cloudflare
1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left sidebar, click **Compute (Workers & Pages)** > **Pages**.
3. Click **Connect to Git**.

### Step 2: Connect your GitHub Repository
1. Select your GitHub account and authorize Cloudflare.
2. Select your repository: **`MARC414/MARC`** (or your repository name).
3. Click **Begin setup**.

### Step 3: Configure Build & Deployment Settings
Fill in the deployment settings as follows:

| Setting | Value |
|---|---|
| **Project name** | `marc-portfolio` (or your preferred name) |
| **Production branch** | `main` |
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |

*(Optional)* Under **Environment variables (advanced)**, you can add:
- Variable: `NODE_VERSION`
- Value: `22`

*(If you ever use Gemini API features in the future, you can also add `GEMINI_API_KEY` here).*

### Step 4: Deploy
1. Click **Save and Deploy**.
2. Cloudflare will clone your repository, run `npm install`, compile the Vite production bundle into `dist`, and publish it to a global `.pages.dev` URL (e.g. `https://marc-portfolio.pages.dev`).

---

## Method 2: GitHub Actions CI/CD (Optional)

If you prefer deploying via GitHub Actions rather than giving Cloudflare direct Git access, a complete workflow is pre-configured at `.github/workflows/deploy-cloudflare.yml`.

### Setup Secrets in GitHub
1. Go to your GitHub repository > **Settings** > **Secrets and variables** > **Actions**.
2. Add the following repository secrets:
   - `CLOUDFLARE_API_TOKEN`: Create an API token in Cloudflare Dashboard under **My Profile** > **API Tokens** > **Create Token** > use the **Cloudflare Pages** template (Edit Cloudflare Pages permission).
   - `CLOUDFLARE_ACCOUNT_ID`: Found on the right sidebar of the Cloudflare Dashboard home or in any domain overview.
3. Every commit pushed to `main` will run tests, build the site, and deploy directly to Cloudflare Pages.

---

## Adding a Custom Domain

Once your site is deployed to `*.pages.dev`:

1. In the Cloudflare Pages dashboard, select your project.
2. Go to the **Custom domains** tab.
3. Click **Set up a custom domain**.
4. Enter your domain (e.g., `webworm.com.au` or a subdomain like `portfolio.webworm.com.au`).
5. Cloudflare will automatically configure DNS records and provision a free SSL/TLS certificate.

---

## Verification & Local Build Test

To test the build locally before pushing to GitHub:

```bash
npm run lint
npm run build
```

This generates the `dist/` directory containing:
- `index.html` (minified HTML)
- `assets/` (bundled JS and CSS)
- `_redirects` (copied from `public/_redirects`)
- `_headers` (copied from `public/_headers`)
