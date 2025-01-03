import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypingTextProps {
  quotes: string[];
  className?: string;
  typingSpeed?: number;
  delayBetweenQuotes?: number;
  initialDelay?: number;
  isVisible: boolean;
}

export const TypingText: React.FC<TypingTextProps> = ({
  quotes,
  className = '',
  typingSpeed = 50,
  delayBetweenQuotes = 3000,
  initialDelay = 2000,
  isVisible
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText('');
      setCurrentQuoteIndex(0);
      setCurrentCharIndex(0);
      setIsTyping(false);
      setIsDeleting(false);
      setIsWaiting(true);
      return;
    }

    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsTyping(true);
      }, initialDelay);
    } else if (isTyping && !isDeleting) {
      if (currentCharIndex < quotes[currentQuoteIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + quotes[currentQuoteIndex][currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenQuotes);
      }
    } else if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        // Move to next quote
        const nextQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        setCurrentQuoteIndex(nextQuoteIndex);
        setCurrentCharIndex(0);
        setIsDeleting(false);
        setIsWaiting(true);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [
    currentCharIndex, 
    currentQuoteIndex, 
    displayedText, 
    isDeleting, 
    isTyping, 
    isWaiting,
    isVisible, 
    quotes, 
    typingSpeed, 
    delayBetweenQuotes,
    initialDelay
  ]);

  const cursorVariants = {
    blink: {
      opacity: [1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div className={`${className} relative inline-block`}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {`"${displayedText}"`}
          </motion.span>
          <motion.span
            variants={cursorVariants}
            animate="blink"
            className="inline-block w-[2px] h-[1.2em] bg-emerald-400 ml-1"
          />
        </div>
      )}
    </AnimatePresence>
  );
};
