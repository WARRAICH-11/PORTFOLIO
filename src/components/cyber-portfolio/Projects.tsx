'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
  id: 11,
  title: "crypto-price-tracker-app",
  description: "A real-time cryptocurrency price tracking dashboard with comprehensive technical analysis",
  image:"//images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with NeuroCalm preview image if available
  technologies: ["VITE", "CRYPTO ","Artificial Intelligence", "Fullstack", "Responsive", "UI/UX", "Firebase"],
  liveUrl: "https://crypto-price-tracker-app-bice.vercel.app/",
  githubUrl: "https://github.com/WARRAICH-11/Crypto-Price-Tracker-App",
  featured: true
},
    {
  id: 1,
  title: "NeuroCalm",
  description: "Leverage the power of AI and neuroscience to reduce stress, enhance focus, and build life-changing habits. Your journey to a calmer, more productive mind starts now.",
  image: "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?q=80&w=990&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with NeuroCalm preview image if available
  technologies: ["React", "Artificial Intelligence", "Fullstack", "Responsive", "UI/UX", "Firebase"],
  liveUrl: "https://neuro-calm.vercel.app/",
  githubUrl: "https://github.com/WARRAICH-11/NeuroCalm",
  featured: true
},
     {
    id: 10,
    title: "Career Path Navigation AI",
    description: "An interactive career guidance web app that helps users discover potential career paths based on their skills, interests, and personality traits.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    technologies: ["React", "Frontend", "Framer Motion", "D3.js", "Responsive", "UI/UX", "React Hook Form"],
    liveUrl: "https://warraich-11.github.io/CAREER-PATH-NAVIGATOR-AI/", // Live Demo
    githubUrl: "https://github.com/WARRAICH-11/CAREER-PATH-NAVIGATOR-AI", // View Code
    featured: true
  },
    {
    id: 6,
    title: "BrandedRack",
    description: "Modern e-commerce platform with responsive design, optimized user experience, and seamless integration capabilities for online retail businesses.",
    image: "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["HTML/CSS", "E-commerce", "Responsive", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/BRANDEDRACK/",
    githubUrl: "https://github.com/WARRAICH-11/BRANDEDRACK",
    featured: true
  },
  {
    id: 7,
    title: "City of Woods",
    description: "A modern, responsive frontend showcase for City of Woods, a premium furniture brand. This project demonstrates a clean, interactive user interface built with HTML5, CSS3, and vanilla JavaScript.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    technologies: ["HTML/CSS", "E-commerce", "Responsive", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/CITYOFWOODS/",
    githubUrl: "https://github.com/WARRAICH-11/CITYOFWOODS",
    featured: true
  },
  {
    id: 8,
    title: "Vacation Rental Website Mockup",
    description: "This site is for a Vacation Rental Website Mockup. An Airbnb replica for e-commerce stores.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    technologies: ["React", "E-commerce", "Responsive", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/VacationRentalWebsiteMockup/",
    githubUrl: "https://github.com/WARRAICH-11/VacationRentalWebsiteMockup",
    featured: true
  },
  {
    id: 9,
    title: "Artistan",
    description: "Curated by Hassan Warraich, ARTISTAN brings together the world's finest contemporary artists and timeless masterpieces in one extraordinary digital gallery.",
    image: "https://images.unsplash.com/photo-1630253303562-c8e9fd52c52f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Frontend", "E-commerce", "Art Gallery", "Responsive", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/ARTISTAN/",
    githubUrl: "https://github.com/WARRAICH-11/ARTISTAN",
    featured: true
  },
  {
    id: 2,
    title: "Convo-Brain-AI",
    description: "AI-powered knowledge and task assistant that enables users to extract information from uploaded documents through natural language queries. Features secure proxy architecture, real-time chat, and intelligent task management.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["TypeScript", "React/Vite", "Node.js", "OpenAI", "Supabase"],
    liveUrl: "https://github.com/WARRAICH-11/CONVO-BRAIN-AI",
    githubUrl: "https://github.com/WARRAICH-11/CONVO-BRAIN-AI",
    featured: true
  },
  {
    id: 3,
    title: "NexusCore",
    description: "Production-grade AI SaaS boilerplate monorepo with scalable architecture, authentication systems, billing integration, and deployment automation. Reduces time-to-market for AI products.",
    image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["TypeScript", "Monorepo", "SaaS", "Production-Grade", "AI Integration"],
    liveUrl: "https://github.com/WARRAICH-11/NEXUSCORE",
    githubUrl: "https://github.com/WARRAICH-11/NEXUSCORE",
    featured: true
  },
  {
    id: 4,
    title: "Sales-Tracker",
    description: "AI-powered sales tracking system that boosts sales performance up to 10x. Features intelligent analytics, automated reporting, and cross-platform deployment with Docker containerization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "AI Analytics", "Desktop App", "Docker"],
    liveUrl: "https://github.com/WARRAICH-11/SALES-TRACKER",
    githubUrl: "https://github.com/WARRAICH-11/SALES-TRACKER",
    featured: true
  },
  {
    id: 5,
    title: "Support-Pilot",
    description: "AI-powered support agent for Shopify stores that reduces support ticket volume by 30%+ through intelligent, context-aware responses and automated customer service workflows.",
    image: "https://plus.unsplash.com/premium_photo-1681380409766-792f2bbb3ffe?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["AI Support", "Shopify", "Context-Aware", "Automation"],
    liveUrl: "https://github.com/WARRAICH-11/Support-Pilot",
    githubUrl: "https://github.com/WARRAICH-11/Support-Pilot",
    featured: true
  }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-calibri text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-400 mb-4 sm:mb-6 electric-glow">
            Featured Projects
          </h2>
          <p className="text-gray-300 font-inter text-base sm:text-lg description-text max-w-3xl mx-auto px-2 sm:px-0">
            A showcase of my recent work, demonstrating expertise in modern web technologies, 
            user experience design, and scalable application architecture.
          </p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className={`group overflow-hidden transition-all duration-300 hover:scale-105 h-full flex flex-col card-hover-glass ${
                project.featured 
                  ? 'bg-gradient-to-br from-blue-900/50 to-cyan-900/30 border-blue-400 cyber-pulse-glow' 
                  : 'bg-gray-900/50 border border-blue-500/20 hover:border-blue-500/40'
              }`}>
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <Badge className="bg-blue-500 text-black font-bold text-xs sm:text-sm px-2 py-1">
                      Featured
                    </Badge>
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Buttons - Hidden on mobile */}
                  <div className="hidden sm:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black text-sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="font-playfair card-title-enhanced font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-inter text-sm sm:text-base small-text-enhanced mb-3 sm:mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.div
                        key={`${project.id}-${tech}-${techIndex}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: techIndex * 0.03 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="outline" 
                          className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition-colors duration-200 text-xs badge-text-enhanced px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="border-gray-500/30 text-gray-400 text-xs px-2 py-1">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 sm:gap-3 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 text-xs sm:text-sm py-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden xs:inline">Live Demo</span>
                      <span className="xs:hidden">Demo</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white text-xs sm:text-sm px-3 sm:px-4"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}