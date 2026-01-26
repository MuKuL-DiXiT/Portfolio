import { useEffect, useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ darkMode }) {
    const [points, setPoints] = useState(geod());
    const [linkedin, setLinkedin] = useState(false);
    const [resume, setResume] = useState(false);
    const [data, setData] = useState(null);
    const [data1, setData1] = useState(null);


    const homeRef = useRef(null);
    const imageBorderRef = useRef(null);
    const mainImageRef = useRef(null);
    const textContentRef = useRef(null);

    const socialLinks = [
        { url: "https://github.com/MuKuL-DiXiT", icon: FaGithub, hoverColor: "hover:text-black", label: "GitHub" },
        { url: "http://t.me/mukuldixit", icon: FaTelegram, hoverColor: "hover:text-blue-400", label: "Telegram" },
        { url: "https://www.instagram.com/mukul____dixit/", icon: FaInstagram, hoverColor: "hover:text-pink-500", label: "Instagram" },
        { url: "https://leetcode.com/u/Mukul_1608/", icon: SiLeetcode, hoverColor: "hover:text-amber-600", label: "LeetCode" }
    ];
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('/document.json')
            const json = await response.json();
            setData(json)
            const response1 = await fetch('linkedIn.json')
            const json1 = await response1.json()
            setData1(json1)
        }
        fetchData();
    }, [])

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
            className={`transition-colors duration-5000 mt-20  md:m-32 m-5 sm:mx-6 flex flex-wrap gap-10 md:item-center justify-evenly ${darkMode ? 'text-orange-200' : 'text-black'}`}
        >
            <div className='sm:ml-10 mt-8 sm:mt-0 flex flex-col'>
                <div className="social-icons-container md:mt-20 flex sm:flex-row flex-col gap-3">
                    {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`social-icon transform transition-transform duration-300 hover:scale-125 ${link.hoverColor}`}
                                aria-label={link.label}
                            >
                                <Icon className="transition-all duration-500 text-xl hover-glow" />
                            </a>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-3 sm:gap-3 sm:-ml-1 mt-3 sm:mt-10">
                    <a
                        href="https://www.linkedin.com/in/mukul-dixit-8b945227b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center w-max overflow-visible min-w-0 group"
                        onMouseEnter={() => setLinkedin(true)}
                        onMouseLeave={() => setLinkedin(false)}
                    >
                        <div className={`p-0 px-4 flex items-center justify-center transition-all duration-500 shadow-md 
                            ${linkedin ? "rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-none animate-pulse" : "rounded-l-full rounded-full"}
                            ${darkMode ? "bg-gray-400 sm:text-black hover:shadow-sky-700" : "bg-black sm:text-sky-600 hover:shadow-black"} hover-glow`}>
                            <Lottie animationData={data1} loop={true} className="w-10 h-10"/>
                        </div>
                        

                        <span className={`hidden sm:flex absolute left-full ml-1 pl-4 pr-5 py-2.5
                            rounded-r-full whitespace-nowrap shadow-md z-0 transition-all duration-500 ease-in-out hover-glow
                            ${darkMode ? "bg-gray-700 text-black" : "bg-black text-sky-600 shadow-black"}
                            ${linkedin ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}>
                            LinkedIn
                        </span>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1uNq9QN-CE_-3N2P-yD2ajWos3aaqTGUh/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center w-max overflow-visible min-w-0 group"
                        onMouseEnter={() => setResume(true)}
                        onMouseLeave={() => setResume(false)}
                    >
                        <div className={`p-0 px-4 flex items-center justify-center transition-all duration-500 shadow-md 
                            ${resume ? "rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-none animate-pulse" : "rounded-l-full rounded-full"}
                            ${darkMode ? "bg-gray-400 sm:text-black" : "bg-black hover:shadow-black"} hover-glow`}>
                            <Lottie animationData={data} loop={true} className="w-10 h-10"/>
                        </div>
                        
                        
                        <span className={`hidden sm:flex absolute left-full ml-1 pl-4 pr-5 py-2.5
                            rounded-r-full whitespace-nowrap shadow-md z-0 transition-all duration-500 ease-in-out hover-glow
                            ${darkMode ? "bg-gray-700 text-black " : "bg-black text-amber-600 shadow-black"}
                            ${resume ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}>
                            Resume
                        </span>
                    </a>
                </div>
            </div>

            <div className={`relative profile_image h-48 w-48 sm:h-64 rounded-full sm:w-64 border-8 ${darkMode ? "border-black" : "border-black/50"}`}>

            </div>

            <div ref={textContentRef} className="flex flex-col gap-5 max-w-xl break-words text-center sm:text-center md:text-center lg:text-left sm:ml-8">
                <div className={`sm:text-7xl font-marker text-4xl bg-clip-text bg-gradient-to-t text-transparent from-black to-[#dcd7d3] ${darkMode && "from-white"}`}>
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


            </div>
        </div>
    );
}