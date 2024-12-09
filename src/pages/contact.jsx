import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <h2 className="text-2xl font-semibold border-b-2 border-white inline-block pb-2">CMRF Unit</h2>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Address:</h3>
                  <p className="text-gray-600 leading-relaxed">
                    DIRECTORATE OF COLLEGIATE EDUCATION<br />
                    577, Anna Salai, Saidapet<br />
                    Chennai, Tamil Nadu 600015
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Phone Numbers:</h3>
                  <div className="text-gray-600 space-y-1">
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      044-24343106
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      044-24343109
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email:</h3>
                  <p className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:cmrfdce2023@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                      cmrfdce2023@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7687969218544!2d80.21633591482226!3d13.030338690823384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526712dc796b9d%3A0x905e6ee8eb9438ef!2sDirectorate%20of%20Collegiate%20Education!5e0!3m2!1sen!2sin!4v1655234761686!5m2!1sen!2sin&q=DIRECTORATE%20OF%20COLLEGIATE%20EDUCATION%2C%20577%2C%20Anna%20Salai%2C%20Saidapet%2C%20Chennai%2C%20Tamil%20Nadu%20600015&z=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="filter contrast-125"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;