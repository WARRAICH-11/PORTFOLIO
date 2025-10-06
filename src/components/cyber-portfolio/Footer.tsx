'use client';

import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/WARRAICH-11', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hassanwarraich11', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://www.instagram.com/resillientbeing/', label: 'Twitter' },
    { icon: Mail, href: 'mailto:code.HASSAN@outlook.com', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-blue-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <div className="font-playfair text-xl sm:text-2xl font-bold text-blue-400 electric-glow mb-3 sm:mb-4">
                HASSAN WARRAICH
              </div>
              <p className="text-gray-300 font-inter text-sm sm:text-base mb-4 sm:mb-6 max-w-md">
                Full Stack Developer passionate about creating innovative digital experiences 
                that blend cutting-edge technology with exceptional design.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-gray-900/50 border border-blue-500/20 rounded-lg text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200"
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Quick Links
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-inter text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Get in Touch
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <p className="text-gray-400 font-inter">
                  <span className="text-blue-400">Email:</span><br />
                  <span className="break-all">code.HASSAN@outlook.com</span>
                </p>
                
                <p className="text-gray-400 font-inter">
                  <span className="text-blue-400">Location:</span><br />
                  Gujrat, Pakistan
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20" />

        {/* Bottom Footer */}
        <div className="py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 sm:gap-2 text-gray-400 font-inter text-xs sm:text-sm text-center"
          >
            <span>© {currentYear} Hassan Warraich • Designed </span>
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-current" />
            <span>& coded with passion.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="text-gray-400 font-inter text-xs sm:text-sm">
              Built with React & Tailwind CSS
            </div>
            <Button
              onClick={scrollToTop}
              size="sm"
              className="bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-200 p-2"
            >
              <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Floating Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-2.5 sm:p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg cyber-pulse-glow transition-all duration-300 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.button>

        {/* Background Effects */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}