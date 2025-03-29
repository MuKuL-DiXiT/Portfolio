import React from "react";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

const About = ({ darkMode }) => {
  return (
    <div className="flex flex-col flex-wrap items-center font-marker gap-10">
      <div className={`text-3xl ${darkMode ? 'text-orange-200' : 'text-black'}`}>
        <Typewriter
          options={{
            strings: ["About me"],
            loop: true,
            autoStart: true,
            cursor: '',
          }}
        />
      </div>
      <motion.div
        whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <div className={`items-center flex flex-wrap flex-col gap-1 justify-evenly py-1 hover:text-red-600  rounded-lg ${darkMode ? 'bg-orange-200 text-black' : 'bg-black text-yellow-100'} px-20`}>
          <h1>~Graduation~</h1>
          <h1>B.Sc. CS</h1>
          <h1>DBRAU Agra, Up.</h1>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ rotateX: -10, rotateY: 10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <div className={`items-center flex flex-wrap flex-col gap-1 justify-evenly py-1 hover:text-red-600  rounded-lg ${darkMode ? 'bg-orange-200 text-black' : 'bg-black text-yellow-100'} px-20`}>
          <h1>~Masters~</h1>
          <h1>Masters in computer application</h1>
          <h1>Maulana azad National Institute Of Technology, Bhopal</h1>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <div className={`items-center flex flex-wrap flex-col gap-1 justify-evenly py-1 hover:text-red-600  rounded-lg ${darkMode ? 'bg-orange-200 text-black' : 'bg-black text-yellow-100'} px-20`}>
          <h1>~Experience~</h1>
          <h1>Rubiks Club , MBC, Manit Bhopal</h1>
          <h1>Jan 25 to present</h1>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ rotateX: -10, rotateY: 10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <div className={`items-center flex flex-wrap flex-col gap-1 justify-evenly py-1 hover:text-red-600  rounded-lg ${darkMode ? 'bg-orange-200 text-black' : 'bg-black text-yellow-100'} px-20`}>
          DSA and Competitive Programming-- <a href="https://leetcode.com/mukul2427/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg"
              alt="LeetCode Profile" className="w-10 rounded-full p-2 bg-black" />
          </a>
        </div>
      </motion.div>




    </div>
  );
};

export default About;
