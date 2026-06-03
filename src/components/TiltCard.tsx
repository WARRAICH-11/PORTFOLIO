import { ReactNode, useEffect, useRef } from 'react'
import { useStore } from '@/store/useStore'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type TiltCardProps = {
  children: ReactNode
  className?: string
  tiltAmount?: number
  glareOpacity?: number
}

export function TiltCard({
  children,
  className = '',
  tiltAmount = 9,
  glareOpacity = 0.14,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      const tiltX = (y - 0.5) * tiltAmount
      const tiltY = (x - 0.5) * -tiltAmount

      el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.018, 1.018, 1.018)`

      const glare = el.querySelector('.tilt-glare') as HTMLElement | null
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 76%)`
        glare.style.opacity = '1'
      }
    }

    const handleEnter = () => useStore.getState().setHovering(true)
    const handleLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
      const glare = el.querySelector('.tilt-glare') as HTMLElement | null
      if (glare) glare.style.opacity = '0'
      useStore.getState().setHovering(false)
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseenter', handleEnter)
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseenter', handleEnter)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [glareOpacity, reducedMotion, tiltAmount])

  return (
    <div
      ref={ref}
      className={`relative transition-transform duration-100 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="tilt-glare pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300" />
      {children}
    </div>
  )
}

