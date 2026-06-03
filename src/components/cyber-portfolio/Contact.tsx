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
            <div className="text-sm font-mono tracking-widest uppercase text-cloudy">
              06 - CONTACT
            </div>
            <SplitReveal
              as="h2"
              className="mt-4 mb-12 text-3xl font-normal tracking-normal text-pampas md:text-4xl"
            >
              Let's build something.
            </SplitReveal>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="spatial-card rounded-2xl p-6">
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
                      className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-pampas placeholder:text-cloudy focus-visible:ring-crail"
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
                      className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-pampas placeholder:text-cloudy focus-visible:ring-crail"
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
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-pampas placeholder:text-cloudy focus-visible:ring-crail"
                      placeholder="What are you building?"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <motion.button
                      ref={submitRef}
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-crail px-6 py-3 text-sm font-medium text-white shadow-[0_18px_60px_rgba(193,95,60,0.3)] sm:w-auto disabled:opacity-60"
                      whileHover={shouldReduce ? undefined : { scale: 1.05, backgroundColor: '#D4795A' }}
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
                        <a className="text-crail hover:underline" href="mailto:code.HASSAN@outlook.com">
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
                className="spatial-card rounded-2xl p-6"
                initial={shouldReduce ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }}
              >
                <div className="text-sm font-medium text-pampas">Direct</div>
                <div className="mt-3 space-y-3 text-sm text-cloudy-light">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-cloudy">Email</div>
                    <a
                      className="link-underline mt-1 inline-block text-crail"
                      href="mailto:code.HASSAN@outlook.com"
                    >
                      code.HASSAN@outlook.com
                    </a>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-cloudy">Location</div>
                    <div className="mt-1">Gujrat, Pakistan</div>
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

