import { useRef } from 'react'
import gsap from 'gsap'
import { FiArrowUpRight } from 'react-icons/fi'

export default function MagneticButton({ children, href = '#', variant = 'solid', onClick }) {
  const btnRef = useRef(null)

  const handleMove = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power3.out' })
  }

  const handleLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
  }

  const ripple = (e) => {
    const btn = btnRef.current
    const circle = document.createElement('span')
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    circle.style.width = circle.style.height = `${size}px`
    circle.style.left = `${e.clientX - rect.left - size / 2}px`
    circle.style.top = `${e.clientY - rect.top - size / 2}px`
    circle.className = 'absolute rounded-full bg-white/25 pointer-events-none animate-[ripple_0.7s_ease-out]'
    btn.appendChild(circle)
    setTimeout(() => circle.remove(), 700)
    onClick?.(e)
  }

  const base =
    'relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest transition-shadow duration-300'
  const styles =
    variant === 'solid'
      ? `${base} bg-gradient-to-r from-ion to-photon text-void font-semibold shadow-ion hover:shadow-photon`
      : `${base} border border-ion/50 text-ion hover:bg-ion/10 hover:shadow-ion`

  return (
    <a
      ref={btnRef}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={ripple}
      className={styles}
    >
      <span>{children}</span>
      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1" />
      <style>{`@keyframes ripple { to { transform: scale(2.5); opacity: 0; } }`}</style>
    </a>
  )
}
