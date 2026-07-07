import React from "react";

function AttendanceCounter({ theme, count, setCount }) {
  let message = "No students present";
  let statusColor = "text-rose-600";

  if (count >= 20) {
    message = "Class is full";
    statusColor = "text-emerald-600";
  } else if (count > 0) {
    message = "Class strated";
    statusColor = "text-amber-600";
  }

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => count > 0 && setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div
      className={`p-4 mb-6 rounded-xl border-slate-300 border ${theme === "light" ? "shadow-black/30" : " shadow-white/70"} backdrop-blur-sm shadow-sm bg-white/5`}
    >
      <h2 className="text-xl font-bold mb-2">Attendance Tracker</h2>
      <h3 className="text-lg font-medium mb-2">
        Total Students Present:{" "}
        <span className="font-bold text-xl">{count}</span>
      </h3>
      <p className="mb-4">
        Staus:{" "}
        <span className={`text-lg font-bold ${statusColor}`}>{message}</span>
      </p>
      <div className="flex flex-wrap gap-4">
        <button
          className="bg-emerald-500 px-4 py-2 rounded-lg text-lg font-medium text-slate-50
          relative after:absolute after:content-[''] after:-inset-1.5 after:rounded-xl after:border-3 after:border-emerald-500 after:opacity-0 after:scale-90 after:transition-all after:duration-300 after:pointer-events-none active:after:opacity-100 hover:after:opacity-100 active:after:scale-100
          hover:after:scale-100"
          onClick={incrementCount}
        >
          Increment(+1)
        </button>
        <button
          className="bg-slate-600 px-4 py-2 rounded-lg text-lg font-medium text-slate-50
          relative after:absolute after:content-[''] after:-inset-1.5 after:rounded-xl after:border-3 after:border-slate-600 after:opacity-0 after:scale-90 after:transition-all after:duration-300 after:pointer-events-none active:after:opacity-100 hover:after:opacity-100 active:after:scale-100
          hover:after:scale-100"
          onClick={decrementCount}
        >
          Decrement(-1)
        </button>
        <button
          className="bg-rose-500 px-4 py-2 rounded-lg text-lg font-medium text-slate-50 relative after:absolute after:content-[''] after:-inset-1.5 after:rounded-xl after:border-3 after:border-rose-500 after:opacity-0 after:scale-90 after:transition-all after:duration-300 after:pointer-events-none active:after:opacity-100 hover:after:opacity-100 active:after:scale-100
          hover:after:scale-100"
          onClick={resetCount}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default AttendanceCounter;
