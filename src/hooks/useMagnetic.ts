import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useMagnetic<T extends HTMLButtonElement | HTMLAnchorElement = HTMLButtonElement>(
  strength = 0.35,
) {
  const ref = useRef<T>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)

      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.3, ease: 'power2.out' })

      const text = el.querySelector('.magnetic-text')
      if (text) {
        gsap.to(text, {
          x: x * strength * 0.25,
          y: y * strength * 0.25,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.35)' })
      const text = el.querySelector('.magnetic-text')
      if (text) {
        gsap.to(text, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.35)' })
      }
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
      gsap.killTweensOf(el)
    }
  }, [reducedMotion, strength])

  return ref
}

