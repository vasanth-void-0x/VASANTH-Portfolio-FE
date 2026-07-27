import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Transmission // 04" title="Flight History" description="Time logged in the field, in order." />

        <div className="relative pl-8 border-l border-photon/25">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-void border-2 border-ion shadow-ion" />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg text-core">{e.role}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ion">{e.duration}</span>
                </div>
                <p className="text-dim text-sm mb-4">{e.org}</p>
                <ul className="space-y-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-dim text-sm leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-photon shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
