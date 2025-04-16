import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaVideo, FaLaptopCode, FaDatabase, FaStore, FaMobileAlt, FaServer } from 'react-icons/fa';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    opacity: 0;
    z-index: -1;
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 0.2);
    
    &::before {
      opacity: 0.1;
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  
  ${ServiceCard}:hover & {
    color: white;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDesc = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
`;

const ReadMoreLink = styled.button`
  background: transparent;
  border: none;
  color: var(--primary-color);
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ServiceModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: white;
  max-width: 600px;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  color: var(--text-color);
`;

const ModalHeader = styled.div`
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ModalIconWrapper = styled.div`
  font-size: 1.8rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '•';
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ShapesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Shape = styled.div`
  position: absolute;
  background: linear-gradient(45deg, rgba(37, 99, 235, 0.1), rgba(16, 185, 129, 0.1));
  border-radius: 50%;
  
  &:nth-child(1) {
    width: 400px;
    height: 400px;
    bottom: -200px;
    right: -100px;
  }
  
  &:nth-child(2) {
    width: 300px;
    height: 300px;
    top: -150px;
    left: -50px;
  }
`;

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  
  const serviceData = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Web Development",
      description: "We create tailored web solutions that meet your unique business needs. From simple websites to complex web applications, we've got you covered.",
      details: [
        "Responsive Design: Ensuring seamless user experiences across devices, from desktops to smartphones.",
        "E-Commerce Development: Powering your online business with scalable and secure e-commerce solutions.",
        "Progressive Web Apps: Combining the best of web and mobile applications.",
        "Frontend Development: Creating intuitive and engaging user interfaces using modern frameworks.",
        "Backend Development: Building robust server-side logic for your applications."
      ]
    },
    {
      id: 2,
      icon: <FaPaintBrush />,
      title: "Graphic Designing",
      description: "We create stunning graphics that capture your brand's essence. From logos to marketing materials, our designs communicate your message effectively.",
      details: [
        "Brand Identity: Creating cohesive and impactful brand visuals.",
        "Marketing Materials: Designing flyers, brochures, and social media graphics.",
        "Logo Design: Creating unique and memorable logos that represent your brand.",
        "UI/UX Design: Designing user interfaces that are both beautiful and functional.",
        "Print Design: Creating high-quality designs for physical products and materials."
      ]
    },
    {
      id: 3,
      icon: <FaVideo />,
      title: "Video Editing",
      description: "We craft engaging videos that tell your story. From promotional videos to tutorials, we ensure your content is impactful and professional.",
      details: [
        "Professional Editing: High-quality editing for a polished final product.",
        "Motion Graphics: Adding dynamic elements to make your videos stand out.",
        "Color Grading: Enhancing visuals to create the right mood and atmosphere.",
        "Sound Design: Adding and editing audio to complement your visuals.",
        "Animation: Creating custom animations to illustrate concepts or tell stories."
      ]
    },
    {
      id: 4,
      icon: <FaLaptopCode />,
      title: "Portfolio Development",
      description: "We understand the power of a well-crafted portfolio in making a lasting impression on potential clients, employers, or collaborators.",
      details: [
        "Personal Portfolios: Craft a captivating personal brand that stands out in the digital realm.",
        "Business Showcases: Showcase your company's achievements, services, and projects with a professional touch.",
        "Interactive Elements: Add engaging interactive features to make your portfolio memorable.",
        "SEO Optimization: Ensure your portfolio is easily discoverable by your target audience.",
        "Responsive Design: Create a portfolio that looks great on any device."
      ]
    },
    {
      id: 5,
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Experience data management excellence with our specialized Database Management services. From design to performance tuning and backups.",
      details: [
        "Comprehensive Database Design: Tailored architectures for optimal performance and scalability.",
        "Performance Optimization: Fine-tuning databases for lightning-fast query responses.",
        "Data Migration & Integration: Seamlessly transfer and integrate data across systems.",
        "Security Implementation: Robust security measures to protect sensitive information.",
        "Backup & Recovery Solutions: Reliable solutions to prevent data loss."
      ]
    },
    {
      id: 6,
      icon: <FaCode />,
      title: "Software Development",
      description: "I specialize in crafting innovative and scalable software solutions tailored to meet your unique business needs.",
      details: [
        "Customized Solutions: Develop software solutions tailored to your unique requirements.",
        "Agile Development: Embrace agile methodologies for rapid and flexible project delivery.",
        "User-Centric Design: Craft intuitive and user-friendly interfaces for enhanced user experience.",
        "Security Integration: Implement robust security measures to safeguard your applications and data.",
        "Ongoing Support: Provide continuous maintenance and support post-deployment."
      ]
    },
    {
      id: 7,
      icon: <FaStore />,
      title: "E-Commerce Development",
      description: "I specialize in building responsive, high-performance e-commerce stores that help your business thrive in the competitive online marketplace.",
      details: [
        "Custom E-Commerce Solutions: Develop unique and tailored online stores that align with your brand.",
        "Integration Services: Seamlessly integrate payment gateways, shipping solutions, and third-party applications.",
        "Responsive Design: Ensure your store looks and works great on all devices, from mobile to desktop.",
        "SEO Optimization: Implement best practices to improve your store's visibility and ranking on search engines.",
        "Product Management: Efficiently manage your product catalog, inventory, and pricing with easy-to-use solutions."
      ]
    },
    {
      id: 8,
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "I create intuitive, high-performance mobile applications for both iOS and Android platforms that deliver exceptional user experiences.",
      details: [
        "Cross-Platform Development: Build apps that work flawlessly on multiple platforms using modern frameworks.",
        "Native App Development: Create platform-specific applications with optimized performance.",
        "UI/UX Design: Design intuitive interfaces that enhance user engagement and satisfaction.",
        "App Testing & Quality Assurance: Rigorous testing to ensure your app is bug-free and reliable.",
        "App Store Optimization: Strategies to improve app visibility and downloads in app stores."
      ]
    },
    {
      id: 9,
      icon: <FaServer />,
      title: "API Development & Integration",
      description: "I design and build robust APIs that enable seamless communication between different software systems and applications.",
      details: [
        "RESTful API Design: Create well-structured and scalable REST APIs following best practices.",
        "GraphQL API Development: Build flexible and efficient APIs using GraphQL technology.",
        "Third-Party API Integration: Connect your applications with external services and platforms.",
        "API Security: Implement authentication, authorization, and data protection measures.",
        "API Documentation: Provide comprehensive documentation for easy implementation and use."
      ]
    }
  ];
  
  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <ServicesSection id="services">
      <ShapesContainer>
        <Shape />
        <Shape />
      </ShapesContainer>
      
      <Container>
        <SectionTitle>Our <span className="highlight">Services</span></SectionTitle>
        
        <ServicesGrid>
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDesc>{service.description}</ServiceDesc>
              <ReadMoreLink onClick={() => openModal(service)}>Read More</ReadMoreLink>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
      
      {selectedService && (
        <ServiceModal
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={closeModal}
        >
          <ModalContent 
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <ModalIconWrapper>{selectedService.icon}</ModalIconWrapper>
              <ModalTitle>{selectedService.title}</ModalTitle>
            </ModalHeader>
            
            <ModalBody>
              <ModalText>{selectedService.description}</ModalText>
              <FeatureList>
                {selectedService.details.map((detail, index) => (
                  <FeatureItem key={index}>{detail}</FeatureItem>
                ))}
              </FeatureList>
            </ModalBody>
            
            <CloseButton onClick={closeModal}>×</CloseButton>
          </ModalContent>
        </ServiceModal>
      )}
    </ServicesSection>
  );
};

export default Services; 