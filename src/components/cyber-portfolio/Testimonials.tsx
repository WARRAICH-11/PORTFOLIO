'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc",
      company: "TechStartup Inc",
      content: "Alex delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise helped us launch our MVP ahead of schedule.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Digital Solutions Ltd",
      content: "Working with Alex was a game-changer for our e-commerce platform. The AI integration he implemented boosted our conversion rates by 35%. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency",
      content: "Alex's UI/UX skills are outstanding. He transformed our outdated website into a modern, user-friendly platform that our clients love. The results speak for themselves.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-3 w-3 sm:h-4 sm:w-4 ${
          index < rating ? 'text-blue-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-calibri text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-400 mb-4 sm:mb-6 electric-glow">
            Client Testimonials
          </h2>
          <p className="text-gray-300 font-inter text-base sm:text-lg description-text max-w-3xl mx-auto px-2 sm:px-0">
            Don't just take my word for it. Here's what clients say about working with me 
            and the results we've achieved together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-gray-900/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 card-hover-glass">
                <CardContent className="p-4 sm:p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full">
                      <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="flex gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <blockquote className="text-gray-300 font-inter text-center text-sm sm:text-base small-text-enhanced mb-4 sm:mb-6 leading-relaxed px-2">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Client Info */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-blue-500/30">
                        <AvatarImage 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-blue-500/20 text-blue-400 text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <div className="font-semibold text-white font-inter text-sm sm:text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-blue-400 text-xs sm:text-sm">
                          {testimonial.role}
                        </div>
                        <div className="text-gray-400 text-xs hidden sm:block">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '30+', label: 'Happy Clients' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 font-playfair mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-inter text-sm sm:text-base small-text-enhanced">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center px-2 sm:px-0"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 sm:p-8">
            <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
              Ready to Join These Happy Clients?
            </h3>
            <p className="text-gray-300 font-inter text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
              Let's work together to bring your vision to life and achieve exceptional results.
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-inter font-medium transition-all duration-300 cyber-pulse-glow text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}