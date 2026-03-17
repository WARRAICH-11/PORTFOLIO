'use client';

import { motion } from 'motion/react';
import { Code, Server, Database, Briefcase, ShoppingCart, Zap } from 'lucide-react';
import React from 'react';

export function Skills() {
  const skillCategories = [
    {
      id: 1,
      icon: Code,
      title: "Frontend & UI/UX",
      color: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      skills: ["React", "Angular", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "Adobe XD"],
    },
    {
      id: 2,
      icon: Server,
      title: "Backend & AI",
      color: "from-purple-500/20 to-blue-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      skills: ["Node.js", "Python", "FastAPI", "OpenAI", "LangChain", "TensorFlow", "Docker", "AWS"],
    },
    {
      id: 3,
      icon: Database,
      title: "Database",
      color: "from-emerald-500/20 to-teal-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      skills: ["MongoDB", "PostgreSQL", "Supabase", "Redis", "Firebase", "Prisma", "SQL", "NoSQL"],
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Business Skills",
      color: "from-orange-500/20 to-yellow-500/10",
      iconColor: "text-orange-400",
      borderColor: "border-orange-500/30",
      skills: ["SaaS Development", "SEO Optimization", "Stripe Integration", "Analytics", "Project Management", "Agile"],
    },
    {
      id: 5,
      icon: ShoppingCart,
      title: "Shopify Development",
      color: "from-green-500/20 to-emerald-500/10",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30",
      skills: ["Liquid", "Shopify Plus", "App Development", "Theme Development", "API Integration", "Performance Optimization"],
    },
    {
      id: 6,
      icon: Zap,
      title: "DevOps & Tools",
      color: "from-cyan-500/20 to-blue-500/10",
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      skills: ["Git", "GitHub Actions", "CI/CD", "Vercel", "Netlify", "Linux", "Nginx", "Docker Compose"],
    },
  ];

  const skillLevels = [
    { name: "JavaScript / TypeScript", level: 95, color: "from-blue-500 to-cyan-400" },
    { name: "React / Next.js", level: 92, color: "from-cyan-500 to-blue-400" },
    { name: "Node.js / APIs", level: 87, color: "from-blue-400 to-indigo-400" },
    { name: "Python / AI & ML", level: 82, color: "from-purple-500 to-blue-400" },
    { name: "UI/UX Design", level: 78, color: "from-pink-500 to-purple-400" },
    { name: "AI Integration", level: 85, color: "from-emerald-500 to-cyan-400" },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #000 0%, rgba(14,165,233,0.04) 50%, #000 100%)' }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle at center, rgba(14,165,233,1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

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
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wider">SKILLS & TECH</span>
          </motion.div>
          <h2 className="font-calibri text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 font-inter text-lg max-w-3xl mx-auto leading-relaxed">
            A carefully curated arsenal of cutting-edge technologies that empowers me to architect sophisticated,
            high-performance applications with exceptional user experiences.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(17,17,17,0.95), rgba(14,165,233,0.04))',
                border: `1px solid rgba(14,165,233,0.18)`,
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.border = `1px solid rgba(14,165,233,0.45)`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(14,165,233,0.10)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.border = `1px solid rgba(14,165,233,0.18)`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {/* Shimmer top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.7), rgba(6,182,212,0.5), transparent)' }}
              />

              <div className="p-6">
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl" style={{ background: `linear-gradient(135deg, ${category.color.replace('from-', '').replace(' to-', ', ')})`, border: `1px solid rgba(14,165,233,0.2)` }}>
                    <category.icon className={`h-5 w-5 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-white font-semibold font-inter text-base">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.04 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08 }}
                      className="px-2.5 py-1 text-xs font-medium rounded-full font-inter cursor-default transition-all duration-200"
                      style={{
                        background: 'rgba(14,165,233,0.09)',
                        border: '1px solid rgba(14,165,233,0.25)',
                        color: '#93c5fd',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-10 font-playfair">
            Expertise Breakdown
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skillLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-inter font-medium text-sm">{skill.name}</span>
                  <span className="text-blue-400 font-bold text-sm font-inter">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-900 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    {/* Shimmer effect on bar */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, delay: index * 0.2 + 1.2, ease: 'easeInOut' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold text-gray-400 text-center mb-8 font-inter tracking-wider uppercase text-sm">
            Preferred Tech Stack
          </h3>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(90deg, #000, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(-90deg, #000, transparent)' }} />
            <motion.div
              className="flex gap-8 items-center whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              {[...["React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker", "Figma", "Tailwind CSS", "OpenAI", "AWS", "Supabase", "Next.js", "FastAPI", "Redis"], ...["React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker", "Figma", "Tailwind CSS", "OpenAI", "AWS", "Supabase", "Next.js", "FastAPI", "Redis"]].map((tech, index) => (
                <motion.div
                  key={`${tech}-${index}`}
                  className="text-gray-500 hover:text-blue-400 font-inter font-medium transition-colors duration-200 cursor-default text-sm flex-shrink-0"
                  whileHover={{ color: '#60a5fa', scale: 1.05 }}
                >
                  {tech}
                  {index < 29 && <span className="ml-8 text-blue-400/30">◆</span>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}