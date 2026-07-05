import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    })
    lenisInstance = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    lenis.on('scroll', () => {
      gsap.ticker.tick()
    })

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
