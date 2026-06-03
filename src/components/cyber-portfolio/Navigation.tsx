'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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

      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    scrollTo(sectionId);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent backdrop-blur-0 shadow-none"
      initial={shouldReduce ? false : { y: -12, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: scrolled ? 'rgba(10,10,10,0.82)' : 'transparent',
        borderBottomColor: scrolled ? 'rgba(244,243,238,0.12)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
      }}
      transition={
        shouldReduce
          ? { duration: 0 }
          : { duration: 0.3, ease: 'easeOut' }
      }
    >
      <div className="section-inner h-14 md:h-16">
        <div className="flex h-full items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <img
                src="/favicon.png"
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain"
              />
            </span>
            <span className="text-sm font-medium tracking-wide text-pampas">
              Hassan Warraich
            </span>
          </button>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={[
                    'relative pb-2 text-sm font-medium uppercase tracking-wide',
                    active ? 'text-crail' : 'text-cloudy hover:text-crail',
                  ].join(' ')}
                >
                  <span>{item.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-crail"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                </button>
              )
            })}

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-full border border-crail bg-crail/10 px-5 py-2 text-sm font-medium text-crail"
            >
              Let’s talk
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-pampas lg:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="overflow-hidden lg:hidden"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.25, ease: 'easeOut' }}
            >
              <div className="mt-3 rounded-2xl border border-white/10 bg-[#0A0A0A]/95 p-4 backdrop-blur-xl">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const active = activeSection === item.id
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={[
                          'rounded-xl px-3 py-3 text-left text-sm font-medium uppercase tracking-wide',
                          active
                            ? 'bg-crail/10 text-crail'
                            : 'text-cloudy hover:text-crail',
                        ].join(' ')}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="mt-2 rounded-full border border-crail bg-crail/10 px-5 py-3 text-sm font-medium text-crail"
                  >
                    Let’s talk
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
