import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 60 })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest) + suffix
    })
  }, [springValue, suffix])

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  )
}
