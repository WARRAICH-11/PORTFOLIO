'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer'
import { SplitReveal } from '../SplitReveal'
import { useMagnetic } from '../../hooks/useMagnetic'

const HERO_IMG = '/images/hero-profile.png'

export function Hero() {
  const shouldReduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const viewWorkRef = useMagnetic<HTMLButtonElement>(0.38)
  const contactRef = useMagnetic<HTMLButtonElement>(0.34)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, 28])

  return (
    <section id="hero" ref={sectionRef} className="section spatial-section">
      <div className="section-inner pt-20 md:pt-24">
        <ScrollMotionLayer>
          <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-10">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-mono tracking-widest uppercase text-cloudy">
                01 - INTRO
              </div>

              <SplitReveal
                as="h1"
                stagger={0.035}
                className="mt-4 text-5xl font-normal tracking-normal text-pampas md:text-6xl"
              >
                Hassan Warraich
              </SplitReveal>

              <SplitReveal
                as="p"
                delay={0.18}
                stagger={0.012}
                className="mt-4 text-lg font-medium tracking-normal text-cloudy-light md:text-xl"
              >
                SOFTWARE ENGINEER
              </SplitReveal>

              <p className="mt-6 max-w-[60ch] text-base font-normal leading-relaxed text-cloudy-light">
                I help teams ship production-grade AI features, modern web apps, and
                data-driven products - built for clarity, reliability, and measurable business outcomes.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.button
                  ref={viewWorkRef}
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('projects')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                  className="inline-flex h-12 items-center justify-center rounded-full bg-crail px-8 text-sm font-medium text-white shadow-[0_18px_55px_rgba(193,95,60,0.26)]"
                  whileHover={shouldReduce ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduce ? undefined : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <span className="magnetic-text inline-block">View work</span>
                </motion.button>

                <motion.button
                  ref={contactRef}
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                  className="inline-flex h-12 items-center justify-center rounded-full border border-crail/80 bg-white/5 px-8 text-sm font-medium text-pampas backdrop-blur-md"
                  whileHover={shouldReduce ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduce ? undefined : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <span className="magnetic-text inline-block">Contact</span>
                </motion.button>
              </div>

              <motion.div
                aria-hidden
                className="mt-20 h-16 w-px origin-top bg-gradient-to-b from-crail to-transparent"
                initial={shouldReduce ? false : { scaleY: 0, opacity: 0 }}
                animate={shouldReduce ? undefined : { scaleY: 1, opacity: [0, 1, 0.38] }}
                transition={
                  shouldReduce
                    ? { duration: 0 }
                    : { delay: 0.8, duration: 1.1, ease: 'easeOut' }
                }
              />
            </div>

            <div className="relative w-full max-w-[280px] shrink-0 self-center md:mt-0 md:w-[40%] md:max-w-none md:self-auto">
              <motion.div
                className="relative mx-auto w-full md:mx-0 md:ml-auto"
                style={{ y: imageParallaxY }}
              >
                <motion.div
                  className="spatial-card relative max-h-[480px] overflow-hidden rounded-2xl will-change-transform"
                  initial={shouldReduce ? false : { opacity: 0, x: 32, scale: 0.97 }}
                  animate={shouldReduce ? undefined : { opacity: 1, x: 0, scale: 1 }}
                  transition={
                    shouldReduce
                      ? { duration: 0 }
                      : { delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }
                  }
                >
                  <motion.div
                    className="relative"
                    whileHover={shouldReduce ? undefined : { scale: 1.02 }}
                    whileTap={shouldReduce ? undefined : { scale: 0.99 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  >
                    <motion.div
                      animate={shouldReduce ? undefined : { y: [0, -6, 0] }}
                      transition={
                        shouldReduce
                          ? undefined
                          : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
                      }
                    >
                      <img
                        src={HERO_IMG}
                        alt="Hassan Warraich - AI engineer and full-stack developer"
                        width={480}
                        height={600}
                        loading="eager"
                        decoding="async"
                        className="max-h-[480px] w-full object-cover shadow-none will-change-transform"
                        style={{ filter: 'saturate(0.86) grayscale(0.16)' }}
                      />
                    </motion.div>

                    {!shouldReduce && (
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-crail/25"
                        animate={{ opacity: [0.25, 0.55, 0.25] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </ScrollMotionLayer>
      </div>
    </section>
  )
}

