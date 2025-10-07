import { React, useEffect, useState } from "react";
import { FaReact, FaCss3, FaJs, FaHtml5, FaHammer } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiSocketdotio, SiTailwindcss } from "react-icons/si";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

export default function ProjectSlideshow({ darkMode = false }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = [
        {
            title: "Future's Hope",
            description: "🌱 Future's Hope is a community-driven social platform designed to promote environmental and social impact initiatives. Users can share their ideas, showcase eco-friendly projects, join interest-based communities, and interact through posts, comments, and chats. It also supports proof-based donation sharing to encourage transparency and inspire collective action.",
            features: [
                "Post ideas, causes, or projects related to environment and society",
                "Like, comment, reply, and share posts in real-time",
                "Join or create communities to connect with like-minded people",
                "Follow/unfollow users to build meaningful connections (Bond system)",
                "Upload donation screenshots to show support for causes",
                "Chat in real-time with individuals or within community groups",
                "Mobile and desktop responsive UI with dark mode support"
            ],
            technologies: [
                { name: "express", icon: <SiExpress className={`text-5xl ${(darkMode) ? "text-white" : "text-black"}`} /> },
                { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-700" /> },
                { name: "Mongoose", icon: <SiMongoose className="text-5xl text-red-600" /> },
                { name: "React", icon: <FaReact className="text-5xl text-sky-400" /> },
                { name: "socket.io", icon: <SiSocketdotio className={`text-5xl ${(darkMode) ? "text-white" : "text-black"}`} /> },
                { name: "tailwind", icon: <SiTailwindcss className="w-16" /> },
            ],
            liveLink: "https://futures-hope.vercel.app/",
            thumbnail: "/image.png",
        },
        {
            title: "Money Mint",
            description: "Money Mint helps users smartly track their daily expenses with clean visual insights. Built with Firebase for real-time updates and a polished UI focused on ease, speed, and clarity — it’s your minimalist pocket accountant.",
            features: [
                "Real-time expense tracking (Firebase)",
                " Simple, intuitive UI for daily budgeting",
                " Built in under a week to improve frontend + backend integration skills",
                " Focused on clarity, minimal clicks, and instant edits"
            ],
            technologies: [
                { name: "react", icon: <FaReact className="text-5xl text-sky-400" /> },
                { name: "firebase", icon: <SiFirebase size={48} color="#FFCA28" /> },
                { name: "tailwind", icon: <SiTailwindcss className="w-16" /> },
            ],
            liveLink: "https://money-mint-ten.vercel.app/",
            thumbnail: "/image2.png",
        },
        {
            title: "Mausam",
            description: "Mausam is a simple weather app that helps users check the weather of any city. It has a clean design and is easy to use. Users can search for a city and get real-time weather details like temperature, humidity, wind speed, and weather conditions. The app also features a weather history chart to track past trends.",
            features: [
                "Search for a city and get real-time weather details including temperature, humidity, wind speed, and weather conditions.",
                "Weather chart for last few days to visualize weather changes",
                "Easy to use interface",
            ],
            technologies: [
                { name: "javascript", icon: <FaJs className="text-5xl text-yellow-400" /> },
                { name: "tailwind", icon: <SiTailwindcss className="w-16" /> },
                { name: "html", icon: <FaHtml5 className="text-5xl text-red-700" /> }
            ],
            liveLink: "https://mukul-dixit.github.io/Mausam/",
            thumbnail: "/mausam.png",
        },
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            }
            if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const getSlidePosition = (index) => {
        const diff = index - activeIndex;
        const totalSlides = projects.length;

        if (diff === 0) return 'center';
        if (diff === 1 || diff === -(totalSlides - 1)) return 'right';
        if (diff === -1 || diff === totalSlides - 1) return 'left';
        return 'hidden';
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
            
            <div className="w-full flex items-center justify-center overflow-hidden relative" style={{
                minHeight: 'calc(100vh - 120px)', // Account for navbar and footer
            }}>
                <button
                    onClick={prevSlide}
                    className={`absolute left-4 z-30 p-3 rounded-full transition-all duration-300 hover:scale-110 ${darkMode
                        ? 'bg-orange-900/50 text-orange-200 hover:bg-orange-800/70'
                        : 'bg-gray-200/50 text-gray-800 hover:bg-gray-300/70'
                        }`}
                >
                    <FaArrowLeft className="text-2xl" />
                </button>

                <button
                    onClick={nextSlide}
                    className={`absolute right-4 z-30 p-3 rounded-full transition-all duration-300 hover:scale-110 ${darkMode
                        ? 'bg-orange-900/50 text-orange-200 hover:bg-orange-800/70'
                        : 'bg-gray-200/50 text-gray-800 hover:bg-gray-300/70'
                        }`}
                >
                    <FaArrowRight className="text-2xl" />
                </button>

                {/* Slideshow Container */}
                <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center overflow-hidden">
                    {projects.map((project, index) => {
                        const diff = (index - activeIndex + projects.length) % projects.length;
                        const isActive = index === activeIndex;
                        const isLeft = (diff === projects.length - 1);
                        const isRight = (diff === 1);

                        if (!isActive && !isLeft && !isRight) return null;

                        return (
                            <div
                                key={index}
                                className={`transition-all duration-700 ease-in-out absolute ${isActive
                                    ? 'z-20 scale-100 opacity-100 translate-x-0'
                                    : isLeft
                                        ? '-translate-x-full scale-90 opacity-40 z-10 blur-[2px]'
                                        : 'translate-x-full scale-90 opacity-40 z-10 blur-[2px]'
                                    }`}
                                style={{
                                    width: isActive ? '90%' : '70%',
                                    maxWidth: isActive ? '8000px' : '500px',
                                    height: '100%',
                                }}
                            >
                                <div
                                    className={`flex flex-col h-full rounded-3xl shadow-2xl overflow-hidden backdrop-blur-md bg-opacity-50 border ${darkMode
                                        ? 'bg-black text-white border-gray-800 shadow-orange-900/30'
                                        : 'bg-white text-black border-gray-300 shadow-gray-400/40'
                                        }`}
                                >
                                    {/* Header */}
                                    <div className="p-4 text-center ">
                                        <h1 className={`text-xl font-bold font-['Sour_Gummy'] ${darkMode?"bg-gray-300 text-black":"bg-gray-700 text-white"} px-2 py-2 rounded-full mr-3  tracking-wide`}>{`${project.title}`}</h1>
                                    </div> 

                                    {/* Two-Section Layout - Horizontal Split */}
                                    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                                        
                                        {/* Left Section - Project Details & Tech Stack */}
                                        <div className="flex-1 p-6 overflow-y-auto space-y-6">
                                            <p className="text-base leading-relaxed tracking-wide">{project.description}</p>

                                            {project.features && (
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-2">✨ Features:</h3>
                                                    <ul className="list-disc list-inside text-sm space-y-1">
                                                        {project.features.map((f, i) => (
                                                            <li key={i}>{f}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Technologies */}
                                            <div>
                                                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><FaHammer/> Tech Stack:</h3>
                                                <div className="flex flex-wrap gap-3">
                                                    {project.technologies.map((tech, i) => (
                                                        <div key={i} className="flex items-center gap-2 bg-opacity-20 bg-gray-500 rounded-lg px-3 py-2">
                                                            <div className="w-8 h-8 flex items-center justify-center">{tech.icon}</div>
                                                            <span className="text-sm font-medium capitalize">{tech.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Section - Portrait Screenshot */}
                                        <div className="lg:w-80 flex items-center justify-center p-6">
                                            <div className="relative w-full max-w-[280px] h-[400px] rounded-xl overflow-hidden shadow-2xl group">
                                                <img
                                                    src={project.thumbnail}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                                
                                                {/* Tilted Arrow Link - Top Left */}
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 transform rotate-6 shadow-lg z-10 ${
                                                        darkMode 
                                                            ? 'bg-gradient-to-r backdrop-blur-md from-amber-500/70 to-red-500/70 text-white hover:from-red-400/70 hover:to-amber-400'
                                                            : 'bg-gradient-to-r backdrop-blur-md from-blue-500/70 to-purple-500/70 text-white hover:from-purple-400/70 hover:to-blue-400'
                                                    }`}
                                                    title="View Live Project"
                                                >
                                                    <FaArrowRight className="text-lg transform -rotate-45" />
                                                </a>
                                                
                                                {/* Hover Overlay */}
                                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                                                    darkMode ? 'bg-black/60' : 'bg-white/60'
                                                }`}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                ? darkMode ? 'bg-orange-400' : 'bg-blue-500'
                                : darkMode ? 'bg-orange-700/50' : 'bg-gray-400/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
            {/* Navigation Buttons */}

        </div>
    );
}