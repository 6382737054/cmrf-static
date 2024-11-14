import React from 'react';
import { Users, Target, Award, Shield, ChevronRight, Star, Trophy, Heart, Zap } from 'lucide-react';

const collegeData = [
  { id: 1, type: "Arts and Science Colleges", government: 164, aided: 139, selfFinancing: 646, total: 949 },
  { id: 2, type: "Physical Education", government: 0, aided: 3, selfFinancing: 8, total: 11 },
  { id: 3, type: "Oriental", government: 0, aided: 4, selfFinancing: 0, total: 4 },
  { id: 4, type: "School of Social Work", government: 0, aided: 2, selfFinancing: 0, total: 2 },
  { id: 5, type: "Colleges of Education", government: 7, aided: 14, selfFinancing: 639, total: 660 }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-blue-700/20 rounded-full -bottom-20 -right-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DIRECTORATE OF COLLEGIATE EDUCATION
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              The Directorate of Collegiate Education was carved out of the erstwhile Directorate of Public
              Instruction in the year 1965 with a view to administer exclusively the Collegiate Education
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <img
                src="images/slide2.png"
                alt="College Education"
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 rounded-xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Directorate of Collegiate Education</h2>
              <p className="text-gray-600 leading-relaxed">
                The Directorate of Collegiate Education was carved out of the erstwhile Directorate of Public 
                Instruction in the year 1965 with a view to administer exclusively the Collegiate Education. 
                Tamil Nadu enjoys the privilege of being one of the most developed states in the Country in 
                the field of Higher Education. 27 Universities are functioning in Tamilnadu and of these 12 
                Universities are getting their Block Grants from the Government of Tamilnadu through the 
                Directorate of Collegiate Education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In the Head office, the Director is assisted by two Joint Directors of Collegiate Education viz., 
                Joint Director of Collegiate Education (Finance) who is in charge of the works relating to the 
                Aided colleges in the State and the Joint Director of Collegiate Education (Planning & Development) 
                who is in charge of the works relating to the Government Constituent Colleges in the State. The 
                Financial Adviser and the Chief Accounts Officer and the Senior Accounts Officer in the Directorate 
                assists the Director in the Budgetary control and other financial related matters. A Legal cell 
                headed by a Law Officer is also functioning in the Directorate which deals with the court cases 
                relating to the department.
              </p>
              <p className="text-gray-600 leading-relaxed">
                8 Regional Offices located at Chennai, Vellore, Coimbatore, Trichy, Madurai, Tirunelveli, 
                Dharmapuri and Thanajur are functioning under the administrative control of the Directorate of 
                Collegiate Education Each Regional office is headed by a Joint Director of Collegiate Education. 
                Each Regional office is headed by a Joint Director of Collegiate Education. The Regional offices 
                attend to the works relating to the Aided colleges in the respective regions like release of 
                monthly salary grant, approval of appointments, auditing of accounts etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">College Statistics Overview</h2>
            <div className="overflow-x-auto rounded-lg shadow-lg">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 text-left">Types of Colleges</th>
                    <th className="p-4 text-center">Government Colleges</th>
                    <th className="p-4 text-center">Government Aided Colleges</th>
                    <th className="p-4 text-center">Self Financing Colleges</th>
                    <th className="p-4 text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {collegeData.map((row) => (
                    <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">{row.type}</td>
                      <td className="p-4 text-center">{row.government}</td>
                      <td className="p-4 text-center">{row.aided}</td>
                      <td className="p-4 text-center">{row.selfFinancing}</td>
                      <td className="p-4 text-center font-semibold">{row.total}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-semibold">
                    <td className="p-4">Total</td>
                    <td className="p-4 text-center">171</td>
                    <td className="p-4 text-center">162</td>
                    <td className="p-4 text-center">1293</td>
                    <td className="p-4 text-center">1626</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CMRF Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Chief Minister's Research Fellowship (CMRF)</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-4">During the Vice Chancellor's Conference held on 30.08.2022, 
                the Hon'ble Chief Minister of Tamilnadu made the following announcement:-</p>
                <p className="text-gray-800 italic">
                  "நம்முடைய மாணவர்களின் ஆராய்ச்சி திறமையை மேம்படுத்தவும், புதிய கண்டுபிடிப்புகளைத் 
                  தமிழ்நாட்டில் ஊக்கப்படுத்தவும் "Chief Minister Research Fellowship" "முதலமைச்சரின் 
                  ஆராய்ச்சி ஊக்கத்தொகை" திட்டம் தொடங்கப்படும் இதற்காக மாநில அளவில் தகுதிதிட்டத் தேர்வு 
                  நடத்தப்பட்டு மாணவர்கள் தேர்வு செய்யப்படுவார்கள்"
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Based on the Hon'ble Chief Minister of Tamilnadu announcement on 30.08.2022, the G.O.(Ms).No.53 
                by Higher Education (G1) Department dated 27.02.2023 was issued for the Chief Minister Research 
                Fellowship (CMRF) Scheme. The Main objective of the Chief Minister Research Fellowship is to 
                provide a research platform for the meritorious poor post graduates, to develop professional / 
                academic research careers under the mentorship of an established researcher and to make Tamilnadu 
                the "Research Hub".
              </p>
              <p className="text-gray-600 leading-relaxed">
                The aim of this CMRF Scheme is to award research fellowship to scholars to do full time Ph.D. 
                Programme. Eligible scholars will be offered monthly fellowship of Rs.25,000/- and an annual 
                contingency grant of Rs.10,000/- for Arts, Humanities, Social Science etc and Rs. 12,000/- for 
                Science, Technical Stream for a maximum period of 3 years. State Level Qualifying Examination 
                will be conducted by Teachers Recruitment Board every year.
              </p>
            </div>
            <div className="relative order-first md:order-last">
              <img
                src="images/about1.png"
                alt="CMRF Initiative"
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;