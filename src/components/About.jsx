import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

// Reusable Card Component
const InfoCard = ({ title, content, link, linkText, darkMode, isActive }) => {
  return (
    <motion.div
      initial={false}
      animate={isActive ? "active" : "inactive"}
      variants={{
        active: {
          opacity: 1,
          height: "auto",
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" }
        },
        inactive: {
          opacity: 0,
          height: 0,
          scale: 0.8,
          transition: { duration: 0.3, ease: "easeIn" }
        },
      }}
      className={`flex flex-col items-center gap-2 p-4 md:p-6 rounded-2xl transition-all duration-300 overflow-hidden ${isActive
        ? darkMode
          ? "bg-gray-700 text-gray-200 shadow-lg shadow-gray-900"
          : "bg-black text-white shadow-lg shadow-gray-800"
        : "opacity-0 max-h-0 p-0"
        }`}
    >
      {isActive && (
        <>
          {title && <h1 className="text-md md:text-lg font-bold">{title}</h1>}
          {content.map((item, index) => (
            <p key={index} className="text-sm md:text-base">{item}</p>
          ))}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              {linkText === "LeetCode" ? (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg"
                  alt="LeetCode Profile"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full p-1 md:p-2 bg-black"
                />
              ) : (
                <span className="text-blue-500 hover:underline text-sm md:text-base">
                  {linkText}
                </span>
              )}
            </a>
          )}
        </>
      )}
    </motion.div>
  );
};

const About = ({ darkMode }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const cardData = [
    {
      title: "~ Graduation ~",
      content: ["B.Sc. CS", "DBRAU Agra, UP"],
      link: null,
      linkText: null,
      miniContent: "Graduation",
      miniIcon: null,
    },
    {
      title: "~ Masters ~",
      content: ["Masters in Computer Application", "MANIT Bhopal"],
      link: null,
      linkText: null,
      miniContent: "Masters",
      miniIcon: null,
    },
    {
      title: "~ Experience ~",
      content: ["Rubiks Club, MBC, MANIT Bhopal", "Jan 25 to Present"],
      link: null,
      linkText: null,
      miniContent: "Experience",
      miniIcon: null,
    },
    {
      title: null,
      content: ["DSA and Competitive Programming"],
      link: "https://leetcode.com/mukul2427/",
      linkText: "LeetCode",
      miniContent: "LeetCode",
      miniIcon: "leetcode",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-10 py-6 md:py-10 px-4 text-center relative">
      {/* Heading */}
      
      <p className={`text-center text-lg md:text-xl max-w-3xl px-6 tracking-wide ${darkMode ? "text-white/80" : "text-black/80"}`}>
        Hey there! I'm <span className="font-bold bg-clip-text animate-pulse text-transparent bg-gradient-to-tr from-green-500 via-purple-600 to-amber-700">Mukul Dixit</span>, a passionate full-stack developer currently pursuing my MCA from NIT Bhopal. I love building meaningful web applications, solving challenging problems, and creating polished user experiences.
      </p>

      <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-6 md:gap-10 py-6 md:py-10 px-4 text-center relative">
        {/* Desktop: Vertical Timeline */}
        <div className="hidden md:block  max-w-4xl mt-8 relative">
          {/* Vertical line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-1 rounded-full ${darkMode ? "bg-black" : "bg-black"}`}
          ></div>

          {/* Timeline items */}
          <div className="pl-20 space-y-12">
            {cardData.map((card, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Point on the line */}
                <div className="absolute -left-8 top-0 flex flex-col items-center">
                  <motion.div
                    className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer relative z-20 transition-all duration-300 ease-in-out ${activeCardIndex === index
                      ? darkMode
                        ? "bg-black shadow-gray-300 shadow-lg"
                        : "bg-black shadow-gray-800 shadow-lg"
                      : darkMode
                        ? "bg-black"
                        : "bg-black"
                      }`}
                    onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className={`font-semibold text-gray-400`}>
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Pulse animation for active dot */}
                  {activeCardIndex === index && (
                    <motion.div
                      className={`absolute inset-0 rounded-full animate-ping ${darkMode ? "bg-black" : "bg-black"
                        }`}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </div>

                {/* Heading beside the point */}
                <div
                  className={`text-left cursor-pointer ${darkMode ? "text-gray-400" : "text-black"}`}
                  onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
                >
                  <h3 className="font-bold text-xl">
                    {card.miniContent}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Horizontal Timeline */}
        <div className="md:hidden w-full max-w-2xl mt-8 relative">
          {/* Horizontal line */}
          <div
            className={`absolute left-8 right-8 h-1 rounded-full bg-black`}
          ></div>

          {/* Points on the line */}
          <div className="flex justify-between px-8">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer relative z-20 transition-all duration-300 ease-in-out ${activeCardIndex === index
                  ? darkMode
                    ? "bg-black shadow-black shadow-lg"
                    : "bg-black shadow-gray-800 shadow-lg"
                  : darkMode
                    ? "bg-black"
                    : "bg-black"
                  }`}
                onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className={`font-semibold text-gray-400`}>
                  {index + 1}
                </span>

                {/* Pulse animation for active dot */}
                {activeCardIndex === index && (
                  <motion.div
                    className={`absolute inset-0 rounded-full animate-ping ${darkMode ? "bg-black" : "bg-black"
                      }`}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile headings below the line */}
          <div className="flex justify-between px-4 mt-2">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`text-xs text-center cursor-pointer ${darkMode ? "text-gray-400" : "text-black"}`}
                onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
              >
                {card.miniContent}
              </div>
            ))}
          </div>
        </div>

        {/* Container for the actively displayed card */}
        <div className="w-full max-w-2xl mt-8 md:mt-10">
          <AnimatePresence mode="wait">
            {activeCardIndex !== null && (
              <InfoCard
                key={activeCardIndex}
                darkMode={darkMode}
                isActive={true}
                title={cardData[activeCardIndex].title}
                content={cardData[activeCardIndex].content}
                link={cardData[activeCardIndex].link}
                linkText={cardData[activeCardIndex].linkText}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default About;