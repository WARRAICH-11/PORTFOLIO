import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const ContactInfo = styled(motion.div)`
  @media (max-width: 991px) {
    order: 2;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--primary-color);
    border-radius: 5px;
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactMethod = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  p, a {
    color: var(--light-text-color);
    line-height: 1.6;
    transition: var(--transition);
  }
  
  a:hover {
    color: var(--primary-color);
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FormContainer = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: var(--box-shadow);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 991px) {
    order: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const FormLabel = styled.label`
  position: absolute;
  left: 1rem;
  top: ${props => props.hasValue ? '-0.5rem' : '1rem'};
  background: ${props => props.hasValue ? 'white' : 'transparent'};
  padding: ${props => props.hasValue ? '0 0.5rem' : '0'};
  font-size: ${props => props.hasValue ? '0.8rem' : '1rem'};
  color: ${props => props.hasValue ? 'var(--primary-color)' : '#666'};
  transition: all 0.3s ease;
  pointer-events: none;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => props.error ? 'red' : '#e2e8f0'};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #333;
  background-color: white;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    
    & + ${FormLabel} {
      top: -0.5rem;
      font-size: 0.8rem;
      color: var(--primary-color);
      background: white;
      padding: 0 0.5rem;
    }
  }
`;

const TextareaField = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => props.error ? 'red' : '#e2e8f0'};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #333;
  background-color: white;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    
    & + ${FormLabel} {
      top: -0.5rem;
      font-size: 0.8rem;
      color: var(--primary-color);
      background: white;
      padding: 0 0.5rem;
    }
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  transition: var(--transition);
  
  &:hover {
    background: var(--secondary-color);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: #10b981;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MapContainer = styled.div`
  margin-top: 3rem;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: var(--box-shadow);
  height: 300px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // We would normally send this to hm2257153@gmail.com
      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Contact <span className="highlight">Me!</span></SectionTitle>
        
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactInfoTitle>Get In Touch</ContactInfoTitle>
            
            <ContactMethods>
              <ContactMethod
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <ContactDetails>
                  <h4>Email</h4>
                  <a href="mailto:hm2257153@gmail.com">hm2257153@gmail.com</a>
                </ContactDetails>
              </ContactMethod>
            </ContactMethods>
            
            <SocialMedia>
              <SocialLink href="https://github.com/WARRAICH-11/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-github'></i>
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-twitter'></i>
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-instagram-alt'></i>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/hassanwarraich11/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-linkedin'></i>
              </SocialLink>
            </SocialMedia>
          </ContactInfo>
          
          <FormContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaPaperPlane /> Thank you! Your message has been sent successfully.
              </SuccessMessage>
            )}
            
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <InputField
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FormLabel htmlFor="name" hasValue={formData.name.length > 0}>Full Name</FormLabel>
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </InputGroup>
              
              <InputGroup>
                <InputField
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormLabel htmlFor="email" hasValue={formData.email.length > 0}>Email Address</FormLabel>
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </InputGroup>
              
              <InputGroup>
                <TextareaField
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                />
                <FormLabel htmlFor="message" hasValue={formData.message.length > 0}>Your Message</FormLabel>
                {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
              </InputGroup>
              
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
              </SubmitButton>
            </Form>
          </FormContainer>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 