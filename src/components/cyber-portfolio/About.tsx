'use client';

import { motion } from 'motion/react';
import { Trophy, Users, Code, Calendar } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function About() {
  const achievements = [
    {
      icon: Trophy,
      number: '50+',
      label: 'Projects Completed',
      description: 'Innovative solutions delivered across diverse digital landscapes'
    },
    {
      icon: Users,
      number: '30+',
      label: 'Happy Clients',
      description: 'Global partnerships spanning multiple industries and markets'
    },
    {
      icon: Code,
      number: '3+',
      label: 'Years Experience',
      description: 'Mastering the evolving landscape of modern development'
    },
    {
      icon: Calendar,
      number: '24/7',
      label: 'Support Available',
      description: 'Dedicated maintenance and continuous optimization services'
    }
  ];



  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-calibri text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-6">
            About Me
          </h2>
          <p className="text-gray-300 font-inter description-text max-w-3xl mx-auto">
            Innovative technologist passionate about architecting AI-driven experiences that transform user engagement into measurable success. Combining academic excellence with real-world expertise to deliver next-generation solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-calibri text-3xl md:text-4xl font-semibold text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-300 font-inter supporting-text">
              <p>
                My tech odyssey began in 2022 with pure curiosity about digital architecture. 
                What started as experimental code sketches has evolved into a mastery of building 
                comprehensive solutions that address complex, real-world challenges.
              </p>
              <p>
                Today, I architect sophisticated web ecosystems using modern frameworks and AI technologies. 
                My philosophy centers on crafting elegant, maintainable code while delivering 
                experiences that feel effortlessly intuitive to users.
              </p>
             
            </div>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gray-900/50 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-200">
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                    <div className="text-blue-400 font-medium mb-2 badge-text-enhanced">{achievement.label}</div>
                    <div className="text-gray-400 small-text-enhanced">{achievement.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="font-calibri text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-6">
            Work Experience
          </h3>
          <p className="text-gray-300 font-inter description-text max-w-4xl mx-auto">
            My professional journey building AI-powered solutions and full-stack applications
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 - Full Stack Engineer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="experience-card h-full"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-8 h-full flex flex-col">
              {/* Job Title */}
              <h4 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">
                Full Stack Engineer
              </h4>
              
              {/* Date Range + Role + Location */}
              <div className="text-gray-400 mb-4 space-y-1">
                <p className="text-lg">September 2024 – Present</p>
                <p className="text-lg">Remote</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 supporting-text mb-6 text-left leading-relaxed">
                Developed and deployed full-stack web applications using React, Angular, Node.js, and MongoDB. Created an AI-powered career recommendation platform integrating ML with user data. Implemented responsive UI/UX designs, APIs, and secure authentication.
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h5 className="flex items-center text-red-400 font-bold text-xl mb-3">
                  <span className="mr-2">⭐</span>
                  Key Achievements:
                </h5>
                <ul className="space-y-2 text-left">
                  <li className="text-gray-300 small-text-enhanced flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>AI-powered career recommendation platform</span>
                  </li>
                  <li className="text-gray-300 small-text-enhanced flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Scalable web apps with modern stacks</span>
                  </li>
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {['React', 'Angular', 'Node.js', 'MongoDB', 'AI/ML'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Freelance */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="experience-card h-full"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-8 h-full flex flex-col">
              {/* Job Title */}
              <h4 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">
                Freelance / Remote
              </h4>
              
              {/* Date Range + Role + Location */}
              <div className="text-gray-400 mb-4 space-y-1">
                <p className="text-lg">2024 – Present</p>
                <p className="text-lg">Remote</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 supporting-text mb-6 text-left leading-relaxed">
                Developed and customized multiple Shopify stores aligned with client branding. Integrated themes, optimized layouts, and improved customer experience with SEO + responsive designs.
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h5 className="flex items-center text-red-400 font-bold text-xl mb-3">
                  <span className="mr-2">⭐</span>
                  Key Achievements:
                </h5>
                <ul className="space-y-2 text-left">
                  <li className="text-gray-300 small-text-enhanced flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Optimized Shopify stores for conversions</span>
                  </li>
                  <li className="text-gray-300 small-text-enhanced flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Payment gateway & third-party API integrations</span>
                  </li>
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {['Shopify', 'E-commerce', 'SEO', 'API Integration', 'Payment Gateways'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - AI Engineer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="experience-card h-full"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-8 h-full flex flex-col">
              {/* Job Title */}
              <h4 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">
                AI Engineer / Builder
              </h4>
              
              {/* Date Range + Role + Location */}
              <div className="text-gray-400 mb-4 space-y-1">
                <p className="text-lg">January 2024 – Present</p>
                <p className="text-lg">Self-employed</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 supporting-text mb-6 text-left leading-relaxed">
                Shipped ConvoBrain (doc-QA + tasking with OpenAI), AI Sales Tracker desktop app with Docker builds, and CareerLabs AI-driven career guidance. Reduced prototype-to-demo time &lt; 2 weeks.
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h5 className="flex items-center text-red-400 font-bold text-xl mb-3">
                  <span className="mr-2">⭐</span>
                  Key Achievements:
                </h5>
                <ul className="space-y-2 text-left">
                  <li className="text-gray-300 small-text-enhanced flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Multiple AI-powered applications shipped</span>
                  </li>
                  <li className="text-gray-300 small-text-enhanced flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Standardized infra for rapid prototyping</span>
                  </li>
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {['OpenAI', 'Docker', 'Python', 'TypeScript', 'Supabase', 'CI/CD'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Graphic Designer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="experience-card h-full"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-8 h-full flex flex-col">
              {/* Job Title */}
              <h4 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">
                Graphic Designer
              </h4>
              
              {/* Date Range + Role + Location */}
              <div className="text-gray-400 mb-4 space-y-1">
                <p className="text-lg">March 2023 – Present</p>
                <p className="text-lg">Gujrat Institute of Management Sciences</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 supporting-text mb-6 text-left leading-relaxed">
                Designed marketing materials (posters, flyers, banners, digital assets) for academic events. Built consistent brand visuals for social media, increasing engagement.
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h5 className="flex items-center text-red-400 font-bold text-xl mb-3">
                  <span className="mr-2">⭐</span>
                  Key Achievements:
                </h5>
                <ul className="space-y-2 text-left">
                  <li className="text-gray-300 small-text-enhanced flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Improved brand consistency & engagement</span>
                  </li>
                  <li className="text-gray-300 small-text-enhanced flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Delivered high-quality creative assets on time</span>
                  </li>
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {['Photoshop', 'Illustrator', 'Canva', 'Branding'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}