'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FadeIn } from '../motion/FadeIn'
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer'
import { SplitReveal } from '../SplitReveal'
import { useMagnetic } from '../../hooks/useMagnetic'

type FormState = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const shouldReduce = useReducedMotion()
  const submitRef = useMagnetic<HTMLButtonElement>(0.6)
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus('idle')

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined
    if (!formspreeId) {
      setSubmitting(false)
      setStatus('error')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Request failed')

      setForm({ name: '', email: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section spatial-section">
      <div className="section-inner">
        <ScrollMotionLayer>
          <FadeIn>
            <div className="text-xs font-semibold uppercase tracking-[0.08em] text-cloudy">
              06 - CONTACT
            </div>
            <SplitReveal
              as="h2"
              className="portfolio-heading mt-4 mb-12"
            >
              Let's build something.
            </SplitReveal>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="spatial-card p-6">
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-pampas">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((previous) => ({ ...previous, name: e.target.value }))}
                      className="portfolio-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-pampas">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((previous) => ({ ...previous, email: e.target.value }))}
                      className="portfolio-input"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-pampas">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((previous) => ({ ...previous, message: e.target.value }))}
                      className="portfolio-input min-h-32 resize-none"
                      placeholder="What are you building?"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <motion.button
                      ref={submitRef}
                      type="submit"
                      disabled={submitting}
                      className="portfolio-button portfolio-button-primary w-full sm:w-auto"
                      whileHover={shouldReduce ? undefined : { scale: 1.02 }}
                      whileTap={shouldReduce ? undefined : { scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <span className="magnetic-text inline-block">
                        {submitting ? 'Sending...' : 'Send message'}
                      </span>
                    </motion.button>

                    {status === 'success' && (
                      <div className="text-sm text-cloudy-light">Message sent. I'll reply soon.</div>
                    )}
                    {status === 'error' && (
                      <div className="text-sm text-cloudy-light">
                        Couldn't send. Please email{' '}
                        <a className="portfolio-link hover:underline" href="mailto:code.HASSAN@outlook.com">
                          code.HASSAN@outlook.com
                        </a>
                        .
                      </div>
                    )}
                  </div>

                  {import.meta.env.VITE_FORMSPREE_ID == null && (
                    <div className="text-sm text-cloudy">Missing `VITE_FORMSPREE_ID` env var.</div>
                  )}
                </form>
              </div>

              <motion.div
                className="spatial-card p-6"
                initial={shouldReduce ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }}
              >
                <div className="text-sm font-medium">Direct</div>
                <div className="mt-3 space-y-3 text-sm portfolio-muted">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-cloudy">Email</div>
                    <a
                      className="link-underline portfolio-link mt-1 inline-block"
                      href="mailto:code.HASSAN@outlook.com"
                    >
                      code.HASSAN@outlook.com
                    </a>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-cloudy">Location</div>
                    <div className="mt-1">lahore, Pakistan</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </ScrollMotionLayer>
      </div>
    </section>
  )
}
