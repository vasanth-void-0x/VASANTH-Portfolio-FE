import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-2xl mx-auto text-center mb-14"
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-ion">{eyebrow}</span>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-4 text-core">{title}</h2>
      {description && <p className="text-dim leading-relaxed">{description}</p>}
    </motion.div>
  )
}
