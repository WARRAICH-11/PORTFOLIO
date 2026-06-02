'use client'

import { FadeIn } from '../motion/FadeIn'
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer'

export function About() {
  return (
    <section id="about" className="section bg-pampas">
      <div className="section-inner">
        <ScrollMotionLayer>
        <FadeIn>
          <div className="text-sm font-mono tracking-widest uppercase text-cloudy">
            02 — ABOUT
          </div>
          <h2 className="mt-4 mb-12 text-3xl font-normal tracking-tight text-[#1A1816] md:text-4xl">
            engineered & shipped.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-base text-[#6B6760] leading-relaxed max-w-[60ch]">
              <p>
                I build AI-enabled products end-to-end: from data pipelines and model integration
                to robust APIs and polished web experiences.
              </p>
              <p>
                My focus is production readiness—observability, performance, and maintainable
                architecture—so teams can move fast without breaking trust.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-cloudy/40 bg-white p-6">
                <div className="text-sm font-medium text-[#1A1816]">What I do</div>
                <ul className="mt-3 space-y-2 text-sm text-[#6B6760]">
                  <li>AI product engineering (LLMs, RAG, evals, safety)</li>
                  <li>Full-stack delivery (React, APIs, integrations)</li>
                  <li>Performance + reliability (profiling, monitoring, QA)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-cloudy/40 bg-white p-6">
                <div className="text-sm font-medium text-[#1A1816]">How I work</div>
                <ul className="mt-3 space-y-2 text-sm text-[#6B6760]">
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

