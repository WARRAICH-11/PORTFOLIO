'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Full-page graphic lines driven by scroll — subtle motion-graphics layer.
 */
export function ScrollAmbient() {
  const shouldReduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 0.55])
  const lineX = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const line2Rotate = useTransform(scrollYProgress, [0, 1], [8, -12])
  const line2Y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const line3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.2, 0.85])

  if (shouldReduce) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      <motion.div
        style={{ scaleX: lineScale, x: lineX }}
        className="absolute left-[8%] top-[42%] h-px w-[min(70vw,900px)] origin-left bg-gradient-to-r from-transparent via-crail/25 to-transparent"
      />
      <motion.div
        style={{ rotate: line2Rotate, y: line2Y }}
        className="absolute right-[10%] top-[58%] h-px w-[min(55vw,640px)] origin-right bg-gradient-to-l from-transparent via-cloudy/30 to-transparent"
      />
      <motion.div
        style={{ scaleX: line3Scale }}
        className="absolute left-[18%] top-[76%] h-px w-[min(42vw,520px)] origin-left bg-gradient-to-r from-transparent via-crail/20 to-transparent"
      />
    </div>
  )
}
