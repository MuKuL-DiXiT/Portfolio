import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Code, Folder, Contact, Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
    const navClass = ({ isActive }) =>
        `flex items-center gap-2 sm:gap-3 ${isActive ? "text-red-600" : ""}`;

    return (
        <div className="fixed top-0 left-0 w-full z-50 mt-3">
            <div className={`border-b-2 px-4 py-2 flex justify-between items-center ${darkMode ? 'text-orange-200 border-b-orange-200' : 'text-black border-b-black'}`}>
                
                {/* Brand Name */}
                <div className="font-marker text-3xl text-red-600">
                    <NavLink to="/" className={navClass}>
                        MD
                    </NavLink>
                </div>

                {/* Capsule Nav Links */}
                <div className={`${darkMode?"bg-orange-100 text-black":"bg-black text-white"} rounded-full px-4 py-2 flex items-center flex-wrap justify-center gap-2 sm:gap-6 lg:gap-10 transition-all`}>
                    <NavLink to="/" className={navClass}><Home /></NavLink>
                    <NavLink to="/Skills" className={navClass}><Code /></NavLink>
                    <NavLink to="/Projects" className={navClass}><Folder /></NavLink>
                    <NavLink to="/Contacts" className={navClass}><Contact /></NavLink>
                    <NavLink to="/About" className={navClass}><User /></NavLink>
                </div>

                {/* Dark Mode Toggle */}
                <div>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="rounded-full duration-500 transition-colors"
                    >
                        {darkMode ? <Sun /> : <Moon />}
                    </button>
                </div>
            </div>
        </div>
    );
}
