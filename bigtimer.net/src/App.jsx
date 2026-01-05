import { useEffect, useRef, useState } from "react";
import "./App.css";
import finalSound from "./sounds/final.mp3";

/* ------------------ UTILITIES ------------------ */

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function msUntilMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  return midnight - now;
}

/* ------------------ APP ------------------ */

export default function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [todayUsed, setTodayUsed] = useState(0);

  const [dailyLog, setDailyLog] = useState(() => {
    return JSON.parse(localStorage.getItem("dailyLog")) || {};
  });

  const finalAudioRef = useRef(null);

  /* Create audio ONCE */
  useEffect(() => {
    finalAudioRef.current = new Audio(finalSound);
    finalAudioRef.current.volume = 1;
  }, []);

  /* Load today's usage */
  useEffect(() => {
    const today = getTodayKey();
    setTodayUsed(dailyLog[today] || 0);
  }, []);

  /* Timer logic */
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));

      setTodayUsed((prev) => {
        const updated = prev + 1;
        const today = getTodayKey();

        setDailyLog((log) => {
          const newLog = { ...log, [today]: updated };
          localStorage.setItem("dailyLog", JSON.stringify(newLog));
          return newLog;
        });

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  /* Stop timer at zero */
  useEffect(() => {
    if (timeLeft === 0) {
      setIsRunning(false);
    }
  }, [timeLeft]);

  /* Play sound at exactly 8 seconds */
  useEffect(() => {
    if (timeLeft === 8 && finalAudioRef.current) {
      finalAudioRef.current.currentTime = 0;
      finalAudioRef.current.play();
    }
  }, [timeLeft]);

  /* Update browser tab title */
  useEffect(() => {
    document.title = `⏱ ${formatTime(timeLeft)}`;
  }, [timeLeft]);

  /* Midnight reset */
  useEffect(() => {
    const timeout = setTimeout(() => {
      const today = getTodayKey();
      setTodayUsed(0);

      setDailyLog((log) => {
        const updated = { ...log, [today]: 0 };
        localStorage.setItem("dailyLog", JSON.stringify(updated));
        return updated;
      });
    }, msUntilMidnight());

    return () => clearTimeout(timeout);
  }, []);

  /* Controls */
  const increment = () => setTimeLeft((t) => t + 60);
  const decrement = () => setTimeLeft((t) => Math.max(0, t - 60));

  const presets = [
    { label: "30m", value: 30 },
    { label: "1h", value: 60 },
    { label: "2h", value: 120 },
    { label: "3h", value: 180 },
  ];

  /* Keep ONLY last 7 days */
  const last7Days = Object.entries(dailyLog).slice(-7);

  return (
    <div className="app">
      <div className="timer">{formatTime(timeLeft)}</div>

      <div className="controls">
        <button onClick={decrement}>−</button>
        <button onClick={() => setIsRunning((r) => !r)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={increment}>+</button>
      </div>

      <div className="presets">
        {presets.map((p) => (
          <button key={p.label} onClick={() => setTimeLeft(p.value * 60)}>
            {p.label}
          </button>
        ))}
      </div>

      <div className="today">Today Used: {formatTime(todayUsed)}</div>

      <div className="history">
        {last7Days.map(([date, seconds]) => (
          <div key={date}>
            {formatDate(date)}: {formatTime(seconds)}
          </div>
        ))}
      </div>
    </div>
  );
}
