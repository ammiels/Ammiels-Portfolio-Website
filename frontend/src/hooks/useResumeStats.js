import { useState, useEffect } from 'react';

/**
 * Custom hook to track and manage CV views and downloads
 * In a real application, this would connect to a backend API
 */
const useResumeStats = () => {
  const [stats, setStats] = useState({
    views: 0,
    downloads: 0
  });

  // Load initial stats from localStorage (simulating a database)
  useEffect(() => {
    const savedStats = localStorage.getItem('resumeStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
    
    // Increment view count when the resume page is loaded
    setStats(prevStats => {
      const newStats = {
        ...prevStats,
        views: prevStats.views + 1
      };
      localStorage.setItem('resumeStats', JSON.stringify(newStats));
      return newStats;
    });
  }, []);

  // Function to track downloads
  const trackDownload = () => {
    setStats(prevStats => {
      const newStats = {
        ...prevStats,
        downloads: prevStats.downloads + 1
      };
      localStorage.setItem('resumeStats', JSON.stringify(newStats));
      return newStats;
    });
  };

  return {
    stats,
    trackDownload
  };
};

export default useResumeStats;
