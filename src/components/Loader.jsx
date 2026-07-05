import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let raf
    let value = 0
    const tick = () => {
      value += (100 - value) * 0.06 + 0.4
      if (value >= 100) {
        value = 100
        setProgress(100)
        setTimeout(() => setVisible(false), 500)
        return
      }
      setProgress(value)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(onDone, 700)
      return () => clearTimeout(t)
    }
  }, [visible, onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-base-950"
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h1
              className="font-display text-6xl md:text-8xl font-bold text-gradient tracking-tight"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Y.
            </motion.h1>
          </motion.div>

          <div className="mt-10 w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-fuchsia"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-xs tracking-[0.35em] text-white/40 font-body">
            {Math.round(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
