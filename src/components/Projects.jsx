import { useEffect, useState, useCallback, memo } from "react";
import { FaReact, FaYahoo, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiPandas, SiPlotly, SiSocketdotio, SiStreamlit, SiTailwindcss, SiPython, SiNginx, SiOpencv, SiTensorflow, SiObsstudio } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { Sparkles, ExternalLink, Cpu, CheckCircle2, Code2, ArrowLeft, ArrowRight } from "lucide-react";

function LazyImage({ src, alt, className, darkMode }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative w-full h-full">
            {!isLoaded && (
                <div 
                    className={`absolute inset-0 w-full h-full ${
                        darkMode ? 'dark-shimmer-skeleton' : 'shimmer-skeleton'
                    }`} 
                />
            )}
            <img
                src={src}
                alt={alt}
                className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
}

const ProjectSlideshow = memo(function ProjectSlideshow({ darkMode = false }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projects = [
        {
            title: "Future's Hope",
            description: "Future's Hope is a community-driven social platform designed to promote environmental and social impact initiatives. Users can share their ideas, showcase eco-friendly projects, join interest-based communities, and interact through posts, comments, and chats. It also supports proof-based donation sharing to encourage transparency and inspire collective action.",
            features: [
                "Post ideas, causes, or eco projects",
                "Like, comment, reply, and share in real-time",
                "Join/create cause-oriented communities",
                "Follow users (Bond system) for causes",
                "Proof-based donation screenshot sharing",
                "Real-time individual/group chats"
            ],
            technologies: [
                { name: "Express", icon: <SiExpress className={`text-lg ${(darkMode) ? "text-white" : "text-black"}`} /> },
                { name: "MongoDB", icon: <SiMongodb className="text-lg text-green-500" /> },
                { name: "Mongoose", icon: <SiMongoose className="text-lg text-red-500" /> },
                { name: "React", icon: <FaReact className="text-lg text-sky-400" /> },
                { name: "Socket.io", icon: <SiSocketdotio className={`text-lg ${(darkMode) ? "text-white" : "text-black"}`} /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-lg text-teal-400" /> },
            ],
            liveLink: "https://futures-hope.vercel.app/",
            thumbnail: "/futureshope.jpg",
        },
        {
            title: "smartEye",
            description: "smartEye is a real-time violence detection system designed to monitor and alert on security threats from live feeds. It processes incoming live feeds from OBS via an RTMP Nginx server at 5 FPS, classifying frames using a CNN-LSTM deep learning model. The system issues instant alerts and escalates to a severe alert if violence is detected in 4 contiguous frames, ensuring quick and automated response mechanisms.",
            features: [
                "Real-time OBS feed ingestion via RTMP Nginx at 5 FPS",
                "Deep learning threat analysis using CNN+LSTM model",
                "Instant alert generation on detecting anomalies",
                "Severe alert triggers on 4 contiguous frames of violence"
            ],
            technologies: [
                { name: "Python", icon: <SiPython className="text-lg text-yellow-500" /> },
                { name: "TensorFlow", icon: <SiTensorflow className="text-lg text-orange-500" /> },
                { name: "OpenCV", icon: <SiOpencv className="text-lg text-emerald-500" /> },
                { name: "Nginx", icon: <SiNginx className="text-lg text-green-500" /> },
                { name: "OBS Studio", icon: <SiObsstudio className={`text-lg ${darkMode ? "text-white" : "text-black"}`} /> }
            ],
            liveLink: "https://github.com/mukul-dixit/smartEye",
            thumbnail: "/smarteye.jpg",
        },
        {
            title: "Stockery",
            description: "Analyse stocks trend with data analysis using data from yahoo finance. Simplified graphs and comparison layouts help stock traders quickly spot moving averages and volatility markers.",
            features: [
                "Simplified charts using interactive plots",
                "Analyze open/close prices, moving average, volatility",
                "Multiple theme layout selections",
                "Direct comparison tool for any two stock items"
            ],
            technologies: [
                { name: "Pandas", icon: <SiPandas className={`text-lg text-black ${darkMode ? 'text-white' : ''}`} /> },
                { name: "Streamlit", icon: <SiStreamlit className="text-lg text-red-500" /> },
                { name: "Plotly", icon: <SiPlotly className="text-lg text-blue-500" /> },
                { name: "Yahoo Finance", icon: <FaYahoo className="text-lg text-purple-500" /> },
            ],
            liveLink: "https://stockery.streamlit.app",
            thumbnail: "/stockery.jpg",
        },
        {
            title: "Money Mint",
            description: "Money Mint helps users smartly track their daily expenses with clean visual insights. Built with Firebase for real-time updates and a polished UI focused on ease, speed, and clarity — it’s your minimalist pocket accountant.",
            features: [
                "React-time expense syncing via Firebase",
                "Simple, intuitive UI for budgeting",
                "Instant editing and clear categories",
                "Minimal clicks to add entries on the go"
            ],
            technologies: [
                { name: "React", icon: <FaReact className="text-lg text-sky-400" /> },
                { name: "Firebase", icon: <SiFirebase className="text-lg text-amber-500" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-lg text-teal-400" /> },
            ],
            liveLink: "https://money-mint-ten.vercel.app/",
            thumbnail: "/image2.jpg",
        }
    ];

    const themeConfig = {
        "Future's Hope": {
            glow: "rgba(45, 212, 191, 0.35)",
            border: "border-teal-500/20",
            hoverBorder: "hover:border-teal-400/40",
            badgeBg: "bg-teal-500/10 text-teal-300",
            accentText: "text-teal-400",
            btnGrad: "from-teal-500 to-emerald-600",
            indicatorBg: "bg-teal-500",
        },
        "smartEye": {
            glow: "rgba(239, 68, 68, 0.35)",
            border: "border-red-500/20",
            hoverBorder: "hover:border-red-400/40",
            badgeBg: "bg-red-500/10 text-red-300",
            accentText: "text-red-400",
            btnGrad: "from-red-500 to-rose-600",
            indicatorBg: "bg-red-500",
        },
        "Stockery": {
            glow: "rgba(59, 130, 246, 0.35)",
            border: "border-blue-500/20",
            hoverBorder: "hover:border-blue-400/40",
            badgeBg: "bg-blue-500/10 text-blue-300",
            accentText: "text-blue-400",
            btnGrad: "from-blue-500 to-indigo-600",
            indicatorBg: "bg-blue-500",
        },
        "Money Mint": {
            glow: "rgba(245, 158, 11, 0.35)",
            border: "border-amber-500/20",
            hoverBorder: "hover:border-amber-400/40",
            badgeBg: "bg-amber-500/10 text-amber-300",
            accentText: "text-amber-400",
            btnGrad: "from-amber-500 to-orange-600",
            indicatorBg: "bg-amber-500",
        }
    };

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [projects.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center relative select-none overflow-hidden">
            
            {/* Carousel Viewport Container */}
            <div className="w-full flex items-center justify-center overflow-visible relative py-10 px-4 sm:px-12 md:px-24 lg:px-40" style={{
                minHeight: 'calc(100vh - 120px)',
            }}>
                
                {/* Navigation Controls */}
                <button
                    onClick={prevSlide}
                    className={`hidden md:block absolute left-2 sm:left-6 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode
                        ? 'bg-white/5 border border-white/10 text-white hover:bg-white/15'
                        : 'bg-black/5 border border-black/10 text-black hover:bg-black/15'
                        }`}
                    aria-label="Previous project"
                >
                    <ArrowLeft className="text-xl" />
                </button>

                <button
                    onClick={nextSlide}
                    className={`hidden md:block absolute right-2 sm:right-6 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode
                        ? 'bg-white/5 border border-white/10 text-white hover:bg-white/15'
                        : 'bg-black/5 border border-black/10 text-black hover:bg-black/15'
                        }`}
                    aria-label="Next project"
                >
                    <ArrowRight className="text-xl" />
                </button>

                {/* 3D Perspective Card Deck */}
                <div 
                    className="relative w-full max-w-4xl h-[85vh] md:h-[65vh] flex items-center justify-center overflow-visible"
                    style={{ perspective: "1200px" }}
                >
                    {projects.map((project, index) => {
                        const diff = (index - activeIndex + projects.length) % projects.length;
                        const isActive = index === activeIndex;
                        const isLeft = (diff === projects.length - 1);
                        const isRight = (diff === 1);
                        const theme = themeConfig[project.title] || themeConfig["Future's Hope"];

                        if (!isActive && !isLeft && !isRight) return null;

                        const radius = isSmallScreen ? 500 : 1100;
                        const angle = isSmallScreen ? 45 : 32;
                        const transformStyle = isActive
                            ? "rotateY(0deg) scale(1)"
                            : isLeft
                                ? `rotateY(${-angle}deg) scale(${isSmallScreen ? 0.8 : 0.85})`
                                : `rotateY(${angle}deg) scale(${isSmallScreen ? 0.8 : 0.85})`;

                        return (
                            <div
                                key={index}
                                className="absolute pointer-events-auto"
                                style={{
                                    width: isSmallScreen ? '90%' : '100%',
                                    maxWidth: '800px',
                                    height: '100%',
                                    transform: transformStyle,
                                    transformOrigin: `center center -${radius}px`,
                                    opacity: isActive ? 1 : 0.28,
                                    filter: isActive ? "none" : "blur(1.5px) brightness(0.65)",
                                    zIndex: isActive ? 30 : 10,
                                    transition: "transform 800ms cubic-bezier(0.25, 1, 0.5, 1), opacity 800ms, filter 800ms, z-index 800ms",
                                }}
                            >
                                {/* Ambient Halo Backlight Behind Active Card */}
                                {isActive && (
                                    <div
                                        className="absolute inset-0 m-auto -z-10 rounded-full blur-[80px] opacity-35 transition-all duration-700 animate-pulse pointer-events-none"
                                        style={{
                                            width: "80%",
                                            height: "80%",
                                            background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
                                        }}
                                    />
                                )}

                                {/* Outer Glassmorphic Card Container */}
                                <div
                                    className={`flex flex-col h-full rounded-[32px] border shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-500
                                        ${darkMode
                                            ? `bg-slate-900/60 text-slate-100 ${theme.border} ${theme.hoverBorder} shadow-black/60`
                                            : `bg-white/90 text-slate-800 border-slate-200 hover:border-slate-350 shadow-slate-200/40`
                                        }`}
                                >
                                    {/* Card Header Panel */}
                                    <div className="px-6 py-4 flex items-center justify-between border-b border-gray-800/10 dark:border-white/5 shrink-0">
                                        <div className="flex items-center gap-2.5">
                                            <Sparkles className={`w-5 h-5 ${darkMode ? theme.accentText : 'text-indigo-650'}`} />
                                            <h2 className="text-xl md:text-2xl font-bold font-marker tracking-wide">{project.title}</h2>
                                        </div>
                                        <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                                            darkMode 
                                                ? `${theme.badgeBg} border-white/5` 
                                                : 'bg-indigo-50 text-indigo-750 border-indigo-100'
                                        }`}>
                                            Project {index + 1}
                                        </span>
                                    </div>

                                    {/* Project Content layout */}
                                    <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
                                        
                                        {/* Left: Interactive Details & Tech Stack */}
                                        <div className="myDiv flex-1 p-6 md:overflow-y-auto space-y-6 scroll-smooth">
                                            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                {project.description}
                                            </p>

                                            {/* Feature Grid */}
                                            <div className="space-y-3">
                                                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-450 flex items-center gap-2">
                                                    <Cpu className="w-4 h-4" /> Key Features
                                                </h3>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs md:text-sm">
                                                    {project.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-2.5">
                                                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${darkMode ? theme.accentText : 'text-indigo-650'}`} />
                                                            <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Tech Badges */}
                                            <div className="space-y-3">
                                                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-450 flex items-center gap-2">
                                                    <Code2 className="w-4 h-4" /> Tech Stack
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, i) => (
                                                        <div
                                                            key={i}
                                                            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-350 hover:scale-105
                                                                ${darkMode
                                                                    ? 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                                                                    : 'bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100'
                                                                }`}
                                                        >
                                                            <div className="w-4 h-4 flex items-center justify-center shrink-0">{tech.icon}</div>
                                                            <span className="text-[10px] font-bold capitalize">{tech.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Portfolio Media Frame & Launch Button */}
                                        <div className="w-full md:w-80 flex flex-col items-center justify-center p-6 border-t md:border-t-0 md:border-l border-gray-800/10 dark:border-white/5 gap-5 shrink-0">
                                            
                                            {/* Floating Screen Mockup */}
                                            <div className="relative w-full h-[150px] md:h-[240px] rounded-2xl overflow-hidden shadow-2xl group border border-white/5 bg-black/10">
                                                <LazyImage
                                                    src={project.thumbnail}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                                                    darkMode={darkMode}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                                            </div>
                                            
                                            {/* Shimmering Portal Launch Button */}
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full py-3 rounded-full flex items-center justify-center gap-2 font-bold tracking-wider uppercase text-xs shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                                                    ${darkMode
                                                        ? `bg-gradient-to-r ${theme.btnGrad} text-white shadow-black/45`
                                                        : 'bg-gradient-to-r from-indigo-500 to-purple-650 text-white shadow-indigo-500/20 hover:from-indigo-400 hover:to-purple-550'
                                                    }`}
                                                style={{
                                                    boxShadow: (darkMode && isActive) ? `0 0 16px ${theme.glow}` : undefined
                                                }}
                                            >
                                                <span>{project.liveLink.includes("github.com") ? "View Code" : "Launch Site"}</span>
                                                {project.liveLink.includes("github.com") ? <FaGithub className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dot Indicators & Nav Arrows */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-40">
                    {/* Mobile Prev Button */}
                    <button
                        onClick={prevSlide}
                        className={`md:hidden p-2 rounded-full border transition-all duration-300 active:scale-90 ${
                            darkMode
                                ? 'bg-white/5 border-white/10 text-white hover:bg-white/15'
                                : 'bg-black/5 border-black/10 text-black hover:bg-black/15'
                        }`}
                        aria-label="Previous project"
                    >
                        <ArrowLeft size={14} />
                    </button>

                    {/* Dots */}
                    <div className="flex space-x-2">
                        {projects.map((project, index) => {
                            const theme = themeConfig[project.title] || themeConfig["Future's Hope"];
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3.5 h-1.5 rounded-full transition-all duration-500 ${isActive
                                        ? `w-8 ${darkMode ? theme.indicatorBg : 'bg-indigo-600'}`
                                        : `${darkMode ? 'bg-slate-700/30 hover:bg-slate-600/40' : 'bg-slate-300 hover:bg-slate-400'}`
                                        }`}
                                />
                            );
                        })}
                    </div>

                    {/* Mobile Next Button */}
                    <button
                        onClick={nextSlide}
                        className={`md:hidden p-2 rounded-full border transition-all duration-300 active:scale-90 ${
                            darkMode
                                ? 'bg-white/5 border-white/10 text-white hover:bg-white/15'
                                : 'bg-black/5 border-black/10 text-black hover:bg-black/15'
                        }`}
                        aria-label="Next project"
                    >
                        <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
});

export default ProjectSlideshow;