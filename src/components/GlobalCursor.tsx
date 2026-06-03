import { useEffect } from 'react'
import { useStore } from '@/store/useStore'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function GlobalCursor() {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = -(e.clientY / window.innerHeight) * 2 + 1
      useStore.getState().setCursor(e.clientX, e.clientY, nx, ny)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [reducedMotion])

  return null
}

