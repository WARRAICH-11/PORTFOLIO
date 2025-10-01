'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "code.HASSAN@outlook.com",
      href: "mailto:code.HASSAN@outlook.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 349 4956268",
      href: "tel:+92 349 4956268"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gujrat, Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/WARRAICH-11",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/hassanwarraich11",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://www.instagram.com/resillientbeing/",
      color: "hover:text-cyan-400"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-calibri text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-400 mb-4 sm:mb-6 electric-glow">
            Let's Work Together
          </h2>
          <p className="text-gray-300 font-inter text-base sm:text-lg description-text max-w-3xl mx-auto px-2 sm:px-0">
            Ready to bring your ideas to life? I'm here to help you build something amazing. 
            Let's discuss your project and see how we can collaborate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border border-blue-500/20 card-hover-glass">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="font-playfair text-xl sm:text-2xl text-white">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300 text-sm">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-blue-500/30 text-white focus:border-blue-400 focus:ring-blue-400 text-sm sm:text-base"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-blue-500/30 text-white focus:border-blue-400 focus:ring-blue-400 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300 text-sm">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-blue-500/30 text-white focus:border-blue-400 focus:ring-blue-400 text-sm sm:text-base"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300 text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-blue-500/30 text-white focus:border-blue-400 focus:ring-blue-400 resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 sm:py-3 transition-all duration-300 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Get in Touch
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gray-900/30 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 card-hover-glass">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full">
                          <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-gray-400 text-xs sm:text-sm">{info.title}</div>
                          <a
                            href={info.href}
                            className="text-white hover:text-blue-400 transition-colors duration-200 font-inter text-sm sm:text-base block truncate"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-playfair text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 sm:p-3 bg-gray-900/50 border border-blue-500/20 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:border-blue-500/40`}
                  >
                    <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-500/30 rounded-xl p-4 sm:p-6"
            >
              <h4 className="font-playfair text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                Current Availability
              </h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-inter text-xs sm:text-sm">Available for new projects</span>
              </div>
              <p className="text-gray-300 font-inter text-xs sm:text-sm small-text-enhanced">
                I'm currently accepting new projects and would love to discuss how we can work together.
                Response time: Usually within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}