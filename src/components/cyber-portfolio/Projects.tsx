'use client';

import { useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { SplitReveal } from '../SplitReveal';

const ALL_PROJECTS = [
  {
    id: 19,
    title: "ATM-Management-System",
    description: "Python Personal Banking System.",
    technologies: ["python", "flask", "sqlite", "Full-Stack", "AI/ML" ,"JSON" ],
    liveUrl: "https://warraich11.pythonanywhere.com/",
    githubUrl: "https://github.com/WARRAICH-11/ATM-Management-System",
    category: "AI",
    featured: true,
  },

  
  {
    id: 1,
    title: "NeuroCalm",
    description: "AI Brain Coach Chatbot — leverage the power of AI and neuroscience to reduce stress, enhance focus, and build life-changing habits.",
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
    technologies: ["React", "E-commerce", "Figma", "UI/UX"],
    liveUrl: "https://warraich-11.github.io/VacationRentalWebsiteMockup/",
    githubUrl: "https://github.com/WARRAICH-11/VacationRentalWebsiteMockup",
    category: "E-commerce",
    featured: false,
  },
];

const CATEGORIES = ["All", "AI", "SaaS", "E-commerce", "Web"];

type Project = (typeof ALL_PROJECTS)[number];

function MarqueeProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-marquee-card spatial-card flex h-full flex-col">
      <div className="portfolio-badge portfolio-metric w-fit uppercase tracking-[0.08em]">{project.category}</div>
      <h3 className="mt-3 text-lg font-medium">{project.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed portfolio-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((technology) => (
          <span key={technology} className="portfolio-badge">{technology}</span>
        ))}
      </div>
      <div className="mt-auto flex gap-4 pt-6">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 text-sm font-medium portfolio-muted hover:text-[var(--blue)]">
          <ExternalLink className="h-4 w-4" /> Live
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 text-sm font-medium portfolio-muted hover:text-[var(--blue)]">
          <Github className="h-4 w-4" /> Code
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const marqueeRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visible = filtered;

  const scrollMarquee = (direction: 'forward' | 'backward') => {
    const container = marqueeRef.current;
    if (!container) return;

    // Scroll by roughly one card width (card width + gap). Adjust as needed.
    const cardWidth = 340;
    const amount = direction === 'forward' ? cardWidth : -cardWidth;

    container.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section spatial-section">
      <div className="section-inner">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.08em] portfolio-muted">
            05 — PROJECTS
          </div>
          <SplitReveal as="h2" className="portfolio-heading mt-4 mb-12">
            Selected work.
          </SplitReveal>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={[
                    "portfolio-button border text-sm",
                    active
                      ? "border-[var(--blue)] bg-[color-mix(in_srgb,var(--blue)_15%,transparent)] text-[var(--blue)]"
                      : "border-white/10 bg-[var(--surface)] portfolio-muted hover:text-[var(--blue)] hover:border-[var(--blue)]",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="project-marquee-shell mt-8">
          <div
            ref={marqueeRef}
            className="project-marquee"
            tabIndex={0}
            aria-label="Selected projects"
          >
            <div className="project-marquee-track">
              <div className="project-marquee-group">
                {visible.map((project) => (
                  <MarqueeProjectCard key={project.id} project={project} />
                ))}
              </div>
              <div className="project-marquee-group" aria-hidden="true">
                {visible.map((project) => (
                  <MarqueeProjectCard key={`duplicate-${project.id}`} project={project} />
                ))}
              </div>
            </div>
          </div>

          <div className="project-marquee-controls" aria-label="Project marquee controls">
            <button
              type="button"
              className="portfolio-focus project-marquee-control"
              aria-label="Move projects backward"
              onClick={() => scrollMarquee('backward')}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="portfolio-focus project-marquee-control"
              aria-label="Move projects forward"
              onClick={() => scrollMarquee('forward')}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}