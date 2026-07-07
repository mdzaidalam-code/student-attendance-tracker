import React from "react";
import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import TeacherInput from "./components/TeacherInput";
import AttendanceCounter from "./components/AttendanceCounter";

function App() {
  const [theme, setTheme] = useState("dark");
  const [count, setCount] = useState(0);
  const [teacher, setTeacher] = useState("");

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 ${theme === "light" ? "bg-slate-50 text-slate-950" : "bg-slate-950 text-slate-50"}`}
    >
      <div className="mx-auto max-w-xl">
        <h1 className="text-2xl md:text-3xl tracking-tight font-extrabold mb-2 ">
          Smart Class Tracker
        </h1>
        <p
          className={`relative  text-sm opacity-60 mb-16 after:absolute
          after:content-['']
          after:inset-x-0
          after:-bottom-7
          after:h-0.5
         ${theme === "light" ? "after:bg-slate-600/30" : "after:bg-slate-300/30"}`}
        >
          Live Session Management Dashboard
        </p>

        <ThemeToggle theme={theme} setTheme={setTheme} />
        <AttendanceCounter theme={theme} count={count} setCount={setCount} />
        <TeacherInput theme={theme} teacher={teacher} setTeacher={setTeacher} />
      </div>
    </div>
  );
}

export default App;
