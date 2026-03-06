import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // ...existing code...
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LandingAnimation from "./components/LandingAnimation";
import SectionHeader from "./components/SectionHeader";
import Lottie from "lottie-react";
function AppContent({ darkMode, setDarkMode, showLanding }) {
  const videoRef = useRef(null);
  const [fade, setFade] = useState(false);
  const [videoSrc, setVideoSrc] = useState(darkMode ? '/bgVideo.mp4' : '/bgWhite.mp4');
  useEffect(() => {
    setFade(true);
    setVideoSrc(darkMode ? '/bgVideo.mp4' : '/bgWhite.mp4');
    const timer = setTimeout(() => setFade(false), 100);
    return () => clearTimeout(timer);
  }, [darkMode]);

  useEffect(() => {
    const events = (e) => {
      if (e.shiftKey && !e.repeat) {
        switch (e.key.toLowerCase()) {
          case "m":
            setDarkMode((prev) => !prev);
            break;
          case "h":
            window.location.href = "#home";
            break;
          case "a":
            window.location.href = "#about";
            break;
          case "s":
            window.location.href = "#skills";
            break;
          case "p":
            window.location.href = "#projects";
            break;
          case "c":
            window.location.href = "#contacts";
            break;
          default:
            break;
        }
      }
    };
    addEventListener("keydown", events);
    return () => removeEventListener("keydown", events);
  })


  return (
    <>
      {showLanding && <LandingAnimation darkMode={darkMode} />}
      <div
        className={`myDiv hide-scrollbar transition-all duration-1000 min-h-screen overflow-y-auto scroll-smooth flex flex-col border-x-8 border-black ${darkMode
          ? "text-white bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900"
          : "text-black bg-gradient-to-tr from-sky-200 via-white/90 to-sky/200"
          }`}

      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        
        <main className="relative flex flex-col md:mx-32">
          <div class="absolute left-0 sm:flex hidden left-tree"></div>
          <div class="absolute right-0 sm:flex hidden right-tree"></div>
          <div className="absolute right-0 sm:right-20 top-0 h-full w-6 border-l-2 border-r-2 border-black dark:border-gray-600 opacity-60 dark:opacity-40" style={{backgroundImage: "repeating-linear-gradient(45deg, gray 0px, gray 1px, transparent 0px, transparent 6px)", backgroundSize: "100% 100%", color: "black"}}></div>
          <div className="absolute left-0 sm:left-20 top-0 h-full w-6 border-l-2 border-r-2 border-black dark:border-gray-600 opacity-60 dark:opacity-40" style={{backgroundImage: "repeating-linear-gradient(45deg, gray 0px, gray 1px, transparent 0px, transparent 6px)", backgroundSize: "100% 100%", color: "black"}}></div>
          <section id="home" className="snap-start flex flex-col items-center justify-center gap-10 pt-12 md:pt-0">
            <Home darkMode={darkMode} />
          </section>
          <section id="skills" className="snap-start flex flex-col items-center justify-center gap-10 pt-20">
            <SectionHeader title="Skills" darkMode={darkMode} />
            <Skills darkMode={darkMode} />
          </section>
          <section id="projects" className="snap-start min-h-screen flex flex-col items-center justify-center gap-10 pt-20">
            <SectionHeader title="Projects" darkMode={darkMode} />
            <Projects darkMode={darkMode} />
          </section>
          <section id="contacts" className="snap-start min-h-screen flex flex-col items-center justify-center gap-10 mb:20 md:mb-0">
            <SectionHeader title="Contact" darkMode={darkMode} />
            <Contacts darkMode={darkMode} />
          </section>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLanding(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AppContent darkMode={darkMode} setDarkMode={setDarkMode} showLanding={showLanding} />
    </Router>
  );
}