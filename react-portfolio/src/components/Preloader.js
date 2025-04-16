import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const SpinnerWrapper = styled(motion.div)`
  width: 100px;
  height: 100px;
  position: relative;
`;

const Spinner = styled(motion.div)`
  width: 100%;
  height: 100%;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
`;

const Logo = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Preloader = () => {
  return (
    <PreloaderContainer>
      <SpinnerWrapper>
        <Spinner
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 1, 
            ease: "linear" 
          }}
        />
        <Logo
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
        >
          HW
        </Logo>
      </SpinnerWrapper>
    </PreloaderContainer>
  );
};

export default Preloader; 