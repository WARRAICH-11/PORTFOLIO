'use client';

import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/WARRAICH-11', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hassanwarraich11', icon: Linkedin },
  { label: 'Outlook', href: 'mailto:code.HASSAN@outlook.com', icon: Mail },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string, event?: MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    window.history.pushState(null, '', `#${sectionId}`);
    scrollTo(sectionId);
    setIsOpen(false);
  };

  const iconLinkClass =
    'portfolio-focus inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 portfolio-muted transition hover:border-[var(--blue)] hover:text-[var(--blue)]';

  return (
    <motion.nav
      className="portfolio-nav fixed left-1/2 top-4 z-[70] w-[min(var(--content-width),calc(100%_-_32px))] -translate-x-1/2 rounded-full border border-white/[0.08] shadow-none"
      initial={shouldReduce ? false : { y: -12, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
    >
      <div className="section-inner h-[52px]">
        <div className="flex h-full items-center justify-between">
          <div className="flex min-w-0 items-center gap-4">
            <a
              href="#hero"
              onClick={(event) => scrollToSection('hero', event)}
              className="flex min-w-0 items-center gap-2"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[var(--surface-2)]">
                <img src="/favicon.png" alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
              </span>
              <span className="truncate text-sm font-medium tracking-wide">
                Hassan Warraich
              </span>
            </a>

            <div className="hidden items-center gap-2 border-l border-white/10 pl-4 md:flex">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                const external = link.href.startsWith('http');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={iconLinkClass}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => scrollToSection(item.id, event)}
                  className={[
                    'relative pb-2 text-sm font-medium uppercase tracking-wide',
                    active ? 'text-[var(--blue)]' : 'portfolio-muted hover:text-[var(--blue)]',
                  ].join(' ')}
                >
                  <span>{item.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--blue)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={(event) => scrollToSection('contact', event)}
              className="portfolio-button portfolio-button-secondary text-sm"
            >
              Let's talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="portfolio-focus inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[var(--surface-2)] lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="menu-overlay fixed inset-0 z-[71] lg:hidden"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.2 }}
            />

            <motion.aside
              className="mobile-drawer fixed bottom-0 right-0 top-0 z-[72] flex flex-col border-l border-white/10 px-5 pb-6 pt-5 shadow-2xl backdrop-blur-xl lg:hidden"
              initial={shouldReduce ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={shouldReduce ? { opacity: 0 } : { x: '100%' }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.25, ease: 'easeOut' }}
            >
              <div className="mb-6 flex items-center justify-between">
                <a
                  href="#hero"
                  onClick={(event) => scrollToSection('hero', event)}
                  className="flex min-w-0 items-center gap-2"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[var(--surface-2)]">
                    <img src="/favicon.png" alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
                  </span>
                  <span className="truncate text-sm font-medium tracking-wide">
                    Hassan Warraich
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="portfolio-focus inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[var(--surface-2)]"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(event) => scrollToSection(item.id, event)}
                      className={[
                        'w-full rounded-xl px-3 py-3 text-left text-sm font-medium uppercase tracking-wide',
                        active ? 'bg-[var(--surface-2)] text-[var(--blue)]' : 'portfolio-muted hover:text-[var(--blue)]',
                      ].join(' ')}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(event) => scrollToSection('contact', event)}
                  className="portfolio-button portfolio-button-secondary mt-2 w-full"
                >
                  Let's talk
                </a>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    const external = link.href.startsWith('http');
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className={iconLinkClass}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
