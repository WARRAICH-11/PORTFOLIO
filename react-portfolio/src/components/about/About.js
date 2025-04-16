import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import profileImage from '../../assets/images/NEW.png';

const AboutSection = styled.section`
  padding: 8rem 0;
  background: var(--light-color);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const AboutImageWrapper = styled(motion.div)`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 991px) {
    max-width: 350px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 1rem;
  box-shadow: var(--box-shadow);
  position: relative;
  z-index: 2;
`;

const ImageBg1 = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  width: 100%;
  height: 100%;
  border: 3px solid var(--primary-color);
  border-radius: 1rem;
  z-index: 1;
`;

const ImageBg2 = styled.div`
  position: absolute;
  bottom: -15px;
  right: -15px;
  width: 100%;
  height: 100%;
  border: 3px solid var(--secondary-color);
  border-radius: 1rem;
  z-index: 1;
`;

const AboutContent = styled(motion.div)`
  @media (max-width: 991px) {
    text-align: center;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 5px;
  }
  
  @media (max-width: 991px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const AboutText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
`;

const DetailBox = styled(motion.div)`
  margin-top: 2rem;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--box-shadow);
`;

const DetailTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const DetailText = styled.p`
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SkillItem = styled.li`
  background: ${props => props.highlighted ? 'var(--primary-color)' : 'var(--light-color)'};
  color: ${props => props.highlighted ? 'white' : 'var(--text-color)'};
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const ReadMoreButton = styled(motion.button)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin-top: 1.5rem;
  background: transparent;
  color: var(--primary-color);
  font-weight: 600;
  border: 2px solid var(--primary-color);
  border-radius: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

const LinkedInBadge = styled.div`
  margin-top: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);
`;

const LinkedInLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #0077b5;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 119, 181, 0.3);
  }
`;

const About = () => {
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 
    'SQL', 'HTML5', 'CSS3', 'SASS/SCSS', 'Bootstrap', 'Tailwind CSS', 
    'Git', 'RESTful APIs', 'GraphQL', 'UI/UX Design', 'Figma', 
    'Adobe Photoshop', 'Adobe Illustrator', 'Video Editing', 'Responsive Design'
  ];

  return (
    <AboutSection id="about">
      <Container>
        <AboutGrid>
          <AboutImageWrapper
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AboutImage src={profileImage} alt="Hassan Warraich" />
            <ImageBg1 />
            <ImageBg2 />
          </AboutImageWrapper>
          
          <AboutContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AboutTitle>About <span className="highlight">Me</span></AboutTitle>
            
            <AboutText>
              With experience in Software Engineering, focusing on both Front-end and Back-end development, 
              I contribute to creating smooth and intuitive user experiences and reliable server-side functions.
              Managing and optimizing data systems as a Database Administrator ensures efficient software performance.
            </AboutText>
            
            <AboutText>
              In addition to software development, my skills in Graphic Design and Video Editing support creative and visual projects.
              UI/UX design expertise helps combine functionality with visual appeal to create engaging and user-friendly digital interactions. 
              This diverse skill set allows for delivering high-quality solutions across technology and design.
            </AboutText>
            
            {showDetails && (
              <DetailBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <DetailTitle>My Skills</DetailTitle>
                <DetailText>
                  I've developed a diverse range of technical skills that enable me to tackle complex challenges and deliver exceptional results:
                </DetailText>
                
                <SkillsList>
                  {skills.map((skill, index) => (
                    <SkillItem 
                      key={index} 
                      highlighted={index < 8}
                      whileHover={{ y: -5, boxShadow: '0 5px 10px rgba(0,0,0,0.1)' }}
                    >
                      {skill}
                    </SkillItem>
                  ))}
                </SkillsList>
              </DetailBox>
            )}
            
            <ReadMoreButton 
              onClick={toggleDetails}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showDetails ? 'Show Less' : 'Read More'}
            </ReadMoreButton>
            
            <LinkedInLink 
              href="https://pk.linkedin.com/in/hassan-warraich-78510a208" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> Connect on LinkedIn
            </LinkedInLink>
          </AboutContent>
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 