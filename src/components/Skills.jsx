import React, { useEffect, useRef, useState } from "react";
import { FaJs, FaReact, FaHtml5, FaCss3, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiSocketdotio, SiMysql, SiGit, SiJsonwebtokens, SiCplusplus, SiC, SiGithub } from "react-icons/si";
import gsap from "gsap";

export default function Skills({ darkMode }) {
    const containerRef = useRef(null);
    const [box, setBox] = useState(null);

    const skills = [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, tag: "Frontend" },
        { name: "React", icon: <FaReact className="text-sky-400" />, tag: "Frontend" },
        { name: "Express", icon: <SiExpress className={`${darkMode ? "text-white" : "text-black"}`} />, tag: "Backend" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, tag: "Database" },
        { name: "My Sql", icon: <SiMysql className="text-sky-700" />, tag: "Database" },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, tag: "Backend" },
        { name: "C++", icon: <SiCplusplus className="text-sky-700" />, tag: "language" },
        { name: "C Programming", icon: <SiC className="text-sky-700" />, tag: "language" },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, tag: "Styling" },
        { name: "Mongoose", icon: <SiMongoose className="text-red-600" />, tag: "Database" },
        { name: "Socket.io", icon: <SiSocketdotio className={`${darkMode ? "text-white" : "text-black"}`} />, tag: "Web Sockets" },
        { name: "Git", icon: <SiGit className={`text-orange-500`} />, tag: "Version Control" },
        { name: "Github", icon: <SiGithub className={`${darkMode ? "text-white" : "text-black"}`}/>, tag: "Version Control" },
        { name: "JWT", icon: <SiJsonwebtokens className={`${darkMode ? "text-white" : "text-black"}`} />, tag: "Authorization" },
        { name: "HTML", icon: <FaHtml5 className="text-red-600" />, tag: "Markup" },
        { name: "CSS", icon: <FaCss3 className="text-blue-500" />, tag: "Styling" },
        
    ];


    useEffect(() => {
        gsap.fromTo(
            containerRef.current.querySelectorAll(".skill-box"),
            { opacity: 0, y: 30, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.1,
                duration: 1,
                ease: "power2.out",
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="w-full mt-10 flex flex-col items-center py-10">
           
            <div className="flex flex-wrap justify-center gap-6 max-w-xl">
                {skills.map((skill, idx) => (
                    <div
                        key={idx}
                        onMouseEnter={() => setBox(skill.name)}
                        onMouseLeave={() => setBox(null)}
                        className={`skill-box w-28 h-28 flex flex-col items-center justify-center gap-1 rounded-xl shadow-md backdrop-blur-md border transform transition-all duration-3000 ${darkMode
                                ? "bg-white/10 hover:bg-white/30 text-white border-white/20"
                                : "bg-black/10 hover:bg-black/30 text-black border-black/20"
                            } ${box === skill.name ? "scale-110 z-10" : "scale-100"}`}
                    >
                        <div className="text-3xl">{skill.icon}</div>

                        {/* Skill Name */}
                        <div className={`text-xs font-semibold ${box === skill.name ? "inline-block" : "hidden"}`}>
                            {skill.name}
                        </div>

                        {/* Tag */}
                        <div className={`text-[10px] mt-1 ${box === skill.name ? "inline-block" : "hidden"}`}>
                            <span className="inline-flex items-center gap-1 bg-black/20 dark:bg-white/20 px-2 py-0.5 rounded-full">
                                <span className="text-[10px]">🏷️</span>
                                {skill.tag}
                            </span>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    );
}
