'use client';

import { motion } from 'motion/react';
import { Trophy, Users, Code, Calendar, Briefcase, GraduationCap, Brain, Rocket } from 'lucide-react';

export function About() {
  const achievements = [
    {
      icon: Trophy,
      number: '50+',
      label: 'Projects Completed',
      description: 'Innovative solutions across diverse digital landscapes',
      color: 'from-yellow-500/20 to-orange-500/10',
      iconColor: 'text-yellow-400',
    },
    {
      icon: Users,
      number: '30+',
      label: 'Happy Clients',
      description: 'Global partnerships across multiple industries',
      color: 'from-blue-500/20 to-cyan-500/10',
      iconColor: 'text-blue-400',
    },
    {
      icon: Code,
      number: '3+',
      label: 'Years Experience',
      description: 'Mastering the evolving landscape of modern dev',
      color: 'from-green-500/20 to-emerald-500/10',
      iconColor: 'text-green-400',
    },
    {
      icon: Calendar,
      number: '24/7',
      label: 'Support Available',
      description: 'Dedicated maintenance & optimization services',
      color: 'from-purple-500/20 to-violet-500/10',
      iconColor: 'text-purple-400',
    },
  ];

  const experiences = [
    {
      icon: Brain,
      title: 'AI Engineer / Builder',
      period: 'January 2024 – Present',
      location: 'Self-employed',
      description: 'Shipped ConvoBrain (doc-QA + tasking with OpenAI), AI Sales Tracker desktop app with Docker builds, and CareerLabs AI-driven career guidance. Reduced prototype-to-demo time < 2 weeks.',
      achievements: ['Multiple AI-powered applications shipped', 'Standardized infra for rapid prototyping'],
      skills: ['OpenAI', 'Docker', 'Python', 'TypeScript', 'Supabase', 'CI/CD'],
      color: 'from-blue-500/15 to-cyan-500/8',
      borderColor: 'border-blue-400/30',
    },
    {
      icon: Rocket,
      title: 'Full Stack Engineer',
      period: 'September 2024 – Present',
      location: 'Remote',
      description: 'Developed and deployed full-stack web applications using React, Angular, Node.js, and MongoDB. Created an AI-powered career recommendation platform integrating ML with user data.',
      achievements: ['AI-powered career recommendation platform', 'Scalable web apps with modern stacks'],
      skills: ['React', 'Angular', 'Node.js', 'MongoDB', 'AI/ML'],
      color: 'from-cyan-500/15 to-blue-500/8',
      borderColor: 'border-cyan-400/30',
    },
    {
      icon: Briefcase,
      title: 'Freelance Developer',
      period: '2024 – Present',
      location: 'Remote',
      description: 'Developed and customized multiple Shopify stores aligned with client branding. Integrated themes, optimized layouts, and improved customer experience with SEO + responsive designs.',
      achievements: ['Optimized Shopify stores for conversions', 'Payment gateway & third-party API integrations'],
      skills: ['Shopify', 'E-commerce', 'SEO', 'API Integration', 'Payment Gateways'],
      color: 'from-emerald-500/15 to-teal-500/8',
      borderColor: 'border-emerald-400/30',
    },
    {
      icon: GraduationCap,
      title: 'Graphic Designer',
      period: 'March 2023 – Present',
      location: 'Gujrat Institute of Management Sciences',
      description: 'Designed marketing materials (posters, flyers, banners, digital assets) for academic events. Built consistent brand visuals for social media, increasing engagement.',
      achievements: ['Improved brand consistency & engagement', 'Delivered high-quality creative assets on time'],
      skills: ['Photoshop', 'Illustrator', 'Canva', 'Branding'],
      color: 'from-purple-500/15 to-pink-500/8',
      borderColor: 'border-purple-400/30',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #000 0%, rgba(14,165,233,0.03) 50%, #000 100%)' }}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)', right: '-10%', top: '10%' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-blue-300 tracking-wider">ABOUT ME</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-6 font-calibri">
            About Me
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-3xl mx-auto leading-relaxed">
            Innovative technologist passionate about architecting AI-driven experiences that transform user engagement into measurable success.
          </p>
        </motion.div>

        {/* Story + Achievement cards */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 font-calibri">
              My Journey
            </h3>
            <div className="space-y-5 text-gray-300 font-inter text-base leading-relaxed">
              <p>
                My tech odyssey began in <span className="text-blue-400 font-semibold">2022</span> with pure curiosity about digital architecture.
                What started as experimental code sketches evolved into a mastery of building comprehensive solutions
                that address complex, real-world challenges.
              </p>
              <p>
                Today, I architect sophisticated web ecosystems using modern frameworks and AI technologies.
                My philosophy centers on crafting <span className="text-cyan-300 font-semibold">elegant, maintainable code</span> while delivering
                experiences that feel effortlessly intuitive to users.
              </p>
              <p>
                From AI agents and SaaS platforms to e-commerce stores and stunning UIs — I bridge the gap between
                <span className="text-blue-300 font-semibold"> cutting-edge technology</span> and real business impact.
              </p>
            </div>

            {/* Skills highlight */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'OpenAI', 'TypeScript', 'Docker', 'Supabase', 'AWS'].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium rounded-full font-inter transition-all duration-200"
                  style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.3)', color: '#93c5fd' }}
                  whileHover={{ scale: 1.05, background: 'rgba(14,165,233,0.2)' }}
                >
                  {skill}
                </motion.span>
              ))}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="p-6 rounded-2xl text-center relative overflow-hidden group cursor-default"
                style={{
                  background: `linear-gradient(135deg, rgba(17,17,17,0.9), rgba(14,165,233,0.05))`,
                  border: '1px solid rgba(14,165,233,0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <achievement.icon className={`h-8 w-8 ${achievement.iconColor} mx-auto mb-3`} />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-inter">{achievement.number}</div>
                <div className="text-blue-300 font-semibold mb-2 text-sm font-inter">{achievement.label}</div>
                <div className="text-gray-500 text-xs font-inter leading-tight">{achievement.description}</div>
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
          className="text-center mb-14"
        >
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-4 font-calibri">
            Work Experience
          </h3>
          <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto">
            My professional journey building AI-powered solutions and full-stack applications
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`experience-card h-full group`}
            >
              <div className="p-6 md:p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl flex-shrink-0" style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.25)' }}>
                    <exp.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-blue-400 mb-1 font-calibri leading-tight">
                      {exp.title}
                    </h4>
                    <div className="text-gray-400 font-inter text-sm space-y-0.5">
                      <p>{exp.period}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 font-inter text-sm leading-relaxed mb-5 flex-grow">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-5">
                  <h5 className="flex items-center text-orange-400 font-semibold text-sm mb-2 font-inter">
                    <span className="mr-1.5">⭐</span> Key Achievements
                  </h5>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-gray-300 text-sm font-inter flex items-start gap-2">
                        <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full font-inter transition-all duration-200 hover:scale-105"
                      style={{ background: 'rgba(14,165,233,0.10)', border: '1px solid rgba(14,165,233,0.30)', color: '#93c5fd' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}