import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react';

const EmergingTrendsData = {
  currentFocus: [
    {
      title: "Big Data in Agriculture",
      description: "Recent Advances in Big Data, Machine and Deep Learning for Precision Agriculture",
      icon: "🌾",
      color: "from-green-500 to-green-600"
    },
    {
      title: "AI in Bioinformatics",
      description: "Artificial Intelligence and Bioinformatics Applications for Omics and Multi-Omics Studies",
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
      description: "Current Advances in Genomics and Gene Editing Tools for Crop Improvement in a Changing Climate Scenario",
      icon: "🧪",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Digital Health",
      description: "Perspectives in Digital Health and Big Data in Medicine: Current Trends and Challenges",
      icon: "💊",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "AI Plant Science",
      description: "Advanced AI Methods for Plant Disease and Pest Recognition",
      icon: "🌿",
      color: "from-emerald-500 to-emerald-600"
    }
  ],
  tech: [
    {
      title: "AI and Machine Learning",
      description: "Applications in healthcare, finance, and autonomous vehicles",
      icon: "🤖",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Cybersecurity",
      description: "Threats, prevention strategies, and impact of cyber attacks",
      icon: "🔒",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Blockchain",
      description: "Beyond cryptocurrencies – use cases in supply chain and voting",
      icon: "⛓️",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Quantum Computing",
      description: "Breaking modern encryption and solving complex problems",
      icon: "💻",
      color: "from-violet-500 to-violet-600"
    }
  ],
  health: [
    {
      title: "Personalized Medicine",
      description: "Using genetic information for tailored treatments",
      icon: "🧬",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Mental Health",
      description: "Impact of social media on mental health",
      icon: "🧠",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Pandemic Preparedness",
      description: "Lessons from COVID-19 and future strategies",
      icon: "🦠",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Telemedicine",
      description: "Healthcare delivery through remote technologies",
      icon: "👨‍⚕️",
      color: "from-blue-500 to-blue-600"
    }
  ],
  environment: [
    {
      title: "Climate Change",
      description: "Renewable energy and carbon capture technologies",
      icon: "🌍",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Biodiversity",
      description: "Conservation strategies and ecosystem protection",
      icon: "🦋",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Sustainable Agriculture",
      description: "Eco-friendly farming practices",
      icon: "🌱",
      color: "from-lime-500 to-lime-600"
    },
    {
      title: "Urban Ecology",
      description: "Green infrastructure and sustainable planning",
      icon: "🏙️",
      color: "from-teal-500 to-teal-600"
    }
  ],
  social: [
    {
      title: "Social Justice",
      description: "Race, gender, and socioeconomic equality",
      icon: "⚖️",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Digital Sociology",
      description: "Impact of technology on society",
      icon: "🤝",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Political Studies",
      description: "Causes and solutions for polarization",
      icon: "🏛️",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cultural Heritage",
      description: "Preservation in a global context",
      icon: "🏺",
      color: "from-brown-500 to-brown-600"
    }
  ],
  business: [
    {
      title: "Gig Economy",
      description: "Future of work and labor markets",
      icon: "💼",
      color: "from-slate-500 to-slate-600"
    },
    {
      title: "Sustainable Business",
      description: "ESG criteria and corporate responsibility",
      icon: "🌱",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Fintech",
      description: "Digital transformation of financial services",
      icon: "💳",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Global Trade",
      description: "Economic alliances and trade dynamics",
      icon: "🌐",
      color: "from-blue-500 to-blue-600"
    }
  ],
  education: [
    {
      title: "Remote Learning",
      description: "Future of online education",
      icon: "🎓",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Inclusive Education",
      description: "Accommodating diverse learning needs",
      icon: "🤝",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "EdTech",
      description: "Innovation in teaching tools",
      icon: "💻",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "STEM Education",
      description: "Promoting science and technology",
      icon: "🔬",
      color: "from-cyan-500 to-cyan-600"
    }
  ],
  law: [
    {
      title: "Data Privacy",
      description: "Legal frameworks for digital age",
      icon: "🔐",
      color: "from-gray-500 to-gray-600"
    },
    {
      title: "Justice Reform",
      description: "Modern approaches to criminal justice",
      icon: "⚖️",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Immigration",
      description: "Balancing security and humanity",
      icon: "🌍",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Climate Policy",
      description: "Environmental law and agreements",
      icon: "🌱",
      color: "from-green-500 to-green-600"
    }
  ],
  engineering: [
    {
      title: "Renewable Energy",
      description: "Solar, wind, and hydroelectric innovations",
      icon: "⚡",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Smart Cities",
      description: "IoT integration in urban spaces",
      icon: "🏙️",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Advanced Materials",
      description: "Nanomaterials and applications",
      icon: "🔮",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Robotics",
      description: "Autonomous systems and automation",
      icon: "🤖",
      color: "from-red-500 to-red-600"
    }
  ]
};

const EmergingTrendsSection = () => {
  const [activeCategory, setActiveCategory] = useState('currentFocus');
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const categories = {
    currentFocus: "Current Focus",
    tech: "Technology",
    health: "Health",
    environment: "Environment",
    social: "Social Sciences",
    business: "Business",
    education: "Education",
    law: "Law & Policy",
    engineering: "Engineering"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => 
        (prev + 1) % Math.ceil(EmergingTrendsData[activeCategory].length / itemsPerView)
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [activeCategory]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const nextSlide = () => {
    setCurrentIndex(prev => 
      (prev + 1) % Math.ceil(EmergingTrendsData[activeCategory].length / itemsPerView)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev === 0 
        ? Math.ceil(EmergingTrendsData[activeCategory].length / itemsPerView) - 1 
        : prev - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Emerging Trends
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {EmergingTrendsData[activeCategory]
                .slice(currentIndex * itemsPerView, (currentIndex * itemsPerView) + itemsPerView)
                .map((trend, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`bg-gradient-to-br ${trend.color} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{trend.icon}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
                    <p className="text-white/90 text-sm">{trend.description}</p>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmergingTrendsSection;