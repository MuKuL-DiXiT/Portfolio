import React, { memo } from "react";

const SectionHeader = memo(function SectionHeader({ title, darkMode }) {
  return (
    <div className="w-full flex flex-col items-center select-none pt-4 mb-2">
      <div className="relative inline-block">
        <h2 
          className="font-extrabold tracking-tight"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          <span
            className={
              `bg-clip-text text-transparent bg-gradient-to-r ` +
              (darkMode
                ? `from-white via-slate-100 to-slate-400`
                : `from-slate-950 via-slate-900 to-indigo-950`)
            }
          >
            {title}
          </span>
        </h2>
        {/* Accent dot */}
        <span
          className={
            `absolute -right-2.5 -top-1 w-1.5 h-1.5 rounded-full transition-colors duration-500 ` +
            (darkMode ? `bg-indigo-400` : `bg-indigo-650`)
          }
        />
      </div>
      {/* Underline */}
      <div
        className={
          `mt-2 h-[2px] w-20 rounded-full transition-colors duration-500 ` +
          (darkMode ? `bg-indigo-500/30` : `bg-indigo-500/20`)
        }
      />
    </div>
  );
});

export default SectionHeader;
