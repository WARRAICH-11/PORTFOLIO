import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Preloader from './components/Preloader';

// Theme settings
const theme = {
  colors: {
    primary: '#0099ff',
    secondary: '#007acc',
    dark: '#0a1929',
    light: '#f8f9fa',
    grey: '#6c757d',
  },
  fonts: {
    main: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  transition: 'all 0.3s ease-in-out',
};

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
