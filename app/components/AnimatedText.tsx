"use client";

import { useState, useEffect } from 'react';

const phrases = [
  "Work Together",
  "Talk Design",
  "Do Lunch",
  "Collaborate",
  "Meet On Zoom",
  "Grab Coffee"
];

export function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-white font-bold">Let's</span>
      <div className="relative">
        <span 
          className={`inline-block transition-all duration-1000 text-white font-bold ${
            isAnimating 
              ? 'opacity-0'
              : 'opacity-100'
          }`}
        >
          <span className="whitespace-nowrap">
            {phrases[currentIndex]}
          </span>
        </span>
      </div>
    </div>
  );
} 