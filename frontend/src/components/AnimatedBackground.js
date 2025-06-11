import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Track mouse position for parallax effects
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 30,
        y: (e.clientY / window.innerHeight) * 30,
      });
    };

    // Track scroll position for scroll-based animations
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.05);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh */}
      <div 
        className="absolute w-full h-full opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${50 + mousePosition.x * 0.02}% ${50 + mousePosition.y * 0.02}%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${20 - mousePosition.x * 0.01}% ${80 - mousePosition.y * 0.01}%, rgba(168, 85, 247, 0.1) 0%, transparent 40%)
          `,
          transform: `translateY(${scrollY}px)`
        }}
      ></div>
      
      {/* Large gradient orbs with parallax effect */}
      <div 
        className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-3xl animate-float-slow"
        style={{
          transform: `translate(${-mousePosition.x * 0.05}px, ${-mousePosition.y * 0.05}px)`
        }}
      ></div>
      <div 
        className="absolute -bottom-60 -left-20 w-[35rem] h-[35rem] bg-secondary-500/10 rounded-full blur-3xl animate-float-medium"
        style={{
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
        }}
      ></div>
      
      {/* Animated light beam */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40rem] h-[30rem] opacity-10 light-beam"></div>
      
      {/* Small particles with different animations */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400/50 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-secondary-400/50 rounded-full animate-pulse-medium"></div>
      <div className="absolute top-2/4 right-1/4 w-2 h-2 bg-primary-300/50 rounded-full animate-pulse-fast"></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-secondary-300/30 rounded-full animate-pulse-medium"></div>
      <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-primary-400/40 rounded-full animate-float-slow"></div>
      
      {/* Animated constellation effect - connect dots with lines */}
      <div className="constellation-effect"></div>
      
      {/* Star field effect */}
      <div className="star-field"></div>
      
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.03] mix-blend-overlay"></div>
    </div>
  );
};

export default AnimatedBackground;
