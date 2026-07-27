import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Transmission // 02"
          title="Skill Matrix"
          description="Tools and technologies loaded into the operator's toolkit."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={card}
              whileHover={{ y: -6, borderColor: 'rgba(0,229,255,0.5)' }}
              className="glass rounded-2xl p-6 transition-colors"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-ion mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-nebula/60 border border-photon/20 text-xs text-core/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
