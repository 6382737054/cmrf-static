import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
         
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Address:</h3>
                  <p className="text-gray-600">
                    DIRECTORATE OF COLLEGIATE EDUCATION<br />
                    577, Anna Salai, Saidapet<br />
                    Chennai, Tamil Nadu 600015
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone:</h3>
                  <p className="text-gray-600">+91 (44) 2435 0657</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p className="text-gray-600">dce@tn.gov.in</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
            
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7687969218544!2d80.21633591482226!3d13.030338690823384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526712dc796b9d%3A0x905e6ee8eb9438ef!2sDirectorate%20of%20Collegiate%20Education!5e0!3m2!1sen!2sin!4v1655234761686!5m2!1sen!2sin&q=DIRECTORATE%20OF%20COLLEGIATE%20EDUCATION%2C%20577%2C%20Anna%20Salai%2C%20Saidapet%2C%20Chennai%2C%20Tamil%20Nadu%20600015&z=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
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