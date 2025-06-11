import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 30 - 15,
        y: (e.clientY / window.innerHeight) * 30 - 15,
      });
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    // Observe the section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observer for all elements with scroll-animation class
    document.querySelectorAll('.project-card').forEach((element) => {
      observer.observe(element);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "fullstack",
      github: "https://github.com/ammiel/ecommerce-platform",
      live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      category: "frontend",
      github: "https://github.com/ammiel/task-manager",
      live: "https://task-manager-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts for multiple cities with interactive charts.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      category: "frontend",
      github: "https://github.com/ammiel/weather-dashboard",
      live: "https://weather-dashboard-demo.com",
      featured: false
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "A microservices API gateway built with Node.js, implementing rate limiting, authentication, and request routing.",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
      category: "backend",
      github: "https://github.com/ammiel/api-gateway",
      live: null,
      featured: false
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "A data visualization tool that analyzes social media trends and provides insights through interactive dashboards.",
      technologies: ["Python", "Django", "PostgreSQL", "D3.js", "Twitter API"],
      category: "fullstack",
      github: "https://github.com/ammiel/social-analytics",
      live: "https://social-analytics-demo.com",
      featured: true
    },
    {
      id: 6,
      title: "Mobile Expense Tracker",
      description: "A React Native mobile app for tracking personal expenses with budget management and spending analytics.",
      technologies: ["React Native", "SQLite", "Chart.js", "AsyncStorage"],
      category: "mobile",
      github: "https://github.com/ammiel/expense-tracker",
      live: null,
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);
  return (
    <div className="min-h-screen bg-dark-900 pt-16" ref={sectionRef}>
      {/* Header Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Dynamic background elements with parallax effect */}
        <div 
          className="absolute top-20 right-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl parallax"
          style={{ transform: `translate(${-mousePosition.x * 0.05}px, ${-mousePosition.y * 0.05}px)` }}
        ></div>
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl parallax"
          style={{ transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)` }}
        ></div>
        
        {/* Animated code particles in background */}
        <div className="absolute inset-0 opacity-5 code-particles"></div>
        
        {/* Animated gradient lines */}
        <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden opacity-10">
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-400 to-transparent animate-pulse-medium" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in-down">
            My Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Here's a collection of projects I've worked on, showcasing my skills in 
            full-stack development, problem-solving, and modern web technologies.
          </p>
        </div>
      </section>      {/* Featured Projects */}
      <section className="py-20 px-4 bg-dark-800/50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <div 
                key={project.id} 
                className="card card-hover group project-card animate-fade-in-up" 
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg mb-6 flex items-center justify-center text-primary-300 font-semibold overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
                  <span>Project Screenshot</span>
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* All Projects */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Dynamic background elements with parallax effect */}
        <div 
          className="absolute bottom-20 right-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl parallax"
          style={{ transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)` }}
        ></div>
        <div 
          className="absolute top-20 left-20 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl parallax"
          style={{ transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text animate-fade-in-left">
              All Projects
            </h2>
            
            <div className="flex items-center gap-4 flex-wrap justify-center animate-fade-in-right">
              <FaFilter className="text-primary-400 text-lg animate-pulse-slow" />
              {categories.map((category, index) => (
                <button
                  key={category.key}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category.key
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md shadow-primary-500/30'
                      : 'bg-dark-800 text-gray-400 hover:text-primary-400 hover:bg-dark-700 border border-dark-600'
                  }`}
                  onClick={() => setActiveFilter(category.key)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="card card-hover group project-card animate-fade-in-up" 
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="relative h-40 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg mb-4 flex items-center justify-center text-primary-300 font-medium overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                  <span>Screenshot</span>
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-dark-700 text-primary-300 rounded text-xs font-medium border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* GitHub Stats */}
      <section className="py-20 px-4 bg-dark-800/50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
        <div className="absolute -bottom-20 right-20 w-60 h-60 bg-primary-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary-500/5 rounded-full blur-3xl animate-float-medium"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 gradient-text animate-fade-in">
            GitHub Activity
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { label: 'Public Repositories', value: '15+' },
              { label: 'Lines of Code', value: '10k+' },
              { label: 'Languages Used', value: '8+' },
              { label: 'Projects Completed', value: '20+' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="card text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary-500/20 animate-fade-in-up" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-2">
                  <div className="text-3xl font-bold gradient-text relative z-10">{stat.value}</div>
                  <div className="absolute -inset-1 bg-primary-500/10 rounded-full blur-xl animate-pulse-slow"></div>
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <a 
            href="https://github.com/ammiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 group relative overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaGithub className="text-lg group-hover:rotate-12 transition-transform duration-300" /> 
              View My GitHub
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
