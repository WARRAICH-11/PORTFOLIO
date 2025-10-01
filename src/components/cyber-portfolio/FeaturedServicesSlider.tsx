'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Zap, Palette, Code, Rocket, Star, Shield, Globe, Smartphone, ShoppingBag, BarChart3, CreditCard, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export function FeaturedServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      subtitle: "End-to-end web solutions with modern technologies",
      features: [
        { icon: Code, text: "React & Next.js" },
        { icon: Zap, text: "Fast Performance" },
        { icon: Shield, text: "Secure Backend" },
        { icon: Globe, text: "SEO Optimized" }
      ],
      ctaText: "Start Your Project",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "UI/UX Design & Prototyping",
      subtitle: "Beautiful, user-centered design experiences",
      features: [
        { icon: Palette, text: "Modern Design" },
        { icon: Smartphone, text: "Mobile-First" },
        { icon: Star, text: "User-Centered" },
        { icon: Zap, text: "Interactive" }
      ],
      ctaText: "View Design Work",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      id: 3,
      title: "SaaS Platform Development",
      subtitle: "Scalable software solutions for businesses",
      features: [
        { icon: Rocket, text: "Scalable Architecture" },
        { icon: Shield, text: "Enterprise Security" },
        { icon: Zap, text: "Real-time Features" },
        { icon: Globe, text: "Cloud Integration" }
      ],
      ctaText: "Build Your SaaS",
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 4,
      title: "AI Integration & Automation",
      subtitle: "Intelligent solutions powered by AI",
      features: [
        { icon: Zap, text: "AI-Powered" },
        { icon: Rocket, text: "Automation" },
        { icon: Code, text: "Custom Models" },
        { icon: Star, text: "Smart Analytics" }
      ],
      ctaText: "Explore AI Solutions",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      subtitle: "Complete e-commerce platforms with payment integration",
      features: [
        { icon: ShoppingBag, text: "Shopify Development" },
        { icon: CreditCard, text: "Payment Integration" },
        { icon: BarChart3, text: "Analytics Dashboard" },
        { icon: TrendingUp, text: "Conversion Optimization" }
      ],
      ctaText: "Launch Your Store",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 6,
      title: "Consulting & Optimization",
      subtitle: "Performance audits and strategic technical consulting",
      features: [
        { icon: BarChart3, text: "Performance Audit" },
        { icon: Code, text: "Code Review" },
        { icon: Rocket, text: "Technical Strategy" },
        { icon: Star, text: "Team Training" }
      ],
      ctaText: "Schedule Consultation",
      gradient: "from-violet-500/20 to-purple-500/20"
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="services" className="py-20 bg-gray-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-calibri text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-6 electric-glow">
            Featured Services
          </h2>
          <p className="text-gray-300 font-inter description-text max-w-3xl mx-auto">
            Discover our premium service offerings designed to elevate your digital presence 
            and drive exceptional business results.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <div className="relative h-[500px] sm:h-[450px] md:h-[400px] lg:h-96 overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
                className="absolute inset-0"
              >
                <Card className={`h-full bg-gradient-to-br ${slides[currentSlide].gradient} border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300`}>
                  <CardContent className="h-full flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                    <div className="text-center space-y-4 sm:space-y-6">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 leading-tight"
                      >
                        {slides[currentSlide].title}
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 font-inter service-subtitle-enhanced max-w-2xl mx-auto px-2 sm:px-0"
                      >
                        {slides[currentSlide].subtitle}
                      </motion.p>

                      {/* Feature Tags */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2 sm:px-0"
                      >
                        {slides[currentSlide].features.map((feature, index) => (
                          <motion.div
                            key={feature.text}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <Badge 
                              variant="outline" 
                              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition-colors duration-200 badge-text-enhanced py-1.5 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm"
                            >
                              <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              <span className="hidden xs:inline sm:inline">{feature.text}</span>
                              <span className="xs:hidden sm:hidden">{feature.text.split(' ')[0]}</span>
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Button 
                          size="lg"
                          className="bg-blue-500 hover:bg-blue-600 text-white font-inter font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 cyber-pulse-glow text-sm sm:text-base"
                        >
                          {slides[currentSlide].ctaText}
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Hidden on very small screens */}
          <div className="hidden sm:flex absolute inset-y-0 left-0 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/50 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 hover:text-white transition-all duration-300 backdrop-blur-sm ml-2 sm:ml-4"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
          
          <div className="hidden sm:flex absolute inset-y-0 right-0 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/50 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 hover:text-white transition-all duration-300 backdrop-blur-sm mr-2 sm:mr-4"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-500 w-8 cyber-pulse-glow' 
                  : 'bg-gray-600 hover:bg-blue-400/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}