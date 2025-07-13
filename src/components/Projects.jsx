import { React, useState } from "react";
import { FaReact, FaCss3, FaJs, FaHtml5 } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiSocketdotio } from "react-icons/si";
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
                "Search users and communities easily",
                "Mobile and desktop responsive UI with dark mode support"
            ],
            technologies: [
                <SiExpress className={`text-5xl ${(dark)?"text-white":"text-black"}`} />,
                <SiMongodb className="text-5xl text-green-700" />,
                <SiMongoose className="text-5xl text-red-600" />,
                <FaReact className="text-5xl text-sky-400" />,
                <SiSocketdotio className={`text-5xl ${(dark)?"text-white":"text-black"}`} />,
                <img src="/tailwind.svg" alt="Tailwind" className="w-16" />,
                <FaHtml5 className="text-5xl text-red-700" />,
            ],
            liveLink: "https://futures-hope.vercel.app/",
            iframeSrc: "https://futures-hope.vercel.app/",
        },
        {
            title: "Money Mint",
            description: "Money Mint helps users smartly track their daily expenses with clean visual insights. Built with Firebase for real-time updates and a polished UI focused on ease, speed, and clarity — it’s your minimalist pocket accountant.",
            features: [
            "🔄 Real-time expense tracking (Firebase)",
            "📊 Simple, intuitive UI for daily budgeting",
            "⚡ Built in under a week to improve frontend + backend integration skills",
            "💸 Focused on clarity, minimal clicks, and instant edits"
            ],
            technologies: [
                <FaReact className="text-5xl text-sky-400" />,
                <SiFirebase size={30} color="#FFCA28" />,
                <img src="/tailwind.svg" alt="Tailwind" className="w-16" />,
            ],
            liveLink: "https://money-mint-ten.vercel.app/",
            iframeSrc: "https://money-mint-ten.vercel.app/",
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
                <FaReact className="text-5xl text-sky-400" />,
                <img src="/tailwind.svg" alt="Tailwind" className="w-16" />,
                <FaHtml5 className="text-5xl text-red-700" />,
            ],
            liveLink: "https://mukul-dixit.github.io/Mausam/",
            iframeSrc: "https://mukul-dixit.github.io/Mausam/",
        },
        {
            title: "Cosmic RPS",
            description: "Cosmic RPS is a fun game where you pick rock, paper, or scissors, and the computer does the same. The winner is decided based on simple rules: rock beats scissors, scissors beat paper, and paper beats rock! 🎮🔥",
            technologies: [
                <FaCss3 className="text-5xl text-sky-400" />,
                <FaJs className="text-5xl text-yellow-500 rounded-2xl" />,
                <FaHtml5 className="text-5xl text-red-700" />,
            ],
            liveLink: "https://mukul-dixit.github.io/RPS/",
            iframeSrc: "https://mukul-dixit.github.io/RPS/",
        },
        {
            title: "Rubiks Club",
            description: "It's a frontend demonstration of a sample website of Rubiks Club. It has a simple and clean design. The website has a home page, about page and a teams page.",
            technologies: [
                <FaCss3 className="text-5xl text-sky-400" />,
                <FaJs className="text-5xl text-yellow-500 rounded-2xl" />,
                <FaHtml5 className="text-5xl text-red-700" />,
            ],
            liveLink: "https://mukul-rubiks.netlify.app/",
            iframeSrc: "https://mukul-rubiks.netlify.app/",
        },
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const getSlidePosition = (index) => {
        const diff = index - activeIndex;
        const totalSlides = projects.length;
        
        if (diff === 0) return 'center';
        if (diff === 1 || diff === -(totalSlides - 1)) return 'right';
        if (diff === -1 || diff === totalSlides - 1) return 'left';
        return 'hidden';
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" 
             style={{ 
                 minHeight: 'calc(100vh - 120px)', // Account for navbar and footer
             }}>
            
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className={`absolute left-4 z-30 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    darkMode 
                        ? 'bg-orange-900/50 text-orange-200 hover:bg-orange-800/70' 
                        : 'bg-gray-200/50 text-gray-800 hover:bg-gray-300/70'
                }`}
            >
                <FaArrowLeft className="text-2xl" />
            </button>

            <button
                onClick={nextSlide}
                className={`absolute right-4 z-30 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    darkMode 
                        ? 'bg-orange-900/50 text-orange-200 hover:bg-orange-800/70' 
                        : 'bg-gray-200/50 text-gray-800 hover:bg-gray-300/70'
                }`}
            >
                <FaArrowRight className="text-2xl" />
            </button>

            {/* Slideshow Container */}
            <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
                {projects.map((project, index) => {
                    const position = getSlidePosition(index);
                    
                    return (
                        <div
                            key={index}
                            className={`absolute transition-all duration-700 ease-in-out ${
                                position === 'center' 
                                    ? 'scale-100 opacity-100 z-20 translate-x-0' 
                                    : position === 'left'
                                    ? 'scale-75 opacity-30 z-10 -translate-x-full blur-sm'
                                    : position === 'right'
                                    ? 'scale-75 opacity-30 z-10 translate-x-full blur-sm'
                                    : 'scale-50 opacity-0 z-0'
                            }`}
                            style={{
                                width: position === 'center' ? '90%' : '70%',
                                maxWidth: position === 'center' ? '800px' : '600px',
                                height: position === 'center' ? 'calc(100vh - 200px)' : 'calc(100vh - 240px)',
                            }}
                        >
                            <div
                                className={`flex flex-col h-full rounded-xl transition-all duration-300 ${
                                    darkMode
                                        ? 'bg-gradient-to-br from-orange-900/20 to-orange-800/10 text-orange-200 shadow-2xl shadow-orange-900/50 border border-orange-700/30'
                                        : 'bg-black/70 text-white shadow-2xl shadow-gray-500/50 border border-gray-200'
                                }`}
                            >
                                {/* Fixed Header */}
                                <div className="flex-shrink-0 p-6 text-center border-b border-opacity-20 border-current">
                                    <h1 className="text-3xl font-bold font-['Sour_Gummy']">
                                        {`${index + 1}. ${project.title}`}
                                    </h1>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                    <p className="text-base leading-relaxed">
                                        {project.description}
                                    </p>

                                    {project.features && (
                                        <div className="w-full">
                                            <h3 className="text-lg font-semibold mb-3">Features:</h3>
                                            <ul className="text-left list-disc list-inside space-y-1">
                                                {project.features.map((feature, i) => (
                                                    <li key={i} className="text-sm leading-relaxed">{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex justify-center gap-4 flex-wrap">
                                        {project.technologies.map((tech, i) => (
                                            <div key={i} className="transform hover:scale-110 transition-transform">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>

                                    <iframe
                                        src={project.iframeSrc}
                                        className="rounded-lg w-full h-64 border-0 shadow-lg"
                                        title={`${project.title} Demo`}
                                    />
                                </div>

                                {/* Fixed Footer */}
                                <div className="flex-shrink-0 p-6 text-center border-t border-opacity-20 border-current">
                                    <a
                                        href={project.liveLink}
                                        className={`inline-block px-6 py-3 rounded-md text-lg transition-all duration-300 transform hover:scale-105 ${
                                            darkMode
                                                ? 'bg-orange-200 text-red-600'
                                                : 'bg-black text-red-600'
                                        }`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Live Project
                                    </a>
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
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeIndex
                                ? darkMode ? 'bg-orange-400' : 'bg-blue-500'
                                : darkMode ? 'bg-orange-700/50' : 'bg-gray-400/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
