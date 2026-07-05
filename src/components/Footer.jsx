import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { getLenis } from '../hooks/useLenis'

export default function Footer() {
  const scrollTop = () => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="section !py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl font-bold text-white">
            Yash<span className="text-accent-cyan">.</span>
          </p>
          <p className="text-xs text-white/40 mt-2">
            © {new Date().getFullYear()} Yash. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: FiGithub, href: 'https://github.com/yashchouhan07' },
            { icon: FiLinkedin, href: 'www.linkedin.com/in/yash-chouhan-0b135539b' },
            { icon: FiMail, href: 'mailto:chouhanyash309@gmail.com' },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <motion.button
          onClick={scrollTop}
          whileHover={{ y: -4 }}
          data-cursor="hover"
          aria-label="Back to top"
          className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center text-white shadow-glow"
        >
          <FiArrowUp />
        </motion.button>
      </div>
    </footer>
  )
}
