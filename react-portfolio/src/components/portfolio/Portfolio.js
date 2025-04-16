import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaAndroid, FaMobile, FaJava, FaAppStore } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiKotlin, SiFirebase, SiMaterialdesign } from 'react-icons/si';

// Note: These are placeholders; the actual images will be added later
const placeholderImages = {
  restaurant: 'images/Restaurant.jpeg',
  login: 'images/Login page.jpeg',
  carRental: 'images/ss.jpeg',
  figma: 'images/figma.jpeg',
  hotelManagement: 'images/builder.png',
  portfolio: 'images/Screenshot 2024-03-06 at 6.47.07 PM.png',
  landingPage: 'images/Landing Page.jpeg',
  calculatorApp: 'images/Calculator App.jpeg',
  mernEcommerce: 'https://via.placeholder.com/600x400?text=E-Commerce+App',
  socialMedia: 'https://via.placeholder.com/600x400?text=Social+Media+App',
  dashboard: 'https://via.placeholder.com/600x400?text=Admin+Dashboard',
  chatApp: 'https://via.placeholder.com/600x400?text=Chat+App'
};

const PortfolioSection = styled.section`
  padding: 8rem 0;
  background: var(--dark-background);
  position: relative;
  overflow: hidden;
  color: white;
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
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  background: ${props => props.active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    background: ${props => props.active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  height: 250px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ProjectIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  svg {
    font-size: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &.preview {
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: var(--secondary-color);
      transform: translateY(-3px);
    }
  }
  
  &.github {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
  }
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  useEffect(() => {
    const projectData = [
      {
        id: 1,
        title: 'E-Commerce App',
        category: 'react',
        technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
        description: 'A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.',
        icons: [<FaReact />, <SiRedux />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
        mainIcon: <FaReact />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 2,
        title: 'Social Media Dashboard',
        category: 'react',
        technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
        description: 'A responsive social media dashboard that integrates with multiple platforms to display analytics and allow post scheduling.',
        icons: [<FaReact />, <SiFirebase />, <SiMaterialdesign />, <SiRedux />],
        mainIcon: <FaReact />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 3,
        title: 'Task Management App',
        category: 'react',
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Firebase'],
        description: 'A productivity application for managing tasks, projects, and deadlines with real-time updates.',
        icons: [<FaReact />, <SiTypescript />, <SiTailwindcss />, <SiFirebase />],
        mainIcon: <FaReact />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 4,
        title: 'Next.js Blog Platform',
        category: 'react',
        technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS'],
        description: 'A fast, SEO-friendly blog platform built with Next.js featuring server-side rendering and a custom CMS.',
        icons: [<SiNextdotjs />, <FaReact />, <SiMongodb />, <SiTailwindcss />],
        mainIcon: <SiNextdotjs />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 5,
        title: 'Real-time Chat Application',
        category: 'react',
        technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
        description: 'A real-time messaging application with private chats, group conversations, and file sharing capabilities.',
        icons: [<FaReact />, <FaNodeJs />, <SiExpress />],
        mainIcon: <FaReact />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 6,
        title: 'Weather Forecast App',
        category: 'react',
        technologies: ['React', 'Redux', 'OpenWeather API', 'Styled Components'],
        description: 'A weather forecast application that provides current and future weather conditions for locations worldwide.',
        icons: [<FaReact />, <SiRedux />],
        mainIcon: <FaReact />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 7,
        title: 'Fitness Tracker',
        category: 'android',
        technologies: ['Android Studio', 'Java', 'Firebase', 'Material Design'],
        description: 'A fitness tracking app that monitors workouts, calories, and progress over time with visualization tools.',
        icons: [<FaAndroid />, <FaJava />, <SiFirebase />],
        mainIcon: <FaAndroid />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 8,
        title: 'Restaurant Review App',
        category: 'android',
        technologies: ['Android Studio', 'Kotlin', 'Google Maps API', 'Room Database'],
        description: 'A mobile application for finding and reviewing local restaurants with map integration and personalized recommendations.',
        icons: [<FaAndroid />, <SiKotlin />, <FaDatabase />],
        mainIcon: <FaAndroid />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 9,
        title: 'E-Learning Mobile App',
        category: 'android',
        technologies: ['Android Studio', 'Java', 'Firebase', 'ExoPlayer'],
        description: 'A comprehensive e-learning platform for mobile with video lectures, quizzes, and progress tracking.',
        icons: [<FaAndroid />, <FaJava />, <SiFirebase />],
        mainIcon: <FaAndroid />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 10,
        title: 'Grocery Delivery App',
        category: 'android',
        technologies: ['Android Studio', 'Kotlin', 'Firebase', 'Google Maps'],
        description: 'A grocery delivery application allowing users to order products, track deliveries, and manage shopping lists.',
        icons: [<FaAndroid />, <SiKotlin />, <SiFirebase />],
        mainIcon: <FaAndroid />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 11,
        title: 'PDF Reader & Editor',
        category: 'android',
        technologies: ['Android Studio', 'Java', 'PDF.js', 'Room Database'],
        description: 'A PDF reader and editor for Android with annotation tools, form filling, and document organization.',
        icons: [<FaAndroid />, <FaJava />, <FaDatabase />],
        mainIcon: <FaAndroid />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 12,
        title: 'Music Streaming App',
        category: 'android',
        technologies: ['Android Studio', 'Kotlin', 'ExoPlayer', 'Firebase'],
        description: 'A music streaming application with playlist management, offline listening, and personalized recommendations.',
        icons: [<FaAndroid />, <SiKotlin />, <SiFirebase />],
        mainIcon: <FaAndroid />,
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
    ];
    
    setProjects(projectData);
    setFilteredProjects(projectData);
  }, []);
  
  useEffect(() => {
    filterProjects(activeFilter);
  }, [activeFilter, projects]);
  
  const filterProjects = (category) => {
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };
  
  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setVisibleProjects(6);
  };
  
  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };
  
  return (
    <PortfolioSection id="portfolio">
      <Container>
        <SectionTitle>My <span className="highlight">Projects</span></SectionTitle>
        
        <FilterContainer>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => handleFilterClick('all')}
          >
            All Projects
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'react'} 
            onClick={() => handleFilterClick('react')}
          >
            React
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'android'} 
            onClick={() => handleFilterClick('android')}
          >
            Android
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <ProjectCard 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <ProjectIcon>{project.mainIcon}</ProjectIcon>
              <ProjectTitle>{project.title}</ProjectTitle>
              
              <TechStack>
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <TechTag key={index}>
                    {project.icons[index]} {tech}
                  </TechTag>
                ))}
              </TechStack>
              
              <ButtonsContainer>
                <ProjectLink 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github"
                >
                  <FaGithub /> Code
                </ProjectLink>
                <ProjectLink 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="preview"
                >
                  <FaExternalLinkAlt /> Demo
                </ProjectLink>
              </ButtonsContainer>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        {visibleProjects < filteredProjects.length && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <ProjectLink 
              as="button"
              onClick={loadMoreProjects}
              className="preview"
              style={{ margin: '0 auto', width: 'fit-content' }}
            >
              Load More
            </ProjectLink>
          </div>
        )}
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio; 