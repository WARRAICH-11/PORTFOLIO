import { ElementType, useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type SplitRevealProps = {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?: number
  stagger?: number
  triggerStart?: string
}

export function SplitReveal({
  children,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  stagger = 0.02,
  triggerStart = 'top 85%',
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const parts = useMemo(() => children.split(/(\s+)/), [children])
  const Component = Tag as ElementType

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return

    const chars = gsap.utils.toArray<HTMLElement>('[data-reveal-char]', el)
    const tween = gsap.from(chars, {
      yPercent: 110,
      opacity: 0,
      duration: 0.75,
      stagger,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === el) trigger.kill()
      })
    }
  }, [delay, reducedMotion, stagger, triggerStart])

  return (
    <Component ref={ref} className={`${className} will-change-transform`}>
      {parts.map((part, partIndex) =>
        /^\s+$/.test(part) ? (
          part
        ) : (
          <span key={`${part}-${partIndex}`} className="inline-block overflow-hidden align-baseline">
            {Array.from(part).map((char, charIndex) => (
              <span
                key={`${char}-${charIndex}`}
                data-reveal-char
                className="inline-block will-change-transform"
              >
                {char}
              </span>
            ))}
          </span>
        ),
      )}
    </Component>
  )
}

