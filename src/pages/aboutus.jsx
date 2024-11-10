import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Shield, ChevronRight, Star, Trophy, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { value: '25+', label: 'Years of Service' },
    { value: '₹5000Cr+', label: 'Relief Funds Disbursed' },
    { value: '10M+', label: 'Lives Impacted' },
    { value: '38', label: 'Districts Covered' }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Complete transparency in all operations and fund utilization'
    },
    {
      icon: Target,
      title: 'Efficiency',
      description: 'Swift and effective implementation of relief measures'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Ensuring support reaches every section of society'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining highest standards in service delivery'
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: 'Digital Revolution',
      description: 'Implemented end-to-end digital processing system reducing response time by 60%',
      year: '2023'
    },
    {
      icon: Trophy,
      title: 'Record Relief Distribution',
      description: 'Successfully distributed relief to over 2 million beneficiaries in a single year',
      year: '2022'
    },
    {
      icon: Heart,
      title: 'Healthcare Initiative',
      description: 'Launched comprehensive medical assistance program covering rare diseases',
      year: '2021'
    },
    {
      icon: Zap,
      title: 'Rapid Response System',
      description: 'Established 24/7 emergency response system with 15-minute deployment capability',
      year: '2020'
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-16">
     <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-20 -left-20 blur-3xl"></div>
    <div className="absolute w-96 h-96 bg-blue-700/20 rounded-full -bottom-20 -right-20 blur-3xl"></div>
  </div>
  <div className="container mx-auto px-6 relative z-10 flex justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl text-center"
    >
      <h1 className="text-4xl md:text-3xl font-bold mb-6">
        About Chief Minister's Relief Fund
      </h1>
      <p className="text-xl text-blue-100 leading-relaxed">
        Established with a vision to provide immediate assistance and relief to those in need,
        the Chief Minister's Relief Fund has been a cornerstone of public welfare for over two decades.
      </p>
    </motion.div>
  </div>
</section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To provide immediate and effective relief to citizens affected by natural calamities
                and unforeseen circumstances, ensuring swift response and comprehensive support
                through transparent and efficient fund utilization.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We strive to create a robust support system that can quickly mobilize resources
                and provide assistance to those in need, while maintaining the highest standards
                of accountability and transparency.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="images/about1.png"
                alt="CMRF Mission"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeIn}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeIn}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Key Achievements
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      {achievement.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leadership</h2>
            <p className="text-gray-600 leading-relaxed">
              Under the guidance of the Chief Minister and a dedicated team of officials,
              CMRF continues to serve the people with commitment and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-xl text-blue-100 mb-8">
              Together, we can create a stronger and more resilient community.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Learn More About Our Initiatives
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;