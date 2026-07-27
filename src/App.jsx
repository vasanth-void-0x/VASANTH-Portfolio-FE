import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SpaceBackground from './components/SpaceBackground'
import AtmosphereLayer from './components/AtmosphereLayer'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsPanel from './components/StatsPanel'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // gentle section fade/parallax handled by framer-motion whileInView per-section;
    // GSAP owns global scroll-linked effects (background drift on scroll).
    const ctx = gsap.context(() => {
      gsap.utils.toArray('main > section').forEach((section) => {
        gsap.fromTo(
          section,
          { backgroundPositionY: '0%' },
          {
            backgroundPositionY: '10%',
            ease: 'none',
            scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <SpaceBackground mouseRef={mouseRef} />
      <AtmosphereLayer />
      <div className="noise-layer" />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero mouseRef={mouseRef} />
        <StatsPanel />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
