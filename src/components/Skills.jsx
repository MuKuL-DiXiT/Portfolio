import React from "react";
import  Typewriter  from 'typewriter-effect';
import "@fontsource/sour-gummy"; 

import { FaJs, FaReact, FaHtml5, FaCss3, FaDatabase} from "react-icons/fa";

export default function Skills({darkMode}){
    return (
        <div className={`flex flex-col min-h-screen justify-evenly text-center items-center ${darkMode ? 'text-orange-100' : 'text-black'}`}>
            <div className={`flex flex-col font-marker`}>
                <h1 className={`font-marker text-red-600 text-5xl `}>Skills</h1>
                <Typewriter
                 options={{
                    strings : ["My technical level"],
                    autoStart : true,
                    loop : true,
                    cursor : '',
                 }}
                />
            </div>
            <div className="w-2/3 text-wrap font-sourGummy">
            I am a developer skilled in HTML, CSS, Tailwind CSS, JavaScript, and React, creating visually appealing and responsive web applications. With a strong foundation in C, C++, and Data Structures & Algorithms (DSA), I have honed my problem-solving skills by tackling challenges on platforms like LeetCode. Additionally, I have experience in SQL for database management, enabling efficient data handling and storage solutions. 
            </div>
            <div className="flex flex-wrap gap-10 w-1/2 justify-center">
                <div>
                    <FaJs className="text-8xl text-yellow-500 rounded-3xl"/>
                </div>
                <div>
                    <FaReact className="text-8xl text-sky-500 rounded-full"/>
                </div>
                <div>
                    <img src="/tailwind.svg" className="max-w-28 min-w-24"/>
                </div>
                <div>
                    <FaHtml5 className="text-8xl text-red-600 rounded-full"/>
                </div>
                <div>
                    <FaCss3 className="text-8xl text-sky-500 rounded-full"/>
                </div>
                <div>
                    <FaDatabase className="text-8xl text-orange-700 rounded-full"/>
                </div>
                <div>
                    <img src="/c.svg" className="max-w-24"/>
                </div>
                <div>
                    <img src="/cpp.svg" className="max-w-24"/>
                </div>
            </div>
        </div>
    );
}