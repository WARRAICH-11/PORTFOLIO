'use client';

import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/cyber-portfolio/Navigation';
import { Hero } from './components/cyber-portfolio/Hero';
import { About } from './components/cyber-portfolio/About';
import { Skills } from './components/cyber-portfolio/Skills';
import { FeaturedServicesSlider } from './components/cyber-portfolio/FeaturedServicesSlider';
import { Projects } from './components/cyber-portfolio/Projects';
import { Contact } from './components/cyber-portfolio/Contact';
import { Footer } from './components/cyber-portfolio/Footer';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ScrollProgress } from './components/motion/ScrollProgress';
import { ScrollAmbient } from './components/motion/ScrollAmbient';
import { CustomCursor } from './components/motion/CustomCursor';
import { ThemeProvider } from 'next-themes';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

export default function App() {
  const shouldReduce = useReducedMotion();
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-pampas text-[#1A1816]">
        <ScrollProgress />
        <ScrollAmbient />
        <CustomCursor />

        <Navigation />

        <AnimatePresence mode="wait">
          <motion.main
            key="page"
            className="relative z-[2]"
            variants={pageVariants}
            initial={shouldReduce ? false : 'initial'}
            animate={shouldReduce ? undefined : 'animate'}
            exit={shouldReduce ? undefined : 'exit'}
          >
            <Hero />
            <About />
            <Skills />
            <FeaturedServicesSlider />
            <Projects />
            <Contact />
          </motion.main>
        </AnimatePresence>

        <Footer />

        <Toaster position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}