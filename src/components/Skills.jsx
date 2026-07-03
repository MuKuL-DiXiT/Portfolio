import React, { useState, useEffect, memo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaJs, FaReact, FaHtml5, FaCss3, FaNodeJs, FaTags, FaChartPie } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiSocketdotio, SiMysql, SiGit, SiJsonwebtokens, SiCplusplus, SiC, SiGithub, SiNextdotjs, SiPostman, SiTypescript, SiVercel, SiRender, SiDocker, SiPython, SiNumpy, SiPandas, SiPrisma, SiPostgresql, SiTensorflow } from "react-icons/si";


const Skills = memo(function Skills({ darkMode }) {
  const [box, setBox] = useState(null);

  const skills = [
  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, tag: "Backend" },
  { name: "Express", icon: <SiExpress className={`${darkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />, tag: "Backend" },

  // Databases & ORM
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, tag: "Database" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, tag: "Database" },
  { name: "My Sql", icon: <SiMysql className="text-sky-700" />, tag: "Database" },
  { name: "Prisma", icon: <SiPrisma className={`${darkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />, tag: "Database" },
  { name: "Mongoose", icon: <SiMongoose className="text-red-600 text-4xl" />, tag: "Database" },

  // Auth / APIs / Real-time
  { name: "JWT", icon: <SiJsonwebtokens className={`${darkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />, tag: "Authorization" },
  { name: "Socket.io", icon: <SiSocketdotio className={`${darkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />, tag: "Web Sockets" },
  { name: "Postman", icon: <SiPostman className="text-orange-600" />, tag: "Testing" },

  // ML / Data Science
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" />, tag: "Deep Learning" },
  { name: "NumPy", icon: <SiNumpy className="text-blue-700" />, tag: "Computation" },
  { name: "Pandas", icon: <SiPandas className="text-blue-900" />, tag: "Computation" },
  { name: "MatPlotLib", icon: <FaChartPie className="text-red-600" />, tag: "Computation" },

  // Frontend
  { name: "React", icon: <FaReact className="text-sky-400" />, tag: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className={`${darkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />, tag: "Frontend" },

  // DevOps / Deployment / Tools
  { name: "Docker", icon: <SiDocker className={`${darkMode ? "text-white group-hover:text-blue-600" : "text-blue-600 group-hover:text-white"}`} />, tag: "DevOps" },
  { name: "Git", icon: <SiGit className="text-orange-500" />, tag: "Version Control" },
  { name: "Github", icon: <SiGithub className={`${darkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />, tag: "Version Control" },
  { name: "Vercel", icon: <SiVercel className={`${darkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />, tag: "Deployment" },
  { name: "Render", icon: <SiRender className={`${darkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />, tag: "Deployment" },

  // Languages
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, tag: "Language" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, tag: "Language" },
  { name: "C++", icon: <SiCplusplus className="text-sky-700" />, tag: "Language" },
  { name: "Python", icon: <SiPython className={`${darkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />, tag: "Language" },
  { name: "C", icon: <SiC className="text-sky-700" />, tag: "Language" },

  // Markup & Styling
  { name: "HTML", icon: <FaHtml5 className="text-red-600" />, tag: "Markup" },
  { name: "CSS", icon: <FaCss3 className="text-blue-500" />, tag: "Styling" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" />, tag: "Styling" },
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
    <div ref={ref} className="relative w-full py-12 flex items-center justify-center overflow-hidden">
      <div className="flex flex-wrap justify-center max-w-4xl gap-6 relative z-10">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className={`skill-box group h-16 w-16 sm:w-28 sm:h-24 flex flex-col items-center justify-center gap-1 rounded-[32px] shadow-lg backdrop-blur-md border transition-all duration-300 will-change-transform ${darkMode
                ? "bg-transparent hover:bg-white text-white hover:text-black border-white/20 hover:border-white"
                : "bg-transparent hover:bg-black text-black hover:text-white border-black/20 hover:border-black"
              } ${box === skill.name ? "scale-120 z-20" : "scale-100"}`}
            onMouseEnter={() => setBox(skill.name)}
            onMouseLeave={() => setBox(null)}
            style={{ willChange: 'transform' }} // Optimize for animations
          >
            <div className="text-3xl">{skill.icon}</div>

            <div className={`text-xs font-semibold ${box === skill.name ? "inline-block" : "hidden"}`}>
              {skill.name}
            </div>

            <div className={`hidden  text-[10px] mt-1 ${box === skill.name ? "sm:inline-block hidden" : "hidden"}`}>
              <span className="inline-flex items-center gap-1 bg-black/20 dark:bg-white/20 group-hover:bg-white/20 dark:group-hover:bg-black/20 px-2 py-0.5 rounded-full">
                <FaTags className="text-xs" />
                {skill.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
