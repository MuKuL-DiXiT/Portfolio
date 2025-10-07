import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaJs, FaReact, FaHtml5, FaCss3, FaNodeJs, FaTags } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiSocketdotio, SiMysql, SiGit, SiJsonwebtokens, SiCplusplus, SiC, SiGithub, SiNextdotjs, SiPostman, SiTypescript, SiVercel, SiRender } from "react-icons/si";


export default function Skills({ darkMode }) {
  const [box, setBox] = useState(null);

  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, tag: "Scriptting" },
    { name: "React", icon: <FaReact className="text-sky-400" />, tag: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" />, tag: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, tag: "Scriptting" },
    { name: "Express", icon: <SiExpress className={`${darkMode ? "text-white" : "text-black"}`} />, tag: "Backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, tag: "Database" },
    { name: "My Sql", icon: <SiMysql className="text-sky-700" />, tag: "Database" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, tag: "Backend" },
    { name: "Postman", icon: <SiPostman className="text-orange-600" />, tag: "Testing" },
    { name: "C++", icon: <SiCplusplus className="text-sky-700" />, tag: "Language" },
    { name: "C", icon: <SiC className="text-sky-700" />, tag: "Language" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, tag: "Styling" },
    { name: "Mongoose", icon: <SiMongoose className="text-red-600" />, tag: "Database" },
    { name: "Socket.io", icon: <SiSocketdotio className={`${darkMode ? "text-white" : "text-black"}`} />, tag: "Web Sockets" },
    { name: "Git", icon: <SiGit className="text-orange-500" />, tag: "Version Control" },
    { name: "Github", icon: <SiGithub className={`${darkMode ? "text-white" : "text-black"}`} />, tag: "Version Control" },
    { name: "Vercel", icon: <SiVercel className={`text-black`} />, tag: "Deployement" },
    { name: "Render", icon: <SiRender className={`text-black`} />, tag: "Deployement" },
    { name: "JWT", icon: <SiJsonwebtokens className={`${darkMode ? "text-white" : "text-black"}`} />, tag: "Authorization" },
    { name: "HTML", icon: <FaHtml5 className="text-red-600" />, tag: "Markup" },
    { name: "CSS", icon: <FaCss3 className="text-blue-500" />, tag: "Styling" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold: 0.3,
    triggerOnce: false,
    rootMargin: "-10% 0px -10% 0px" // Only trigger when properly in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0.3,
      x: ((i % 4) - 1.5) * 400, // Spread ->
      y: (Math.floor(i / 4) - 1) * 300, // Spread ^
      rotate: (i % 2 === 0 ? 1 : -1) * 15, // Alternate rotation
      transition: { 
        delay: i * 0.03, 
        duration: 1, 
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      },
      scale: 0.8,
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0, // Gather to center
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { 
        delay: i * 0.1, 
        duration: 1, 
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    }),
  };

  return (
    <div ref={ref} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="flex flex-wrap justify-center max-w-4xl gap-6 relative z-10">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className={`skill-box h-16 w-16 sm:w-28 sm:h-24 flex flex-col items-center justify-center gap-1 rounded-xl shadow-lg backdrop-blur-md border will-change-transform ${
              darkMode
                ? "bg-white/10 hover:bg-white/30 text-black border-white/20"
                : "bg-black/20 hover:bg-black/70 text-white border-black/20"
            } ${box === skill.name ? "scale-110 z-20" : "scale-100"}`}
            onMouseEnter={() => setBox(skill.name)}
            onMouseLeave={() => setBox(null)}
            style={{ willChange: 'transform' }} // Optimize for animations
          >
          <div className="text-3xl">{skill.icon}</div>

          <div className={`text-xs font-semibold ${box === skill.name ? "inline-block" : "hidden"}`}>
            {skill.name}
          </div>

          <div className={`hidden  text-[10px] mt-1 ${box === skill.name ? "sm:inline-block hidden" : "hidden"}`}>
            <span className="inline-flex items-center gap-1 bg-black/20 dark:bg-white/20 px-2 py-0.5 rounded-full">
              <FaTags className="text-xs" />
              {skill.tag}
            </span>
          </div>
        </motion.div>
      ))}
      </div>
    </div>
  );
}
