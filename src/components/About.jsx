import { motion } from 'framer-motion'
import { profile, coreCompetencies, strengths } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Transmission // 01"
          title="About the Operator"
          description="A quick brief on who's behind the console."
        />

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display text-lg text-ion mb-4 tracking-widest uppercase">Profile</h3>
            <p className="mb-6 text-[15px] leading-7 text-core/82">
              Passionate {profile.role} skilled in HTML, CSS, JavaScript, and React, with hands-on
              project experience and a Full Stack Development internship. Eager to contribute, learn
              quickly, and build high-quality user experiences in a collaborative team.
            </p>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-ion/35 bg-ion/[0.07] px-3 py-1.5 font-mono text-[11px] text-ion shadow-[0_0_14px_rgba(0,229,255,0.06)] transition-colors hover:border-photon/55 hover:bg-photon/[0.09] hover:text-[#c9a8ff]"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display text-lg text-ion mb-4 tracking-widest uppercase">Strengths</h3>
            <ul className="space-y-3">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] leading-6 text-core/78">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ion shadow-[0_0_10px_rgba(0,229,255,0.85)]" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
