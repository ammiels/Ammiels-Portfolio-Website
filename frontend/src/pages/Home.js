import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import TypeWriter from '../components/TypeWriter';

const Home = () => {
  useEffect(() => {
    // Add a scroll-triggered animation class to elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with the 'scroll-animation' class
    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const scrollToSection = () => {
    const section = document.getElementById('about-preview');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-900">      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated spinning gradient */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl mix-blend-overlay animate-spin-slow"></div>
          </div>
          
          {/* Additional animated elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-secondary-400/20 rounded-full animate-pulse-medium"></div>
          
          {/* Animated gradient lines */}
          <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden opacity-10">
            <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse-slow"></div>
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-400 to-transparent animate-pulse-medium" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-300 to-transparent animate-pulse-fast" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Radial gradient overlay */}
          <div className="absolute top-0 right-0 w-full h-full bg-radial-gradient opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 mt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Hi, I'm <span className="gradient-text">Ammiel</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-300 font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Computer Science Student & Developer
                </h2>
                <div className="min-h-[80px] animate-fade-in-up" style={{ animationDelay: '0.6s' }}> {/* Fixed height container to prevent layout shift */}
                  <TypeWriter
                    texts={[
                      "Passionate about creating innovative solutions and building meaningful projects. Welcome to my digital portfolio where I showcase my journey in technology and development."
                    ]}
                    speed={15} // Faster typing for better UX
                    className="text-lg text-gray-400 max-w-2xl leading-relaxed"
                  />
                </div>
              </div>
                {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <Link 
                  to="/projects" 
                  className="group btn-primary inline-flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-secondary inline-flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <a 
                  href="https://github.com/ammiel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 transform hover:scale-110 transition-all duration-300 border border-dark-700 hover:border-primary-500 relative overflow-hidden group"
                >
                  <FaGithub size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://linkedin.com/in/ammiel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 transform hover:scale-110 transition-all duration-300 border border-dark-700 hover:border-primary-500 relative overflow-hidden group"
                >
                  <FaLinkedin size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="mailto:ammiel@example.com"
                  className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 transform hover:scale-110 transition-all duration-300 border border-dark-700 hover:border-primary-500 relative overflow-hidden group"
                >
                  <FaEnvelope size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center text-gray-300 text-lg font-semibold border-4 border-dark-700">
                    Your Photo
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToSection}
        >
          <FaChevronDown className="text-primary-400 text-2xl hover:text-primary-300 transition-colors duration-300" />
        </div>
      </section>      {/* About Preview Section */}
      <section id="about-preview" className="py-20 px-4 bg-dark-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
        
        <div className="container mx-auto max-w-4xl text-center space-y-12 relative z-10">
          <div className="space-y-6 scroll-animation">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I'm a Computer Science student with a passion for full-stack development, 
              problem-solving, and creating user-friendly applications. I enjoy working 
              with modern technologies and am always eager to learn new skills.
            </p>
          </div>
          
          {/* Skills Preview */}
          <div className="flex flex-wrap justify-center gap-3 scroll-animation">
            {['JavaScript', 'React', 'Node.js', 'Python', 'Git'].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-500/30 hover:from-primary-500/30 hover:to-secondary-500/30 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="scroll-animation">
            <Link 
              to="/about" 
              className="btn-outline inline-flex items-center gap-2 group relative overflow-hidden"
            >
              <span className="relative z-10">Learn More About Me</span>
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </div>
          
          <div className="gradient-divider mt-16 scroll-animation"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-10 right-10 w-60 h-60 bg-secondary-500/5 rounded-full blur-2xl"></div>
      </section>
    </div>
  );
};

export default Home;
