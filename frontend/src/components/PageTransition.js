import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
    
    // Add a class to the body to trigger page transition
    document.body.classList.add('page-transitioning');
    
    // Remove the class after animation completes
    const timeout = setTimeout(() => {
      document.body.classList.remove('page-transitioning');
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;