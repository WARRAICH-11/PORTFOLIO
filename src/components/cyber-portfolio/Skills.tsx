'use client';

import { motion } from 'motion/react';
import { Code, Server, Database, Briefcase, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

export function Skills() {
  const skillCategories = [
    {
      id: 1,
      icon: Code,
      title: "Frontend & UI/UX",
      skills: ["React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Figma", "Adobe XD"]
    },
    {
      id: 2,
      icon: Server,
      title: "Backend & AI",
      skills: ["Node.js", "Python", "FastAPI", "OpenAI", "TensorFlow", "Docker", "AWS", "GraphQL"]
    },
    {
      id: 3,
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Supabase", "Redis", "Firebase", "Prisma", "SQL", "NoSQL"]
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Business Skills",
      skills: ["SaaS Development", "SEO Optimization", "Stripe Integration", "Analytics", "Project Management", "Agile"]
    },
    {
      id: 5,
      icon: ShoppingCart,
      title: "Shopify Development",
      skills: ["Liquid", "Shopify Plus", "App Development", "Theme Development", "API Integration", "Performance Optimization"]
    }
  ];

  const skillLevels = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "AI Integration", level: 70 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-calibri text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-6 electric-glow">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 font-inter description-text max-w-3xl mx-auto">
            A carefully curated arsenal of cutting-edge technologies and frameworks that empowers me to 
            architect sophisticated, high-performance applications with exceptional user experiences.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full bg-gray-900/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cyber-pulse-glow card-hover-glass">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-full">
                      <category.icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <CardTitle className="text-white font-playfair card-title-enhanced">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="outline" 
                          className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition-colors duration-200 badge-text-enhanced"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-playfair text-3xl font-semibold text-white text-center mb-12">
            Expertise Breakdown
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skillLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-inter font-medium supporting-text">{skill.name}</span>
                  <span className="text-blue-400 font-bold supporting-text">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full cyber-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="font-playfair text-2xl font-semibold text-white mb-8">
            Preferred Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "React", "TypeScript", "Node.js", "Python", "MongoDB", 
              "PostgreSQL", "AWS", "Docker", "Figma", "Tailwind CSS"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-gray-400 hover:text-blue-400 font-inter font-medium transition-colors duration-200 cursor-default supporting-text"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}