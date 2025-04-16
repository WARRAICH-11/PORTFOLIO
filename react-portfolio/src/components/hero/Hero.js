import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import heroImage from '../../assets/images/hero.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 5rem;
  background: linear-gradient(135deg, var(--dark-background) 0%, #1e293b 100%);
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  z-index: 2;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
`;

const ContentWrapper = styled(motion.div)`
  color: white;
  
  @media (max-width: 991px) {
    text-align: center;
    padding-top: 2rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;

  @media (max-width: 991px) {
    order: -1;
    margin-bottom: 2rem;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const TypedTextWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  min-height: 2.5rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  
  .typed-cursor {
    color: var(--primary-color);
  }
  
  span {
    color: var(--primary-color);
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonsWrapper = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 20px -3px rgba(0, 0, 0, 0.3);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: white;
  font-weight: 600;
  border: 2px solid white;
  border-radius: 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    background: white;
    color: var(--dark-background);
    transform: translateY(-3px);
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Shape = styled.div`
  position: absolute;
  background: linear-gradient(45deg, rgba(37, 99, 235, 0.1), rgba(16, 185, 129, 0.1));
  border-radius: 50%;
  
  &:nth-child(1) {
    width: 500px;
    height: 500px;
    top: -250px;
    right: -100px;
  }
  
  &:nth-child(2) {
    width: 300px;
    height: 300px;
    bottom: -150px;
    left: -50px;
  }
  
  &:nth-child(3) {
    width: 200px;
    height: 200px;
    bottom: 150px;
    right: 200px;
  }
`;

const Hero = () => {
  const typedRef = useRef(null);
  
  useEffect(() => {
    // This would be used for any additional setup if needed
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <HeroSection id="home">
      <BackgroundShapes>
        <Shape />
        <Shape />
        <Shape />
      </BackgroundShapes>
      
      <HeroContainer>
        <ContentWrapper
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroHeading
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="gradient-text">محمد حسن محمود</span>
          </HeroHeading>
          
          <TypedTextWrapper>
            I'm a <ReactTyped
              strings={[
                'Software Engineer',
                'Frontend Developer',
                'Backend Developer',
                'Database Administrator',
                'Web Designer',
                'Graphic Designer',
                'UI/UX Designer',
                'Video Editor'
              ]}
              typeSpeed={60}
              backSpeed={20}
              backDelay={1500}
              loop
              ref={typedRef}
            />
          </TypedTextWrapper>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Welcome to my portfolio. I am a dedicated Software Engineer with a diverse skill set encompassing web design, 
            front-end and back-end development, database management, graphic design, and video editing.
            My goal is to create seamless and efficient digital experiences that are both visually appealing and highly functional.
            Whether it's developing robust server-side applications, designing intuitive user interfaces, or managing complex databases, 
            I am committed to delivering high-quality results.
          </Description>
          
          <ButtonsWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <PrimaryButton 
              href="https://drive.google.com/file/d/1p6S_0yxUwKMWqxXI5Pgmo4RtQIsAj_IP/view?usp=drive_link" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV <FaDownload />
            </PrimaryButton>
            
            <SecondaryButton 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
            >
              Let's Talk <FaArrowRight />
            </SecondaryButton>
          </ButtonsWrapper>
        </ContentWrapper>
        
        <ImageWrapper
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ 
              boxShadow: '0 15px 40px rgba(0, 100, 255, 0.5)',
              y: -10
            }}
            transition={{ duration: 0.5 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              position: 'relative',
              maxWidth: '450px',
              height: '550px',
              border: '8px solid white',
              borderRadius: '5px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              overflow: 'hidden'
            }}>
              <img 
                src={heroImage} 
                alt="Hassan Warraich"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: '#0099ff',
                  zIndex: 3
                }}
                initial={{ x: "0%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeInOut",
                  delay: 0.6
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '100%',
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent 20%, transparent 80%, rgba(0, 0, 0, 0.1))',
                zIndex: 2
              }} />
            </div>
          </motion.div>
        </ImageWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 