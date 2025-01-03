"use client";

import { motion } from 'framer-motion';
import ServiceCarousel from './components/ServiceCarousel';
import { Brush, Star, Users, Award } from 'lucide-react';

const stats = [
  { 
    icon: <Brush className="w-6 h-6" />,
    value: '150+',
    label: 'Projects Completed'
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: '98%',
    label: 'Client Satisfaction'
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: '50+',
    label: 'Team Members'
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: '25+',
    label: 'Design Awards'
  }
];

const features = [
  {
    title: "Your Story, Our Canvas",
    description: "We believe every space tells a story. Our designs transform your personal dreams into beautiful, living memories that inspire and comfort you every day."
  },
  {
    title: "Comfort Meets Creativity",
    description: "Design isn't just about looks—it's about how a space makes you feel. We craft environments that wrap you in warmth, spark joy, and make you feel truly at home."
  },
  {
    title: "Sustainable Happiness",
    description: "We design with purpose, creating spaces that not only look amazing but also support your well-being and respect our planet. Beautiful design can be kind to you and the environment."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <ServiceCarousel />
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl backdrop-blur-sm bg-white/5"
              >
                <div className="flex justify-center text-emerald-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our Design
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              {' '}Philosophy
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's collaborate to create a space that reflects your unique vision and style.
            Our team of expert designers is ready to bring your dreams to life.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}