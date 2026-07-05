import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import Reveal from './Reveal'
import { experience } from '../data/timeline'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <span className="eyebrow">Where I've worked</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-16">
          Internship <span className="text-gradient">Experience</span>
        </h2>
      </Reveal>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet/60 via-white/10 to-transparent md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              <span className="absolute left-2.5 md:left-auto md:right-0 top-1.5 w-3.5 h-3.5 rounded-full bg-accent-cyan shadow-glow-cyan md:-mr-[7px]"
                style={i % 2 !== 0 ? { right: 'auto', left: '-7px' } : {}}
              />
              <div className="glass-strong rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
                <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <FiBriefcase className="text-accent-cyan" />
                  <span className="text-xs tracking-widest uppercase text-accent-cyan/80">{exp.year}</span>
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-white/50 mt-0.5 mb-3">{exp.company}</p>
                <p className="text-sm text-white/40 leading-relaxed mb-4">{exp.description}</p>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
