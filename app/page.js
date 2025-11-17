"use client";
import { useState, useEffect, useRef } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Durations as simple top-level constants (no objects, no refs)
const POMODORO_DURATION = 25 * 60;
const SHORT_DURATION = 5 * 60;
const LONG_DURATION = 15 * 60;

export default function PomodoroUI() {
  const [active, setActive] = useState("Pomodoro");
  const [time, setTime] = useState(POMODORO_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [loop, setLoop] = useState(false);
  const intervalRef = useRef(null);

  const sequence = ["Pomodoro", "Short Break", "Pomodoro", "Long Break"];

  const getDuration = (mode) => {
    if (mode === "Pomodoro") return POMODORO_DURATION;
    if (mode === "Short Break") return SHORT_DURATION;
    if (mode === "Long Break") return LONG_DURATION;
    return POMODORO_DURATION;
  };
  useEffect(() => {
    setIsRunning(false);
    setTime(getDuration(active));
  }, [active]);
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (time > 0) return;

    clearInterval(intervalRef.current);

    if (!loop) {
      setIsRunning(false);
      setTime(getDuration(active));
      return;
    }
    const currentIndex = sequence.indexOf(active);
    const nextIndex = (currentIndex + 1) % sequence.length;
    const nextMode = sequence[nextIndex];

    setActive(nextMode);
    setTime(getDuration(nextMode));
    setTimeout(() => setIsRunning(true), 50);
  }, [time, loop, active]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = Math.floor(secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start pt-10 text-white select-none">
      <div className="flex gap-4 mb-10">
        {[
          { label: "Pomodoro" },
          { label: "Short Break" },
          { label: "Long Break" },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={() => setActive(btn.label)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              active === btn.label ? "bg-purple-500 text-white" : "bg-white text-black"
            }`}
          >
            {btn.label}
          </button>
        ))}
        <button
          onClick={() => setLoop((v) => !v)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            loop ? "bg-purple-500 text-white" : "bg-white text-black"
          }`}
        >
          Loop
        </button>
      </div>

      <div className="text-6xl font-bold mb-6">{formatTime(time)}</div>
      <div className="flex items-center gap-6">
        <ChevronLeft
          className="w-10 h-10 cursor-pointer"
          onClick={() => {
            const idx = sequence.indexOf(active);
            const prevIdx = (idx - 1 + sequence.length) % sequence.length;
            setActive(sequence[prevIdx]);
          }}
        />

        <button
          onClick={() => setIsRunning((r) => !r)}
          className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center"
        >
          {isRunning ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
        </button>

        <ChevronRight
          className="w-10 h-10 cursor-pointer"
          onClick={() => {
            const idx = sequence.indexOf(active);
            const nextIdx = (idx + 1) % sequence.length;
            setActive(sequence[nextIdx]);
          }}
        />
      </div>
    </div>
  );
}