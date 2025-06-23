import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaCode, FaUser, FaServer, FaDatabase, FaPrint, FaEye, FaLink, FaCheck, FaArrowRight } from 'react-icons/fa';
import useResumeStats from '../hooks/useResumeStats';

const Resume = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { stats, trackDownload } = useResumeStats();
  const [copied, setCopied] = useState(false);
  
  // Function to copy CV link to clipboard
  const copyLinkToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 40 - 20,
        y: (e.clientY / window.innerHeight) * 40 - 20,
      });
    };

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

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 pt-16">
      {/* Header Section */}
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
          <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10 scroll-animation">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in-down">
              Professional CV
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              View my complete curriculum vitae, qualifications, and achievements
            </p>
          </div>            <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-animation">
            <a 
              href="/Ammiel-Joseph-CV.pdf" 
              download
              className="btn-primary inline-flex items-center gap-2 group relative overflow-hidden"
              onClick={trackDownload}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" />
              Download PDF Version
            </a>
            <button 
              onClick={() => window.print()}
              className="btn-secondary inline-flex items-center gap-2 group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <FaPrint className="group-hover:translate-y-1 transition-transform duration-300" />
              Print Resume
            </button>
            <button 
              onClick={() => {
                const currentUrl = window.location.href;
                navigator.clipboard.writeText(currentUrl);
                alert('Resume link copied to clipboard!');
              }}
              className="btn-outline inline-flex items-center gap-2 group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
              <FaLink className="group-hover:rotate-45 transition-transform duration-300" />
              Share Link
            </button>
          </div>
            <div className="flex justify-center mb-8 text-sm items-center gap-4 bg-dark-800/70 py-3 px-6 rounded-full w-fit mx-auto shadow-inner">
            <div className="flex items-center gap-2">
              <FaEye className="text-primary-400" /> 
              <span className="text-gray-300">{stats.views} views</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-2">
              <FaDownload className="text-primary-400" /> 
              <span className="text-gray-300">{stats.downloads} downloads</span>
            </div>
          </div>
            <div className="card p-8 md:p-12 mb-16 scroll-animation border-2 border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
            <div className="flex justify-center">
              <iframe 
                src="/Ammiel-Joseph-CV.pdf" 
                title="Ammiel Joseph CV" 
                className="w-full h-[700px] md:h-[850px] border-0 rounded-lg shadow-lg"
                style={{
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onLoad={(e) => {
                  // Add a subtle animation when the PDF loads
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.opacity = '1';
                }}
              />
            </div>
            <div className="text-center mt-6 text-sm text-gray-400">
              <p className="mb-2">If the PDF doesn't load properly, you can download it using the button above.</p>
              <p>For the best viewing experience, you can use the fullscreen button in the PDF viewer.</p>
            </div>
          </div>
        </div>
      </section>      {/* Related Resources Section */}
      <section className="py-16 px-4 bg-dark-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent opacity-30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` }}></div>
        <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-secondary-500/5 rounded-full blur-3xl"
          style={{ transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)` }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 gradient-text scroll-animation">
            Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6 relative overflow-hidden scroll-animation group hover:border-primary-500 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-full blur-xl -mr-6 -mt-6 group-hover:bg-primary-500/10 transition-all duration-300"></div>
              <h3 className="text-xl font-bold mb-4 text-gray-100 relative z-10 flex items-center">
                <FaUser className="text-primary-400 mr-3" /> About Me
              </h3>
              <p className="text-gray-400 mb-4 relative z-10">
                Learn more about my background, skills, and the values that drive my work.
              </p>
              <Link to="/about" className="text-primary-400 inline-flex items-center group/link">
                Visit About Page <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="card p-6 relative overflow-hidden scroll-animation group hover:border-secondary-500 transition-all duration-300" style={{ animationDelay: '100ms' }}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-500/5 rounded-full blur-xl -mr-6 -mt-6 group-hover:bg-secondary-500/10 transition-all duration-300"></div>
              <h3 className="text-xl font-bold mb-4 text-gray-100 relative z-10 flex items-center">
                <FaCode className="text-secondary-400 mr-3" /> Projects
              </h3>
              <p className="text-gray-400 mb-4 relative z-10">
                Explore my portfolio of projects showcasing my technical abilities and creative solutions.
              </p>
              <Link to="/projects" className="text-secondary-400 inline-flex items-center group/link">
                View Projects <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
