# Portfolio Website — Implementation Plan

A modern, config-driven, fully static personal portfolio built with **Next.js App Router**, **TypeScript**, and **Framer Motion**. The design uses a premium dark-mode aesthetic with glassmorphism accents and smooth animations.

---

## User Review Required

> [!IMPORTANT]
> **Design Direction**: The plan uses a **dark-mode-first** design with a deep navy/slate palette, gradient accents (violet → cyan), glassmorphism cards, and Inter font. If you prefer a light theme or different palette, let me know.

> [!IMPORTANT]
> **Content Placeholders**: The config JSON files will ship with realistic placeholder content (your name set to "Sai Kumar", sample projects, etc.). You'll customize these after the build. Is "Sai Kumar" correct, or should I use a different name?

> [!IMPORTANT]
> **Photo**: I will generate a professional placeholder avatar using the image generation tool. You can replace `public/images/hero-photo.webp` with your real photo later.

---

## Proposed Changes

### 1. Project Scaffolding

#### [NEW] Next.js App (root)

Scaffold using `npx -y create-next-app@latest ./ --typescript --app --eslint --src-dir --no-tailwind --import-alias "@/*"`.

Key `next.config.ts` settings:
```ts
output: 'export'        // 100% static
images: { unoptimized: true }  // required for static export
```

Install additional dependencies:
- `framer-motion` — scroll/reveal animations
- `react-icons` — icon library (GitHub, LinkedIn, etc.)

---

### 2. Configuration Layer (`src/config/`)

All content lives in typed JSON + a central `config.ts` barrel file.

#### [NEW] `src/config/personal.json`
Name, tagline, bio paragraph, email, phone, social links (GitHub, LinkedIn, Twitter), resume PDF filename.

#### [NEW] `src/config/projects.json`
Array of 4 projects, each with: `id`, `title`, `description`, `techStack[]`, `image`, `liveUrl`, `repoUrl`.

#### [NEW] `src/config/experience.json`
Array of work experiences: `company`, `role`, `period`, `highlights[]`.

#### [NEW] `src/config/skills.json`
Array of skill categories, each with `category` and `items[]`.

#### [NEW] `src/config/navigation.json`
Nav links array: `label`, `href` (anchor IDs).

#### [NEW] `src/config/config.ts`
Central barrel that imports all JSON, applies TypeScript interfaces, and re-exports everything as typed constants: `personalConfig`, `projectsConfig`, `experienceConfig`, `skillsConfig`, `navConfig`.

#### [NEW] `src/config/types.ts`
All TypeScript interfaces: `PersonalConfig`, `Project`, `Experience`, `Skill`, `NavLink`.

---

### 3. Design System & Global Styles

#### [NEW] `src/app/globals.css`
CSS custom properties design system:

| Token Group | Examples |
|---|---|
| Colors | `--bg-primary: #0a0f1e`, `--bg-card: rgba(15,23,42,0.6)`, `--accent-gradient`, `--text-primary`, `--text-secondary` |
| Typography | Inter from Google Fonts, fluid type scale (`clamp()`) |
| Spacing | 4px base grid (`--space-1` through `--space-16`) |
| Radii / Shadows | `--radius-md`, `--shadow-glow` |
| Glassmorphism | `--glass-bg`, `--glass-border`, `backdrop-filter: blur()` |
| Animations | `@keyframes fadeInUp`, `@keyframes shimmer` |

#### [NEW] `src/app/layout.tsx`
Root layout: Google Font `<link>`, global CSS import, `<html lang="en">`, SEO `<meta>` tags, smooth-scroll on `<html>`.

#### [NEW] `src/app/page.tsx`
Single-page architecture — renders all sections in order: `Hero → About → Projects → Resume → Contact`. Each section receives its config as props.

---

### 4. UI Components (`src/components/`)

All animation wrappers are `"use client"` components. Section components are server components that compose them.

#### [NEW] `src/components/Navbar.tsx` (client)
- Fixed top navbar with glassmorphism background
- Smooth-scroll anchor links from `navConfig`
- Active section highlighting via `IntersectionObserver`
- Mobile hamburger menu with slide-in drawer

#### [NEW] `src/components/Hero.tsx` (server)
- Full-viewport height hero
- Name + animated tagline (typing/gradient effect)
- Professional photo with glow ring
- CTA buttons: "View My Work" → #projects, "Download Resume" → PDF

#### [NEW] `src/components/About.tsx` (server)
- Split layout: bio paragraph left, skill chips grid right
- Skills rendered from `skillsConfig` with category headers
- Subtle fade-in-up on scroll

#### [NEW] `src/components/Projects.tsx` (server)
- Section heading + subtitle
- Responsive grid of `ProjectCard` components

#### [NEW] `src/components/ProjectCard.tsx` (client)
- Glassmorphism card with hover lift + glow effect
- Project image with overlay on hover
- Tech stack as pill badges
- Links to live demo & repo with icons
- Framer Motion `whileHover` and scroll reveal

#### [NEW] `src/components/Resume.tsx` (server)
- Timeline layout for experience entries from `experienceConfig`
- Each entry: company, role, period, bullet highlights
- Prominent "Download Resume PDF" button with download icon
- Animated timeline connector line

#### [NEW] `src/components/Contact.tsx` (server)
- Section with email, phone, social links from `personalConfig`
- Icon + label layout for each contact method
- Social links as icon buttons with hover effects

#### [NEW] `src/components/Footer.tsx` (server)
- Minimal footer: copyright, "Built with Next.js" note
- Social icon links repeated

#### [NEW] `src/components/animations/FadeInUp.tsx` (client)
- Reusable Framer Motion wrapper for scroll-triggered fade-in-up animations
- Uses `useInView` hook with configurable delay/duration

#### [NEW] `src/components/animations/StaggerChildren.tsx` (client)
- Wrapper that staggers child animations sequentially

#### [NEW] `src/components/SectionHeading.tsx` (server)
- Reusable section title + subtitle with gradient underline accent

---

### 5. Static Assets (`public/`)

#### [NEW] `public/images/hero-photo.webp`
Generated placeholder professional photo.

#### [NEW] `public/images/project-1.webp` through `project-4.webp`
Generated placeholder project screenshots.

#### [NEW] `public/resume.pdf`
Placeholder empty PDF (user will replace with their real resume).

---

### 6. Post-Development Guides (Artifact)

After building the site, I'll create a **`deployment_guide.md`** artifact covering:

1. **Deployment to Vercel** — step-by-step with `vercel` CLI or GitHub integration
2. **Deployment to GitHub Pages** — `next.config.ts` `basePath` setup, GitHub Actions workflow
3. **Deployment to Netlify** — drag-and-drop or Git integration
4. **QR Code Generation** — using free tools (qr-code-generator.com, Python `qrcode` library)
5. **Resume Integration** — best practices for inserting the QR code into a PDF resume

---

## Project File Tree (Overview)

```
d:\Office\Portfolio Website\
├── public/
│   ├── images/
│   │   ├── hero-photo.webp
│   │   ├── project-1.webp
│   │   ├── project-2.webp
│   │   ├── project-3.webp
│   │   └── project-4.webp
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── animations/
│   │   │   ├── FadeInUp.tsx
│   │   │   └── StaggerChildren.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── SectionHeading.tsx
│   └── config/
│       ├── types.ts
│       ├── personal.json
│       ├── projects.json
│       ├── experience.json
│       ├── skills.json
│       ├── navigation.json
│       └── config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Open Questions

> [!IMPORTANT]
> 1. **Your Name**: Should I use "Sai Kumar" or a different name throughout the site?
> 2. **Color Preference**: Are you happy with the dark navy + violet/cyan gradient palette, or do you have a preferred brand color?
> 3. **Number of Projects**: I plan 4 placeholder projects — would you prefer 3 or 5?
> 4. **Resume PDF**: Do you have a resume PDF to include now, or should I create a minimal placeholder?

---

## Verification Plan

### Automated Tests
1. `npm run build` — confirms the static export succeeds without errors
2. `npx serve out` — serves the static `out/` directory locally for manual inspection
3. Browser subagent — navigate all sections, verify responsive layout, check all links

### Manual Verification
- Visual review of all sections in the browser at desktop & mobile widths
- Confirm all config-driven content renders correctly
- Validate smooth scroll and Framer Motion animations work
- Confirm "Download Resume" triggers a PDF download
