import { useEffect, useState, useRef, memo } from 'react';
import { Briefcase } from 'lucide-react';
import { SiLeetcode, SiGithub, SiLinkedin, SiFiles } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
    { url: "https://github.com/MuKuL-DiXiT", icon: SiGithub, hoverColor: "hover:text-black dark:hover:text-white", label: "GitHub" },
    { url: "https://leetcode.com/u/Mukul_1608/", icon: SiLeetcode, hoverColor: "hover:text-amber-500", label: "LeetCode" },
    { url: "https://www.linkedin.com/in/mukul-dixit-8b945227b/", icon: SiLinkedin, hoverColor: "hover:text-sky-600", label: "LinkedIn" },
    { url: "https://drive.google.com/file/d/1D7b3u4VSSMieN9m3rQXXAJ82SuZQh6MS/view?usp=sharing", icon: SiFiles, hoverColor: "hover:text-red-500", label: "Resume" }
];

const Home = memo(function Home({ darkMode }) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
    const [profileLoaded, setProfileLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = "/photo.jpg";
        img.onload = () => setProfileLoaded(true);
    }, []);

    const homeRef = useRef(null);
    const mainImageRef = useRef(null);
    const textContentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const runAnimations = () => {
            const home = homeRef.current;
            const mainImg = mainImageRef.current;
            const text = textContentRef.current;

            // Only proceed if all refs are available
            if (!home || !mainImg || !text) {
                console.log("Refs not ready, skipping GSAP animations.");
                return;
            }

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(home, { opacity: 0, y: 40, duration: 1.2, delay: 0.4 });

            tl.from(mainImg, {
                scale: 0.95,
                opacity: 0,
                duration: 1.2
            }, "-=1.0");

            const children = Array.from(text.children || []);
            if (children.length > 0) {
                tl.from(children, {
                    opacity: 0,
                    y: 15,
                    duration: 1.0,
                    stagger: 0.15
                }, "-=0.9");
            }

            const expAnim = gsap.from(".experience-card", {
                opacity: 0,
                y: 30,
                duration: 1.2,
                scrollTrigger: {
                    trigger: ".experience-container",
                    start: "top 95%",
                    toggleActions: "play none none reverse",
                }
            });

            return () => {
                tl.kill();
                expAnim?.scrollTrigger?.kill();
            };
        };

        // Delay GSAP until full paint, but ensure the component renders first
        const raf = requestAnimationFrame(() => setTimeout(runAnimations, 50));
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <div
            ref={homeRef}
            className={`w-full flex flex-col items-center mt-6 md:mt-12 mb-4 px-4 sm:px-8 md:px-12 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
        >
            {/* Main Landing Area */}
            <div className="w-full max-w-4xl flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-16">
                {/* Details Column */}
                <div ref={textContentRef} className="flex flex-col gap-6 max-w-xl break-words text-center md:text-left">
                    <div className={`font-semibold mt-6 sm:mt-10 text-4xl sm:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b ${
                        darkMode ? "from-white/40 to-white" : "from-slate-950/20 to-slate-950"
                    }`}>
                        Mukul Dixit
                    </div>

                    {/* Social/Link Icons Row */}
                    <div className="social-icons-container flex flex-row items-center justify-center md:justify-start gap-5 mt-2">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`social-icon w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 ${
                                        darkMode 
                                            ? "bg-slate-900/40 border-white/5 text-slate-400 hover:bg-slate-800 hover:text-white" 
                                            : "bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100 hover:text-slate-950"
                                    } ${link.hoverColor}`}
                                    aria-label={link.label}
                                >
                                    <Icon className="w-5 h-5 transition-all duration-500 hover-glow" />
                                </a>
                            );
                        })}
                    </div>

                    <div className={`text-sm leading-relaxed font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        Learning by Building. Growing through Every Failure. <br />
                        Every project teaches me something new. Every bug tests my patience. Every late-night debug session pushes me one step closer. I’m not there yet — but I’m showing up, leveling up, and moving forward every single day.
                    </div>
                </div>

                {/* Profile Image */}
                <div
                    ref={mainImageRef}
                    className={`relative profile_image h-48 w-48 sm:h-64 sm:w-64 border-8 shrink-0 transition-colors duration-500 rounded-full shadow-xl ${
                        darkMode ? "border-white/80 shadow-indigo-950/20" : "border-black/80 shadow-slate-200/20"
                    } ${!profileLoaded ? (darkMode ? 'dark-shimmer-skeleton' : 'shimmer-skeleton') : ''}`}
                    style={profileLoaded ? { backgroundImage: 'url(/photo.jpg)' } : { backgroundImage: 'none' }}
                />
            </div>

            {/* Experience Section */}
            <div className="experience-container w-full max-w-4xl mt-12 px-4 md:px-0 z-10">
                <div className="flex items-center gap-3 mb-6  rounded-full ">
                    <Briefcase className={`w-5 h-5 ${darkMode ? 'text-indigo-400' : 'text-indigo-655'}`} />
                    <h3 className={`text-xl font-bold font-marker tracking-wide ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Experience
                    </h3>
                    <div className={`h-[1px] flex-grow ${darkMode ? 'bg-white/10' : 'bg-slate-200'}`} />
                </div>

                <div
                    className={`experience-card border transition-all duration-500 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-xl hover:-translate-y-1 hover:shadow-2xl
                        ${darkMode
                            ? 'bg-white/10 hover:bg-white/20 border-white/5 text-slate-100 hover:border-indigo-500/30'
                            : 'bg-black/10 hover:bg-black/20 border-slate-200/80 text-slate-900 hover:border-indigo-500/20'
                        }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Company Details */}
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Feb 2026 - Present
                            </span>
                            <h4 className="text-xl font-bold tracking-tight">
                                Full Stack Developer Intern
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                                <span className={`text-base font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-655'}`}>
                                    Mark My Ad
                                </span>
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border
                                    ${darkMode ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' : 'bg-indigo-50 text-indigo-750 border-indigo-150'}`}>
                                    Active
                                </span>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="md:col-span-2 flex flex-col gap-4">
                            <ul className={`list-none flex flex-col gap-3 text-sm leading-relaxed ${darkMode ? 'text-slate-350' : 'text-slate-650'}`}>
                                <li className="flex items-start gap-2.5">
                                    <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'}`} />
                                    <span>Designed and developed a customizable website chat bubble widget, shipped as a scalable SaaS product.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'}`} />
                                    <span>Engineered robust communication integrations utilizing webhooks and Meta Cloud APIs.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'}`} />
                                    <span>Curated image datasets on Roboflow and trained machine learning computer vision models for automated pothole detection.</span>
                                </li>
                            </ul>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["SaaS", "Webhooks", "Meta Cloud API", "Roboflow", "Machine Learning", "Computer Vision", "Full Stack"].map((tech) => (
                                    <span
                                        key={tech}
                                        className={`text-[10px] px-3 py-1 rounded-full font-semibold transition-all duration-300 hover:scale-105 border
                                            ${darkMode
                                                ? 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10'
                                                : 'bg-slate-100 text-slate-650 border-slate-200 hover:bg-slate-200'
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Home;