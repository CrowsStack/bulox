"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Palette, Brush, Droplet } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    project: 'residential'
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const projectTypes = [
    {
      id: 'residential',
      title: 'Residential',
      icon: <Palette className="w-6 h-6" />,
      description: 'Transform living spaces into artistic sanctuaries'
    },
    {
      id: 'commercial',
      title: 'Commercial',
      icon: <Brush className="w-6 h-6" />,
      description: 'Create inspiring workspaces that spark creativity'
    },
    {
      id: 'landscape',
      title: 'Landscape',
      icon: <Droplet className="w-6 h-6" />,
      description: 'Design outdoor spaces that blend nature with artistry'
    }
  ];

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
        project: 'residential'
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Let's Create Something
          <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            {' '}Extraordinary
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Project Types */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Choose Your Canvas</h2>
            
            {projectTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`p-6 rounded-xl backdrop-blur-sm transition-all cursor-pointer
                  ${formData.project === type.id ? 'bg-white/20 shadow-lg' : 'bg-white/5 hover:bg-white/10'}
                `}
                onClick={() => setFormData(prev => ({ ...prev, project: type.id }))}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-emerald-400">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{type.title}</h3>
                    <p className="text-gray-300 text-sm">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
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
