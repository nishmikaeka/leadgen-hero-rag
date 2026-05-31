# Hero-rag

A high-converting landing page for custom AI chatbot services, built with Next.js and Tailwind CSS. The hero section is crafted to generate leads through clear positioning, a strong value proposition, and a polished CTA.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Architecture](#architecture)
- [How to Run Locally](#how-to-run-locally)
- [Production Deployment](#production-deployment)
- [Project Structure](#project-structure)
- [Notes](#notes)

---

## Project Overview

`Hero-rag` is a single-page, marketing-focused experience designed for AI consultants and freelancers selling Retrieval-Augmented Generation (RAG) chatbot implementations.

The hero section uses:

- a strong headline that positions the offer as a business transformation,
- a compact benefit list that builds trust,
- a prominent Fiverr CTA for conversion,
- and an animated product demo video to increase engagement.

This repository is ready for GitHub upload with a clean structure, clear metadata, and documented local setup.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Video / media:** Native HTML5 `<video>` element with IntersectionObserver playback control
- **Type system:** TypeScript

---

## Features

- Responsive hero layout with split copy + media
- Mobile-first design with a smooth mobile video peek
- Animated entrance effects via `framer-motion`
- FAQ modal with accessible focus and keyboard support
- Custom CTA button linking to Fiverr
- SEO-friendly metadata via Next.js `metadata`
- Clean theme tokens and utility-driven styling

---

## Architecture

### Page layout

- `app/page.tsx` contains the hero structure and modal state.
- `components/HeroLeft.tsx` renders the lead-generating headline, benefits, and CTA.
- `components/HeroRight.tsx` renders the demo video and handles autoplay logic.
- `components/FaqModal.tsx` provides a frictionless FAQ experience.

### Styling and design tokens

- Global fonts are loaded in `app/layout.tsx`.
- Tailwind config extends theme colors to use CSS custom properties from `globals.css`.

### UX behavior

- Desktop video autoplays immediately when allowed.
- Mobile video playback begins only after 66% of the video enters view.
- Modal disables body scroll and closes on Escape or backdrop click.

---

## How to Run Locally

### Prerequisites

- Node.js 20+ recommended
- npm 9+ or Yarn

### Install and start

```bash
cd Hero-rag
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Production Deployment

This app is ready to deploy to any Next.js hosting provider.

Recommended platforms:

- Vercel
- Netlify
- Cloudflare Pages

General deployment steps:

1. Push this repository to GitHub.
2. Connect the repo to your hosting provider.
3. Set the build command to `npm run build` and the output directory to `.next`.

---

## Project Structure

- `app/`
  - `page.tsx` — hero landing page and FAQ modal state
  - `layout.tsx` — global metadata, fonts, and HTML wrapper
- `components/`
  - `HeroLeft.tsx` — hero headline, benefits, and CTA
  - `HeroRight.tsx` — demo video experience
  - `FaqModal.tsx` — FAQ modal with accordion support
- `public/` — static assets such as logo and video files
- `tailwind.config.ts` — Tailwind content paths and theme extensions
- `postcss.config.js` — PostCSS configuration
- `tsconfig.json` — TypeScript configuration

---

## Notes

- The current CTA points to Fiverr. Update `components/HeroLeft.tsx` to your preferred destination.
- The hero is built for lead generation and can be extended with a contact form, newsletter signup, or Calendly integration.
- If you want to convert this into a full marketing site, add additional sections such as testimonials, services, and pricing.

---

## License

This project is open source and ready for GitHub publishing. Feel free to add a license file such as `LICENSE` before sharing publicly.
