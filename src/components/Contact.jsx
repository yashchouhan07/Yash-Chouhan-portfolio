import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import Reveal from './Reveal'
import MagneticButton from './MagneticButton'


// const EMAILJS_SERVICE_ID = 'service_h1g3bfn'
// const EMAILJS_TEMPLATE_ID = 'template_aub4oir'
// const EMAILJS_PUBLIC_KEY = 'DkL5GrMq2gowQaq0J'
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?" },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
     if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  throw new Error("EmailJS environment variables are missing");
}
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
       if (err?.text) {
    alert(err.text);
  } else if (err?.message) {
    alert(err.message);
  } else {
    alert(JSON.stringify(err));
  }
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }
  

  return (
    <section id="contact" className="section">
      <Reveal>
        <span className="eyebrow">Get in touch</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-16">
          Let's build something <span className="text-gradient">great together.</span>
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-10">
        <Reveal delay={0.1} className="lg:col-span-2 flex flex-col gap-4">
          {[
            { icon: FiMail, label: 'Email', value: 'chouhanyash309@gmail.com', href: 'mailto:chouhanyash309@gmail.com' },
            { icon: FiPhone, label: 'Phone', value: '+91 6261075955', href: 'tel:+916261075955' },
            { icon: FiMapPin, label: 'Location', value: 'India', href: null },
          ].map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? 'a' : 'div'
            return (
              <Wrapper
                key={label}
                href={href}
                data-cursor={href ? 'hover' : undefined}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-violet/30 to-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{label}</p>
                  <p className="text-sm text-white/85 font-medium mt-0.5">{value}</p>
                </div>
              </Wrapper>
            )
          })}

          <div className="glass-strong rounded-2xl p-6 mt-2">
            <p className="text-sm text-white/50 leading-relaxed">
              I'm currently open to full-time roles and freelance opportunities.
              Whether it's a product idea, a role, or a collaboration — I'd love to hear from you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-3">
          <form ref={formRef} onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 md:p-8 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {fields.slice(0, 2).map((f) => (
                <div key={f.name} className="flex flex-col gap-2">
                  <label htmlFor={f.name} className="text-xs text-white/50 tracking-wide">{f.label}</label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-accent-cyan/60 focus:bg-white/[0.07] transition-colors"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs text-white/50 tracking-wide">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-accent-cyan/60 focus:bg-white/[0.07] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs text-white/50 tracking-wide">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project or opportunity..."
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-accent-cyan/60 focus:bg-white/[0.07] transition-colors resize-none"
              />
            </div>

            <MagneticButton
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 self-start flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-base-950 font-semibold text-sm shadow-glow hover:shadow-glow-cyan disabled:opacity-60"
            >
              <FiSend size={15} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </MagneticButton>

            {status === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-emerald-400">
                Message sent successfully — I'll get back to you soon!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-rose-400">
                Couldn't send your message. Please configure EmailJS keys or email me directly.
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
