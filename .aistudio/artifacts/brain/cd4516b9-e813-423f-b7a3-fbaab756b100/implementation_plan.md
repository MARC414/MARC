# Featured Projects Showcase & Personal Intro Refinement Implementation Plan

Integrate a dedicated, high-converting "Featured Projects & Client Work" showcase section into the portfolio (`ural-travel.pages.dev`, `hostmarc.pages.dev`, `emarket247.shop`, and `sunlitbd.com`), and refine the Hero portrait card with an elegant introductory clarification under the photograph: *"Hi, I am Momen Ahmedur Rahman Chowdhury (MARC)"*.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following adjustments and architectural specifications are incorporated from user feedback:

- **Personal Introduction Under Portrait**:
  - Add a dedicated, smart caption under the Hero headshot:
    **"Hi, I am Momen Ahmedur Rahman Chowdhury (MARC)"**
  - Clarifies that **MARC** is the professional acronym formed by his full name (**M**omen **A**hmedur **R**ahman **C**howdhury), presented with subtle typographic styling, a friendly greeting badge, and high visual contrast.
- **Dedicated Featured Projects Section**:
  - Position a new **"Featured Projects & Client Work"** section between the career timeline and specialized services, anchored in the top navbar (`#projects`).
- **Interactive Filtering Tabs**:
  - Responsive segmented tabs to filter by:
    - `All Projects`
    - `Client Work` (`emarket247.shop`, `sunlitbd.com`)
    - `Next Projects` (`ural-travel.pages.dev`)
    - `Affiliate & Personal Ventures` (`hostmarc.pages.dev`)
- **Live Visual Snapshots & Status Indicators**:
  - Real OpenGraph and dynamic snapshots for all three sites (`ural-travel.pages.dev/og-image.jpg`, `hostmarc.pages.dev`, `emarket247.shop`).
  - Active status indicators (e.g. *Under Development* with an animated live pulse for `emarket247.shop`, *Live Venture* for `hostmarc.pages.dev`, *Next Venture · Beta* for `ural-travel.pages.dev`).

---

## 1. Overview & Core Concept

- **What It Does**:
  1. Solves brand clarity right in the Hero fold by explicitly explaining the origin and meaning of MARC.
  2. Expands the portfolio from a single Sunlit case study to a full digital ecosystem displaying active client builds, tourism tech platforms, and affiliate web engineering ventures.
- **Target Audience / Persona**: Prospective clients, business partners, recruiters, and agency collaborators.
- **Key Value**: Delivers immediate personal connection and trust, paired with proof of live multi-disciplinary execution across e-commerce, travel, and web hosting.

---

## 2. User Experience & Visual Design

### Hero Portrait Clarification Placement
Under the executive portrait card in `components/Hero.tsx`, we add a tailored introduction card:
- A soft pill greeting: *"Personal Introduction"*
- A prominent headline quote or intro:
  ```text
  "Hi, I am Momen Ahmedur Rahman Chowdhury (MARC)"
  ```
  with the initials highlighted (**M**omen **A**hmedur **R**ahman **C**howdhury = **MARC**).
- A concise 1-line explainer: *"15 years blending classic storytelling with cutting-edge AI systems."*

### Featured Projects Section Design
- **Section Kicker**: *"Client Work & Live Ventures"*
- **Headline**: *"Featured Projects & Digital Ecosystem"*
- **Filter Tabs**:
  - `All Projects` (4)
  - `Client Work` (2)
  - `Next Projects` (1)
  - `Affiliate & Personal` (1)
- **Project Cards**:
  1. **eMarket247 (`emarket247.shop`)**:
     - Status: `Under Development · Client Project` (Amber pulse dot)
     - Tech: `E-Commerce Architecture`, `Jewellery & Fashion`, `Client Funnels`
     - Snapshot: Direct editorial banner from `emarket247.shop`
  2. **HostMarc (`hostmarc.pages.dev`)**:
     - Status: `Live Personal Venture & Affiliate Platform` (Blue badge)
     - Tech: `Web Engineering`, `Server Benchmarks`, `Hosting Consultation`
     - Snapshot: Live rendered viewport snapshot
  3. **URAL Travel (`ural-travel.pages.dev`)**:
     - Status: `Next Venture · Travel Tech Beta` (Cyan badge)
     - Tech: `Travel SEO`, `Flight Search & Visas`, `Cloudflare Pages`
     - Snapshot: Official `og-image.jpg` from `ural-travel.pages.dev`
  4. **Sunlit Interior (`sunlitbd.com`)**:
     - Status: `Lead Marketing Case Study` (Emerald badge)
     - Tech: `WordPress + Elementor`, `Full-Stack Lead Gen`, `SEO Leadership`
     - Snapshot: Live Sunlit web preview

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Placement of the Introduction Line**
  - *Chosen Approach*: Directly anchored beneath the Hero headshot in a glassmorphic badge card.
  - *Why*: It directly associates the face with the full name and acronym, answering "Who is MARC?" within the first 3 seconds of page visit.
- **Decision 2: Interactive React State Filter vs. Page Links**
  - *Chosen Approach*: Single-page client-side filter tabs with smooth state transitions.
  - *Why*: Instantaneous response with zero page reload or scroll disruption.

---

## 4. Technical Architecture & Component Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                                 APP.TSX                                │
│                                                                        │
│  ├── Navbar (Includes "Projects" anchor)                               │
│  ├── Hero                                                              │
│  │     ├── Left: Value proposition, headline, trust tags, CTAs         │
│  │     └── Right: Headshot + "Hi, I am Momen Ahmedur Rahman Chowdhury  │
│  │               (MARC)" clarifying badge                              │
│  ├── VerifiedExperience (GaoTek US certificates)                       │
│  ├── Experience (Career timeline)                                      │
│  ├── FeaturedProjects (NEW - id="projects")                            │
│  │     ├── Interactive Filter Tabs (All / Client / Next / Affiliate)   │
│  │     └── 4 Detailed Visual Cards (eMarket247, HostMarc, URAL, Sunlit)│
│  ├── Services                                                          │
│  ├── AIStrategy                                                        │
│  └── ... (Credentials, Creative, Testimonials, FAQ, Contact, Footer)   │
└────────────────────────────────────────────────────────────────────────┘
```

### Proposed Changes

1. **`components/Hero.tsx`**:
   - Add the clear introductory caption under the headshot: *"Hi, I am Momen Ahmedur Rahman Chowdhury (MARC)"* with styled initials.
2. **`types.ts`**:
   - Define the `FeaturedProject` type interface.
3. **`constants.ts`**:
   - Add `FEATURED_PROJECTS` array with detailed metadata, live URLs, snapshots, and tags.
   - Add `{ label: "Projects", href: "#projects" }` to `NAV_ITEMS`.
4. **`components/FeaturedProjects.tsx`**:
   - Build the interactive showcase component with category filter tabs and visual cards.
5. **`App.tsx` & `components/Home.tsx`**:
   - Mount `<FeaturedProjects />` in the page flow.
6. **Verification**:
   - Run `compile_applet` and `lint_applet` to confirm clean compilation.
