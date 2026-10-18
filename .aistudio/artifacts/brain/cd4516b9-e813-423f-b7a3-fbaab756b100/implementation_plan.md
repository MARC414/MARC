# Hero Refinement, Footer Websites & HostMarc Showcase Implementation Plan

Implement the requested refinements: remove the text line under the Hero headshot, expand the footer company links to include HostMarc and URAL under `webworm.com.au`, and equip the HostMarc card in Featured Projects with a dedicated, high-tech server benchmark and web engineering visual mockup.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following specific updates will be executed:

- **Hero Headshot Cleanup**: Remove the line `"Hi, I am Momen Ahmedur Rahman Chowdhury (MARC)"` directly beneath the profile photograph, restoring a clean, distraction-free executive portrait card.
- **Footer Company Links Expansion**: In the footer contact section directly under `webworm.com.au`, add:
  - **HostMarc**: `https://hostmarc.pages.dev` (Web engineering, hosting guidance & benchmarks)
  - **URAL**: `https://ural-travel.pages.dev` (Bangladesh travel guides, flights & visas)
- **HostMarc Card Visual in Featured Projects**: Replace the missing/failing external mshots URL with a high-fidelity, branded visual asset representing HostMarc's core value proposition: server hardware telemetry, cloud performance benchmarks, and high-performance web engineering.

---

## 1. Overview & Core Concept

- **What It Does**: Streamlines the Hero section visual hierarchy, provides comprehensive company navigation in the footer across all three active domains (`webworm.com.au`, `hostmarc.pages.dev`, `ural-travel.pages.dev`), and fixes the visual presentation of HostMarc in the Featured Projects section.
- **Target Audience / Persona**: Prospective clients, technical evaluators, and partners seeking direct access to MARC's digital businesses.
- **Key Value**: Polished presentation across the entire page with zero broken or missing graphics.

---

## 2. User Experience & Visual Design

### 1. Hero Section Cleanup (`components/Hero.tsx`)
- Remove the text card containing `"Hi, I am Momen Ahmedur Rahman Chowdhury (MARC)"`.
- Keep the rounded executive photo card with the bottom gradient overlay (`Momen A. R. Chowdhury · Digital Marketing Director · AI Strategist`), the verified `15+ Yrs Exp` badge, and the `Open for Strategic Roles` live indicator.

### 2. Footer Multi-Company Section (`components/Footer.tsx`)
Under the Contact Details column, expand the Company Website row to present all three ventures cleanly:
- **WebWorm Digital Agency**: `webworm.com.au` (Global digital marketing & SEO)
- **HostMarc Platform**: `hostmarc.pages.dev` (Web engineering & independent server benchmarks)
- **URAL Travel & Tourism**: `ural-travel.pages.dev` (Travel guides & flight itineraries from Dhaka)

### 3. HostMarc Visual Card (`constants.ts` & `public/hostmarc-preview.png` / visual asset)
- Provide a crisp, modern dark-mode cloud infrastructure & benchmark dashboard graphic for HostMarc (`https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000` paired with verified SVG/PNG fallbacks) displaying server telemetry, high uptime, and modern web hosting aesthetics.

---

## 3. Technical Architecture & File Modifications

### Component Structure Overview

```
┌────────────────────────────────────────────────────────────────────────┐
│                                HERO SECTION                            │
│                                                                        │
│   • Removed caption line under portrait                                │
│   • Clean executive portrait card preserved with verified badges       │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         FEATURED PROJECTS SECTION                      │
│                                                                        │
│   • HostMarc card updated with verified high-res visual banner         │
│   • Displays server benchmarks & web engineering branding              │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                               FOOTER SECTION                           │
│                                                                        │
│   Contact Details Column:                                              │
│     ├── Email: marcwriter2025@gmail.com                                │
│     ├── WhatsApp: +880 1784 385 335                                    │
│     ├── Agency: webworm.com.au                                         │
│     ├── Hosting Platform: hostmarc.pages.dev (NEW)                     │
│     └── Travel Guides: ural-travel.pages.dev (NEW)                     │
└────────────────────────────────────────────────────────────────────────┘
```

### Proposed Changes

1. **`components/Hero.tsx`**:
   - Remove the introductory quote and acronym block from under the portrait.
2. **`components/Footer.tsx`**:
   - Add dedicated rows with icons for `hostmarc.pages.dev` and `ural-travel.pages.dev` under `webworm.com.au`.
3. **`constants.ts`**:
   - Update HostMarc's `imageUrl` with a reliable, high-resolution web engineering & server benchmark graphic.
4. **Verification**:
   - Run `compile_applet` and `lint_applet` to confirm zero build or lint issues.
