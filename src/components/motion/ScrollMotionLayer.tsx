'use client'

import type { ReactNode } from 'react'
import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

type ScrollMotionLayerProps = {
  children: ReactNode
  className?: string
}

/**
 * Scroll-scrubbed motion (y + opacity) for section content, scrubbed to scroll progress.
 */
export function ScrollMotionLayer({ children, className = '' }: ScrollMotionLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const shouldReduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'end 0.12'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 0.32, 0.68, 1],
    shouldReduce ? [0, 0, 0, 0] : [72, 0, 0, -52],
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.86, 1],
    shouldReduce ? [1, 1, 1, 1] : [0.2, 1, 1, 0.5],
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    shouldReduce ? [1, 1, 1, 1] : [0.97, 1, 1, 0.985],
  )

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  )
}
