import React, { useState } from 'react';
import { Search, Download, FileText, Book, Code, PlayCircle, Mail, ArrowRight } from 'lucide-react';

// Base components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 pb-3">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-6 pt-3">{children}</div>
);

const SearchBar = () => (
  <div className="relative max-w-xl mx-auto">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    <input
      type="text"
      placeholder="Search documentation..."
      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

// Toast Notification Component
const Toast = ({ message, type = 'error' }) => (
  <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
    type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
  }`}>
    {message}
  </div>
);

const DocumentationPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [downloadStatus, setDownloadStatus] = useState(null);

  // Document data
  const documents = [
    {
      title: "Getting Started Guide",
      description: "Complete guide for beginners to get started with our platform",
    
      fileType: "PDF",
      downloadUrl: "/pdf/pdf1.pdf",
      icon: <Book className="w-8 h-8 text-blue-600" />
    },
    {
      title: "API Documentation",
      description: "Technical documentation for API integration and endpoints",
      
      fileType: "PDF",
      downloadUrl: "/pdf/pdf2.pdf",
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Best Practices",
      description: "Learn about recommended practices and optimization techniques",

      fileType: "PDF",
      downloadUrl: "/pdf/pdf3.pdf",
      icon: <PlayCircle className="w-8 h-8 text-blue-600" />
    }
  ];

  // Category data
  const categories = [
    { 
      title: 'Documentation', 
      count: '15+ Guides', 
      icon: <FileText className="w-6 h-6" />,
      description: 'Comprehensive guides and references'
    },
    { 
      title: 'Tutorials', 
      count: '20+ Videos', 
      icon: <PlayCircle className="w-6 h-6" />,
      description: 'Step-by-step video tutorials'
    },
    { 
      title: 'Resources', 
      count: '30+ Templates', 
      icon: <Book className="w-6 h-6" />,
      description: 'Templates and downloadable resources'
    }
  ];

  // Download handler
  const handleDownload = async (url, title) => {
    try {
      setDownloadStatus({ type: 'progress', message: `Downloading ${title}...` });
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to download ${title}`);
      }
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.href = downloadUrl;
      link.download = url.split('/').pop();
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(downloadUrl);
      
      setDownloadStatus({ type: 'success', message: `Successfully downloaded ${title}` });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setDownloadStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Download error:', error);
      setDownloadStatus({ 
        type: 'error', 
        message: `Failed to download ${title}. Please try again.` 
      });
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setDownloadStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

     

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation Center</h1>
            <p className="text-xl opacity-90 mb-8">
              Everything you need to know about our platform, all in one place.
            </p>
   
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                    <p className="text-gray-600">{category.count}</p>
                    <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Downloads Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card 
                key={index}
                className="transform transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {doc.icon}
                    <h3 className="text-xl font-semibold">{doc.title}</h3>
                  </div>
                  <p className="text-gray-600">{doc.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText size={16} />
                      <span>{doc.fileType}</span>
                      <span>•</span>
                      <span>{doc.fileSize}</span>
                    </div>
                    <button
                      onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                        hoveredCard === index
                          ? 'bg-blue-700 text-white'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      <Download size={16} />
                      <span>Download</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Need Additional Help?</h2>
              <p className="text-gray-600 max-w-xl">
                Our support team is available 24/7 to assist you with any questions or concerns.
                We typically respond within 2 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors border border-blue-200">
                <Mail className="mr-2" size={20} />
                Email Support
              </button>
              <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Live Chat
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Download Status Toast */}
      {downloadStatus && (
        <Toast 
          message={downloadStatus.message} 
          type={downloadStatus.type} 
        />
      )}
    </div>
  );
};

export default DocumentationPage;