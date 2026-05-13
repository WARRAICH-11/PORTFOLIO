import { motion, useInView, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"
import { useRef } from "react"

type FadeInProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
      animate={
        shouldReduce ? undefined : inView ? { opacity: 1, y: 0 } : undefined
      }
      transition={
        shouldReduce
          ? { duration: 0 }
          : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  )
}

