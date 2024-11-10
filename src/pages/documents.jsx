import React from 'react';

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

const IconDownload = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconFile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const DocumentationPage = () => {
  const documents = [
    {
      title: "Getting Started Guide",
      description: "Complete guide for beginners to get started with our platform",
      fileSize: "2.4 MB",
      fileType: "PDF",
      downloadUrl: "/path/to/getting-started.pdf"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for API integration and endpoints",
      fileSize: "1.8 MB",
      fileType: "PDF",
      downloadUrl: "/path/to/api-docs.pdf"
    },
    {
      title: "Best Practices",
      description: "Learn about recommended practices and optimization techniques",
      fileSize: "3.1 MB",
      fileType: "PDF",
      downloadUrl: "/path/to/best-practices.pdf"
    },
    {
      title: "User Manual",
      description: "Comprehensive user manual with detailed features explanation",
      fileSize: "4.2 MB",
      fileType: "PDF",
      downloadUrl: "/path/to/user-manual.pdf"
    }
  ];

  const handleDownload = (url) => {
    // In a real implementation, this would trigger the actual file download
    console.log(`Downloading from: ${url}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Hero Section - Now Centered */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center"> {/* Added text-center here */}
          <div className="max-w-3xl mx-auto"> {/* Added mx-auto for horizontal centering */}
            <h1 className="text-4xl font-bold mb-4">Documentation Center</h1>
            <p className="text-xl opacity-90">
              Everything you need to know about our platform, all in one place.
              Access guides, manuals, and technical documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {['Documentation', 'Tutorials', 'Resources'].map((title, index) => (
            <Card key={index}>
              <CardContent>
                <div className="flex items-center justify-center h-24">
                  <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Downloads Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Available Downloads</h2> {/* Added text-center here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <Card key={index}>
                <CardHeader>
                  <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                  <p className="text-gray-600">{doc.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <IconFile />
                      <span>{doc.fileType}</span>
                      <span>•</span>
                      <span>{doc.fileSize}</span>
                    </div>
                    <button
                      onClick={() => handleDownload(doc.downloadUrl)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <IconDownload />
                      <span>Download</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <Card className="bg-gray-100">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DocumentationPage;