'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { FadeIn } from '../motion/FadeIn'
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer'
import { SplitReveal } from '../SplitReveal'

const GROUPS: Array<{ label: string; skills: string[] }> = [
  { label: 'AI / ML', skills: ['LLMs', 'RAG', 'Prompting', 'Evals', 'Embeddings'] },
  { label: 'Backend', skills: ['Node.js', 'REST APIs', 'Auth', 'Queues', 'Caching'] },
  { label: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind', 'UX', 'Accessibility'] },
  { label: 'Data', skills: ['SQL', 'ETL', 'Analytics', 'Vector DBs', 'Pipelines'] },
  { label: 'DevOps', skills: ['CI/CD', 'Docker', 'Monitoring', 'Logging', 'Cloud'] },
  { label: 'Product', skills: ['Scope', 'Roadmaps', 'Docs', 'Stakeholder comms'] },
]

function SkillGroup({ label, skills }: { label: string; skills: string[] }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <div ref={ref} className="spatial-card p-6">
      <div className="mb-3 text-sm uppercase tracking-widest portfolio-muted">{label}</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="portfolio-badge"
            initial={shouldReduce ? false : { opacity: 0, scale: 0.8 }}
            animate={shouldReduce ? undefined : inView ? { opacity: 1, scale: 1 } : undefined}
            transition={
              shouldReduce
                ? { duration: 0 }
                : { delay: index * 0.045, duration: 0.36, ease: [0.34, 1.56, 0.64, 1] }
            }
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const allSkills = GROUPS.flatMap((group) => group.skills)

  return (
    <section id="skills" className="section spatial-section">
      <div className="section-inner">
        <ScrollMotionLayer>
          <FadeIn>
            
            <SplitReveal
              as="h2"
              className="portfolio-heading mt-4 mb-12"
            >
              Tools I ship with.
            </SplitReveal>
          </FadeIn>

          <FadeIn>
            <div className="tech-marquee mb-8" tabIndex={0} aria-label="Technology stack">
              <div className="tech-marquee-track py-2">
                <div className="flex gap-3">
                  {allSkills.map((skill) => (
                    <span key={skill} className="portfolio-badge portfolio-metric">{skill}</span>
                  ))}
                </div>
                <div className="flex gap-3" aria-hidden="true">
                  {allSkills.map((skill) => (
                    <span key={`duplicate-${skill}`} className="portfolio-badge portfolio-metric">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {GROUPS.map((group) => (
                <SkillGroup key={group.label} label={group.label} skills={group.skills} />
              ))}
            </div>
          </FadeIn>
        </ScrollMotionLayer>
      </div>
    </section>
  )
}
