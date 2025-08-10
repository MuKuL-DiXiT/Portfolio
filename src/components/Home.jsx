import { useEffect, useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ darkMode }) {
    const [points, setPoints] = useState(geod());
    const [linkedin, setLinkedin] = useState(false);
    const [resume, setResume] = useState(false);

    const homeRef = useRef(null);
    const imageBorderRef = useRef(null);
    const mainImageRef = useRef(null);
    const textContentRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints(geod());
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const runAnimations = () => {
            const home = homeRef.current;
            const border = imageBorderRef.current;
            const mainImg = mainImageRef.current;
            const text = textContentRef.current;

            // Only proceed if all refs are available
            if (!home || !border || !mainImg || !text) {
                console.log("Refs not ready, skipping GSAP animations.");
                return;
            }

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(home, { opacity: 0, y: 100, duration: 1, delay: 1 });

            tl.from([border, mainImg], {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                stagger: 0.4
            }, "-=0.8");

            const children = Array.from(text.children || []);
            if (children.length > 0) {
                tl.from(children, {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    stagger: 0.2
                }, "-=0.5");
            }

            const scrollAnim = gsap.from(".social-icon", {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: ".social-icons-container",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                }
            });

            return () => {
                tl.kill();
                scrollAnim?.scrollTrigger?.kill();
            };
        };

        // Delay GSAP until full paint, but ensure the component renders first
        const raf = requestAnimationFrame(() => setTimeout(runAnimations, 0));
        return () => cancelAnimationFrame(raf);
    }, []); // Empty dependency array means this runs once after initial render

    function geod() {
        const points = [];
        const totalPoints = 25;
        for (let i = 0; i < totalPoints; i++) {
            const angle = (i / totalPoints) * Math.PI * 2;
            const radius = 48 + Math.random() * 5;
            const x = radius * Math.sin(angle) + 50;
            const y = radius * Math.cos(angle) + 50;
            points.push(`${x}% ${y}%`);
        }
        return points.join(",");
    }

    return (
        <div
            ref={homeRef}
            className={`transition-colors duration-1000 mt-24 lg:mt-32 md:m-32 m-5  sm:mx-6 md:mx-16 lg:mx-12 xl:mx-32 flex flex-wrap gap-10 item-center justify-evenly ${darkMode ? 'text-orange-200' : 'text-black'}`}
        >
            <div className="social-icons-container flex mt-8 md:mt-20 sm:flex-row md:flex-col lg:flex-col gap-7 items-center">
                <a href="https://github.com/MuKuL-DiXiT" target='_blank' className="social-icon"><FaGithub className="text-xl hover:text-3xl hover:text-red-500 transition-colors duration-300 hover-glow" /></a>
                <a href="https://t.me/mukuldixit" target='_blank' className="social-icon"><FaTelegram className="text-xl hover:text-3xl hover:text-blue-400 transition-colors duration-300 hover-glow" /></a>
                <a href="https://www.instagram.com/mukul____dixit/" target='_blank' className="social-icon"><FaInstagram className="text-xl hover:text-3xl hover:text-pink-500 transition-colors duration-300 hover-glow" /></a>
                <a href="https://www.instagram.com/mukul____dixit/" target='_blank' className="social-icon"><SiLeetcode className="text-xl hover:text-3xl hover:text-amber-600 transition-colors duration-300 hover-glow" /></a>
            </div>

            {/* <div className="relative lg:mt-10 max-w-72 max-h-72">
                <motion.img
                    ref={imageBorderRef}
                    src={darkMode ? "/fev.jpg" : "/back.jpg"}
                    alt="Border"
                    className="absolute inset-0 w-full h-full"
                    style={{
                        clipPath: `polygon(${points})`,
                        filter: "blur(3px)",
                        transform: "scale(1.07)"
                    }}
                    animate={{ clipPath: `polygon(${points})` }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                    ref={mainImageRef}
                    src="/Mukul.jpg"
                    alt="Mukul Dixit"
                    className="max-w-64 h-full shadow-[0_0_10px_3px_rgba(255,255,255,0.8)]"
                    style={{ clipPath: `polygon(${points})` }}
                    animate={{ clipPath: `polygon(${points})` }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div> */}
            <div className={`profile_image h-48 w-48 sm:h-64 rounded-full sm:w-64 border-8 ${darkMode?"border-black":"border-black/50"}`}>

            </div>

            <div ref={textContentRef} className="flex flex-col gap-5 max-w-xl break-words text-center sm:text-center md:text-center lg:text-left sm:ml-8">
                <div className={`sm:text-7xl text-4xl bg-clip-text bg-gradient-to-t text-transparent from-black to-red-600 ${darkMode && "from-white"}`}>
                    <Typewriter
                        options={{
                            strings: ["Mukul Dixit"],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                        }}
                    />
                </div>

                <div className="text-sm">
                    Learning by Building. Growing through Every Failure. <br />
                    Every project teaches me something new. Every bug tests my patience. Every late-night debug session pushes me one step closer. I’m not there yet — but I’m showing up, leveling up, and moving forward every single day.


                </div>

                <div className="flex flex-col ml-8 sm:ml-0 w-12 gap-4 items-start">
                    {/* LinkedIn Button */}
                    <a
                        href="https://www.linkedin.com/in/mukul-dixit-8b945227b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center w-max overflow-visible min-w-0 group"
                        onMouseEnter={() => setLinkedin(true)}
                        onMouseLeave={() => setLinkedin(false)}
                    >
                        <div className={`px-4 sm:py-3 py-2.5 flex items-center justify-center transition-all duration-500 shadow-md 
                            ${linkedin ? "rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-none animate-pulse" : "rounded-l-full sm:rounded-full"}
                            ${darkMode ? "bg-sky-600 text-black hover:shadow-sky-700" : "bg-black text-sky-600 hover:shadow-black"} hover-glow`}>
                            <FaLinkedin className="text-xl z-10" />
                        </div>
                        <span
                            className={`
    ml-2 block sm:hidden font-semibold text-sm px-3 py-2.5 rounded-r-full relative overflow-hidden 
    ${darkMode ? "bg-sky-600 text-black" : "bg-black text-red-500"} shiny-frame
  `}
                        >
                            Let's connect
                        </span>

                        <span className={`hidden sm:flex absolute left-full ml-1 pl-4 pr-5 py-2.5
                            rounded-r-full whitespace-nowrap shadow-md z-0 transition-all duration-500 ease-in-out hover-glow
                            ${darkMode ? "bg-sky-700 text-black shadow-sky-700" : "bg-black text-sky-600 shadow-black"}
                            ${linkedin ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}>
                            Hi, let’s connect on LinkedIn
                        </span>
                    </a>

                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1uNq9QN-CE_-3N2P-yD2ajWos3aaqTGUh/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center w-max overflow-visible min-w-0 group"
                        onMouseEnter={() => setResume(true)}
                        onMouseLeave={() => setResume(false)}
                    >
                        <div className={`px-4 py-2.5 sm:py-3 flex items-center justify-center transition-all duration-500 shadow-md 
                            ${resume ? "rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-none animate-pulse" : "rounded-l-full sm:rounded-full"}
                            ${darkMode ? "bg-amber-700 text-black hover:shadow-amber-600" : "bg-black text-amber-600 hover:shadow-black"} hover-glow`}>
                            <FaFileAlt className="text-xl z-10" />
                        </div>
                        <span
                            className={`
    ml-2 block sm:hidden font-semibold text-sm px-3 py-2.5 rounded-r-full relative overflow-hidden 
    ${darkMode ? "bg-amber-700 text-black" : "bg-black text-amber-600"} shiny-frame
  `}
                        >
                            have a look</span>
                        <span className={`hidden sm:flex absolute left-full ml-1 pl-4 pr-5 py-2.5
                            rounded-r-full whitespace-nowrap shadow-md z-0 transition-all duration-500 ease-in-out hover-glow
                            ${darkMode ? "bg-amber-700 text-black shadow-amber-700" : "bg-black text-amber-600 shadow-black"}
                            ${resume ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}>
                            My Resume
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}