import React from "react";
import { Home, User, Code, Folder, Contact, Sun, Moon, Menu } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("home");

    // Track which section is currently in view
    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "skills", "about", "projects", "contacts"];
            const container = document.querySelector('.h-screen.overflow-y-auto'); // Your main container
            
            if (!container) return;
            
            const containerRect = container.getBoundingClientRect();
            const scrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            
            // Find which section is most visible
            let maxVisibleArea = 0;
            let activeSection = "home";
            
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (!section) return;
                
                const sectionRect = section.getBoundingClientRect();
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                // Calculate visible area of this section
                const visibleTop = Math.max(0, scrollTop - sectionTop);
                const visibleBottom = Math.min(sectionHeight, scrollTop + containerHeight - sectionTop);
                const visibleArea = Math.max(0, visibleBottom - visibleTop);
                
                if (visibleArea > maxVisibleArea) {
                    maxVisibleArea = visibleArea;
                    activeSection = sectionId;
                }
            });
            
            setActiveSection(activeSection);
        };

        const container = document.querySelector('.h-screen.overflow-y-auto');
        if (container) {
            container.addEventListener("scroll", handleScroll);
            handleScroll(); // Check on mount
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const navItems = [
        { to: "#home", label: "Home", icon: Home },
        { to: "#about", label: "About", icon: User },
        { to: "#skills", label: "Skills", icon: Code },
        { to: "#projects", label: "Projects", icon: Folder },
        { to: "#contacts", label: "Contact", icon: Contact },
    ];
    const hint =['shift+h', 'shift+a', 'shift+s', 'shift+p', 'shift+c']

    const navClass = `group relative w-12 h-12 sm:w-16 lg:w-20 flex items-center justify-center`;

    return (
        <div className="fixed   top-0 left-3 right-5 w-full  z-50">
            {/* Top Navbar */}
            <div className={`px-4 py-3 flex justify-evenly items-center ${darkMode ? "text-white" : "text-black"}`}>
                {/* Brand */}
               

                {/* Desktop Nav */}
                <div className="hidden md:flex  items-center gap-4">
                    <div
                        className={`${darkMode ? "border-white bg-black/20 text-white" : "border-black bg-white/20 text-black"
                            } backdrop-blur-md  before:[mask-image:linear-gradient(white, transparent)] border border-t-2 ml-10 rounded-full px-6 flex items-center flex-wrap justify-center gap-2 sm:gap-6  lg:gap-10 transition-all`}
                    >
                        {navItems.map(({ to, label, icon: Icon }, index) => {
                            const isActive = activeSection === to.slice(1); // Remove # from to
                            return (
                                <a key={to} href={to} className={navClass}>
                                    <Icon className={`absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0`} />
                                    <span className={`absolute font-marker transition-opacity duration-300 text-sm sm:text-base opacity-0 group-hover:opacity-100`}>
                                        {label}
                                    </span>
                                    {hint[index] && (
                                        <span className="absolute group-hover:block bg-slate-500 rounded-md p-2  hidden -bottom-7 text-xs opacity-100 select-none">
                                            {hint[index]}
                                        </span>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                    
                    {/* Theme toggle */}
                    <div className="group mt-2">
                        <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`rounded-full duration-500 border-b-2 ${darkMode ? "border-white" : "border-black"}`}
                    >
                        {darkMode ? <Sun /> : <Moon />}
                    </button>
                    <span className="absolute bg-gray-500 rounded-md group-hover:block hidden -bottom-3 p-2 text-xs opacity-100 select-none">
                        shift+m
                    </span>
                    </div>
                </div>
                <div className={`md:hidden flex justify-start w-full`}>
                        {navItems.map(({ to, label }) => {
                            const isActive = activeSection === to.slice(1);
                            return (
                                <a
                                    key={to}
                                    href={to}
                                    className={`transition-all px-4 py-1 rounded-full font-semibold text-sm ${isActive
                                        ? darkMode
                                            ? "bg-white text-black"
                                            : "bg-black text-white"
                                        : "hidden"
                                    }`}
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex gap-3 items-center">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`rounded-full duration-500 border-b-2 ${darkMode ? "border-white" : "border-black"}`}
                    >
                        {darkMode ? <Sun /> : <Moon />}
                    </button>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <Menu />
                    </button>
                </div>
            </div>

            {/* Mobile navbar */}
            {isSidebarOpen && (
                <div className={`fixed top-0 left-0 h-20 w-full bg-opacity-90 backdrop-blur-sm z-40 ${darkMode ? "bg-white text-black" : "bg-black text-white"} flex  justify-center items-center`}>
                    {navItems.map(({ to, label, icon: Icon }) => {
                        const isActive = activeSection === to.slice(1);
                        return (
                            <a key={to} href={to} className={navClass} onClick={() => setIsSidebarOpen(false)}>
                                <div className="flex flex-col items-center">
                                    <Icon className={`transition-all ${isActive ? "text-orange-600" : ""}`} />
                                </div>
                            </a>
                        );
                    })}
                </div>
            )}

            {/* Mobile Center Active Label */}
            {isSidebarOpen && (
                <div className={`md:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full text-lg font-semibold shadow-xl z-30 transition-all ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                    {navItems.find(({ to }) => activeSection === to.slice(1))?.label}
                </div>
            )}
        </div>
    );
}
