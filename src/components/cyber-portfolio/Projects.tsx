'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { FadeIn } from '../motion/FadeIn';
import { ScrollMotionLayer } from '../motion/ScrollMotionLayer';
import { SplitReveal } from '../SplitReveal';
import { TiltCard } from '../TiltCard';
import { useMagnetic } from '../../hooks/useMagnetic';

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

type Project = (typeof ALL_PROJECTS)[number];

function ProjectCard({ project, shouldReduce }: { project: Project; shouldReduce: boolean }) {
  const titleRef = useMagnetic<HTMLAnchorElement>(0.18);

  return (
    <TiltCard
      tiltAmount={8}
      className="spatial-card flex h-full flex-col overflow-hidden rounded-2xl hover:border-white/30 hover:shadow-[0_26px_90px_rgba(193,95,60,0.15)]"
    >
      <div className="relative">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="h-44 w-full object-cover opacity-90 saturate-[0.85]"
          loading="lazy"
        />
      </div>

      <div className="relative z-20 flex flex-1 flex-col p-6">
        <div className="w-fit rounded-full bg-crail/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-crail">
          {project.category}
        </div>
        <h3 className="mt-3 text-lg font-medium text-pampas">
          <a
            ref={titleRef}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-text inline-block"
          >
            {project.title}
          </a>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-cloudy-light">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology, index) => (
            <motion.span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-cloudy"
              initial={shouldReduce ? false : { opacity: 0, y: 8 }}
              whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={shouldReduce ? { duration: 0 } : { delay: 0.08 + index * 0.035 }}
            >
              {technology}
            </motion.span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 text-sm font-medium text-cloudy-light hover:text-crail"
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 text-sm font-medium text-cloudy-light hover:text-crail"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        </div>
      </div>
    </TiltCard>
  );
}

export function Projects() {
  const shouldReduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="section spatial-section">
      <div className="section-inner">
        <ScrollMotionLayer>
        <FadeIn>
          <div className="text-sm font-mono tracking-widest uppercase text-cloudy">
            05 — PROJECTS
          </div>
          <SplitReveal as="h2" className="mt-4 mb-12 text-3xl font-normal tracking-normal text-pampas md:text-4xl">
            Selected work.
          </SplitReveal>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <motion.button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-medium",
                    active
                      ? "border-crail bg-crail/15 text-crail"
                      : "border-white/10 bg-white/5 text-cloudy hover:text-crail hover:border-crail",
                  ].join(" ")}
                  whileHover={shouldReduce ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduce ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
              initial={shouldReduce ? false : { opacity: 0, y: 12 }}
              animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduce ? undefined : { opacity: 0, y: -8 }}
              transition={
                shouldReduce
                  ? { duration: 0 }
                  : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
              }
            >
              {visible.map((project, index) => (
                <FadeIn key={project.id} delay={index * 0.08} className="h-full">
                  <ProjectCard project={project} shouldReduce={shouldReduce} />
                </FadeIn>
              ))}
            </motion.div>
          </AnimatePresence>
        </FadeIn>

        {filtered.length > 6 && (
          <FadeIn className="mt-12">
            <div className="flex justify-start">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-pampas hover:border-crail"
              >
                {showAll ? "Show less" : "View all"}
              </button>
            </div>
          </FadeIn>
        )}
        </ScrollMotionLayer>
      </div>
    </section>
  );
}
