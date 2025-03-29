import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Home, User, Code, Folder, Contact, Sun, Moon, Menu } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {

    return (
        <div className={`mt-5 border-b-2 flex-wrap ${darkMode ? 'text-orange-200 border-b-orange-200' : 'text-black border-b-black'} flex justify-evenly rounded-full `}>
            <div className="font-marker text-3xl text-red-600">
                MD
            </div>
            <div className="flex flex-wrap justify-center sm:gap-10 md:gap-8 lg:gap-5 items-baseline">
                <div>
                    <NavLink to="/" className={({ isActive }) => `flex items-center ml-3 gap-4 ${isActive && 'text-red-600'}`}>
                        <Home />
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Skills" className={({ isActive }) => `flex items-center ml-3 gap-4 ${isActive && 'text-red-600'}`}>
                        <Code />
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Projects" className={({ isActive }) => `flex items-center ml-3 gap-4 ${isActive && 'text-red-600'}`}>
                        <Folder />
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Contacts" className={({ isActive }) => `flex items-center ml-3 gap-4 ${isActive && 'text-red-600'}`}>
                        <Contact />
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/About" className={({ isActive }) => `flex items-center ml-3 gap-4 ${isActive && 'text-red-600'}`}>
                        <User />
                    </NavLink>
                </div>
            </div>
            <div>
                <button onClick={() => setDarkMode(!darkMode)} className="mb-6 rounded-full ">
                    {darkMode ? <Sun/> : <Moon/>}
                </button>
            </div>
        </div>
    );
}