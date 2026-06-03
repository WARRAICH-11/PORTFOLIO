import { ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useStore } from '@/store/useStore'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.8,
    })

    lenisRef.current = lenis

    lenis.on('scroll', (e: { scroll: number; velocity: number; direction: number }) => {
      const direction = e.velocity > 0.1 ? 'down' : e.velocity < -0.1 ? 'up' : 'none'
      useStore.getState().setScroll(e.scroll, e.velocity, direction)
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reducedMotion])

  return <>{children}</>
}

