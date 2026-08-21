import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function getProjectPreview(project) {
  if (project.live) {
    return `https://image.thum.io/get/width/1200/crop/700/noanimate/${project.live}`
  }

  const repository = project.github.replace('https://github.com/', '')
  return `https://opengraph.githubassets.com/portfolio-preview/${repository}`
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Transmission // 03"
          title="Mission Log"
          description="Software, frontend, full-stack, automation, and security applications built through hands-on development."
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
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#080d20]/90 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors duration-500 hover:border-ion/30"
            >
              <a
                href={p.live || p.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.name} ${p.live ? 'live demo' : 'repository'}`}
                className="relative block aspect-video overflow-hidden border-b border-white/10 bg-nebula/70"
              >
                <img
                  src={getProjectPreview(p)}
                  alt={`${p.name} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-[#050916]/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-core backdrop-blur-md">
                  {p.live ? 'Live Preview' : 'Repository Preview'}
                </span>
              </a>

              <div className="relative p-7">
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-photon/15 blur-3xl group-hover:bg-ion/20 transition-colors duration-500" />

                <div className="relative flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl text-core">{p.name}</h3>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.name} on GitHub`}
                    className="text-dim hover:text-ion transition-colors"
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
                <p className="relative font-mono text-[11px] uppercase tracking-widest text-ion mb-3">{p.tagline}</p>
                <p className="relative text-core/70 leading-relaxed mb-5">{p.description}</p>

                <div className="relative flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md border border-white/5 bg-nebula/80 text-[11px] text-core/85">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="relative flex flex-wrap items-center gap-5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ion group-hover:gap-2.5 transition-all"
                  >
                    GitHub <FiGithub size={13} />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-signal hover:gap-2.5 transition-all"
                    >
                      Live Demo <FiExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
