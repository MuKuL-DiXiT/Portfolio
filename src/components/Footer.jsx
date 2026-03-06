import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import  {SiLeetcode } from "react-icons/si";
import * as ReactGithubCalendar from "react-github-calendar";

export default function Footer({ darkMode }) {
  return (
    <footer className="relative mx-32 flex justify-center">

      {/* Main container */}
      <div
        className={`
        relative w-full max-w-6xl
        rounded-t-[40px]
        p-5
        border
        backdrop-blur-xl
        shadow-2xl
        overflow-hidden
        ${darkMode
          ? "bg-white/80 text-black border-gray-300"
          : "bg-black/70 text-white border-gray-700"}
        `}
      >

        {/* glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)] pointer-events-none" />

        {/* content */}
        <div className="relative z-10 flex flex-col gap-12">

          {/* Heatmap */}
          <div
            className={`
            overflow-x-auto
            rounded-xl
            p-6
            flex justify-center
            ${darkMode ? "bg-gray-100" : "bg-gray-950/60"}
            `}
          >
            <ReactGithubCalendar.GitHubCalendar
              username="MuKuL-DiXiT"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              colorScheme={darkMode ? "light" : "dark"}
            />
          </div>

        </div>
      </div>
    </footer>
  );
}