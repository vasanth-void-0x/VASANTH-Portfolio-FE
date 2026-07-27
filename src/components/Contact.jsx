import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import MagneticButton from './MagneticButton'

const socials = [
  { icon: FiGithub, label: 'GitHub', href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: FiMail, label: 'Email', href: `mailto:${profile.email}` },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow="Transmission // 06"
          title="Open a Channel"
          description="Have a role, a project, or just want to talk frontend? The line's open."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-10"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-dim">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-ion transition-colors">
              <FiMail /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-ion transition-colors">
              <FiPhone /> {profile.phone}
            </a>
          </div>

          <MagneticButton href={`mailto:${profile.email}`} variant="solid">
            Send a Transmission
          </MagneticButton>

          <div className="flex justify-center gap-5 mt-10">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-dim hover:text-ion hover:shadow-ion hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
