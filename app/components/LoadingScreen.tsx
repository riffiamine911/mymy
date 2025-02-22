"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 1, rotate: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{ 
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.6, 1]
            }}
          >
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 55 46" 
              className="dark:fill-white fill-black"
            >
              <path d="M0.43 21L9.61 -1.43051e-06H16.57L25.75 21H18.43L11.65 3.36H14.41L7.63 21H0.43ZM5.89 17.34L7.69 12.24H17.35L19.15 17.34H5.89ZM26.8799 21V-1.43051e-06H32.6999L41.0999 13.71H38.0399L46.1999 -1.43051e-06H52.0199L52.0799 21H45.6299L45.5699 9.72H46.5899L41.0099 19.11H37.8899L32.0699 9.72H33.3299V21H26.8799ZM2.71 46V25H9.79V46H2.71ZM13.1983 46V25H19.0183L29.6983 37.78H26.9983V25H33.8983V46H28.0783L17.3983 33.22H20.0983V46H13.1983ZM43.7896 32.8H53.1496V37.9H43.7896V32.8ZM44.2696 40.66H54.7696V46H37.3096V25H54.3796V30.34H44.2696V40.66Z" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 