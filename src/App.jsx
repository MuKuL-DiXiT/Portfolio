import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LandingAnimation from "./components/LandingAnimation";
function AppContent({ darkMode, setDarkMode, showLanding }) {
  const location = useLocation();
  const videoRef = useRef(null);
  const [fade, setFade] = useState(false);
  const [videoSrc, setVideoSrc] = useState(darkMode ? '/bgVideo.mp4' : '/bgWhite.mp4');
  useEffect(() => {
        setFade(true);
        setVideoSrc(darkMode ? '/bgVideo.mp4' : '/bgWhite.mp4');
        const timer = setTimeout(() => {
          setFade(false);
        }, 100);
        return () => clearTimeout(timer); 
      }, [darkMode]);
  return (
    <>
      {showLanding && <LandingAnimation />}

      
      {/* ✅ Main content wrapper */}
      <div
        className={`transition-all duration-1000 justify-evenly flex flex-col min-h-screen border-x-8 border-black bg-gradient-to-tr ${darkMode ? "text-white from-black via-teal-950 to-black " : "text-black from-sky-300 via-white to-white"
          }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/Skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/About" element={<About darkMode={darkMode} />} />
          <Route path="/Projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/Contacts" element={<Contacts darkMode={darkMode} />} />
        </Routes>
        {location.pathname !== "/" && <Footer darkMode={darkMode} />}
      </div>
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AppContent darkMode={darkMode} setDarkMode={setDarkMode} showLanding={showLanding} />
    </Router>
  );
}
