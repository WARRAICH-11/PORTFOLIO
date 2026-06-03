'use client'

import { FadeIn } from '../motion/FadeIn'
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer'
import { SplitReveal } from '../SplitReveal'

export function About() {
  return (
    <section id="about" className="section spatial-section">
      <div className="section-inner">
        <ScrollMotionLayer>
          <FadeIn>
            <div className="text-sm font-mono tracking-widest uppercase text-cloudy">
              02 - ABOUT
            </div>
            <SplitReveal
              as="h2"
              className="mt-4 mb-12 text-3xl font-normal tracking-normal text-pampas md:text-4xl"
            >
              engineered & shipped.
            </SplitReveal>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="max-w-[60ch] space-y-4 text-base leading-relaxed text-cloudy-light">
                <p>
                  I build AI-enabled products end-to-end: from data pipelines and model integration
                  to robust APIs and polished web experiences.
                </p>
                <p>
                  My focus is production readiness - observability, performance, and maintainable
                  architecture - so teams can move fast without breaking trust.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="spatial-card rounded-2xl p-6">
                  <div className="text-sm font-medium text-pampas">What I do</div>
                  <ul className="mt-3 space-y-2 text-sm text-cloudy-light">
                    <li>AI product engineering </li>
                    <li>Full-stack delivery (React, APIs, integrations)</li>
                    <li>Performance + reliability (profiling, monitoring, QA)</li>
                  </ul>
                </div>
                <div className="spatial-card rounded-2xl p-6">
                  <div className="text-sm font-medium text-pampas">How I work</div>
                  <ul className="mt-3 space-y-2 text-sm text-cloudy-light">
                    <li>Clear scope and success metrics</li>
                    <li>Fast iterations with visible progress</li>
                    <li>Documentation and handoff that scales</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </ScrollMotionLayer>
      </div>
    </section>
  )
}

