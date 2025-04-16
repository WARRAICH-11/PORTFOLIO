import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  transition: var(--transition);
  background: ${({ scrolled }) => scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' : 'none'};

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const LogoContainer = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ scrolled }) => scrolled ? 'white' : 'var(--primary-color)'};
  cursor: pointer;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ scrolled }) => scrolled ? 'white' : 'var(--dark-color)'};
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: var(--transition);

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
  }

  &:hover, &.active {
    color: var(--primary-color);

    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${({ scrolled }) => scrolled ? 'white' : 'var(--dark-color)'};
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
  }
`;

const MobileLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);

  &:hover, &.active {
    color: var(--primary-color);
  }
`;

const menuVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  },
  exit: { 
    opacity: 0, 
    y: '-100%',
    transition: {
      duration: 0.3
    }
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <LogoContainer 
        scrolled={scrolled}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        HASSAN WARRAICH
      </LogoContainer>

      <NavLinks>
        <NavLink scrolled={scrolled} to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</NavLink>
        <NavLink scrolled={scrolled} to="about" spy={true} smooth={true} offset={-70} duration={500}>About</NavLink>
        <NavLink scrolled={scrolled} to="services" spy={true} smooth={true} offset={-70} duration={500}>Services</NavLink>
        <NavLink scrolled={scrolled} to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</NavLink>
        <NavLink scrolled={scrolled} to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfolio</NavLink>
        <NavLink scrolled={scrolled} to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</NavLink>
      </NavLinks>

      <MobileMenuToggle scrolled={scrolled} onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuToggle>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MobileLink to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>Home</MobileLink>
            <MobileLink to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>About</MobileLink>
            <MobileLink to="services" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>Services</MobileLink>
            <MobileLink to="skills" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>Skills</MobileLink>
            <MobileLink to="portfolio" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>Portfolio</MobileLink>
            <MobileLink to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>Contact</MobileLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar; 