import { profile, navLinks } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="relative border-t border-photon/15 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-dim">
          © {new Date().getFullYear()} {profile.fullName}. All transmissions logged.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-mono uppercase tracking-widest text-dim hover:text-ion transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
