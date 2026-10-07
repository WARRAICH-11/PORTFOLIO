import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

function usePointerFine() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    const update = () => setFine(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return fine
}

export function CustomCursor() {
  const reducedMotion = usePrefersReducedMotion()
  const pointerFine = usePointerFine()
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const pointerRef = useRef({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const size = hovering ? 32 : 10

  useEffect(() => {
    if (reducedMotion || !pointerFine) return

    const renderCursor = () => {
      rafRef.current = null
      const cursor = cursorRef.current
      if (!cursor) return
      const { x, y } = pointerRef.current
      // The cursor is an isolated DOM overlay. Only transform is updated, so
      // mouse movement never triggers layout or a React/WebGL render.
      cursor.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`
    }

    const scheduleCursor = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY }
      if (rafRef.current === null) rafRef.current = window.requestAnimationFrame(renderCursor)
    }

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest("a,button,[role='button']")) setHovering(true)
    }

    const handleOut = (event: MouseEvent) => {
      const target = event.relatedTarget as HTMLElement | null
      if (!target?.closest("a,button,[role='button']")) setHovering(false)
    }

    window.addEventListener('mousemove', scheduleCursor, { passive: true })
    window.addEventListener('mouseover', handleOver, { passive: true })
    window.addEventListener('mouseout', handleOut, { passive: true })

    return () => {
      window.removeEventListener('mousemove', scheduleCursor)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mouseout', handleOut)
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [pointerFine, reducedMotion, size])

  if (reducedMotion || !pointerFine) return null

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-crail"
      style={{ width: size, height: size, opacity: 0.6, transform: 'translate3d(-100px, -100px, 0)' }}
    />
  )
}
