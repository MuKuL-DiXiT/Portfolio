import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaKeyboard } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`
        relative w-full sm:mt-0 mt-[400px] py-12 px-6 md:px-24
        ${darkMode ? "bg-gray-900 text-gray-300" : "bg-black text-white"}
        overflow-hidden
      `}
      aria-label="Site Footer"
    >
      {/* Optional subtle gradient overlay for style */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-40"
      />

      <div className="relative max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-12 md:gap-16 justify-between">
        {/* Logo & Description */}
        <section className="flex-shrink-0 md:max-w-xs w-full md:w-auto">
          <h2
            className={`
              text-2xl font-extrabold tracking-wide mb-4
              ${darkMode ? "text-white" : "text-red-500"}
            `}
          >
            Mukul Dixit
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            Passionate about crafting responsive, clean, and modern web
            interfaces. Focused on React, TypeScript, and UI/UX best practices.
          </p>
          <p className="mt-8 text-xs opacity-60">
            © 2025{" "}
            <span className="text-red-500 font-semibold">Mukul Dixit</span>. All
            rights reserved.
          </p>
        </section>

        {/* Keyboard Shortcuts */}
        <section
          aria-label="Keyboard shortcuts"
          className="w-1/2 sm:w-1/3 md:w-auto"
        >
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-5"><FaKeyboard/> Shortcuts</h3>
          <div className="space-y-2 text-sm opacity-90">
            {[
              { keys: "Shift + H", action: "Home" },
              { keys: "Shift + S", action: "Skills" },
              { keys: "Shift + A", action: "About" },
              { keys: "Shift + P", action: "Projects" },
              { keys: "Shift + C", action: "Contact" },
              { keys: "Shift + M", action: "Toggle Dark Mode" },
            ].map(({ keys, action }) => (
              <div key={keys} className="flex items-center justify-between gap-3">
                <span className="text-xs opacity-70">{action}</span>
                <code className={`px-2 py-1 rounded text-xs font-mono ${
                  darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-800'
                }`}>
                  {keys}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Links */}
        <section aria-label="Social media links" className="w-full md:w-auto">
          <h3 className="font-semibold text-lg mb-5">Connect</h3>
          <div className="flex gap-6">
            <a
              href="https://github.com/MuKuL-DiXiT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mukul-dixit-8b945227b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-sky-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/mukul_1608/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            >
              <SiLeetcode size={24}  />
            </a>
            <a
              href="https://t.me/mukuldixit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram profile"
              className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://www.instagram.com/mukul____dixit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
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
