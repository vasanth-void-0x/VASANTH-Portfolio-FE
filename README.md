# Vasanth Kumar — Command Deck Portfolio

An original, futuristic "command center in deep space" portfolio built with React 19, Vite, Tailwind CSS, Framer Motion, GSAP, and React Three Fiber.

## Design system

- **Palette** — void `#05030f`, abyss `#0a0620`, nebula `#150c33`, ion `#00e5ff`, photon `#7c5cff`, signal `#c026d3`, core `#f5f3ff`.
- **Type** — Orbitron (display/headings), Space Grotesk (body), JetBrains Mono (labels, data, eyebrows).
- **Signature element** — the Hero's holographic HUD portrait frame: dual counter-rotating rings, an orbiting scanner sweep, and floating skill nodes (`React / JS / API / Git`) that orbit the portrait — a single motif that does double duty as both the "photo frame" and a first skills teaser.

## Tech stack

- React 19 + Vite
- Tailwind CSS (custom token system in `tailwind.config.js`)
- Framer Motion (section reveals, stagger choreography, layout transitions)
- GSAP + ScrollTrigger (magnetic buttons, cursor glow, portrait tilt, scroll-linked parallax)
- Three.js via `@react-three/fiber` (animated starfield, drifting galaxy dust, rotating ringed planet, orbiting moon)
- react-icons (GitHub / LinkedIn / Mail / arrows)

## Structure

```
src/
  data/portfolioData.js   -> single source of truth for all resume content
  components/
    SpaceBackground.jsx   -> R3F canvas: stars, planet, moon, dust, camera rig
    AtmosphereLayer.jsx    -> CSS/SVG nebula, aurora, grid floor, shooting stars
    CursorGlow.jsx         -> GSAP-driven cursor ring + dot (desktop only)
    Navbar.jsx             -> sticky glass nav, scroll-spy underline
    Hero.jsx               -> 3-column hero, HUD portrait, status panel
    MagneticButton.jsx     -> gradient-border button, magnetic pull, ripple
    StatsPanel.jsx         -> animated count-up stat cards
    About.jsx / Skills.jsx / Projects.jsx / Experience.jsx / Education.jsx / Contact.jsx / Footer.jsx
  App.jsx                  -> composition root + global GSAP scroll wiring
```

To update content (projects, skills, experience, etc.), edit **`src/data/portfolioData.js`** only — every section reads from it.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Notes

- The portrait in `public/portrait.png` is a standard photo styled with a circular clip + HUD frame rather than a true alpha-channel cutout. Swap in a transparent PNG cutout of the same aspect ratio for the literal "floating subject" effect — the frame, glow, and scan animation will work unchanged.
- Respects `prefers-reduced-motion` (see `src/index.css`).
- Cursor glow is disabled on coarse-pointer (touch) devices automatically.
- Deploy target: Vercel/Netlify — it's a static Vite build, no server required.
