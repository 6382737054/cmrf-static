import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Downloads', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: 'https://cmrf.klabsindia.com/#/login' }
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      info: 'DIRECTORATE OF COLLEGIATE EDUCATION 577, Anna Salai, Saidapet, Chennai, Tamil Nadu 600015',
      link: 'https://maps.google.com/maps?q=DIRECTORATE+OF+COLLEGIATE+EDUCATION+577%2C+Anna+Salai%2C+Saidapet%2C+Chennai%2C+Tamil+Nadu+600015'
    },
    { 
      icon: Phone, 
      info: '044-2345-6789',
      link: 'tel:044-2345-6789'
    },
    { 
      icon: Mail, 
      info: 'info@cmrf.gov.in',
      link: 'mailto:info@cmrf.gov.in'
    }
  ];

  const socialLinks = [
    { icon: Facebook, link: '#', name: 'Facebook' },
    { icon: Twitter, link: '#', name: 'Twitter' },
    { icon: Instagram, link: '#', name: 'Instagram' },
    { icon: Linkedin, link: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              {/* <img 
                // src="images/tnlogo.png" 
                alt="CMRF Logo" 
                className="h-12 w-auto"
              /> */}
              <h3 className="text-xl font-bold text-white">CMRF</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
            The Directorate of Collegiate Education was carved out of the erstwhile Directorate of Public Instruction in the year 1965 with a view to administer exclusively the Collegiate Education. Tamil Nadu enjoys the privilege of being one of the most developed states in the Country in the field of Higher Education. 27 Universities are functioning in Tamilnadu and of these 12 Universities are getting their Block Grants from the Government of Tamilnadu through the Directorate of Collegiate Education.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group ${link.name === 'Login' ? 'cursor-pointer' : ''}`}
                    {...link.name === 'Login' ? { href: link.path, target: '_blank', rel: 'noopener noreferrer' } : { to: link.path }}
                  >
                    <span className="h-1 w-0 bg-white group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item.info}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CMRF. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;