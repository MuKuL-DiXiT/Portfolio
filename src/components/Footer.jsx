import React, { memo } from "react";
import { GitHubCalendar } from "react-github-calendar";

const Footer = memo(function Footer({ darkMode }) {
  return (
    <footer className="relativ w-full flex justify-center z-10">

      {/* Main container */}
      <div
        className={`
        relative w-full max-w-5xl
        rounded-t-[32px]
        p-6
        border
        backdrop-blur-xl
        shadow-xl
        overflow-hidden
        transition-all duration-500
        ${darkMode
          ? "bg-white/10 text-slate-100 border-white/5 shadow-black/40"
          : "bg-black/30 text-slate-850 border-slate-200 shadow-slate-200/40"}
        `}
      >

        {/* glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />

        {/* content */}
        <div className="relative z-10 flex flex-col gap-6">

          {/* Heatmap */}
          <div
            className={`
            overflow-x-auto
            rounded-2xl
            p-6
            flex justify-center
            border
            transition-all duration-500
            ${darkMode ? "bg-white/30 border-white/5" : "bg-black/30 border-slate-200/50"}
            `}
          >
            <div className="w-full scale-90 sm:scale-140 origin-center flex justify-center">
              <GitHubCalendar
                username="MuKuL-DiXiT"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                colorScheme={darkMode ? "dark" : "light"}
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
});

export default Footer;