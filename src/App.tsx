'use client';

import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/cyber-portfolio/Navigation';
import { Hero } from './components/cyber-portfolio/Hero';
import { About } from './components/cyber-portfolio/About';
import { Skills } from './components/cyber-portfolio/Skills';
import { FeaturedServicesSlider } from './components/cyber-portfolio/FeaturedServicesSlider';
import { Projects } from './components/cyber-portfolio/Projects';
import { Contact } from './components/cyber-portfolio/Contact';
import { Footer } from './components/cyber-portfolio/Footer';
import VapiChatbot from './components/cyber-portfolio/VapiChatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedServicesSlider />
        <Projects />
        <Contact />
        <VapiChatbot />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast Notifications */}
      <Toaster 
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#111111',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            color: '#ffffff',
          },
        }}
      />
      
    </div>
  );
}