import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import EmergingTrendsSection from './EmergingTrends';
const slides = [
  {
    url: 'images/slide3.png',
    title: '',
    subtitle: ''
  },
  {
    url: 'images/slide2.png',
    title: '',
    subtitle: ''
  },
  {
    url: 'images/slide1.png',
    title: '',
    subtitle: ''
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1 
          }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
          style={{ zIndex: currentSlide === index ? 1 : 0 }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl text-gray-200"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
};

const VideoAndImageSection = () => {
  return (

   
    <section className="py-20 bg-white">
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <video
            src="/videos/video1.mp4"
            controls
            className="w-full h-[400px] rounded-lg"
          ></video>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <img src="images/news1.png" alt="News Image 1" className="rounded-lg" />
          <img src="images/slide1.png" alt="News Image 2" className="rounded-lg" />
          <img src="images/slide2.png" alt="News Image 3" className="rounded-lg" />
          <img src="images/slide3.png" alt="News Image 4" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

const InitiativesSection = () => {
  const initiatives = [
    {
      title: 'Empowering Local Research Talent',
      description: 'The CMRF provides funding to eligible postgraduates from Tamil Nadu to pursue full-time Ph.D. programs. This initiative encourages research careers among local scholars by supporting their academic journey financially.',

      icon: '🏗️'
    },
    {
      title: 'Focus on State-Specific Research Projects',
      description: 'CMRF scholars are encouraged to undertake research on issues relevant to Tamil Nadu, from public health to environmental sustainability, aligning academic efforts with state needs to produce practical outcomes that benefit the community.',

      icon: '🏥'
    },
    {
      title: 'Building Institutional Research Capacity',
      description: 'By funding research positions in state institutions, the CMRF fosters a stronger research culture in Tamil Nadu’s academic landscape, promoting knowledge sharing and innovation across disciplines like engineering, social sciences, and public policy.',
  
      icon: '🎓'
    },
    {
      title: 'Skill Development and Mentorship for Fellows',
      description: 'The fellowship offers structured mentorship, enabling fellows to work closely with experienced academics and researchers, which enhances their research skills and prepares them for impactful roles in academia and beyond.',

      icon: '💻'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Key Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="text-blue-600 font-semibold">{item.stats}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoAndImageSection />
      <EmergingTrendsSection/>
      <InitiativesSection />
    </div>
  );
};

export default HomePage;