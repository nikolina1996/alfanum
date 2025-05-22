import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Medicta from './pages/Medicta';
import Transcripta from './pages/Transcripta';
import Iurisdicta from './pages/Iurisdicta';
import Ansintetizator from './pages/Ansintetizator';
import Anreader from './pages/Anreader';
import CitajMi from './pages/CitajMi';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './components/LanguageContext';


function App() {
  const [activeItem, setActiveItem] = useState('O nama');

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop /> {/* ⬅ Dodato ovde */}
        <div className="App">
          <Header setActiveItem={setActiveItem} />
          <div className="content-container">
            <Routes >
              <Route path="/" element={<MainContent />} />
              <Route path="/company" element={<Company />} />
              <Route path="/medicta" element={<Medicta />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/transcripta" element={<Transcripta />} />
              <Route path="/iurisdicta" element={<Iurisdicta />} />
              <Route path="/an-sintetizator" element={<Ansintetizator />} />
              <Route path="/an-reader" element={<Anreader />} />
              <Route path="/citaj-mi" element={<CitajMi />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
