import React, { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";
import SectionHeader from "./components/SectionHeader";
import SideBorders from "./components/SideBorders";

const Contacts = lazy(() => import("./components/Contacts"));
const Footer = lazy(() => import("./components/Footer"));

function AppContent({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState("home");

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
  }, [setDarkMode]);

  useEffect(() => {
    const sections = ["home", "skills", "projects", "contacts"];
    
    const observerOptions = {
      root: null, // Viewport
      rootMargin: "-30% 0px -40% 0px", // Trigger when section is centered
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`myDiv hide-scrollbar transition-colors duration-500 min-h-screen overflow-y-auto scroll-smooth flex flex-col border-x-8 border-black relative ${
        darkMode ? "text-slate-100" : "text-slate-900"
      }`}
    >
      {/* Light Background Layer */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out -z-10"
        style={{
          opacity: darkMode ? 0 : 1,
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 24px 24px',
          backgroundColor: '#fcfbf4'
        }}
      />
      {/* Dark Background Layer */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out -z-10"
        style={{
          opacity: darkMode ? 1 : 0,
          background: `radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.09) 0%, transparent 55%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 50%), #070913`
        }}
      />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />

      <main className="relative z-10 flex flex-col lg:mx-32">
        <div id="left-border-line" className="hidden lg:block absolute left-20 top-0 h-full w-8 border-l-2 border-r-2 border-black dark:border-gray-600 opacity-60 dark:opacity-40" style={{backgroundImage: "repeating-linear-gradient(45deg, gray 0px, gray 1px, transparent 0px, transparent 6px)", backgroundSize: "100% 100%", color: "black"}} />
        <SideBorders side="left" darkMode={darkMode} targetId="left-border-line" activeSection={activeSection} />

        <div id="right-border-line" className="hidden lg:block absolute right-20 top-0 h-full w-8 border-l-2 border-r-2 border-black dark:border-gray-600 opacity-60 dark:opacity-40" style={{backgroundImage: "repeating-linear-gradient(45deg, gray 0px, gray 1px, transparent 0px, transparent 6px)", backgroundSize: "100% 100%", color: "black"}} />
        <SideBorders side="right" darkMode={darkMode} targetId="right-border-line" activeSection={activeSection} />
        
        <section id="home" className="snap-start flex flex-col items-center justify-center gap-6 pt-12 md:pt-0 min-h-[85vh]">
          <Home darkMode={darkMode} />
        </section>
        <section id="skills" className="snap-start flex flex-col items-center justify-center gap-6 py-12 md:py-16">
          <SectionHeader title="Skills" darkMode={darkMode} />
          <Skills darkMode={darkMode} />
        </section>
        <section id="projects" className="snap-start flex flex-col items-center justify-center gap-6 py-12 md:py-16">
          <SectionHeader title="Projects" darkMode={darkMode} />
          <Projects darkMode={darkMode} />
        </section>
        <section id="contacts" className="snap-start flex flex-col items-center justify-center gap-6 py-12 md:py-16 mb-12 md:mb-0">
          <SectionHeader title="Contact" darkMode={darkMode} />
          <Suspense fallback={<div className="h-48 w-full flex items-center justify-center text-sm opacity-50 font-mono">Loading form...</div>}>
            <Contacts darkMode={darkMode} />
          </Suspense>
        </section>
        <Suspense fallback={<div className="h-20 w-full" />}>
        <Footer darkMode={darkMode} />
      </Suspense>
      </main>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <AppContent darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}