import React, { useState, useEffect } from 'react';

const PeopleWatching: React.FC = () => {
  const [watchingCount, setWatchingCount] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const updateWatchingCount = () => {
      const storageKey = 'peopleWatchingCount';
      const lastUpdateKey = 'lastWatchingUpdate';
      const currentTime = Date.now();
      
      // Get existing data
      const existingCount = localStorage.getItem(storageKey);
      const lastUpdate = localStorage.getItem(lastUpdateKey);
      
      let newCount: number;
      
      if (!existingCount || !lastUpdate) {
        // First visit - generate random number between 10-20
        newCount = Math.floor(Math.random() * 11) + 10; // 10-20
      } else {
        const timeSinceLastUpdate = currentTime - parseInt(lastUpdate);
        const hoursSinceUpdate = timeSinceLastUpdate / (1000 * 60 * 60);
        
        // Only update if it's been more than 1 hour since last update
        if (hoursSinceUpdate >= 1) {
          const currentCount = parseInt(existingCount);
          const increment = Math.floor(Math.random() * 5) + 1; // 1-5
          newCount = Math.min(currentCount + increment, 30); // Cap at 30
        } else {
          newCount = parseInt(existingCount);
        }
      }
      
      // Store the new count and timestamp
      localStorage.setItem(storageKey, newCount.toString());
      localStorage.setItem(lastUpdateKey, currentTime.toString());
      
      // Animate if count changed
      if (existingCount && parseInt(existingCount) !== newCount) {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
      }
      
      setWatchingCount(newCount);
    };

    updateWatchingCount();
    
    // Update count every 5 minutes while page is active
    const interval = setInterval(updateWatchingCount, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-3">
      <div className={`inline-flex items-center gap-2 text-sm font-bold text-gray-700 transition-all duration-300 ${
        isAnimating ? 'scale-110 text-indigo-600' : ''
      }`}>
        <span className="text-base">👀</span>
        <span>
          <span className={`transition-all duration-300 ${isAnimating ? 'text-indigo-600' : ''}`}>
            {watchingCount}
          </span>
          {' '}people watching right now
        </span>
      </div>
    </div>
  );
};

export default PeopleWatching;