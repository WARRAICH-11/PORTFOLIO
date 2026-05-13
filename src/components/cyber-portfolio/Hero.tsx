'use client'

import React, { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer'

const HERO_IMG = '/images/hero-profile.png'

export function Hero() {
  const shouldReduce = useReducedMotion()
  const words = 'Hassan Warraich'.split(' ')
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const imageParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? [0, 0] : [0, 28],
  )

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section bg-pampas"
    >
      <div className="section-inner pt-20 md:pt-24">
        <ScrollMotionLayer>
          <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-10">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-mono tracking-widest uppercase text-cloudy">
                01 — INTRO
              </div>

              <h1 className="mt-4 text-5xl font-normal tracking-tight text-[#1A1816] md:text-6xl">
                {words.map((w, index) => (
                  <motion.span
                    key={w}
                    className="mr-3 inline-block last:mr-0"
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                    transition={
                      shouldReduce
                        ? { duration: 0 }
                        : { delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }
                  >
                    {w}
                  </motion.span>
                ))}
              </h1>

              <p className="mt-4 text-lg font-medium tracking-tight text-cloudy md:text-xl">
                AI Engineer & Full‑Stack Developer
              </p>

              <p className="mt-6 max-w-[60ch] text-base font-normal leading-relaxed text-[#6B6760]">
                I help teams ship production-grade AI features, modern web apps, and
                data-driven products—built for clarity, reliability, and measurable business outcomes.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('projects')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                  className="inline-flex h-12 items-center justify-center rounded-full bg-crail px-8 text-sm font-medium text-white"
                  whileHover={shouldReduce ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduce ? undefined : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  View work
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                  className="inline-flex h-12 items-center justify-center rounded-full border border-crail bg-transparent px-8 text-sm font-medium text-crail"
                  whileHover={shouldReduce ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduce ? undefined : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  Contact
                </motion.button>
              </div>

              <hr className="mt-20 border-t border-cloudy/50" />
            </div>

            <div className="relative w-full max-w-[280px] shrink-0 self-center md:mt-0 md:w-[40%] md:max-w-none md:self-auto">
              <motion.div
                className="relative mx-auto w-full md:mx-0 md:ml-auto"
                style={{ y: imageParallaxY }}
              >
                <motion.div
                  className="relative max-h-[480px] overflow-hidden rounded-2xl border border-cloudy/30 bg-white"
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
                      animate={
                        shouldReduce ? undefined : { y: [0, -6, 0] }
                      }
                      transition={
                        shouldReduce
                          ? undefined
                          : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
                      }
                    >
                      <img
                        src={HERO_IMG}
                        alt="Hassan Warraich — AI engineer and full-stack developer"
                        width={480}
                        height={600}
                        loading="eager"
                        decoding="async"
                        className="max-h-[480px] w-full object-cover shadow-none"
                        style={{ filter: 'saturate(0.82) grayscale(0.2)' }}
                      />
                    </motion.div>

                    {!shouldReduce && (
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-crail/20"
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
