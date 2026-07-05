# Yash — Premium Portfolio

A cinematic, Apple-meets-Awwwards personal portfolio built with React, Vite, Tailwind CSS,
Framer Motion, GSAP, Three.js (React Three Fiber), Lenis smooth scroll, and EmailJS.

## ✨ Features

- Full-screen animated hero with typing effect and magnetic CTA buttons
- Interactive Three.js particle background with mouse parallax
- Glassmorphism cards, glowing gradients, animated skill bars, animated counters
- Sticky navbar with scroll-based styling + scroll-spy active link highlighting
- Smooth scrolling via Lenis, scroll-triggered reveal animations
- Custom animated cursor (desktop only)
- Certificate gallery with lightbox
- Contact form wired to EmailJS
- Fully responsive, accessible, and production-ready

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

### Build for production

```bash
npm run build
npm run preview
```

## 🔧 Configuration

### 1. Replace placeholder content

- `src/data/projects.js` — your projects, links, tags
- `src/data/timeline.js` — education, experience, certificates, stats
- `src/data/skills.js` — your tech stack and proficiency levels
- `src/components/Hero.jsx` / `Footer.jsx` — update GitHub, LinkedIn, email links
- `public/profile.jpg` — your professional photo
- `public/resume.pdf` — your real resume
- `public/certificates/cert-*.jpg` — your certificate images

### 2. EmailJS setup (Contact form)

1. Create a free account at https://www.emailjs.com
2. Create an Email Service and an Email Template with fields: `name`, `email`, `subject`, `message`
3. Open `src/components/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

with your actual EmailJS credentials.

## 📁 Project Structure

```
src/
  components/     # All UI components (Hero, About, Skills, Projects, etc.)
  data/           # Content data (projects, skills, timeline)
  hooks/          # useLenis (smooth scroll), useActiveSection (scroll-spy)
  index.css       # Design system: glass, gradients, cursor, scrollbar
  App.jsx         # Root composition
  main.jsx        # Entry point
public/           # Static assets: images, resume, favicon
```

## 🎨 Design System

- Fonts: Space Grotesk (display) + Inter (body)
- Colors: near-black base with violet / cyan / fuchsia accent gradients
- Effects: `.glass`, `.glass-strong`, `.text-gradient`, `.gradient-border` utility classes in `index.css`

## ⚡ Performance Notes

- Route-level code splitting is handled by Vite's Rollup config (`vite.config.js`) — three.js,
  framer-motion/gsap, and vendor chunks are split automatically.
- Images use `loading="lazy"`.
- Replace placeholder gradient images in `public/` with optimized real photos (WebP/AVIF recommended)
  before shipping to keep Lighthouse scores high.
- Consider compressing `resume.pdf` and certificate images.

## 📦 Deployment

Deploy the `dist/` folder (after `npm run build`) to Vercel, Netlify, or any static host.
