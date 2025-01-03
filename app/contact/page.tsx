"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

// Custom text animation component
const AnimatedText = ({ text, isWriting }: { text: string, isWriting: boolean }) => {
  const container = {
    hidden: { 
      transition: { 
        staggerChildren: 0.02,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    visible: {
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: 0.1,
        when: "beforeChildren"
      },
    },
    exit: {
      transition: { 
        staggerChildren: 0.02,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const child = {
    hidden: {
      scaleX: 0,
      originX: 0
    },
    visible: {
      scaleX: 1,
      originX: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      scaleX: 0,
      originX: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={isWriting ? "visible" : "exit"}
      exit="exit"
      className="flex flex-wrap justify-center text-gray-300 italic"
    >
      {text.split("").map((char, index) => (
        <motion.span 
          key={index} 
          variants={child}
          className="inline-block origin-left"
          style={{ 
            display: 'inline-block',
            position: 'relative',
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    project: 'interior'
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  // Quotes specifically about house finishing, design, and craftsmanship
  const inspirationalQuotes = [
"Transform your home into a warm and welcoming space, one design at a time.",
"Where every room feels like a dream, filled with joy and imagination.",
"Creating spaces that share your unique story, room by room.",
"Enhance your home with custom TV stands that add a touch of style.",
"Exterior finishes that turn houses into beautiful works of art.",
"Every detail in woodwork adds a special touch to your home's beauty.",
"Ceilings that lift your spirits and make your space feel magical.",
"Concrete floors that combine strength with artistic flair.",
"Custom furniture that brings energy and life to your living areas.",
"Woodwork that adds elegance and charm to every corner.",
"Interior design that turns plain walls into inspiring canvases.",
"From creative ceiling designs to fine woodwork, we make your dream space come alive.",
"Exterior finishes that give your home a standout look in the neighborhood.",
"Concrete floors that do more than just provide a surface—they make a statement.",
"TV stands made of wood that become the center of your living room.",
"Designing interiors where every corner shares a piece of your story.",
"Woodwork that combines usefulness with joyful beauty.",
"Ceiling designs that elevate your space from ordinary to remarkable.",
"Exterior finishes that reflect your unique style and personality.",
"Where interior design meets skilled craftsmanship, creating wonderful spaces.",
"Transforming homes into peaceful retreats, one lovely detail at a time.",
"Creating spaces that inspire and lift your spirits through design.",
"Every detail in woodwork is a touch of creativity and care.",
"Ceilings that wow and inspire wonder in your home.",
"Concrete floors that blend practicality with artistic beauty.",
"Custom furniture that becomes the heart of your home’s design.",
"Woodwork that tells the tale of your origins and celebrates your style.",
"Interior design that opens up walls to a world of possibilities.",
"From creative ceilings to detailed woodwork, we design spaces that are truly special.",
"Exterior finishes that reflect who you are, turning your home into a true work of art."
  ];

  const [currentQuote, setCurrentQuote] = useState(inspirationalQuotes[0]);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isWriting, setIsWriting] = useState(true);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setIsWriting(false); // Start write-out
      
      // Wait for write-out animation
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % inspirationalQuotes.length);
        setIsWriting(true); // Start write-in for new quote
      }, 2000); // Wait 2 seconds for write-out
    }, 8000); // Total duration of 8 seconds per quote

    return () => clearInterval(quoteInterval);
  }, []);

  useEffect(() => {
    setCurrentQuote(inspirationalQuotes[quoteIndex]);
  }, [quoteIndex]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        project: 'interior'
      });

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Transform Your Space with
          <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            {' '}Expert Finishing
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-white/10 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Get In Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="text-emerald-400 w-6 h-6" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+234 (0) 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="text-emerald-400 w-6 h-6" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">contact@housefinishing.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-emerald-400 w-6 h-6" />
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300">123 Design Street, Creative City</p>
                </div>
              </div>
            </div>

            <div className="mt-6 relative h-24 overflow-hidden">
              <AnimatePresence mode="wait">
                <AnimatedText text={`"${currentQuote}"`} isWriting={isWriting} />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-xl"
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">Your Vision</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="Share your design aspirations..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={formStatus === 'sending'}
              className={`w-full py-4 rounded-lg text-white font-semibold flex items-center justify-center space-x-2
                ${formStatus === 'sending' 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700'}
              `}
            >
              <span>
                {formStatus === 'sending' ? 'Sending...' : 
                 formStatus === 'success' ? 'Message Sent!' : 
                 formStatus === 'error' ? 'Try Again' : 
                 'Send Message'}
              </span>
              {formStatus === 'idle' && <Send className="w-5 h-5" />}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
