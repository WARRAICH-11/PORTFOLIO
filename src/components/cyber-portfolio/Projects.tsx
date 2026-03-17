'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import React from 'react';

const ALL_PROJECTS = [
  {
    id: 1,
    title: "NeuroCalm",
    description: "AI Brain Coach Chatbot — leverage the power of AI and neuroscience to reduce stress, enhance focus, and build life-changing habits.",
    image: "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?q=80&w=990&auto=format&fit=crop",
    technologies: ["React", "OpenAI", "Firebase", "Full-Stack"],
    liveUrl: "https://neuro-calm.vercel.app/",
    githubUrl: "https://github.com/WARRAICH-11/NeuroCalm",
    category: "AI",
    featured: true,
  },
  {
    id: 15,
    title: "AI Agent Demo",
    description: "Try a live demo of an AI Agent system — showcasing autonomous task execution, tool use, and real-time reasoning capabilities.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1032&auto=format&fit=crop",
    technologies: ["AI Agents", "LLM", "React", "JavaScript"],
    liveUrl: "https://warraich-11.github.io/AGENT-DEMO/",
    githubUrl: "https://github.com/WARRAICH-11/AGENT-DEMO",
    category: "AI",
    featured: true,
  },
  {
    id: 16,
    title: "CareerLabs",
    description: "AI-based career guidance system that analyses student data to recommend the most suitable career paths using intelligent matching algorithms.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    technologies: ["MERN Stack", "AI/ML", "JavaScript", "MongoDB"],
    liveUrl: "https://github.com/WARRAICH-11/CAREERLABS",
    githubUrl: "https://github.com/WARRAICH-11/CAREERLABS",
    category: "AI",
    featured: true,
  },
  {
    id: 11,
    title: "Crypto Price Tracker",
    description: "Real-time cryptocurrency price tracking dashboard for Binance trading pairs with comprehensive technical analysis and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1172&auto=format&fit=crop",
    technologies: ["React", "VITE", "Firebase", "Crypto API"],
    liveUrl: "https://crypto-price-tracker-app-bice.vercel.app/",
    githubUrl: "https://github.com/WARRAICH-11/Crypto-Price-Tracker-App",
    category: "AI",
    featured: true,
  },
  {
    id: 2,
    title: "ConvoBrain AI",
    description: "AI-powered knowledge assistant that extracts information from uploaded documents through natural language queries with secure proxy architecture.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1032&auto=format&fit=crop",
    technologies: ["TypeScript", "React/Vite", "Node.js", "OpenAI"],
    liveUrl: "https://github.com/WARRAICH-11/CONVO-BRAIN-AI",
    githubUrl: "https://github.com/WARRAICH-11/CONVO-BRAIN-AI",
    category: "AI",
    featured: true,
  },
  {
    id: 3,
    title: "NexusCore",
    description: "Production-grade AI SaaS boilerplate monorepo with scalable architecture, authentication systems, and deployment automation.",
    image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1032&auto=format&fit=crop",
    technologies: ["TypeScript", "Monorepo", "SaaS", "AI Integration"],
    liveUrl: "https://github.com/WARRAICH-11/NEXUSCORE",
    githubUrl: "https://github.com/WARRAICH-11/NEXUSCORE",
    category: "SaaS",
    featured: true,
  },
  {
    id: 4,
    title: "AI Sales Tracker",
    description: "AI-powered sales tracking system that boosts sales performance up to 10×. Features intelligent analytics, automated reporting, and Docker deployment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop",
    technologies: ["Python", "AI Analytics", "Docker", "Desktop App"],
    liveUrl: "https://github.com/WARRAICH-11/SALES-TRACKER",
    githubUrl: "https://github.com/WARRAICH-11/SALES-TRACKER",
    category: "AI",
    featured: true,
  },
  {
    id: 5,
    title: "Support Pilot",
    description: "AI-powered support agent for Shopify stores that reduces support ticket volume by 30%+ through intelligent, context-aware automated responses.",
    image: "https://plus.unsplash.com/premium_photo-1681380409766-792f2bbb3ffe?q=80&w=1032&auto=format&fit=crop",
    technologies: ["AI Support", "Shopify", "Automation", "Context-Aware"],
    liveUrl: "https://github.com/WARRAICH-11/Support-Pilot",
    githubUrl: "https://github.com/WARRAICH-11/Support-Pilot",
    category: "AI",
    featured: true,
  },
  {
    id: 13,
    title: "GoldTrack",
    description: "Real-Time Market Analysis & Price Predictions — enterprise-grade precious metals investment platform with AI-powered insights and portfolio tracking.",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1170&auto=format&fit=crop",
    technologies: ["LOVABLE", "Gemini AI", "VITE", "Firebase"],
    liveUrl: "https://goldtrack.lovable.app/",
    githubUrl: "https://github.com/WARRAICH-11/goldtrack",
    category: "SaaS",
    featured: false,
  },
  {
    id: 10,
    title: "Career Path Navigator AI",
    description: "Interactive career guidance web app helping users discover potential career paths based on their skills, interests, and personality traits.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    technologies: ["React", "D3.js", "Framer Motion", "AI"],
    liveUrl: "https://warraich-11.github.io/CAREER-PATH-NAVIGATOR-AI/",
    githubUrl: "https://github.com/WARRAICH-11/CAREER-PATH-NAVIGATOR-AI",
    category: "AI",
    featured: true,
  },
  {
    id: 17,
    title: "SolarSpark",
    description: "Pakistan's trusted solar installation company website — professional landing page for residential and commercial solar energy solutions.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1172&auto=format&fit=crop",
    technologies: ["HTML/CSS", "JavaScript", "Responsive", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/SOLARSPARK/",
    githubUrl: "https://github.com/WARRAICH-11/SOLARSPARK",
    category: "Web",
    featured: false,
  },
  {
    id: 6,
    title: "BrandedRack",
    description: "Modern e-commerce platform with responsive design, optimized user experience, and seamless integration for online retail businesses.",
    image: "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=871&auto=format&fit=crop",
    technologies: ["HTML/CSS", "E-commerce", "Responsive", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/BRANDEDRACK/",
    githubUrl: "https://github.com/WARRAICH-11/BRANDEDRACK",
    category: "E-commerce",
    featured: false,
  },
  {
    id: 7,
    title: "City of Woods",
    description: "Premium furniture brand showcase with a modern, responsive frontend featuring interactive UI built with HTML5, CSS3, and vanilla JavaScript.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    technologies: ["HTML/CSS", "E-commerce", "Responsive", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/CITYOFWOODS/",
    githubUrl: "https://github.com/WARRAICH-11/CITYOFWOODS",
    category: "E-commerce",
    featured: false,
  },
  {
    id: 18,
    title: "CrunchBurgers",
    description: "Website for a Lahore-based fast-food chain — modern, appetizing design with menu showcase, online ordering UI, and brand identity.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop",
    technologies: ["HTML/CSS", "JavaScript", "Responsive", "Food & Beverage"],
    liveUrl: "https://warraich-11.github.io/CRUNCHBURGERS/",
    githubUrl: "https://github.com/WARRAICH-11/CRUNCHBURGERS",
    category: "Web",
    featured: false,
  },
  {
    id: 9,
    title: "Artistan Gallery",
    description: "Curated digital art gallery showcasing the world's finest contemporary artists and timeless masterpieces in one extraordinary online experience.",
    image: "https://images.unsplash.com/photo-1630253303562-c8e9fd52c52f?q=80&w=870&auto=format&fit=crop",
    technologies: ["React", "Frontend", "Art Gallery", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/ARTISTAN/",
    githubUrl: "https://github.com/WARRAICH-11/ARTISTAN",
    category: "Web",
    featured: false,
  },
  {
    id: 14,
    title: "Netflix Clone",
    description: "Faithful Netflix UI clone built for developers to practice and sharpen their frontend skills with a fully responsive layout.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "VITE", "Responsive", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/NetflixClone/",
    githubUrl: "https://github.com/WARRAICH-11/NetflixClone",
    category: "Web",
    featured: false,
  },
  {
    id: 12,
    title: "FitnessForge",
    description: "Comprehensive exercise library — browse a proven database of fitness exercises with categories, animations, and muscle group targeting.",
    image: "https://media.istockphoto.com/id/1391410221/photo/sports-and-gym-activities.jpg?s=2048x2048&w=is&k=20&c=icVZcLOjuulphoJT-Lfa6MmLUftfYE75Oe41E3Jxpeo=",
    technologies: ["VITE", "Fitness", "Responsive", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/FitnessForge/",
    githubUrl: "https://github.com/WARRAICH-11/FitnessForge",
    category: "Web",
    featured: false,
  },
  {
    id: 8,
    title: "Vacation Rental Mockup",
    description: "Airbnb-inspired vacation rental website mockup built from a Figma design — complete e-commerce UI with listings and booking flow.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    technologies: ["React", "E-commerce", "Figma", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/VacationRentalWebsiteMockup/",
    githubUrl: "https://github.com/WARRAICH-11/VacationRentalWebsiteMockup",
    category: "E-commerce",
    featured: false,
  },
];

const CATEGORIES = ["All", "AI", "SaaS", "E-commerce", "Web"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wider">PORTFOLIO</span>
          </motion.div>
          <h2 className="font-calibri text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 font-inter text-base sm:text-lg max-w-3xl mx-auto">
            A showcase of my work across AI, SaaS, e-commerce, and modern web development —
            {" "}<strong className="text-gray-300">{ALL_PROJECTS.length}+ projects</strong> and counting.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`px-5 py-2 rounded-full text-sm font-medium font-inter transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/30'
                  : 'border-blue-500/30 text-gray-400 hover:border-blue-400/60 hover:text-blue-300 bg-transparent'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {visible.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group h-full"
              >
                <div
                  className="h-full flex flex-col rounded-2xl overflow-hidden relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(17,17,17,0.95), rgba(14,165,233,0.04), rgba(17,17,17,0.95))',
                    border: project.featured ? '1px solid rgba(14,165,233,0.35)' : '1px solid rgba(14,165,233,0.15)',
                    transition: 'all 0.4s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(14,165,233,0.6)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(14,165,233,0.12), 0 0 0 1px rgba(14,165,233,0.2)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.border = project.featured ? '1px solid rgba(14,165,233,0.35)' : '1px solid rgba(14,165,233,0.15)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Top shimmer line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.8), rgba(6,182,212,0.6), transparent)' }}
                  />

                  {/* Image */}
                  <div className="relative overflow-hidden flex-shrink-0">
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                          <Star className="w-3 h-3" />
                          Featured
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-sm border border-blue-400/30 text-blue-300">
                        {project.category}
                      </span>
                    </div>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover action overlays */}
                    <div className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold shadow-lg backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/70 text-white text-sm font-semibold border border-white/20 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex-grow flex flex-col">
                    <h3 className="font-playfair text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-blue-500/30 text-blue-300 text-xs px-2 py-0.5 hover:bg-blue-500/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="border-gray-600/40 text-gray-500 text-xs px-2 py-0.5">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Mobile action buttons */}
                    <div className="flex gap-2 mt-auto">
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-500/10 border border-blue-500/40 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/60 text-xs py-2 rounded-xl transition-all duration-200"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white text-xs px-3 rounded-xl transition-all duration-200"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more/less */}
        {filtered.length > 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-blue-400/40 text-blue-300 font-inter font-medium hover:bg-blue-500/10 hover:border-blue-400/60 transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAll ? 'Show Less' : `View All ${filtered.length} Projects →`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}