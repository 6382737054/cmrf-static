import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutus';
import Header from './components/header';
import Footer from './components/footer';
import DocumentationPage from './pages/documents';
import ContactPage from './pages/contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<DocumentationPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;