# Cloudflare Pages Deployment & Compatibility Implementation Plan

Configure the MARC portfolio website for seamless, high-performance deployment on Cloudflare Pages, ensuring proper single-page routing, edge security headers, static asset caching, and an automated GitHub Actions deployment workflow.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural decisions were confirmed via interactive consultation and will guide the implementation:

- **Deployment Platform**: Cloudflare Pages with Git integration (continuous deployment triggered automatically on code push).
- **SPA Routing & Edge Headers**: Add `public/_redirects` to route all dynamic and deep links to `/index.html` (HTTP 200 rewrite) and `public/_headers` to enforce modern security standards and long-term immutable asset caching.
- **CI/CD Automation**: Provide a ready-to-use GitHub Actions workflow (`.github/workflows/deploy-cloudflare.yml`) for automated testing and deployment, alongside direct dashboard integration instructions.

---

## 1. Overview & Core Concept

- **What It Does**: Transforms the existing Vite React portfolio into a fully Cloudflare Pages-ready application. When deployed, Cloudflare's global edge network will serve the optimized production assets directly with sub-50ms latency, zero routing collisions, and strict HTTP headers.
- **Target Audience / Persona**: The website owner (Momen Ahmedur Rahman Chowdhury / MARC) and visitors accessing his portfolio across global regions.
- **Key Value**: Guarantees zero "404 Page Not Found" errors on browser refreshes or direct link navigations, maximizes Google PageSpeed and Lighthouse security scores via custom headers, and establishes an automated push-to-deploy pipeline.

---

## 2. Platform Architecture & Edge Configuration

### Cloudflare Pages Routing (`_redirects`)
In a Single Page Application (SPA), routes or bookmarkable URLs are handled by client-side code. Without explicit server/edge rewrite rules, navigating directly to a deep URL or refreshing the page prompts Cloudflare to look for a physical file and return a 404.
- Creating `public/_redirects`:
  ```text
  /*    /index.html   200
  ```
- Vite copies the contents of `public/` directly into `dist/` on build, so Cloudflare Pages detects `_redirects` automatically at the root of the deployment.

### Edge Security & Performance Headers (`_headers`)
Configuring `public/_headers` to apply production headers across all routes and immutable caching for static bundles:
- `/*`:
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `/assets/*`:
  - `Cache-Control: public, max-age=31536000, immutable` (leverages Vite's content-hashed filenames for lightning-fast caching).

### Cloudflare Environment Compatibility
- Cloudflare Pages build systems support modern Node.js versions. We define `.node-version` (or specify `NODE_VERSION: 22` in Pages build environment variables) to ensure Node 22 build consistency matching this environment.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct Cloudflare Pages Git Integration vs. Workers Sites**
  - *Chosen Approach*: Cloudflare Pages standard Git deployment.
  - *Why*: Cloudflare Pages is natively designed for frontend SPAs (Vite, React, Next static export), includes automatic preview deployments for pull requests, has zero egress fees for static assets, and requires no custom server worker code.
  - *Alternatives Considered*: Cloudflare Workers Sites (deprecated in favor of Pages / Workers Assets) and Cloudflare Workers with server adapters (unnecessary overhead for a pure client-side SPA).

- **Decision 2: Static `_redirects` File vs. Custom Cloudflare Functions**
  - *Chosen Approach*: Declarative `_redirects` in `public/`.
  - *Why*: Cloudflare Pages processes declarative redirects at the CDN edge before invoking any compute, ensuring 0ms compute execution time and instantaneous response.

- **Decision 3: Dual Deployment Setup (GitHub Dashboard + GitHub Actions)**
  - *Chosen Approach*: Support both direct Cloudflare Git connection (recommended for simplest setup) and an optional GitHub Actions workflow (`.github/workflows/deploy-cloudflare.yml`).
  - *Why*: Gives total flexibility to deploy either completely hands-free via Cloudflare's own GitHub App or via GitHub Actions with custom CI quality checks (type checking, linting, building).

---

## 4. Technical Architecture & Integration Strategy

### System & Deployment Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DEVELOPER / GITHUB REPO                         │
│                                                                        │
│   git push origin main                                                 │
│     ├── Triggers Cloudflare Pages Automatic Build                      │
│     └── (Optional) Triggers .github/workflows/deploy-cloudflare.yml    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                       CLOUDFLARE BUILD PIPELINE                        │
│                                                                        │
│   Node.js 22 Runtime                                                   │
│   Build command : npm run build                                        │
│   Output folder : dist                                                 │
│                                                                        │
│   Assets generated in dist/:                                           │
│     ├── index.html                                                     │
│     ├── assets/ (JS/CSS bundles with content hashes)                   │
│     ├── _redirects (SPA rewrite: /* -> /index.html 200)                 │
│     └── _headers (Security & Cache-Control policies)                   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      CLOUDFLARE GLOBAL EDGE CDN                        │
│                                                                        │
│   Client Request (e.g., https://yourdomain.com/credentials)            │
│     ├── Matched by _redirects -> Serves /index.html (Status 200)       │
│     ├── Enforces Security Headers (HSTS, CSP, X-Frame-Options)         │
│     └── Static Asset Requests (/assets/*) -> Served from Edge Cache    │
└────────────────────────────────────────────────────────────────────────┘
```

### Proposed Changes & File Additions

1. **`public/_redirects`**:
   - Creates the fallback rule `/*  /index.html  200` to support React Router / client-side hash and path navigation without 404s.

2. **`public/_headers`**:
   - Injects security headers and optimal caching headers for Vite asset chunks.

3. **`.node-version`**:
   - Pins Node version `22` for Cloudflare's build image.

4. **`.github/workflows/deploy-cloudflare.yml`**:
   - Automates build verification (`npm run lint`, `npm run build`) and deploys to Cloudflare Pages via `cloudflare/pages-action` using GitHub secrets (`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`).

5. **`CLOUDFLARE_DEPLOYMENT.md`**:
   - A step-by-step walkthrough covering:
     - Connecting GitHub to Cloudflare Pages dashboard
     - Setting Build Command (`npm run build`) and Build Output Directory (`dist`)
     - Adding custom domain (e.g., `webworm.com.au` or personal domain) and enabling free SSL/TLS
     - Configuring GitHub Secrets if using the Actions workflow
