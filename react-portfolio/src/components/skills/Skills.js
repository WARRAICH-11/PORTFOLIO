import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaDatabase, FaFigma, 
  FaGitAlt, FaDocker, FaServer, FaMobileAlt, FaWordpress
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiGraphql, 
  SiRedux, SiTailwindcss, SiNextdotjs, SiAdobephotoshop, SiAdobeillustrator
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 8rem 0;
  background: #f5f7fa;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  color: #333;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 5px;
  }
  
  .highlight {
    color: var(--primary-color);
  }
`;

const SkillsCategoriesWrapper = styled.div`
  margin-bottom: 4rem;
`;

const CategoriesButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const CategoryButton = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  background: ${props => props.active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  font-weight: 500;
  box-shadow: ${props => props.active ? 'var(--box-shadow)' : '0 2px 5px rgba(0, 0, 0, 0.1)'};
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #0066cc; /* Darker blue for better visibility */
`;

const SkillName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: #333;
`;

const SkillsDescription = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
  }
`;

const LanguagesSection = styled.div`
  margin-top: 5rem;
`;

const LanguagesTitle = styled.h3`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const LanguagesGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const LanguageCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  width: 200px;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const LanguageName = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const LanguageLevel = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ProficiencyBar = styled.div`
  width: 100%;
  height: 10px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.level}%;
    background: linear-gradient(90deg, #0066cc, #06b6d4);
    border-radius: 10px;
  }
`;

const TechTag = styled.span`
  background: rgba(0, 0, 0, 0.05);
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #333;
  
  svg {
    font-size: 1rem;
    color: #0066cc;
  }
`;

const Skills = () => {
  const technicalSkills = [
    { id: 1, name: 'React', icon: <FaReact color="#0066cc" />, category: 'frontend' },
    { id: 2, name: 'JavaScript', icon: <SiJavascript color="#f7df1e" />, category: 'frontend' },
    { id: 3, name: 'TypeScript', icon: <SiTypescript color="#3178c6" />, category: 'frontend' },
    { id: 4, name: 'Node.js', icon: <FaNodeJs color="#539e43" />, category: 'backend' },
    { id: 5, name: 'MongoDB', icon: <SiMongodb color="#47a248" />, category: 'database' },
    { id: 6, name: 'PostgreSQL', icon: <SiPostgresql color="#336791" />, category: 'database' },
    { id: 7, name: 'HTML5', icon: <FaHtml5 color="#e34f26" />, category: 'frontend' },
    { id: 8, name: 'CSS3', icon: <FaCss3Alt color="#1572b6" />, category: 'frontend' },
    { id: 9, name: 'SASS', icon: <FaSass color="#cc6699" />, category: 'frontend' },
    { id: 10, name: 'Redux', icon: <SiRedux color="#764abc" />, category: 'frontend' },
    { id: 11, name: 'SQL', icon: <FaDatabase color="#336791" />, category: 'database' },
    { id: 12, name: 'GraphQL', icon: <SiGraphql color="#e535ab" />, category: 'backend' },
    { id: 13, name: 'Git', icon: <FaGitAlt color="#f34f29" />, category: 'tools' },
    { id: 14, name: 'Figma', icon: <FaFigma color="#f24e1e" />, category: 'design' },
    { id: 15, name: 'Photoshop', icon: <SiAdobephotoshop color="#31a8ff" />, category: 'design' },
    { id: 16, name: 'Illustrator', icon: <SiAdobeillustrator color="#ff9a00" />, category: 'design' },
    { id: 17, name: 'TailwindCSS', icon: <SiTailwindcss color="#06b6d4" />, category: 'frontend' },
    { id: 18, name: 'Next.js', icon: <SiNextdotjs color="#000000" />, category: 'frontend' },
    { id: 19, name: 'Docker', icon: <FaDocker color="#2496ed" />, category: 'devops' },
    { id: 20, name: 'RESTful APIs', icon: <FaServer color="#0066cc" />, category: 'backend' },
    { id: 21, name: 'Responsive', icon: <FaMobileAlt color="#6c63ff" />, category: 'frontend' },
    { id: 22, name: 'WordPress', icon: <FaWordpress color="#21759b" />, category: 'cms' },
  ];
  
  const languages = [
    { id: 1, name: 'English', level: 90, proficiency: 'Professional', color: '#0066cc' },
    { id: 2, name: 'Urdu', level: 100, proficiency: 'Native', color: '#06b6d4' },
    { id: 3, name: 'Arabic', level: 50, proficiency: 'Intermediate', color: '#8b5cf6' },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>My <span className="highlight">Skills</span></SectionTitle>
        
        <SkillsDescription
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            My technical expertise spans across full-stack development, with proficiency in modern frameworks and technologies.
            I constantly strive to expand my knowledge and stay current with the latest industry trends and best practices.
          </p>
        </SkillsDescription>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SkillsGrid>
            {technicalSkills.map((skill) => (
              <SkillCard key={skill.id} variants={itemVariants}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </motion.div>
        
        <LanguagesSection>
          <LanguagesTitle>Languages</LanguagesTitle>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <LanguagesGrid>
              {languages.map((language) => (
                <LanguageCard key={language.id} variants={itemVariants}>
                  <LanguageName style={{ color: language.color }}>{language.name}</LanguageName>
                  <LanguageLevel>{language.proficiency}</LanguageLevel>
                  <ProficiencyBar level={language.level} />
                </LanguageCard>
              ))}
            </LanguagesGrid>
          </motion.div>
        </LanguagesSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 