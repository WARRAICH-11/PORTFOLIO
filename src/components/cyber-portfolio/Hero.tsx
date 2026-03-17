'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Download, Sparkles, Zap, Code2, Brain } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import React, { useRef, useEffect, useState } from 'react';

const TITLES = ["AI Engineer", "Full-Stack Developer", "SaaS Builder", "UI/UX Designer"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentTitle.length) {
      timeout = setTimeout(() => setDisplayed(currentTitle.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.92]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-20 md:pt-24 relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(14,165,233,0.10) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(6,182,212,0.07) 0%, transparent 50%), #000' }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)', top: '-10%', right: '-5%' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)', bottom: '5%', left: '-8%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)', top: '40%', left: '30%' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: i % 3 === 0 ? 'rgba(14,165,233,0.8)' : i % 3 === 1 ? 'rgba(6,182,212,0.6)' : 'rgba(56,189,248,0.5)',
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -(30 + Math.random() * 50), 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 z-10 relative"
        style={{ opacity, scale }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left side */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-blue-300 tracking-wider">AVAILABLE FOR WORK</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl font-medium text-gray-400 tracking-wide font-inter">
                Hi there 👋, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Hassan
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Warraich
                </span>
              </h1>
            </motion.div>

            {/* Typewriter title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 min-h-[44px]"
            >
              <Code2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div className="text-xl md:text-2xl font-semibold text-blue-300 font-inter min-w-0">
                <span>{displayed}</span>
                <motion.span
                  className="inline-block w-0.5 h-6 bg-blue-400 ml-0.5 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light font-inter"
            >
              I craft{' '}
              <span className="text-blue-400 font-semibold">intelligent digital ecosystems</span>{' '}
              that transform ideas into{' '}
              <span className="text-cyan-300 font-semibold">profitable realities</span>.
              Expert in AI integration, scalable apps, and seamless UX — solutions that don't just work,{' '}
              <span className="text-blue-300 font-semibold">they thrive</span>.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
                { value: '3+', label: 'Years Exp.' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-inter tracking-wide mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-base px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/30 border-0 group"
                  onClick={() => window.open('https://www.linkedin.com/in/hassanwarraich11/', '_blank')}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Zap className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Hire Me Now</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-blue-400/50 text-blue-300 text-base px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm bg-blue-500/5 hover:bg-blue-500/15 hover:border-blue-400/80 transition-all duration-300"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Brain className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Cinematic Photo */}
          <motion.div
            className="relative order-first lg:order-last flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, #0ea5e9, #06b6d4, #38bdf8, #0ea5e9)', opacity: 0.15, filter: 'blur(20px)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Animated border ring */}
              <motion.div
                className="absolute -inset-1 rounded-3xl"
                style={{
                  background: 'conic-gradient(from 0deg, #0ea5e9, #06b6d4, transparent, transparent, #0ea5e9)',
                  padding: '2px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 rounded-3xl" style={{ background: '#000' }} />
              </motion.div>

              {/* Card container */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(6,182,212,0.08), rgba(0,0,0,0.9))',
                  border: '1px solid rgba(14,165,233,0.3)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-blue-400/60 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-blue-400/60 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-blue-400/60 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-blue-400/60 rounded-br-lg" />

                {/* Profile image */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src="https://warraich-11.github.io/IKHWAN.CO/PROFILE.png"
                    alt="Hassan Warraich - AI Engineer & Full Stack Developer"
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '520px', objectPosition: 'top' }}
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                </motion.div>

                {/* Name badge on photo */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md"
                    style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(14,165,233,0.4)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium text-white">Open to Opportunities</span>
                  </motion.div>
                </div>
              </div>

              {/* Floating skill badges */}
              <motion.div
                className="absolute -left-12 top-1/4 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md"
                style={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(14,165,233,0.3)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{ delay: 1.4, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
              >
                <div className="text-lg">🤖</div>
                <div>
                  <div className="text-xs font-semibold text-white">AI Engineer</div>
                  <div className="text-xs text-blue-300">OpenAI • LangChain</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-12 top-2/3 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md"
                style={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(6,182,212,0.3)' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                transition={{ delay: 1.6, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
              >
                <div className="text-lg">⚡</div>
                <div>
                  <div className="text-xs font-semibold text-white">Full-Stack</div>
                  <div className="text-xs text-cyan-300">React • Node.js</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs text-gray-500 font-inter tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full"
            animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}