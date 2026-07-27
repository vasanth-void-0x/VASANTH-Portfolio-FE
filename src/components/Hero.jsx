import { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { profile } from '../data/portfolioData'
import MagneticButton from './MagneticButton'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero({ mouseRef }) {
  const frameRef = useRef(null)

  const handleTilt = (e) => {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(el, {
      rotateY: px * 16,
      rotateX: -py * 16,
      duration: 0.6,
      ease: 'power3.out',
      transformPerspective: 900,
    })
    mouseRef.current.x = px * 2
    mouseRef.current.y = -py * 2
  }
  const resetTilt = () => {
    gsap.to(frameRef.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center pt-24 pb-16 px-6"
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr_0.85fr] gap-10 items-center">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[11px] font-mono uppercase tracking-widest text-ion mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ion opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ion" />
            </span>
            System Online
          </motion.div>

          <motion.h2 variants={item} className="font-body text-xl text-dim mb-1">
            Hi, I'm
          </motion.h2>
          <motion.h1 variants={item} className="font-display font-black text-6xl sm:text-7xl xl:text-8xl leading-[0.95] text-gradient mb-4">
            {profile.name.toUpperCase()}
          </motion.h1>
          <motion.p variants={item} className="font-mono text-ion/90 uppercase tracking-[0.2em] text-sm sm:text-base mb-6">
            {profile.role}
          </motion.p>
          <motion.p variants={item} className="text-dim max-w-md mx-auto lg:mx-0 mb-9 leading-relaxed">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <MagneticButton href="#projects" variant="solid">
              Explore My Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              Contact
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* CENTER — HUD portrait */}
        <div className="order-1 lg:order-2 flex justify-center [perspective:1000px]">
          <div ref={frameRef} className="relative w-64 h-64 sm:w-80 sm:h-80 [transform-style:preserve-3d]">
            {/* glows */}
            <div className="absolute -inset-8 rounded-full bg-photon/25 blur-3xl animate-pulse-slow" />
            <div className="absolute -inset-4 rounded-full bg-ion/20 blur-2xl" />

            {/* rotating HUD rings */}
            <div className="absolute -inset-6 rounded-full border border-ion/30 border-dashed animate-spin-slow" />
            <div className="absolute -inset-10 rounded-full border border-photon/20 animate-spin-reverse" />
            <div className="absolute -inset-3 rounded-full border-2 border-ion/50 shadow-ion" />

            {/* portrait */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-core/20">
              <img
                src="/portrait.jpg"
                alt={profile.fullName}
                className="w-full h-full object-cover"
                style={{ transform: 'translateZ(20px)' }}
              />
              {/* scanner sweep */}
              <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-ion/40 to-transparent animate-scan" />
              {/* reflection sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            </div>

            {/* orbiting node markers */}
            {['React', 'JS', 'API', 'Git'].map((label, i) => (
              <div
                key={label}
                className="absolute w-fit animate-spin-slower"
                style={{ inset: 0, animationDelay: `${i * -6}s` }}
              >
                <span
                  className="absolute glass px-2 py-0.5 rounded-full text-[10px] font-mono text-ion whitespace-nowrap"
                  style={{ top: '-14px', left: '50%', transform: 'translateX(-50%)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — status panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="order-3 glass rounded-2xl p-6 space-y-5 max-w-sm mx-auto lg:mx-0 w-full"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-dim">Status</span>
            <span className="flex items-center gap-2 text-signal font-mono text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
              </span>
              {profile.status}
            </span>
          </div>

          <div className="h-px bg-core/10" />

          <div className="grid grid-cols-2 gap-4">
            <Stat label="Location" value={profile.location} />
            <Stat label="Education" value={profile.education} />
            <Stat label="Focus" value={profile.focus} />
            <Stat label="Role" value="Frontend" />
          </div>

          <div className="h-px bg-core/10" />

          <div className="flex items-center gap-2 text-[11px] font-mono text-dim">
            <span className="w-full h-1.5 rounded-full bg-core/10 overflow-hidden">
              <span className="block h-full w-[86%] bg-gradient-to-r from-ion to-photon animate-pulse-slow" />
            </span>
            <span>86%</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-[10px] font-mono uppercase tracking-widest text-dim mb-1">{label}</p>
      <p className="text-sm text-core font-medium">{value}</p>
    </div>
  )
}
