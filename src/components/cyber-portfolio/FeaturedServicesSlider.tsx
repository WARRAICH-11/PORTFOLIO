'use client'

import { FadeIn } from '../motion/FadeIn'
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer'

const SERVICES = [
  {
    title: 'AI features in production',
    description:
      'LLM-powered workflows, RAG, evaluation harnesses, and guardrails—built with observability and cost control.',
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
      'Profiling, debugging, and system hardening—so you can scale traffic and features confidently.',
  },
]

export function FeaturedServicesSlider() {
  return (
    <section id="services" className="section bg-pampas">
      <div className="section-inner">
        <ScrollMotionLayer>
        <FadeIn>
          <div className="text-sm font-mono tracking-widest uppercase text-cloudy">
            04 — SERVICES
          </div>
          <h2 className="mt-4 mb-12 text-3xl font-normal tracking-tight text-[#1A1816] md:text-4xl">
            How I help.
          </h2>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, index) => (
            <FadeIn key={s.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-cloudy/40 bg-white p-6">
                <div className="text-xl font-medium text-[#1A1816]">
                  {s.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#6B6760]">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        </ScrollMotionLayer>
      </div>
    </section>
  )
}

