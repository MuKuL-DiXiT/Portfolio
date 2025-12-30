import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaKeyboard } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`
        relative w-full sm:mt-0 mt-[400px] p-5 px-6 md:px-24 border border-gray-500
        ${darkMode ? "bg-gray-900 text-gray-300" : "bg-black/20 text-white"}
        overflow-hidden
      `}
      aria-label="Site Footer"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-40"
      />

      <div className="relative max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-12 md:gap-16 justify-between">
        <section className="flex-shrink-0 md:max-w-xs w-full md:w-auto">
          <h2
            className={`
              font-extrabold tracking-wide
              ${darkMode ? "text-white" : "text-black"}
            `}
          >
            Built with love by <span className="text-red-500">Mukul Dixit</span> 
          </h2>
        </section>


        {/* Social Media Links */}
        <section aria-label="Social media links" className="w-full md:w-auto">
          <div className="flex gap-6">
            <a
              href="https://github.com/MuKuL-DiXiT"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mukul-dixit-8b945227b/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:text-sky-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/mukul_1608/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              className="hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            >
              <SiLeetcode size={24}  />
            </a>
            <a
              href="https://t.me/mukuldixit"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://www.instagram.com/mukul____dixit/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="hover:text-pink-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
