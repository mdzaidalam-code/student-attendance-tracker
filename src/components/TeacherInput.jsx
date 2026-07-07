import React from "react";

function TeacherInput({ theme, teacher, setTeacher }) {
  return (
    <div
      className={`p-4 mb-6 rounded-xl border-slate-300 border ${theme === "light" ? "shadow-black/30" : " shadow-white/70"} backdrop-blur-sm shadow-sm bg-white/5`}
    >
      <h2 className="text-xl font-bold mb-2">Teacher Information</h2>
      <input
        type="text"
        value={teacher}
        placeholder="Enter teacher name"
        onChange={(e) => setTeacher(e.target.value)}
        className={`w-full max-w-xs mb-3 font-medium text-inherit px-4 py-2 rounded-lg border ${theme === "light" ? "border-slate-300 placeholder:text-slate-400" : "border-slate-600 placeholder:text-slate-500"} focus:outline-none focus:ring-2 
        focus:ring-violet-500 `}
      />
      <p>
        Current Instructor: {""}
        <span className={`text-lg font-bold text-violet-600`}>
          {teacher ? teacher : " No teacher assigned"}
        </span>
      </p>
    </div>
  );
}

export default TeacherInput;
