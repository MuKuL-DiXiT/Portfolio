import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LandingAnimation from "./components/LandingAnimation";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    // Remove landing after animation completes (3s display + 1.2s fade out)
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 4200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showLanding && <LandingAnimation />}
      
      <div
        className={`transition-colors duration-1000 flex flex-col min-h-screen ${
          darkMode ? 'bg-[url("/bg.gif")] bg-cover bg-center' : ''
        } border-x-8 border-black`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/Skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/About" element={<About darkMode={darkMode} />} />
          <Route path="/Projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/Contacts" element={<Contacts darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}
