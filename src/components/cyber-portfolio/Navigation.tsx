'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'luxury-glass border-b border-blue-400/30 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Luxury Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-900/10 to-black/90 opacity-80" />
      
      {/* Animated Border */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Luxury Logo */}
          <motion.div 
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('hero')}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            <div className="relative flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-5 h-5 text-black" />
              </motion.div>
              <div>
                <div className="font-playfair text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent premium-text-shadow">
                  HASSAN WARRAICH
                </div>
                <div className="text-xs text-blue-300/80 font-inter tracking-wider">
                  AI ENGINEER & DEVELOPER
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ultra-Luxury Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 font-inter font-medium text-sm tracking-wide transition-all duration-400 group ${
                    activeSection === item.id 
                      ? 'text-blue-300' 
                      : 'text-white/90 hover:text-blue-300'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Luxury Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/15 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100"
                    layoutId={`nav-bg-${item.id}`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active Section Indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-cyan-400/15 to-blue-400/10 rounded-2xl border border-blue-400/30"
                      layoutId="active-nav"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Luxury Bottom Border */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    initial={{ width: 0, x: '-50%' }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{ 
                          x: Math.random() * 100 + '%', 
                          y: '100%',
                          opacity: 0 
                        }}
                        whileHover={{
                          y: '-20px',
                          opacity: [0, 1, 0],
                          transition: { 
                            duration: 1.5, 
                            delay: i * 0.2,
                            repeat: Infinity 
                          }
                        }}
                      />
                    ))}
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Ultra-Luxury Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-3 text-white hover:text-blue-400 transition-all duration-300 group"
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Luxury Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="luxury-glass border-t border-blue-400/20 mx-4 rounded-2xl mb-4">
                <div className="p-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl font-inter font-medium transition-all duration-300 group ${
                        activeSection === item.id 
                          ? 'text-blue-300 bg-blue-500/10 border border-blue-400/30' 
                          : 'text-white/90 hover:text-blue-300 hover:bg-blue-500/5'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="relative z-10">{item.label}</span>
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                        />
                      </div>
                      
                      {/* Mobile Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.8 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}