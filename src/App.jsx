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

      {/* Background video */}
        <video
          ref={videoRef}
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className={`fixed top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      {/* ✅ Main content wrapper */}
      <div
        className={`transition-all duration-1000 justify-between flex flex-col min-h-screen border-x-8 border-black ${darkMode ? "text-white" : "text-black"
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
