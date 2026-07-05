import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import useActiveSection from '../hooks/useActiveSection'
import { getLenis } from '../hooks/useLenis'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    const lenis = getLenis()
    if (el && lenis) lenis.scrollTo(el, { offset: -80 })
    else if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-[500] transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl flex items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? 'glass-strong rounded-2xl mx-4 md:mx-auto shadow-inner-glass' : ''
        }`}
        style={{ paddingTop: scrolled ? '0.65rem' : 0, paddingBottom: scrolled ? '0.65rem' : 0 }}
      >
        <button
          onClick={() => goTo('home')}
          data-cursor="hover"
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          Yash<span className="text-accent-cyan">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              data-cursor="hover"
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id ? 'text-white' : 'text-white/50 hover:text-white/90'
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute left-4 right-4 -bottom-0.5 h-[2px] bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-4 mt-3 glass-strong rounded-2xl p-4 flex flex-col gap-1"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className={`text-left px-3 py-3 rounded-xl text-sm font-medium ${
                active === link.id ? 'bg-white/10 text-white' : 'text-white/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
