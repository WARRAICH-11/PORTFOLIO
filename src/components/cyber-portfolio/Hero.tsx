'use client';

import { motion } from 'motion/react';
import { ArrowRight, Download, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-24 relative overflow-hidden bg-gradient-to-br from-gray-900/20 via-blue-900/10 to-gray-900/20"
    >
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl floating-orb"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-l from-blue-500/20 to-primary/20 rounded-full blur-3xl floating-orb"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-tr from-cyan-400/15 to-blue-600/15 rounded-full blur-2xl floating-orb"
          style={{ animationDelay: "10s" }}
        ></div>
        
        {/* Smaller glowing particles */}
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-primary rounded-full cyber-pulse-glow"></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full cyber-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/3 w-4 h-4 bg-blue-400 rounded-full cyber-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

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
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-lg font-medium text-primary/80 tracking-wide">
                  Welcome, I'm Hassan Warraich
                </p>
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </div>

              {/* Main heading - Minimal, centered layout */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight hero-gradient-text text-glow-animation mb-8">
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
                className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-black text-lg px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-110 hero-glow-pulse font-semibold shadow-2xl"
              >
                <Zap className="mr-3 h-6 w-6" />
                Hire Me Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/10 hover:border-cyan-400 text-lg px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm font-semibold"
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
              
              {/* Main glassmorphism container with bold border */}
              <div className="hero-glassmorphism-border p-6 luxury-float">
                
                {/* Inner glow effect */}
                <div className="relative rounded-3xl overflow-hidden hero-image-hover group">
                  
                  {/* Image with enhanced hover effects */}
                  <div className="relative z-10">
                    <ImageWithFallback
                      src="https://warraich-11.github.io/PORTFOLIO/IMG_7911.png"
                      alt="Hassan Warraich - AI Engineer & Full Stack Developer"
                      className="w-full h-auto rounded-2xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                  
                  {/* Inner decorative elements */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Enhanced floating elements around the image */}
              <div className="absolute -top-8 -right-8 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-primary/30 to-cyan-500/30 rounded-full blur-2xl luxury-float"></div>
              <div
                className="absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-blue-500/30 to-primary/30 rounded-full blur-2xl luxury-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/4 -right-12 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-l from-cyan-400/20 to-blue-600/20 rounded-full blur-xl luxury-float"
                style={{ animationDelay: "4s" }}
              ></div>
              <div
                className="absolute bottom-1/4 -left-12 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-primary/20 to-cyan-300/20 rounded-full blur-lg luxury-float"
                style={{ animationDelay: "6s" }}
              ></div>
              
              {/* Additional sparkle effects */}
              <div className="absolute top-8 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 right-12 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}