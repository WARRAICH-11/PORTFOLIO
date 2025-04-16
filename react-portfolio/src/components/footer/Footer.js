import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--dark-background);
  color: white;
  position: relative;
  padding: 5rem 0 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 1rem;
`;

const Logo = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  
  span {
    color: var(--primary-color);
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  max-width: 300px;
  
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  transition: var(--transition);
  
  &:hover {
    background: var(--primary-color);
    transform: translateY(-5px);
  }
`;

const ColumnTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary-color);
    border-radius: 5px;
  }
  
  @media (max-width: 768px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled.li`
  transition: var(--transition);
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      color: var(--primary-color);
      transform: translateX(5px);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  svg {
    color: var(--primary-color);
  }
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubscribeButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border-radius: 5px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background: var(--secondary-color);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  a {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

const ScrollToTop = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-5px);
  }
`;

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <LogoContainer>
              <Logo>HASSAN <span>WARRAICH</span></Logo>
            </LogoContainer>
            <FooterText>
              Creating innovative digital solutions and memorable user experiences through clean code and creative design.
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://github.com/WARRAICH-11/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/hassanwarraich11/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <FooterLinks>
              <FooterLink>
                <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
                  Home
                </ScrollLink>
              </FooterLink>
              <FooterLink>
                <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                  About
                </ScrollLink>
              </FooterLink>
              <FooterLink>
                <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
                  Services
                </ScrollLink>
              </FooterLink>
              <FooterLink>
                <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
                  Skills
                </ScrollLink>
              </FooterLink>
              <FooterLink>
                <ScrollLink to="portfolio" smooth={true} duration={500} offset={-70}>
                  Portfolio
                </ScrollLink>
              </FooterLink>
              <FooterLink>
                <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
                  Contact
                </ScrollLink>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Contact Info</ColumnTitle>
            <ContactInfo>
              <ContactItem>
                <i className="bx bx-envelope"></i>
                <a href="mailto:hm2257153@gmail.com">hm2257153@gmail.com</a>
              </ContactItem>
              <ContactItem>
                <i className="bx bx-globe"></i>
                
              </ContactItem>
            </ContactInfo>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Newsletter</ColumnTitle>
            <FooterText>
              Subscribe to our newsletter to receive updates on new projects, blog posts, and announcements.
            </FooterText>
            <NewsletterForm>
              <InputWrapper>
                <NewsletterInput type="email" placeholder="Your Email Address" />
              </InputWrapper>
              <SubscribeButton type="submit">Subscribe</SubscribeButton>
            </NewsletterForm>
          </FooterColumn>
        </FooterGrid>
        
        <Divider />
        
        <BottomFooter>
          <Copyright>
            &copy; {new Date().getFullYear()} <a href="/">HASSAN WARRAICH</a>. All Rights Reserved.
          </Copyright>
          <FooterText>
            Made with React.js
          </FooterText>
        </BottomFooter>
      </Container>
      
      <ScrollToTop
        isVisible={isVisible}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
          <FaArrowUp />
        </ScrollLink>
      </ScrollToTop>
    </FooterContainer>
  );
};

export default Footer; 