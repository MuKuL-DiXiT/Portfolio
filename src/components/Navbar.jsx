import React, { useEffect, useState, memo } from "react";
import { Home, Code, Folder, Contact, Sun, Moon, Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = memo(function Navbar({ darkMode, setDarkMode, activeSection }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // Check on mount
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navItems = [
        { to: "#home", label: "Home", icon: Home },
        { to: "#skills", label: "Skills", icon: Code },
        { to: "#projects", label: "Projects", icon: Folder },
        { to: "#contacts", label: "Contact", icon: Contact },
    ];
    const hint = ['shift+h', 'shift+s', 'shift+p', 'shift+c'];

    const navClass = `group relative w-12 h-12 sm:w-16 lg:w-20 flex items-center justify-center rounded-full transition-all duration-300`;

    return (
        <div className={`fixed ${scrolled ? "top-4" : "top-0"} left-0 right-0 w-full z-50 transition-all duration-500 flex justify-center px-4`}>
            {/* Top Navbar */}
            <div className={`w-full max-w-5xl flex justify-between items-center py-2 ${darkMode ? "text-white" : "text-black"}`}>
                
                {/* Brand - Mobile Only */}
                <div className="md:hidden flex-shrink-0">
                    <div className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                        darkMode 
                            ? "shiny-glass-nav-dark text-white" 
                            : "shiny-glass-nav-light text-black"
                    }`}>
                        <span className="text-xl font-bold font-marker">
                         {"<mukul/>"}
                        </span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 mx-auto">
                    <div
                        className={`${
                            darkMode 
                                ? "shiny-glass-nav-dark text-slate-100" 
                                : "shiny-glass-nav-light text-slate-800"
                        } ${
                            scrolled ? "px-6 py-1 gap-2 justify-center" : "justify-between gap-6 py-2 px-10"
                        } rounded-full flex items-center duration-500 transition-all`}
                    >
                        {navItems.map(({ to, label, icon: Icon }, index) => {
                            const isActive = activeSection === to.slice(1);
                            return (
                                <a 
                                    key={to} 
                                    href={to} 
                                    className={`${navClass} ${
                                        isActive 
                                            ? "text-indigo-500 dark:text-indigo-400" 
                                            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavPill"
                                            className="absolute inset-1 rounded-full bg-slate-400/10 dark:bg-white/5 border border-slate-400/20 dark:border-white/10 -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <Icon size={18} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75 opacity-100" />
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 text-xs sm:text-sm opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 whitespace-nowrap text-black dark:text-white">
                                        {label}
                                    </span>
                                    {hint[index] && (
                                        <span className="absolute group-hover:flex items-center px-1.5 py-0.5 rounded border border-white/15 bg-slate-900/90 text-[9px] text-slate-350 font-mono hidden -bottom-7 shadow-md select-none transition-all duration-300">
                                            {hint[index]}
                                        </span>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                    
                    {/* Theme toggle */}
                    <div className="group relative">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2.5 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
                                darkMode 
                                    ? "bg-slate-900/80 border-white/10 text-amber-400 hover:bg-slate-800" 
                                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                            }`}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                        <span className="absolute bg-slate-900/95 border border-white/10 rounded px-1.5 py-0.5 group-hover:block hidden -bottom-7 right-0 text-[9px] text-slate-350 font-mono select-none">
                            shift+m
                        </span>
                    </div>
                </div>

                <div className="md:hidden flex justify-center items-center flex-grow px-1 overflow-hidden">
                    {navItems.map(({ to, label }) => {
                        const isActive = activeSection === to.slice(1);
                        return (
                            <a
                                key={to}
                                href={to}
                                className={`transition-all duration-300 px-3 py-1 rounded-full font-semibold text-xs border truncate ${
                                    isActive
                                        ? darkMode
                                            ? "bg-slate-100 border-slate-100 text-slate-950 shadow-sm"
                                            : "bg-slate-900 border-slate-900 text-slate-50 shadow-sm"
                                        : "hidden"
                                }`}
                            >
                                {label}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex gap-2 items-center flex-shrink-0">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded-full border transition-all duration-300 ${
                            darkMode ? "border-white/10 text-amber-400 bg-slate-900/50" : "border-black/10 text-slate-700 bg-white/50"
                        }`}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <Sun size={14} /> : <Moon size={14} />}
                    </button>
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`p-2 rounded-full border transition-all duration-300 ${
                            darkMode ? "border-white/10 text-white bg-slate-900/50" : "border-black/10 text-black bg-white/50"
                        }`}
                        aria-label="Toggle navigation menu"
                    >
                        <Menu size={14} />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isSidebarOpen && (
                <div className={`md:hidden absolute top-full left-4 right-4 mt-2 p-3 rounded-2xl shadow-2xl backdrop-blur-xl border transition-all duration-300 flex flex-col gap-1.5 ${
                    darkMode 
                        ? "shiny-glass-nav-dark border-white/10 text-white" 
                        : "shiny-glass-nav-light border-black/10 text-black"
                }`}>
                    {navItems.map(({ to, label, icon: Icon }) => {
                        const isActive = activeSection === to.slice(1);
                        return (
                            <a 
                                key={to} 
                                href={to} 
                                className={`flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                                    isActive 
                                        ? "bg-slate-500/10 text-indigo-500 dark:text-indigo-400 font-bold" 
                                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-500/5"
                                }`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <Icon size={16} />
                                <span className="font-marker text-xs tracking-wide">{label}</span>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
});

export default Navbar;
