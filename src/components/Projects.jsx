import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Transmission // 03"
          title="Mission Log"
          description="A rundown of what's been built, shipped, and shipped again."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-photon/20 blur-3xl group-hover:bg-ion/25 transition-colors duration-500" />

              <div className="relative flex items-start justify-between mb-3">
                <h3 className="font-display text-xl text-core">{p.name}</h3>
                <a href={p.link} aria-label={`Open ${p.name} on GitHub`} className="text-dim hover:text-ion transition-colors">
                  <FiGithub size={18} />
                </a>
              </div>
              <p className="relative font-mono text-[11px] uppercase tracking-widest text-ion mb-3">{p.tagline}</p>
              <p className="relative text-dim leading-relaxed mb-5">{p.description}</p>

              <div className="relative flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-nebula/60 text-[11px] text-core/80">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="relative inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ion group-hover:gap-2.5 transition-all"
              >
                View Log <FiExternalLink size={13} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
