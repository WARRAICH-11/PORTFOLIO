import { useEffect, useMemo, useState } from "react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion"

function usePointerFine() {
  const [fine, setFine] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)")
    const onChange = () => setFine(mq.matches)
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  return fine
}

export function CustomCursor() {
  const shouldReduce = useReducedMotion()
  const pointerFine = usePointerFine()
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  /* ~80ms follow lag */
  const spring = useMemo(() => ({ stiffness: 260, damping: 32, mass: 0.55 }), [])
  const sx = useSpring(x, spring)
  const sy = useSpring(y, spring)

  useEffect(() => {
    if (shouldReduce || !pointerFine) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const onOver = (e: Event) => {
      const el = e.target as HTMLElement | null
      if (!el) return
      if (el.closest("a,button,[role='button']")) {
        setHovering(true)
      }
    }

    const onOut = () => setHovering(false)

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseover", onOver, { passive: true })
    window.addEventListener("mouseout", onOut, { passive: true })

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("mouseout", onOut)
    }
  }, [pointerFine, shouldReduce, x, y])

  if (shouldReduce || !pointerFine) return null

  const size = hovering ? 32 : 10

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] rounded-full bg-crail"
      style={{
        width: size,
        height: size,
        opacity: 0.6,
        translateX: sx,
        translateY: sy,
        x: "-50%",
        y: "-50%",
      }}
    />
  )
}

