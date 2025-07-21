import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaReact } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer({ darkMode }) {
  return (
    <footer className={`w-full   py-6 px-4 flex flex-col sm:flex-row justify-between items-center bg-black/70 ${darkMode? "bg-white/30 text-black":"bg-black/70 text-white"}  shadow-inner`}>
      
      {/* Left */}
      <div className="text-sm font-semibold tracking-wide">
        ©2025 <span className="text-red-600">Mukul Dixit</span>
      </div>

      {/* Center - MD */}
      <div className="text-3xl font-marker hidden sm:flex text-white select-none tracking-widest">MD</div>

      {/* Right - Icons */}
      <div className="flex gap-5">
        <a href="https://github.com/MuKuL-DiXiT" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors duration-300">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/mukul-dixit-8b945227b/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors duration-300">
          <FaLinkedin size={20} />
        </a>
        <a href="https://leetcode.com/mukul2427/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <SiLeetcode size={20} />
        </a>
        <a href="https://t.me/mukuldixit" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
          <FaTelegram size={20} />
        </a>
        <a href="https://www.instagram.com/mukul____dixit/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
}
