import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiAward } from 'react-icons/fi'
import Reveal from './Reveal'
import { certificates } from '../data/timeline'


export default function Certificates() {
  const [active, setActive] = useState(null)

  return (
    <section id="certificates" className="section">
      <Reveal>
        <span className="eyebrow">Proof of Work</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-16">
          Certificates & <span className="text-gradient">Achievements</span>
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.08}>
            <motion.button
              onClick={() => setActive(cert)}
              whileHover={{ y: -6 }}
              data-cursor="hover"
              className="group w-full text-left glass rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-base-800 to-base-900 relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-base-900/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiAward className="text-3xl text-accent-cyan" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display text-sm font-semibold text-white leading-snug">{cert.title}</h4>
                <p className="text-xs text-white/40 mt-1">{cert.issuer} · {cert.date}</p>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full glass-strong rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white z-10"
                aria-label="Close"
              >
                <FiX />
              </button>
              <img src={active.image} alt={active.title} className="w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white">{active.title}</h3>
                <p className="text-sm text-white/50 mt-1">{active.issuer} · {active.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
