import React, { useEffect, useState, useRef } from 'react';
import { FaCode, FaGraduationCap, FaLightbulb, FaUsers } from 'react-icons/fa';
import TypeWriter from '../components/TypeWriter';

const About = () => {  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const photoCardRef = useRef(null);

  useEffect(() => {
    // Add 3D tilt effect to the photo card
    const handleMouseMove = (e) => {
      if (!photoCardRef.current) return;
      
      const rect = photoCardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;
      
      photoCardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!photoCardRef.current) return;
      photoCardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    // Track mouse position for parallax effects
    const handleGlobalMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 40 - 20,
        y: (e.clientY / window.innerHeight) * 40 - 20,
      });
    };
    
    const photoCard = photoCardRef.current;
    if (photoCard) {
      photoCard.addEventListener('mousemove', handleMouseMove);
      photoCard.addEventListener('mouseleave', handleMouseLeave);
    }
    
    window.addEventListener('mousemove', handleGlobalMouseMove);

    // Add scroll-triggered animation class to elements
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
      if (photoCard) {
        photoCard.removeEventListener('mousemove', handleMouseMove);
        photoCard.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      observer.disconnect();
    };
  }, []);
  const skills = {
    frontend: ['JavaScript', 'React', 'HTML5', 'CSS3', 'TypeScript', 'Vue.js'],
    backend: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma', 'Postman']
  };

  const values = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, efficient, and well-documented code that stands the test of time.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches to solve problems in creative ways.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'I thrive in team environments and believe the best solutions come from diverse perspectives.'
    },
    {
      icon: FaGraduationCap,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I\'m committed to staying current with industry trends and best practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-16">      {/* Header Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background decorative elements with parallax effect */}
        <div 
          className="absolute top-20 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl parallax"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl parallax"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
          }}
        ></div>
        
        {/* Animated gradient lines */}
        <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden opacity-10">
          <div className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-[45%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-400 to-transparent animate-pulse-medium" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-animation">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in-down">
              About Me
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6 scroll-animation animate-fade-in-left">
              <TypeWriter
                texts={[
                  "Hello! I'm Ammiel, a passionate Computer Science student with a love for creating digital solutions that make a difference. My journey in technology started with curiosity and has evolved into a dedication to building innovative and user-centered applications.",
                  "I specialize in full-stack development, with experience in modern web technologies. I enjoy the challenge of solving complex problems and turning ideas into reality through code.",
                  "Currently pursuing my degree in Computer Science, I'm always eager to learn new skills and collaborate on exciting projects. I believe in writing clean, efficient code and creating seamless user experiences.",
                  "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that push my boundaries."
                ]}
                speed={10}  // Faster typing speed for better user experience
                typingDelay={500}  // Shorter delay between paragraphs
                className="text-lg text-gray-300 leading-relaxed"
              />
            </div>
            
            <div className="flex justify-center lg:justify-end scroll-animation animate-fade-in-right">
              <div className="relative" ref={photoCardRef}>
                <div className="w-80 h-96 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center text-white font-semibold text-xl shadow-2xl relative overflow-hidden transition-all duration-300">
                  <span>Professional Photo</span>
                  {/* Interactive overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/30 rounded-full blur-xl animate-pulse-slow parallax"
                  style={{
                    transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
                  }}
                ></div>
                <div 
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500/30 rounded-full blur-xl animate-pulse-medium parallax"
                  style={{
                    transform: `translate(${-mousePosition.x * 0.07}px, ${-mousePosition.y * 0.07}px)`
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Values Section */}
      <section className="py-20 px-4 bg-dark-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text scroll-animation">
            What Drives Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="card card-hover text-center group scroll-animation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-100">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Skills Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-500/5 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary-500/5 rounded-full blur-2xl animate-float-medium"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text scroll-animation">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category} className="card card-hover scroll-animation" style={{ animationDelay: `${categoryIndex * 150}ms` }}>
                <h3 className="text-xl font-bold mb-6 text-gray-100 capitalize text-center">
                  {category === 'frontend' ? 'Frontend' : 
                   category === 'backend' ? 'Backend' : 
                   category === 'database' ? 'Database' : 'Tools & Technologies'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30 hover:from-primary-500/30 hover:to-secondary-500/30 transition-all duration-300 transform hover:scale-105"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Education Section */}
      <section className="py-20 px-4 bg-dark-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent opacity-30"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text scroll-animation">
            Education & Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 animate-pulse-slow"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start scroll-animation">
                <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-800 animate-pulse"></div>
                <div className="ml-16 card card-hover perspective-card">
                  <h3 className="text-xl font-bold mb-2 text-gray-100">Bachelor of Computer Science</h3>
                  <p className="text-primary-400 font-semibold mb-3">University Name • Expected 2026</p>
                  <p className="text-gray-400 leading-relaxed">
                    Relevant coursework: Data Structures, Algorithms, Software Engineering, 
                    Database Systems, Web Development
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start scroll-animation" style={{ animationDelay: '100ms' }}>
                <div className="absolute left-6 w-4 h-4 bg-secondary-500 rounded-full border-4 border-dark-800 animate-pulse"></div>
                <div className="ml-16 card card-hover perspective-card">
                  <h3 className="text-xl font-bold mb-2 text-gray-100">Personal Projects & Learning</h3>
                  <p className="text-secondary-400 font-semibold mb-3">Self-directed • Ongoing</p>
                  <p className="text-gray-400 leading-relaxed">
                    Continuously building projects to explore new technologies and improve my 
                    skills in full-stack development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary-500/5 rounded-full blur-xl"></div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-radial-gradient opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 gradient-text scroll-animation">
            Fun Facts
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card card-hover text-center scroll-animation" style={{ animationDelay: '0ms' }}>
              <div className="relative mb-2">
                <div className="text-4xl font-bold gradient-text relative z-10">10+</div>
                <div className="absolute -inset-1 bg-primary-500/10 rounded-full blur-xl animate-pulse-slow"></div>
              </div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            
            <div className="card card-hover text-center scroll-animation" style={{ animationDelay: '100ms' }}>
              <div className="relative mb-2">
                <div className="text-4xl font-bold gradient-text relative z-10">5k+</div>
                <div className="absolute -inset-1 bg-secondary-500/10 rounded-full blur-xl animate-pulse-medium"></div>
              </div>
              <p className="text-gray-400">Lines of Code Written</p>
            </div>
            
            <div className="card card-hover text-center scroll-animation" style={{ animationDelay: '200ms' }}>
              <div className="relative mb-2">
                <div className="text-4xl font-bold gradient-text relative z-10">24/7</div>
                <div className="absolute -inset-1 bg-primary-500/10 rounded-full blur-xl animate-pulse-slow"></div>
              </div>
              <p className="text-gray-400">Learning Mindset</p>
            </div>
          </div>
          
          <div className="gradient-divider mt-16 scroll-animation"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
