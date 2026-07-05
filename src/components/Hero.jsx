import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import TypingText from './TypingText'
import MagneticButton from './MagneticButton'
import { getLenis } from '../hooks/useLenis'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const goTo = (id) => {
    const el = document.getElementById(id)
    const lenis = getLenis()
    if (el && lenis) lenis.scrollTo(el, { offset: -80 })
    else if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-grid-lines bg-grid [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-violet/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        <motion.span variants={item} className="eyebrow mb-6 glass px-4 py-2 rounded-full">
          Welcome to my portfolio
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display font-bold leading-[0.95] text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight"
        >
          <span className="block text-white">I'm</span>
          <span className="block text-gradient">Yash</span>
        </motion.h1>

        <motion.div variants={item} className="mt-6 font-display text-xl md:text-3xl text-white/80 h-10">
          <TypingText words={['Full Stack Java Developer', 'React & Spring Boot Engineer', 'Real-Time App Builder']} />
        </motion.div>

        <motion.p variants={item} className="mt-6 max-w-xl text-white/50 text-base md:text-lg leading-relaxed">
          I design and build fast, elegant, production-grade web applications —
          blending clean Java backends with modern, immersive React front-ends.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            onClick={() => goTo('projects')}
            className="px-7 py-3.5 rounded-full bg-white text-base-950 font-semibold text-sm shadow-glow hover:shadow-glow-cyan"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/resume.pdf"
            download
            className="px-7 py-3.5 rounded-full glass text-white font-semibold text-sm border border-white/15 hover:border-white/30"
          >
            Download Resume
          </MagneticButton>
          <MagneticButton
            onClick={() => goTo('contact')}
            className="px-7 py-3.5 rounded-full text-white/80 font-semibold text-sm hover:text-white transition-colors"
          >
            Contact Me →
          </MagneticButton>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex items-center gap-5">
          {[
            { icon: FiGithub, href: 'https://github.com/yashchouhan07', label: 'GitHub' },
            { icon: FiLinkedin, href: 'www.linkedin.com/in/yash-chouhan-0b135539b', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:chouhanyash309@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              data-cursor="hover"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:border-accent-cyan/50 transition-all hover:-translate-y-1"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => goTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/80"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FiArrowDown />
        </motion.span>
      </motion.button>
    </section>
  )
}
