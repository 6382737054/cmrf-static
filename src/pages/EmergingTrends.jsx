import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EmergingTrendsSection = () => {
  // Using the same data structure as before
  const trendData = [
    {
      title: "Big Data in Agriculture",
      description: "Recent Advances in Big Data, Machine and Deep Learning for Precision Agriculture",
      icon: "🌾",
      color: "from-green-500 to-green-600"
    },
    {
      title: "AI in Bioinformatics",
      description: "Artificial Intelligence and Bioinformatics Applications for Omics Studies",
      icon: "🧬",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Remote Sensing",
      description: "Remote Sensing for Field-based Crop Phenotyping",
      icon: "📡",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "AI Healthcare",
      description: "AI Empowered Cerebro – Cardiovascular Health Engineering",
      icon: "🫀",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Genomics Advances",
      description: "Current Advances in Genomics and Gene Editing Tools for Crop Improvement",
      icon: "🧪",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Digital Health",
      description: "Digital Health and Big Data in Medicine: Current Trends and Challenges",
      icon: "💊",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "AI Plant Science",
      description: "Advanced AI Methods for Plant Disease and Pest Recognition",
      icon: "🌿",
      color: "from-emerald-500 to-emerald-600"
    },
    // Adding more items
    {
      title: "Cybersecurity",
      description: "Threats, prevention strategies, and impact of cyber attacks",
      icon: "🔒",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Blockchain",
      description: "Beyond cryptocurrencies – supply chain and voting systems",
      icon: "⛓️",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Quantum Computing",
      description: "Breaking modern encryption and solving complex problems",
      icon: "💻",
      color: "from-violet-500 to-violet-600"
    }
  ];

  const MarqueeGroup = ({ reverse }) => (
    <motion.div
      initial={{ x: reverse ? -2000 : 0 }}
      animate={{ x: reverse ? 0 : -2000 }}
      transition={{
        duration: 50,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }}
      className="flex gap-4"
    >
      {trendData.map((trend, idx) => (
        <motion.div
          key={idx}
          className={`flex-shrink-0 w-80 p-6 rounded-xl shadow-lg hover:shadow-xl 
                     transition-all duration-300 group cursor-pointer
                     bg-gradient-to-br ${trend.color}`}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl">{trend.icon}</span>
            <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{trend.title}</h3>
          <p className="text-white/90 text-sm">{trend.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          Emerging Trends
        </motion.h2>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* First Row */}
        <div className="mb-8 overflow-hidden hover:pause-animation">
          <div className="flex">
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
        </div>

        {/* Second Row */}
        <div className="overflow-hidden hover:pause-animation">
          <div className="flex">
            <MarqueeGroup reverse />
            <MarqueeGroup reverse />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover\:pause-animation:hover * {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default EmergingTrendsSection;