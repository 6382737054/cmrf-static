import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const slides = [
  {
    url: 'images/slide1.png',
    title: 'Transforming Lives',
    subtitle: 'Building a stronger future for our communities'
  },
  {
    url: 'images/slide2.png',
    title: 'Healthcare Initiatives',
    subtitle: 'Supporting quality healthcare for all'
  },
  {
    url: 'images/slide3.png',
    title: 'Educational Excellence',
    subtitle: 'Empowering through education'
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

const NewsSection = () => {
  const news = [
    {
      date: '2024-03-15',
      title: 'New Infrastructure Development Projects Announced',
      excerpt: 'Major initiatives to enhance public infrastructure across multiple districts.',
      image: 'images/tes1.png'
    },
    {
      date: '2024-03-10',
      title: 'Healthcare Modernization Program Launched',
      excerpt: 'State-of-the-art medical equipment deployed to district hospitals.',
     image: 'images/tes1.png'
    },
    {
      date: '2024-03-05',
      title: 'Education Reform Policy Implementation',
      excerpt: 'Comprehensive changes to improve educational standards.',
    image: 'images/tes1.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{item.date}</time>
                <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-blue-600 font-medium inline-flex items-center hover:gap-2 transition-all duration-300">
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const InitiativesSection = () => {
  const initiatives = [
    {
      title: 'Infrastructure Development',
      description: 'Modern infrastructure projects to enhance public facilities',
      stats: '500+ Projects',
      icon: '🏗️'
    },
    {
      title: 'Healthcare',
      description: 'Advanced medical facilities and healthcare initiatives',
      stats: '200+ Centers',
      icon: '🏥'
    },
    {
      title: 'Education',
      description: 'Quality education and skill development programs',
      stats: '1000+ Schools',
      icon: '🎓'
    },
    {
      title: 'Technology',
      description: 'Digital transformation and smart city initiatives',
      stats: '50+ Programs',
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

const AchievementsSection = () => {
    const achievements = [
      {
        title: 'Projects Completed',
        value: '2500+',
        description: 'Successfully executed infrastructure and development projects'
      },
      {
        title: 'Districts Covered',
        value: '38',
        description: 'Comprehensive coverage across all districts'
      },
      {
        title: 'Lives Impacted',
        value: '10M+',
        description: "Direct positive impact on citizens' lives"  // Fixed string with double quotes
      },
      {
        title: 'Investment Made',
        value: '₹5000Cr',
        description: 'Total investment in various development initiatives'
      }
    ];
  
    return (
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-3">{item.value}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.description}</p>
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
      <NewsSection />
      <InitiativesSection />
      <AchievementsSection />
    </div>
  );
};

export default HomePage;