import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import TypeWriter from '../components/TypeWriter';

const Home = () => {
  const scrollToSection = () => {
    const section = document.getElementById('about-preview');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 mt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm <span className="gradient-text">Ammiel</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                  Computer Science Student & Developer
                </h2>
                <div className="min-h-[80px]"> {/* Fixed height container to prevent layout shift */}
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/projects" 
                  className="group btn-primary inline-flex items-center justify-center gap-2"
                >
                  View My Work
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Get In Touch
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/ammiel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 transform hover:scale-110 transition-all duration-300 border border-dark-700 hover:border-primary-500"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/ammiel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 transform hover:scale-110 transition-all duration-300 border border-dark-700 hover:border-primary-500"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="mailto:ammiel@example.com"
                  className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 transform hover:scale-110 transition-all duration-300 border border-dark-700 hover:border-primary-500"
                >
                  <FaEnvelope size={20} />
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
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-20 px-4 bg-dark-800/50">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <div className="space-y-6">
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
          <div className="flex flex-wrap justify-center gap-3">
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
          
          <Link 
            to="/about" 
            className="btn-outline inline-flex items-center gap-2 group"
          >
            Learn More About Me
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
