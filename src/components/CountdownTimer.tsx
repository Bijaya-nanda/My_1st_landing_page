import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ className = '' }) => {
  const [timeLeft, setTimeLeft] = useState(4 * 3600 + 27 * 60); // Start from 4 hours 27 minutes (in seconds)

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Check if there's a saved time in localStorage
    const savedTime = localStorage.getItem('countdownTime');
    const savedTimestamp = localStorage.getItem('countdownTimestamp');
    
    if (savedTime && savedTimestamp) {
      const elapsed = Math.floor((Date.now() - parseInt(savedTimestamp)) / 1000);
      const remaining = parseInt(savedTime) - elapsed;
      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        setTimeLeft(0);
        setIsActive(false);
      }
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          // Save to localStorage
          localStorage.setItem('countdownTime', newTime.toString());
          localStorage.setItem('countdownTimestamp', Date.now().toString());
          
          if (newTime <= 0) {
            setIsActive(false);
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`text-center ${className}`}>
      <div className="bg-white rounded-lg shadow-md px-6 py-4 inline-block border-2 border-indigo-100">
        <div className="text-sm font-medium text-gray-600 mb-1">⏰ Limited Time Offer Ends In:</div>
        <div className="text-2xl font-bold text-indigo-600 font-mono tracking-wider">
          {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;