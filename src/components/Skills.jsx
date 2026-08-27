import { motion } from 'framer-motion'
import {
  FiActivity,
  FiBox,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiServer,
  FiTerminal,
  FiTool,
  FiZap,
} from 'react-icons/fi'
import { skillGroups } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const groupIcons = [FiLayers, FiServer, FiCpu, FiCloud, FiCode, FiTool]

const skillIcons = {
  HTML5: FiGlobe,
  CSS3: FiLayers,
  JavaScript: FiCode,
  'JavaScript (ES6+)': FiCode,
  'React.js': FiActivity,
  React: FiActivity,
  TypeScript: FiCode,
  'Tailwind CSS': FiLayers,
  Bootstrap: FiLayers,
  'Responsive UI': FiLayers,
  'Node.js': FiServer,
  'Express.js': FiServer,
  FastAPI: FiZap,
  SQLite: FiDatabase,
  MongoDB: FiDatabase,
  Python: FiTerminal,
  Git: FiGitBranch,
  GitHub: FiGithub,
  'GitHub Actions': FiActivity,
  Docker: FiBox,
  Vercel: FiCloud,
  Render: FiCloud,
  'Cloudflare Workers': FiCloud,
  Vite: FiZap,
  npm: FiBox,
  Postman: FiGlobe,
  'VS Code': FiCode,
  'REST APIs': FiGlobe,
  WebSockets: FiActivity,
  JWT: FiBox,
  'LLM Integration': FiCpu,
  RAG: FiDatabase,
  MCP: FiGitBranch,
  'Groq API': FiZap,
  'Prompt Engineering': FiTerminal,
  'Agentic AI': FiCpu,
  n8n: FiGitBranch,
  SQL: FiDatabase,
  JSON: FiCode,
  'Chrome DevTools': FiTool,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  const totalSkills = new Set(skillGroups.flatMap((group) => group.items)).size

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-24 h-64 w-64 rounded-full bg-ion/[0.055] blur-[100px]" />
        <div className="absolute bottom-16 right-[10%] h-72 w-72 rounded-full bg-photon/[0.06] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Transmission // 02"
          title="Software Capability Stack"
          description="Project-validated technologies used to design, build, integrate, and deploy modern full-stack applications."
        />

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-ion/15 bg-[#080d20]/20 px-5 py-4 backdrop-blur-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Technology Stack</span>
            <strong className="mt-1 block font-display text-2xl text-core">{totalSkills}+</strong>
          </div>
          <div className="rounded-xl border border-signal/15 bg-[#080d20]/20 px-5 py-4 backdrop-blur-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Coverage</span>
            <strong className="mt-1 block font-display text-lg text-signal">Full-Stack + AI</strong>
          </div>
          <div className="rounded-xl border border-photon/20 bg-[#080d20]/20 px-5 py-4 backdrop-blur-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Evidence</span>
            <strong className="mt-1 flex items-center gap-2 font-display text-lg text-photon">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Project Validated
            </strong>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = groupIcons[groupIndex] ?? FiCode

            return (
              <motion.article
                key={group.title}
                variants={card}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1127]/20 via-[#080d20]/20 to-[#060a18]/20 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-300 hover:border-ion/35"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-ion/[0.06] blur-3xl transition-colors group-hover:bg-photon/[0.1]" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-ion/25 bg-ion/[0.08] text-ion shadow-[0_0_24px_rgba(0,229,255,0.08)]">
                      <GroupIcon size={20} />
                    </span>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ion/65">
                        Stack {String(groupIndex + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-1 font-display text-base text-core">{group.title}</h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1 font-mono text-[9px] text-dim">
                    {group.items.length} tools
                  </span>
                </div>

                <div className="relative mt-6 grid grid-cols-2 gap-2">
                  {group.items.map((item) => {
                    const SkillIcon = skillIcons[item] ?? FiCode

                    return (
                      <div
                        key={item}
                        className="flex min-h-11 items-center gap-2.5 rounded-lg border border-white/[0.07] bg-nebula/45 px-3 py-2.5 text-core/80 transition-all duration-200 hover:border-ion/30 hover:bg-ion/[0.055] hover:text-core"
                      >
                        <SkillIcon className="shrink-0 text-ion" size={16} aria-hidden="true" />
                        <span className="text-[11px] font-medium leading-tight">{item}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="relative mt-5 h-px overflow-hidden bg-white/[0.06]">
                  <div className="h-full w-2/3 bg-gradient-to-r from-ion via-photon to-transparent opacity-55 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
