import React from "react";

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="mb-6">
      <button
        onClick={toggleTheme}
        className={`relative px-4 py-2 rounded-lg font-medium shadow transition-all duration-200
after:absolute after:content-[''] after:-inset-1.5 
after:rounded-xl after:border-3 after:opacity-0 after:scale-90
after:transition-all 
after:duration-300
after:pointer-events-none
${
  theme === "light"
    ? "bg-slate-800 text-white active:bg-slate-700 hover:bg-slate-700 after:border-slate-800 active:after:opacity-100 hover:after:opacity-100 active:after:scale-100 hover:after:scale-100"
    : "bg-white text-slate-800 active:bg-slate-200 hover:bg-slate-200 after:border-white active:after:opacity-100 hover:after:opacity-100 active:after:scale-100 hover:after:scale-100"
} focus-visible:outline-none`}
      >
        Switch to {theme === "light" ? "dark" : "light"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
