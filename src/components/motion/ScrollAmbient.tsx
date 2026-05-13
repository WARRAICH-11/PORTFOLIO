'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Full-page ambient shapes driven by scroll — subtle motion-graphics layer.
 */
export function ScrollAmbient() {
  const shouldReduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const orb1Rotate = useTransform(scrollYProgress, [0, 1], [0, -140])
  const orb2Rotate = useTransform(scrollYProgress, [0, 1], [0, 100])
  const orb1X = useTransform(scrollYProgress, [0, 0.5, 1], ['-8%', '6%', '-4%'])
  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 0.55])
  const lineX = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const line2Rotate = useTransform(scrollYProgress, [0, 1], [8, -12])
  const line2Y = useTransform(scrollYProgress, [0, 1], [0, 120])

  if (shouldReduce) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      <motion.div
        style={{ rotate: orb1Rotate, x: orb1X }}
        className="absolute -right-[18%] top-[8%] h-[min(58vh,520px)] w-[min(58vh,520px)] rounded-full bg-crail/[0.06] blur-3xl"
      />
      <motion.div
        style={{ rotate: orb2Rotate }}
        className="absolute -left-[14%] bottom-[6%] h-[min(48vh,420px)] w-[min(48vh,420px)] rounded-full bg-cloudy/[0.09] blur-3xl"
      />
      <motion.div
        style={{ scaleX: lineScale, x: lineX }}
        className="absolute left-[8%] top-[42%] h-px w-[min(70vw,900px)] origin-left bg-gradient-to-r from-transparent via-crail/25 to-transparent"
      />
      <motion.div
        style={{ rotate: line2Rotate, y: line2Y }}
        className="absolute right-[10%] top-[58%] h-px w-[min(55vw,640px)] origin-right bg-gradient-to-l from-transparent via-cloudy/30 to-transparent"
      />
    </div>
  )
}
