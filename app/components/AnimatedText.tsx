import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  isVisible: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  isVisible 
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.04 * i 
      },
    }),
    exit: {
      opacity: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "exit"}
      exit="exit"
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span 
          key={char + index}
          variants={child}
          style={{ 
            display: 'inline-block', 
            whiteSpace: char === ' ' ? 'pre' : 'normal' 
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
