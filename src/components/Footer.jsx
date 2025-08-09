import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export default function Footer({ darkMode }) {
  return (
    <footer className={`relative w-full py-10 px-6 md:px-16 bg-black/80 text-white overflow-hidden`}>
      
  
      {/* Content Grid */}
      <div className="relative flex justify-center flex-wrap gap-8 z-10">
        
        {/* Column 1 - Logo & Description */}
        <div className='w-1/3'>
          <h2 className="text-xl font-bold tracking-wide">Mukul Dixit</h2>
          <p className="mt-4 text-sm leading-relaxed opacity-80">
            Passionate about crafting responsive, clean, and modern web interfaces. 
            Focused on React, TypeScript, and UI/UX best practices.
          </p>
          <p className="mt-6 text-xs opacity-70">© 2025 <span className="text-red-500 font-semibold">Mukul Dixit</span>. All rights reserved.</p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><NavLink to="/" className="hover:text-red-400">Home</NavLink></li>
            <li><NavLink to="/About" className="hover:text-red-400">About</NavLink></li>
            <li><NavLink to="/projects" className="hover:text-red-400">Projects</NavLink></li>
            <li><NavLink to="/Contact" className="hover:text-red-400">Contact</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
          <div className="flex gap-4 mb-6">
            <a href="https://github.com/MuKuL-DiXiT" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mukul-dixit-8b945227b/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaLinkedin size={20} />
            </a>
            <a href="https://leetcode.com/mukul2427/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <SiLeetcode size={20} />
            </a>
            <a href="https://t.me/mukuldixit" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTelegram size={20} />
            </a>
            <a href="https://www.instagram.com/mukul____dixit/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
          </div>

         
        </div>
      </div>
    </footer>
  );
}
