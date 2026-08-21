import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [active, setActive] = useState('#hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass shadow-photon' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold tracking-widest text-lg">
          <span className="text-gradient">V</span>
          <span className="text-core/70 text-sm ml-1">/// deck</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`pb-1 transition-colors ${
                  active === link.href ? 'text-ion' : 'text-dim hover:text-core'
                }`}
              >
                {link.label}
              </a>
              {active === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-ion shadow-ion"
                />
              )}
            </li>
          ))}
        </ul>

        <a
          href="/Vasanth_Frontend.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ion/40 text-ion font-mono text-xs uppercase tracking-widest hover:bg-ion/10 hover:shadow-ion transition-all"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  )
}
