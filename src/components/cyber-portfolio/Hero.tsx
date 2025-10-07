'use client';

import { motion } from 'motion/react';
import { ArrowRight, Download, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import React from 'react';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-24 relative overflow-hidden bg-gradient-to-br from-gray-900/20 via-blue-900/10 to-gray-900/20"
    >
      {/* Minimal background (removed floating orbs and particles) */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Enhanced Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <p className="text-lg font-medium text-primary/80 tracking-wide">
                  Hi, I'm Hassan Warraich
                </p>
                <Sparkles className="w-5 h-5 text-primary" />
              </div>

              {/* Main heading - Minimal, centered layout */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
                AI Engineer &
                <br />
                Full-Stack Developer
              </h1>

              {/* Enhanced description with larger text */}
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                I craft <span className="text-primary font-semibold">intelligent digital ecosystems</span> that transform ideas into 
                <span className="text-cyan-400 font-semibold"> profitable realities</span>. 
                My expertise spans cutting-edge AI integration and scalable applications that don't just work—
                <span className="text-blue-400 font-semibold">they thrive</span>.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons with more spacing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8"
            >
              <Button
  size="lg"
  className="bg-primary text-black text-lg px-8 py-4 rounded-2xl transition-colors duration-200 font-semibold shadow"
  onClick={() => window.open('https://www.linkedin.com/in/hassanwarraich11/', '_blank')}
>
  <Zap className="mr-3 h-6 w-6" />
  Hire Me Now
  <ArrowRight className="ml-3 h-6 w-6" />
</Button>

              <Button
                variant="outline"
                size="lg"
                className="border border-primary text-primary text-lg px-8 py-4 rounded-2xl transition-colors duration-200 font-semibold"
              >
                <a href="#projects" className="flex items-center">
                  <Download className="mr-3 h-6 w-6" />
                  View Projects
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Photo with luxury glassmorphism */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Simplified container */}
              <div className="p-6">
                
                <div className="relative rounded-3xl overflow-hidden">
                  
                  {/* Image */}
<div className="relative z-10">
  <ImageWithFallback
    src="https://warraich-11.github.io/IKHWAN.CO/PROFILE.png"
    alt="Hassan Warraich - AI Engineer & Full Stack Developer"
                      className="w-4/5 h-auto mx-auto rounded-2xl"
  />
</div>
</div>
</div>
</div>
</motion.div>
        </div>
      </div>
    </section>
  );
}