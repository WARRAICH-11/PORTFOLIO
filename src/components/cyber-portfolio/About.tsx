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
            
            <SplitReveal
              as="h2"
              className="portfolio-heading mt-4 mb-12"
            >
              engineered & shipped.
            </SplitReveal>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="max-w-[60ch] space-y-4 portfolio-body">
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
                <div className="spatial-card p-6">
                  <div className="text-sm font-medium">What I do</div>
                  <ul className="mt-3 space-y-2 text-sm portfolio-muted">
                    <li>AI product engineering </li>
                    <li>Full-stack delivery (React, APIs, integrations)</li>
                    <li>Performance + reliability (profiling, monitoring, QA)</li>
                  </ul>
                </div>
                <div className="spatial-card p-6">
                  <div className="text-sm font-medium">How I work</div>
                  <ul className="mt-3 space-y-2 text-sm portfolio-muted">
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
