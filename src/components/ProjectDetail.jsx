import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaReact } from "react-icons/fa";
import { 
  SiPython, SiYaml, SiDocker, SiExpress, SiMongodb, 
  SiMongoose, SiSocketdotio, SiTailwindcss, SiTensorflow, 
  SiOpencv, SiNginx, SiObsstudio, SiPandas, SiStreamlit, 
  SiPlotly, SiFirebase 
} from "react-icons/si";
import { 
  ArrowLeft, ExternalLink, Cpu, CheckCircle2, Code2, 
  Terminal, Settings, Layers, Sparkles, BookOpen, AlertTriangle 
} from "lucide-react";
import { projectsData } from "../data/projectsData";

const techIcons = {
  "React": <FaReact className="text-sky-400" />,
  "Express": <SiExpress className="text-gray-400" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "Mongoose": <SiMongoose className="text-red-500" />,
  "Socket.io": <SiSocketdotio className="text-gray-300" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Tailwind": <SiTailwindcss className="text-teal-400" />,
  "Python": <SiPython className="text-yellow-500" />,
  "YAML": <SiYaml className="text-red-500" />,
  "Docker": <SiDocker className="text-sky-500" />,
  "TensorFlow": <SiTensorflow className="text-orange-500" />,
  "OpenCV": <SiOpencv className="text-emerald-500" />,
  "Nginx RTMP": <SiNginx className="text-green-500" />,
  "OBS Studio": <SiObsstudio className="text-sky-500" />,
  "Pandas": <SiPandas className="text-blue-500" />,
  "Streamlit": <SiStreamlit className="text-red-500" />,
  "Plotly": <SiPlotly className="text-blue-400" />,
  "Yahoo Finance": <ExternalLink className="text-purple-400" />,
  "Firebase": <SiFirebase className="text-amber-500" />
};

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
  "PyProxy": {
    glow: "rgba(6, 182, 212, 0.35)",
    border: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-400/40",
    badgeBg: "bg-cyan-500/10 text-cyan-300",
    accentText: "text-cyan-400",
    btnGrad: "from-cyan-500 to-blue-600",
    indicatorBg: "bg-cyan-500",
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

export default function ProjectDetail({ darkMode, setDarkMode }) {
  const { slug } = useParams();

  // Find project data by slug
  const project = useMemo(() => {
    return projectsData.find(p => p.slug === slug);
  }, [slug]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center font-mono ${
        darkMode ? "bg-[#070913] text-white" : "bg-[#fcfbf4] text-slate-900"
      }`}>
        <AlertTriangle className="w-12 h-12 text-red-500 mb-4 animate-bounce" />
        <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
        <p className="opacity-60 mb-6 text-sm">The requested case study could not be located.</p>
        <Link 
          to="/" 
          className="px-6 py-2.5 rounded-full border border-current text-xs uppercase font-bold tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const theme = themeConfig[project.title] || themeConfig["Future's Hope"];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 relative flex flex-col border-x-8 border-black ${
      darkMode ? "bg-[#070913] text-slate-100" : "bg-[#fcfbf4] text-slate-900"
    }`}>
      {/* Background Layers */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out -z-10"
        style={{
          opacity: darkMode ? 0 : 1,
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 24px 24px',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out -z-10"
        style={{
          opacity: darkMode ? 1 : 0,
          background: `radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.09) 0%, transparent 55%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 50%)`
        }}
      />

      {/* Ambient Halo Backlight */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 rounded-full blur-[140px] opacity-20 pointer-events-none w-[60%] h-[40%]"
        style={{
          background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto px-6 py-12 flex-grow z-10 flex flex-col gap-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col gap-6">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 w-fit hover:translate-x-[-4px] ${
              darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-black"
            }`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-800/10 dark:border-white/5 pb-8">
            <div className="flex flex-col gap-2">
              <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 ${theme.accentText}`}>
                <Sparkles className="w-3.5 h-3.5" /> Case Study
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-extrabold font-marker tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 dark:from-white dark:via-slate-100 dark:to-slate-400">
                  {project.title}
                </h1>
                {project.featured && (
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border bg-cyan-500/10 border-cyan-400/25 text-cyan-300 shadow-md shadow-cyan-500/10 animate-pulse">
                    Featured Project
                  </span>
                )}
              </div>
              <p className={`text-base font-semibold mt-1 max-w-2xl ${darkMode ? "text-slate-450" : "text-slate-550"}`}>
                {project.tagline}
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-3">
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 ${
                  darkMode 
                    ? "bg-white/5 border-white/10 text-white hover:bg-white/10" 
                    : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                }`}
              >
                <FaGithub className="w-4 h-4" /> Repository
              </a>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                  darkMode
                    ? `bg-gradient-to-r ${theme.btnGrad} text-white shadow-black/45`
                    : 'bg-gradient-to-r from-indigo-500 to-purple-650 text-white shadow-indigo-500/20'
                }`}
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Case Study Sections */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Overview */}
            <div className={`p-6 rounded-[32px] border ${
              darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
            } shadow-xl backdrop-blur-md`}>
              <h2 className="text-lg font-bold font-marker tracking-wide mb-4 flex items-center gap-2">
                <BookOpen className={`w-5 h-5 ${theme.accentText}`} /> Overview
              </h2>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                {project.overview}
              </p>
            </div>

            {/* Architecture */}
            <div className={`p-6 rounded-[32px] border ${
              darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
            } shadow-xl backdrop-blur-md`}>
              <h2 className="text-lg font-bold font-marker tracking-wide mb-4 flex items-center gap-2">
                <Layers className={`w-5 h-5 ${theme.accentText}`} /> Technical Architecture
              </h2>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                {project.architecture}
              </p>
            </div>

            {/* Key Features */}
            <div className={`p-6 rounded-[32px] border ${
              darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
            } shadow-xl backdrop-blur-md`}>
              <h2 className="text-lg font-bold font-marker tracking-wide mb-4 flex items-center gap-2">
                <Cpu className={`w-5 h-5 ${theme.accentText}`} /> Key Features & Capabilities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${theme.accentText}`} />
                    <span className={`text-xs md:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-750"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-[32px] border ${
                darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
              } shadow-xl backdrop-blur-md`}>
                <h3 className="text-base font-bold font-marker tracking-wide mb-3 text-red-400">
                  Challenge
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? "text-slate-350" : "text-slate-650"}`}>
                  {project.challenges}
                </p>
              </div>

              <div className={`p-6 rounded-[32px] border ${
                darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
              } shadow-xl backdrop-blur-md`}>
                <h3 className="text-base font-bold font-marker tracking-wide mb-3 text-emerald-400">
                  Outcome & Resolution
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? "text-slate-350" : "text-slate-650"}`}>
                  {project.outcomes}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Metrics & Tech Stack */}
          <div className="flex flex-col gap-8">
            
            {/* Tech Stack Badge List */}
            <div className={`p-6 rounded-[32px] border ${
              darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
            } shadow-xl backdrop-blur-md`}>
              <h2 className="text-lg font-bold font-marker tracking-wide mb-4 flex items-center gap-2">
                <Code2 className={`w-5 h-5 ${theme.accentText}`} /> Tech Stack
              </h2>
              <div className="flex flex-col gap-4">
                {project.techStack.map((tech, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-start gap-3 p-2.5 rounded-2xl border transition-all duration-300 ${
                      darkMode 
                        ? "bg-white/5 border-white/5 text-slate-300" 
                        : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-500/10 text-lg shrink-0 mt-0.5">
                      {techIcons[tech.name] || <Code2 />}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-extrabold capitalize">{tech.name}</span>
                      <span className={`text-[10px] leading-relaxed ${darkMode ? "text-slate-450" : "text-slate-500"}`}>
                        {tech.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Conditionally Render Extras Sections for Featured Project */}
        {project.extras && (
          <div className="flex flex-col gap-8 border-t border-gray-800/10 dark:border-white/5 pt-10">
            <div className="flex flex-col gap-2">
              <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 ${theme.accentText}`}>
                <Terminal className="w-4 h-4" /> Developer Portal
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-marker tracking-wide">
                Docker & CLI Configuration
              </h2>
              <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-650"}`}>
                Advanced specifications, deployment setups, and integration controls.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Docker Specs */}
              <div className={`p-6 rounded-[32px] border flex flex-col gap-4 ${
                darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
              } shadow-xl backdrop-blur-md`}>
                <h3 className="text-base font-bold font-marker tracking-wide flex items-center gap-2">
                  <SiDocker className="text-lg text-sky-400" /> Container Deployment
                </h3>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Docker Pull</span>
                    <pre className="p-3 bg-black/50 text-emerald-400 rounded-lg text-[10px] font-mono select-all overflow-x-auto">
                      {project.extras.docker.pullCmd}
                    </pre>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Docker Run</span>
                    <pre className="p-3 bg-black/50 text-emerald-400 rounded-lg text-[10px] font-mono select-all overflow-x-auto">
                      {project.extras.docker.runCmd}
                    </pre>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Compose File</span>
                    <pre className="p-3 bg-black/50 text-emerald-400 rounded-lg text-[10px] font-mono select-all overflow-x-auto">
                      {project.extras.docker.composeExample}
                    </pre>
                  </div>
                </div>
              </div>

              {/* CLI Commands */}
              <div className={`p-6 rounded-[32px] border flex flex-col gap-4 ${
                darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
              } shadow-xl backdrop-blur-md`}>
                <h3 className="text-base font-bold font-marker tracking-wide flex items-center gap-2">
                  <Terminal className="text-lg text-gray-400" /> CLI Execution Guide
                </h3>
                <div className="flex flex-col gap-4">
                  {project.extras.cli.commands.map((cmdItem, idx) => (
                    <div key={idx} className="flex flex-col gap-1 border-b border-gray-800/10 dark:border-white/5 pb-2.5 last:border-b-0">
                      <code className="text-[10px] font-mono text-cyan-400 bg-black/40 px-2.5 py-1 rounded w-fit">
                        {cmdItem.cmd}
                      </code>
                      <span className={`text-[10px] leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-650"}`}>
                        {cmdItem.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Configuration Variables */}
              <div className={`p-6 rounded-[32px] border flex flex-col gap-4 ${
                darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
              } shadow-xl backdrop-blur-md`}>
                <h3 className="text-base font-bold font-marker tracking-wide flex items-center gap-2">
                  <Settings className="text-lg text-amber-500" /> Environment Variables
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[10px] md:text-xs">
                    <thead>
                      <tr className="border-b border-gray-800/20 dark:border-white/10">
                        <th className="py-2 font-bold uppercase text-slate-500">Variable</th>
                        <th className="py-2 font-bold uppercase text-slate-500">Description</th>
                        <th className="py-2 font-bold uppercase text-slate-500">Default</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.extras.configuration.envVars.map((env, idx) => (
                        <tr key={idx} className="border-b border-gray-800/10 dark:border-white/5 last:border-0">
                          <td className="py-2.5 font-mono text-cyan-400">{env.name}</td>
                          <td className={`py-2.5 pr-2 ${darkMode ? "text-slate-300" : "text-slate-750"}`}>{env.desc}</td>
                          <td className="py-2.5 font-mono opacity-80">{env.default}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Productization Plan */}
              <div className={`p-6 rounded-[32px] border flex flex-col gap-4 ${
                darkMode ? `bg-slate-900/40 ${theme.border}` : "bg-white/70 border-slate-200/80"
              } shadow-xl backdrop-blur-md`}>
                <h3 className="text-base font-bold font-marker tracking-wide flex items-center gap-2">
                  <Sparkles className="text-lg text-emerald-400" /> Productization Roadmap
                </h3>
                <div className="flex flex-col gap-3.5">
                  {project.extras.productizationPlan.map((planItem, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-400 font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-750"}`}>
                        {planItem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
