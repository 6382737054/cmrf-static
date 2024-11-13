import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Shield, ChevronRight, Star, Trophy, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

 
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
            <h1 className="text-4xl md:text-3xl font-bold mb-6">DIRECTORATE OF COLLEGIATE EDUCATION</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              The Directorate of Collegiate Education was carved out of the erstwhile Directorate of Public
              Instruction in the year 1965 with a view to administer exclusively the Collegiate Education
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="images/slide2.png"
                alt="CMRF Vision"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 rounded-lg"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Directorate of Colligiate Education</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              In the Head office, the Director is assisted by two Joint Directors of Collegiate Education viz., Joint Director of Collegiate Education (Finance) who is in charge of the works relating to the Aided colleges in the State and the Joint Director of Collegiate Education (Planning & Development) who is in charge of the works relating to the Government Constituent Colleges in the State. The Financial Adviser and the Chief Accounts Officer and the Senior Accounts Officer in the Directorate assists the Director in the Budgetary control and other financial related matters. A Legal cell headed by a Law Officer is also functioning in the Directorate which deals with the court cases relating to the department.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This scheme offers scholarship amount of Rs.25,000/- per year for a maximum period of 4 years
                depending upon the duration of the course. The 'Scholarship for Young Achievers Scheme' will
                benefit the meritorious students of economically backward section of the society who have
                secured admission in select colleges/departments of Universities of Tamilnadu based on merit
                in any professional courses approved by AICTE/UGC/Tamilnadu State Council of Higher Education.
              </p>
            </motion.div>
          </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Chief Minister's Research Fellowship (CMRF)</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based on the Hon'ble Chief Minister of Tamilnadu announcement on 30.08.2022, the G.O.(Ms).No.53 by
                Higher Education (G1) Department dated 27.02.2023 was issued for the Chief Minister Research
                Fellowship (CMRF) Scheme. The Main objective of the Chief Minister Research Fellowship is to provide
                a research platform for the meritorious poor post graduates, to develop professional / academic
                research careers under the mentorship of an established researcher and to make Tamilnadu the
                "Research Hub".
              </p>
              <p className="text-gray-600 leading-relaxed">
                The aim of this CMRF Scheme is to award research fellowship to scholars to do full time Ph.D.
                Programme. Eligible scholars will be offered monthly fellowship of Rs.25,000/- and an annual
                contingency grant of Rs.10,000/- for Arts, Humanities, Social Science etc and Rs. 12,000/- for
                Science, Technical Stream for a maximum period of 3 years. State Level Qualifying Examination will be
                conducted by Teachers Recruitment Board every year.
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

    
    </div>
  );
};

export default AboutPage;