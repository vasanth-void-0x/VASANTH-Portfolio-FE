import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function getProjectPreview(project) {
  if (project.image) return project.image

  if (project.live) {
    return `https://image.thum.io/get/width/1200/crop/700/noanimate/${project.live}`
  }

  const repository = project.github.replace('https://github.com/', '')
  return `https://opengraph.githubassets.com/portfolio-preview/${repository}`
}

function ProjectPreview({ project, featured = false }) {
  const destination = project.live || project.github
  const label = project.image ? 'Project Preview' : project.live ? 'Live Preview' : 'Repository Preview'
  const content = (
    <>
      <img
        src={getProjectPreview(project)}
        alt={`${project.name} project preview`}
        loading="lazy"
        className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
      />
      <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-[#050916]/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-core backdrop-blur-md">
        {label}
      </span>
    </>
  )

  const className = `relative block overflow-hidden bg-nebula/70 ${featured ? 'min-h-[280px] md:min-h-full md:border-r md:border-white/10' : 'aspect-video border-b border-white/10'}`

  return destination ? (
    <a
      href={destination}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.name} ${project.live ? 'live demo' : 'repository'}`}
      className={className}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-[1500px] mx-auto">
        <SectionHeading
          eyebrow="Transmission // 03"
          title="Mission Log"
          description="Software, frontend, full-stack, automation, and security applications built through hands-on development."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d20]/35 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors duration-500 hover:border-ion/30 ${p.id === 'ai-red-team-agent' ? 'md:col-span-2 xl:col-span-3 md:grid md:grid-cols-[1.35fr_1fr] border-photon/25' : ''}`}
            >
              <ProjectPreview project={p} featured={p.id === 'ai-red-team-agent'} />

              <div className={`relative ${p.id === 'ai-red-team-agent' ? 'p-7 md:p-10 flex flex-col justify-center' : 'p-5'}`}>
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-photon/15 blur-3xl group-hover:bg-ion/20 transition-colors duration-500" />

                {p.id === 'ai-red-team-agent' && (
                  <div className="relative mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-300">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
                    </span>
                    Upcoming · Biggest Build
                  </div>
                )}

                <div className="relative flex items-start justify-between mb-3">
                  <h3 className={`font-display leading-snug text-core ${p.id === 'ai-red-team-agent' ? 'text-3xl md:text-4xl' : 'text-lg'}`}>{p.name}</h3>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.name} on GitHub`}
                      className="text-dim hover:text-ion transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                </div>
                <p className="relative font-mono text-[11px] uppercase tracking-widest text-ion mb-3">{p.tagline}</p>
                <p className={`relative text-core/70 leading-relaxed mb-4 ${p.id === 'ai-red-team-agent' ? 'text-base md:text-lg' : 'text-sm line-clamp-5'}`}>{p.description}</p>

                <div className="relative flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md border border-white/5 bg-nebula/80 text-[10px] text-core/85">
                      {t}
                    </span>
                  ))}
                </div>

                {(p.github || p.live) && (
                  <div className="relative flex flex-wrap items-center gap-5">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ion group-hover:gap-2.5 transition-all"
                      >
                        GitHub <FiGithub size={13} />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-signal hover:gap-2.5 transition-all"
                      >
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                        </span>
                        Live Demo <FiExternalLink size={13} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
