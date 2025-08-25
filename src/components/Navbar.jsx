import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Code, Folder, Contact, Sun, Moon, Menu } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const navItems = [
        { to: "/", label: "Home", icon: Home },
        { to: "/Skills", label: "Skills", icon: Code },
        { to: "/Projects", label: "Projects", icon: Folder },
        { to: "/Contacts", label: "Contact", icon: Contact },
        { to: "/About", label: "About", icon: User },
    ];

    const navClass = `group relative w-12 h-12 sm:w-16 lg:w-20 flex items-center justify-center`;

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            {/* Top Navbar */}
            <div className={`px-4 py-3 flex justify-evenly items-center ${darkMode ? "text-white" : "text-black"}`}>
                {/* Brand */}
               

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    <div
                        className={`${darkMode ? "border-white text-white" : "border-black text-black"
                            }  border border-t-2 ml-10 rounded-full px-6 flex items-center flex-wrap justify-center gap-2 sm:gap-6 lg:gap-10 transition-all`}
                    >
                        {navItems.map(({ to, label, icon: Icon }) => (
                            <NavLink key={to} to={to} className={navClass}>
                                {({ isActive }) => (
                                    <>
                                        <Icon className={`absolute transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`} />
                                        <span className={`absolute transition-opacity duration-300 text-sm sm:text-base ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                                            {label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                    
                    {/* Theme toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`rounded-full duration-500 border-b-2 ${darkMode ? "border-white" : "border-black"}`}
                    >
                        {darkMode ? <Sun /> : <Moon />}
                    </button>
                </div>
                <div
                        className={`md:hidden flex justify-start w-full`}
                    >
                        {navItems.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    `transition-all px-4 py-1 rounded-full font-semibold text-sm ${isActive
                                        ? darkMode
                                            ? "bg-white text-black"
                                            : "bg-black text-white"
                                        : "hidden"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
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
                    {navItems.map(({ to, label, icon: Icon }) => (
                        <NavLink key={to} to={to} className={navClass} onClick={() => setIsSidebarOpen(false)}>
                            {({ isActive }) => (
                                <div className="flex flex-col items-center">
                                    <Icon className={`transition-all ${isActive ? "text-orange-600" : ""}`} />
                                    
                                </div>
                            )}
                        </NavLink>
                    ))}
                </div>
            )}

            {/* Mobile Center Active Label */}
            {isSidebarOpen && (
                <div className={`md:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full text-lg font-semibold shadow-xl z-30 transition-all ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                    {
                        navItems.map(({ to, label }) => (
                            <NavLink key={to} to={to}>
                                {({ isActive }) => isActive && label}
                            </NavLink>
                        ))
                    }
                </div>
            )}
        </div>
    );
}
