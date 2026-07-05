import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { education, stats } from "../data/timeline";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <span className="eyebrow">About Me</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-16">
          Crafting reliable software,{" "}
          <span className="text-gradient">end to end.</span>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="gradient-border">
            <div className="p-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-base-800 to-base-900 relative">
                <img
                  src="/images/yashchouhan.png"
                  alt="Yash — Full Stack Java Developer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={() => {
                    console.log("Image not found");
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-4 text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[11px] text-white/50 mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="md:col-span-3 flex flex-col gap-10">
          <Reveal delay={0.15}>
            <p className="text-white/60 text-lg leading-relaxed">
              I'm Yash, a Full Stack Java Developer who loves turning complex
              problems into simple, elegant, and fast interfaces. My work spans
              real-time systems, secure authentication flows, and clean REST
              APIs — built with Java, Spring Boot, and a modern React + Tailwind
              front-end. I care deeply about performance, detail, and building
              things that feel premium to use.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <h3 className="font-display text-xl font-semibold mb-6 text-white">
              Education
            </h3>
            <div className="relative pl-8 border-l border-white/10">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full bg-accent-violet shadow-glow" />
                  <p className="text-xs tracking-widest uppercase text-accent-cyan/80 mb-1">
                    {edu.year}
                  </p>
                  <h4 className="font-display text-lg font-semibold text-white">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-white/50 mt-0.5">{edu.place}</p>
                  <p className="text-sm text-white/40 mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
