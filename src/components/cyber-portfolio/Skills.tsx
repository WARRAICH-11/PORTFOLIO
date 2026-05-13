'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { FadeIn } from '../motion/FadeIn'
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer'

const GROUPS: Array<{ label: string; skills: string[] }> = [
  { label: 'AI / ML', skills: ['LLMs', 'RAG', 'Prompting', 'Evals', 'Embeddings'] },
  { label: 'Backend', skills: ['Node.js', 'REST APIs', 'Auth', 'Queues', 'Caching'] },
  { label: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind', 'UX', 'Accessibility'] },
  { label: 'Data', skills: ['SQL', 'ETL', 'Analytics', 'Vector DBs', 'Pipelines'] },
  { label: 'DevOps', skills: ['CI/CD', 'Docker', 'Monitoring', 'Logging', 'Cloud'] },
  { label: 'Product', skills: ['Scope', 'Roadmaps', 'Docs', 'Stakeholder comms'] },
]

function SkillGroup({
  label,
  skills,
}: {
  label: string
  skills: string[]
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <div ref={ref} className="rounded-2xl border border-cloudy/40 bg-white p-6">
      <div className="text-sm uppercase tracking-widest text-cloudy mb-3">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s, index) => (
          <motion.span
            key={s}
            className="rounded-full bg-pampas px-3 py-1 text-sm font-medium text-cloudy"
            initial={shouldReduce ? false : { opacity: 0, scale: 0.92 }}
            animate={
              shouldReduce ? undefined : inView ? { opacity: 1, scale: 1 } : undefined
            }
            transition={
              shouldReduce
                ? { duration: 0 }
                : { delay: index * 0.04, duration: 0.35, ease: 'easeOut' }
            }
          >
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section bg-pampas">
      <div className="section-inner">
        <ScrollMotionLayer>
        <FadeIn>
          <div className="text-sm font-mono tracking-widest uppercase text-cloudy">
            03 — SKILLS
          </div>
          <h2 className="mt-4 mb-12 text-3xl font-normal tracking-tight text-[#1A1816] md:text-4xl">
            Tools I ship with.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {GROUPS.map((g) => (
              <SkillGroup key={g.label} label={g.label} skills={g.skills} />
            ))}
          </div>
        </FadeIn>
        </ScrollMotionLayer>
      </div>
    </section>
  )
}

