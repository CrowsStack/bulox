"use client";

import React, { type ReactNode, useState, Children } from 'react';
import { 
  motion, 
  type Variants, 
  type MotionProps, 
  AnimatePresence 
} from 'framer-motion';
import { usePathname } from 'next/navigation';

// Fade In Scroll Motion Component
export const FadeInScroll: React.FC<{ 
  children: ReactNode; 
  className?: string; 
  variants?: Variants;
} & MotionProps> = ({ 
  children, 
  className = '', 
  variants,
  ...props 
}) => {
  // Default fade-in scroll variants
  const defaultVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: false, 
        amount: 0.2 
      }}
      variants={variants || defaultVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered Children Animation
export const StaggerContainer: React.FC<{ 
  children: ReactNode; 
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}> = ({ 
  children, 
  className = '',
  delayChildren = 0.3,
  staggerChildren = 0.2
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren
      }
    }
  };

  const childVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Parallax Scroll Effect
export const ParallaxScroll: React.FC<{ 
  children: ReactNode; 
  className?: string; 
  offset?: number;
}> = ({ 
  children, 
  className = '', 
  offset = 50 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.7,
          ease: 'easeOut'
        }
      }}
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover Scale Effect
export const HoverScale: React.FC<{ 
  children: ReactNode; 
  scale?: number; 
  className?: string;
}> = ({ 
  children, 
  scale = 1.05, 
  className = '' 
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: scale,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Rotate on Hover
export const RotateHover: React.FC<{ 
  children: ReactNode; 
  rotation?: number; 
  className?: string;
}> = ({ 
  children, 
  rotation = 5, 
  className = '' 
}) => {
  return (
    <motion.div
      whileHover={{ 
        rotate: rotation,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Page Transition Component
export const PageTransition: React.FC<{ 
  children: ReactNode;
}> = ({ children }) => {
  const pathname = usePathname();
  const [isExiting, setIsExiting] = useState(false);

  // Aperture/Iris Wipe Transition Variants
  const pageVariants: Variants = {
    initial: { 
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
    },
    enter: { 
      clipPath: 'circle(150% at 50% 50%)',
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delayChildren: 0.3
      }
    },
    exit: { 
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  };

  // Camera Shutter Overlay Variants
  const overlayVariants: Variants = {
    initial: { 
      opacity: 1,
      scale: 0,
      borderRadius: '50%'
    },
    enter: { 
      opacity: 0,
      scale: 2,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
    exit: { 
      opacity: 1,
      scale: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className="relative w-full h-full"
      >
        {/* Page Content */}
        {children}

        {/* Transition Overlay */}
        <motion.div 
          initial="initial"
          animate="enter"
          exit="exit"
          variants={overlayVariants}
          className="fixed inset-0 z-[9999] bg-black pointer-events-none"
        />
      </motion.div>
    </AnimatePresence>
  );
};

// Optional: Page Transition Wrapper for Layout
export const PageTransitionWrapper: React.FC<{ 
  children: ReactNode;
}> = ({ children }) => {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
};

// Line-based Page Transition Component
export const LineTransition: React.FC<{ 
  children: ReactNode;
  lineColor?: string;
  lineThickness?: number;
}> = ({ 
  children,
  lineColor = '#ffffff',
  lineThickness = 2
}) => {
  const pathname = usePathname();
  const [isExiting, setIsExiting] = useState(false);

  // Content Variants
  const contentVariants: Variants = {
    initial: { 
      opacity: 0,
    },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.4, // Start fading in when lines are halfway
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'easeIn'
      }
    }
  };

  // Top Line Variants
  const topLineVariants: Variants = {
    initial: { 
      y: '50vh',
      height: lineThickness
    },
    animate: { 
      y: 0,
      height: lineThickness,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      y: '50vh',
      height: lineThickness,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Bottom Line Variants
  const bottomLineVariants: Variants = {
    initial: { 
      y: '-50vh',
      height: lineThickness
    },
    animate: { 
      y: 0,
      height: lineThickness,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      y: '-50vh',
      height: lineThickness,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={contentVariants}
        className="relative w-full min-h-screen"
      >
        {/* Main Content */}
        {children}

        {/* Transition Lines */}
        <>
          {/* Top Line */}
          <motion.div
            variants={topLineVariants}
            className="fixed top-0 left-0 w-full z-[9999] pointer-events-none"
            style={{ 
              height: lineThickness,
              backgroundColor: lineColor
            }}
          />

          {/* Bottom Line */}
          <motion.div
            variants={bottomLineVariants}
            className="fixed bottom-0 left-0 w-full z-[9999] pointer-events-none"
            style={{ 
              height: lineThickness,
              backgroundColor: lineColor
            }}
          />
        </>
      </motion.div>
    </AnimatePresence>
  );
};

// Line Transition Wrapper for Layout
export const LineTransitionWrapper: React.FC<{ 
  children: ReactNode;
  lineColor?: string;
  lineThickness?: number;
}> = ({ 
  children,
  lineColor = '#ffffff',
  lineThickness = 2
}) => {
  return (
    <LineTransition
      lineColor={lineColor}
      lineThickness={lineThickness}
    >
      {children}
    </LineTransition>
  );
};
