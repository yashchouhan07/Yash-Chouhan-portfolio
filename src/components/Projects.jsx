// import { useRef } from 'react'
// import { motion } from 'framer-motion'
// import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'
// import Reveal from './Reveal'
// import { projects } from '../data/projects'

// function ProjectCard({ project, index }) {
//   const cardRef = useRef(null)

//   const handleMove = (e) => {
//     const el = cardRef.current
//     if (!el) return
//     const rect = el.getBoundingClientRect()
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
//     el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`
//   }

//   const handleLeave = () => {
//     if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
//   }

//   return (
//     <Reveal delay={index * 0.12}>
//       <div
//         ref={cardRef}
//         onMouseMove={handleMove}
//         onMouseLeave={handleLeave}
//         className="group relative rounded-2xl glass-strong overflow-hidden transition-transform duration-300 ease-out will-change-transform"
//       >
//         {/* <div className={`h-52 relative bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
//           <div className="absolute inset-0 bg-grid-lines bg-grid opacity-30" />
//           <span className="font-display text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors select-none">
//             {String(index + 1).padStart(2, '0')}
//           </span>
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-t from-base-900 via-transparent to-transparent"
//           />
//         </div> */}
//         <div className="relative h-60 overflow-hidden">

//   Project Image
//   <img
//     src={project.image}
//     alt={project.title}
//     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//   />
//   <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

//   {/* Dark Overlay */}
//   <div className="absolute inset-0 bg-black/30"></div>

//   {/* Bottom Blur + Gradient */}
//   <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent backdrop-blur-lg"></div>

//   {/* Project Number */}
//   <span className="absolute top-5 left-5 text-6xl font-bold text-white/20">
//     {String(index + 1).padStart(2, '0')}
//   </span>

// </div>

//         <div className="p-6 md:p-7">
//           <div className="flex items-start justify-between gap-3 mb-3">
//             <h3 className="font-display text-xl md:text-2xl font-semibold text-white">{project.title}</h3>
//             <FiArrowUpRight className="text-white/30 group-hover:text-accent-cyan group-hover:rotate-45 transition-all shrink-0 mt-1" size={20} />
//           </div>
//           <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

//           <ul className="text-xs text-white/40 mb-5 space-y-1.5">
//             {project.highlights.map((h) => (
//               <li key={h} className="flex gap-2">
//                 <span className="text-accent-cyan mt-0.5">▸</span>
//                 <span>{h}</span>
//               </li>
//             ))}
//           </ul>

//           <div className="flex flex-wrap gap-2 mb-6">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             {project.demoUrl && (
//               <a
//                 href={project.demoUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 data-cursor="hover"
//                 className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-white text-base-950 hover:shadow-glow-cyan transition-shadow"
//               >
//                 <FiExternalLink size={14} /> Live Demo
//               </a>
//             )}
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noreferrer"
//               data-cursor="hover"
//               className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white transition-colors"
//             >
//               <FiGithub size={14} /> GitHub
//             </a>
//           </div>
//         </div>
//       </div>
//     </Reveal>
//   )
// }

// export default function Projects() {
//   return (
//     <section id="projects" className="section">
//       <Reveal>
//         <span className="eyebrow">Selected Work</span>
//         <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-16">
//           Featured <span className="text-gradient">Projects</span>
//         </h2>
//       </Reveal>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, i) => (
//           <ProjectCard key={project.id} project={project} index={i} />
//         ))}
        
//       </div>
//     </section>
//   )
// }



import { useRef } from 'react'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal'
import { projects } from '../data/projects'

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  const handleMove = (e) => {
    const el = cardRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10

    el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`
  }

  const handleLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        'perspective(1000px) rotateY(0deg) rotateX(0deg)'
    }
  }

  return (
    <Reveal delay={index * 0.12}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0F] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-2xl"
      >
        {/* Project Image */}
        <div className="relative h-72 overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/15"></div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent"></div>

          {/* Number */}
          <span className="absolute top-5 left-5 font-display text-6xl font-bold text-white/15">
            {String(index + 1).padStart(2, '0')}
          </span>

        </div>

        {/* Content */}
        <div className="p-6 md:p-7">

          <div className="flex items-start justify-between mb-3">

            <h3 className="font-display text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <FiArrowUpRight
              className="text-white/30 group-hover:text-cyan-400 group-hover:rotate-45 transition-all"
              size={22}
            />

          </div>

          <p className="text-sm text-white/60 leading-7 mb-5">
            {project.description}
          </p>

          <ul className="space-y-2 mb-6">

            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-white/45"
              >
                <span className="text-cyan-400">▸</span>
                {item}
              </li>
            ))}

          </ul>

          <div className="flex flex-wrap gap-2 mb-6">

            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}

          </div>

          <div className="flex gap-3">

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-cyan-300 transition"
              >
                <FiExternalLink />
                Live Demo
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <FiGithub />
              GitHub
            </a>

          </div>

        </div>

      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">

      <Reveal>

        <span className="eyebrow">
          Selected Work
        </span>

        <h2 className="font-display mt-3 mb-16 text-4xl font-bold md:text-6xl">
          Featured <span className="text-gradient">Projects</span>
        </h2>

      </Reveal>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}

      </div>

    </section>
  )
}