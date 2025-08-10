import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

// Calendar icon component
const CalendarIcon = ({ darkMode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block w-5 h-5 mr-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const InfoCard = ({ title, content, link, linkText, darkMode, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, height: 0 }}
      animate={
        isActive
          ? { opacity: 1, scale: 1, height: "auto", transition: { duration: 0.5, ease: "easeOut" } }
          : { opacity: 0, scale: 0.9, height: 0, transition: { duration: 0.3, ease: "easeIn" } }
      }
      className={`
        w-full max-w-md font-playwright mx-auto flex flex-col p-6 rounded-xl shadow-lg
        overflow-hidden border
        transition-colors duration-500
        ${darkMode
          ? "bg-black/50 border-gray-800 text-white/80"
          : "bg-black/50 border-gray-200 text-gray-800"
        }
      `}
    >
      {isActive && (
        <>
          {title && (
            <h2 className="text-xl md:text-2xl mb-4 border-b-2 border-black pb-2">
              {title}
            </h2>
          )}
          <div className="flex flex-col gap-3 mb-4">
            {content.map((item, index) => {
              // Detect if this item looks like a date range for adding calendar icon
              const isDateRange = /\d{4} ?- ?\d{4}/.test(item);
              return (
                <p key={index} className="text-base md:text-lg leading-relaxed flex items-center">
                  {isDateRange && <CalendarIcon darkMode={darkMode} />}
                  {item}
                </p>
              );
            })}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800
                font-medium text-base md:text-lg transition-colors duration-300
              `}
            >
              {linkText === "LeetCode" ? (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg"
                  alt="LeetCode Logo"
                  className={`w-8 h-8 rounded-full p-1
                    ${darkMode ? "bg-gray-900" : "bg-indigo-100"}`}
                />
              ) : null}
              <span>{linkText}</span>
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
      title: "Graduation",
      content: ["B.Sc. CS", "DBRAU Agra, UP", "2020 - 2023"], // Added date range
      link: null,
      linkText: null,
      miniContent: "Graduation",
      miniIcon: null,
    },
    {
      title: "Masters",
      content: ["Masters in Computer Applications", "MANIT Bhopal", "2024 - 2027"], // Added date range
      link: null,
      linkText: null,
      miniContent: "Masters",
      miniIcon: null,
    },
    {
      title: "Experience",
      content: ["Rubiks Club, MBC, MANIT Bhopal", "Jan 25 to Present"],
      link: null,
      linkText: null,
      miniContent: "Experience",
      miniIcon: null,
    },
  ];

  return (
    <div className="w-full mt-16 flex flex-col items-center gap-6 md:gap-10 py-6 md:py-10 px-4 text-center relative">
     
      <div className="w-full flex flex-col md:justify-center items-center gap-6 md:gap-10 py-6 md:py-10 px-4 text-center relative">
       
       

        {/* Mobile: Horizontal Timeline */}
        <div className=" w-full max-w-2xl mt-8 relative">
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
      <p className={`text-center text-lg md:text-xl max-w-3xl px-6 tracking-wide ${darkMode ? "text-white/80" : "text-black/80"}`}>
       I am a passionate full-stack developer dedicated to crafting innovative web solutions. With a love for problem-solving and a keen eye for detail, I strive to build seamless user experiences that are both functional and visually appealing. Constantly learning and adapting, I embrace challenges as opportunities to grow and push the boundaries of technology.
      </p>
    </div>
  );
};

export default About;
