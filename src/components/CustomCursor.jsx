import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ring = useRef(null)
  const dot = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`
      }
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) {
        ring.current?.classList.add('!w-12', '!h-12', '!bg-white/10')
      }
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) {
        ring.current?.classList.remove('!w-12', '!h-12', '!bg-white/10')
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    let raf
    const animate = () => {
      // ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18
      // ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.45
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.45
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%,-50%)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="custom-cursor hidden md:block" />
      <div ref={dot} className="custom-cursor-dot hidden md:block" />
    </>
  )
}
