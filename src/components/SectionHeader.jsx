import React from "react";

export default function SectionHeader({ title, darkMode }) {
  return (
    <div className="w-full flex flex-col items-center select-none">
      <div className="relative inline-block">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          <span
            className={
              `bg-clip-text text-transparent ` +
              (darkMode
                ? `bg-gradient-to-r from-amber-200 via-white to-amber-200`
                : `bg-gradient-to-r from-slate-900 via-black to-slate-900`)
            }
          >
            {title}
          </span>
        </h2>
        {/* Accent dot */}
        <span
          className={
            `absolute -right-3 -top-2 w-2 h-2 rounded-full ` +
            (darkMode ? `bg-amber-300` : `bg-slate-800`)
          }
        />
      </div>
      {/* Underline */}
      <div
        className={
          `mt-3 h-1 w-24 rounded-full ` +
          (darkMode ? `bg-amber-400/80` : `bg-slate-800/70`)
        }
      />
    </div>
  );
}
