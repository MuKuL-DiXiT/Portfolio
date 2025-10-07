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
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const respons = await fetch('/typing.json');
      const json = await respons.json();
      setData(json);
    }
    fetchData();
  }, []);
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
      {showLanding && <LandingAnimation />}

      {/* Scrollable, snap-to-section container */}
      <div
        className={`transition-all duration-1000 min-h-screen overflow-y-auto scroll-smooth flex flex-col border-x-8 border-black ${darkMode
          ? "text-white bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900"
          : "text-black bg-gradient-to-tr from-sky-200 via-white/90 to-sky/200"
          }`}

      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="flex flex-col">
          <section id="home" className="snap-start min-h-screen flex flex-col items-center justify-center gap-10 pt-20">
            <Home darkMode={darkMode} />
          </section>
          <section id="about" className="snap-start min-h-screen flex flex-col items-center justify-center gap-10 pt-20">
            <SectionHeader title="About" darkMode={darkMode} />
            <div className="flex flex-col md:flex-row items-start  justify-center gap-10">
              <About darkMode={darkMode} />
              <div className="w-full max-w-5xl mx-auto scale-80  mb-12">
                <Lottie animationData={data} loop={true} className="md:mt-32"/>
              </div>
            </div>
          </section>
          <section id="skills" className="snap-start min-h-screen flex flex-col items-center justify-center gap-10 pt-20">
            <SectionHeader title="Skills" darkMode={darkMode} />
            <Skills darkMode={darkMode} />
          </section>

          <section id="projects" className="snap-start min-h-screen flex flex-col items-center justify-center gap-10 pt-20">
            <SectionHeader title="Projects" darkMode={darkMode} />
            <Projects darkMode={darkMode} />
          </section>
          <section id="contacts" className="snap-start min-h-screen flex flex-col items-center justify-center gap-10">
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
  // ...existing code...
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