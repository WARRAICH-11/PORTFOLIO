import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[61] h-[2px] origin-left bg-crail"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

