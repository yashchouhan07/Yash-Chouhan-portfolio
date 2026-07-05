import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { skillCategories } from '../data/skills'

function SkillBar({ skill, index }) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass rounded-xl p-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon className="text-xl text-accent-cyan" />
        <span className="text-sm font-medium text-white/85">{skill.name}</span>
        <span className="ml-auto text-xs text-white/40">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <span className="eyebrow">What I work with</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-16">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, ci) => (
          <Reveal key={category.title} delay={ci * 0.1}>
            <div className="glass-strong rounded-2xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${category.accent}`} />
                <h3 className="font-display text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {category.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} index={si} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
