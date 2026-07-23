import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);
  const name = "SUPRATIM MANDAL";
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const p = setInterval(() => {
      setProgress((v) => (v >= 100 ? 100 : v + Math.floor(Math.random() * 9) + 2));
    }, 180);
    const r = setInterval(() => {
      setRevealed((v) => (v >= name.length ? name.length : v + 1));
    }, 70);
    return () => {
      clearInterval(p);
      clearInterval(r);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050414] overflow-hidden">
      <style>{`
        @keyframes spin-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes dash { to { stroke-dashoffset: 0; } }
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        @keyframes flicker { 0%, 100% { opacity: 1; } 45% { opacity: 0.4; } 50% { opacity: 1; } 55% { opacity: 0.6; } }
        @keyframes pulseDot { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        .spin-slow { animation: spin 6s linear infinite; }
        .spin-rev-slow { animation: spin-rev 9s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #3b2f8f 1px, transparent 1px), linear-gradient(to bottom, #3b2f8f 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* vertical scanline sweep */}
      <div
        className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none"
        style={{ animation: "scanline 3.2s linear infinite" }}
      />

      {/* corner brackets */}
      {[
        "top-6 left-6 border-t border-l",
        "top-6 right-6 border-t border-r",
        "bottom-6 left-6 border-b border-l",
        "bottom-6 right-6 border-b border-r",
      ].map((pos, i) => (
        <div key={i} className={`absolute w-8 h-8 border-cyan-500/40 ${pos}`} />
      ))}

      <div className="relative flex flex-col items-center gap-7">
        {/* HUD scanner core */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg viewBox="0 0 120 120" className="absolute inset-0 spin-slow">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="1.5"
              strokeDasharray="6 10"
              opacity="0.5"
            />
          </svg>
          <svg viewBox="0 0 120 120" className="absolute inset-0 spin-rev-slow">
            <circle
              cx="60"
              cy="60"
              r="42"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeDasharray="80 180"
              strokeLinecap="round"
            />
          </svg>
          <svg viewBox="0 0 120 120" className="absolute inset-0 spin-slow" style={{ animationDuration: "4s" }}>
            <circle
              cx="60"
              cy="60"
              r="30"
              fill="none"
              stroke="#a855f7"
              strokeWidth="1"
              strokeDasharray="4 6"
              opacity="0.6"
            />
          </svg>

          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_16px_4px_rgba(34,211,238,0.7)]"
               style={{ animation: "pulseDot 1.6s ease-in-out infinite" }} />

          {/* <span className="absolute -bottom-1 text-[11px] font-mono text-cyan-400 tabular-nums tracking-wider">
            {String(progress).padStart(3, "0")}%
          </span> */}
        </div>

        {/* name with glitch reveal */}
        <div className="flex flex-col items-center gap-2">
          <h1
            className="text-xl md:text-4xl font-bold tracking-[0.2em] bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent"
            style={{ animation: "flicker 3s ease-in-out infinite" }}
          >
            {name.slice(0, revealed)}
            <span className="text-cyan-400 animate-pulse">{revealed < name.length ? "_" : ""}</span>
          </h1>

          <div className="flex items-center gap-2 text-[10px] md:text-[19px] font-mono text-purple-400/70 tracking-[4px]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" style={{ animation: "pulseDot 1.4s ease-in-out infinite" }} />
            EAT.CODE.SLEEP.REPEAT
          </div>
        </div>

        {/* progress bar */}
        <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;