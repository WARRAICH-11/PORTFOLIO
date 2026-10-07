'use client'

import { FadeIn } from '../motion/FadeIn'
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer'
import { SplitReveal } from '../SplitReveal'
import { TiltCard } from '../TiltCard'

const SERVICES = [
  {
    title: 'AI features in production',
    description:
      'LLM-powered workflows, RAG, evaluation harnesses, and guardrails - built with observability and cost control.',
  },
  {
    title: 'Full-stack delivery',
    description:
      'React frontends, typed APIs, and integrations that ship clean UX and stable deployments.',
  },
  {
    title: 'SaaS foundations',
    description:
      'Auth, billing hooks, permissions, and scalable patterns that keep velocity high as the product grows.',
  },
  {
    title: 'Performance & reliability',
    description:
      'Profiling, debugging, and system hardening - so you can scale traffic and features confidently.',
  },
]

export function FeaturedServicesSlider() {
  return (
    <section id="services" className="section spatial-section">
      <div className="section-inner">
        <ScrollMotionLayer>
          <FadeIn>
            
            <SplitReveal
              as="h2"
              className="portfolio-heading mt-4 mb-12"
            >
              How I help.
            </SplitReveal>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.08}>
                <TiltCard className="spatial-card h-full p-6">
                  <div className="relative z-20 text-xl font-medium">
                    {service.title}
                  </div>
                  <p className="relative z-20 mt-3 text-sm leading-relaxed portfolio-muted">
                    {service.description}
                  </p>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </ScrollMotionLayer>
      </div>
    </section>
  )
}
