import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Transmission // 05" title="Training Record" description="Formal education on file." />

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-ion/10 border border-ion/30 flex items-center justify-center mb-5 text-ion">
                <FiBookOpen size={20} />
              </div>
              <h3 className="font-display text-lg text-core mb-1">{ed.degree}</h3>
              <p className="text-dim text-sm mb-4">{ed.institution}</p>
              <span className="font-mono text-[11px] uppercase tracking-widest text-photon">{ed.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
