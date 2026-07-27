import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { stats } from '../data/portfolioData'

function CountUp({ target, suffix = '' }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true
          const start = performance.now()
          const duration = 1400
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="font-display font-black text-4xl sm:text-5xl text-gradient">
      {value}
      {suffix}
    </span>
  )
}

export default function StatsPanel() {
  return (
    <section className="relative px-6 pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 0 30px rgba(0,229,255,0.25)' }}
            className="glass rounded-2xl px-5 py-6 text-center transition-all"
          >
            <CountUp target={s.value} suffix={s.suffix} />
            <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-dim">{s.label}</p>
            {s.note && <p className="text-[10px] text-dim/70 mt-0.5">{s.note}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
