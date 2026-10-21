// client/src/components/InteractiveSportsField.tsx
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, FastForward, Flag, Users } from 'lucide-react';

export const InteractiveSportsField: React.FC = () => {
  const [minutes, setMinutes] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);

  const soniaLapTime = 18;
  const raviLapTime = 12;
  const meetingTime = 36;

  const soniaLaps = minutes / soniaLapTime;
  const raviLaps = minutes / raviLapTime;

  const soniaAngle = (soniaLaps % 1) * 2 * Math.PI - Math.PI / 2;
  const raviAngle = (raviLaps % 1) * 2 * Math.PI - Math.PI / 2;

  const radius = 100;
  const centerX = 150;
  const centerY = 150;

  const soniaX = centerX + radius * Math.cos(soniaAngle);
  const soniaY = centerY + radius * Math.sin(soniaAngle);

  const raviX = centerX + (radius - 18) * Math.cos(raviAngle);
  const raviY = centerY + (radius - 18) * Math.sin(raviAngle);

  const isAtMeetingPoint = minutes > 0 && minutes % meetingTime === 0;

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setMinutes((prev) => {
          if (prev >= 48) {
            setIsPlaying(false);
            return 48;
          }
          return Math.round((prev + 0.5) * 10) / 10;
        });
      }, 200 / speed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const handleReset = () => {
    setIsPlaying(false);
    setMinutes(0);
  };

  const handleJumpToMeeting = () => {
    setIsPlaying(false);
    setMinutes(36);
  };

  return (
    <div className="cyber-card p-6 rounded-2xl border border-[rgba(0,255,136,0.25)] bg-[#0f1419] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      {/* Terminal Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[rgba(255,255,255,0.08)] gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="p-2 bg-[rgba(255,107,107,0.12)] text-[#ff6b6b] border border-[rgba(255,107,107,0.3)] rounded-lg">
              <Users className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold font-tech tracking-wide text-white flex items-center gap-2">
                CIRCULAR TRACK: <span className="text-[#00ff88]">LCM SIMULATOR</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Exercise 1.1 Q7 (Page 24): When will Sonia &amp; Ravi meet at the starting line?
              </p>
            </div>
          </div>
        </div>

        {/* Meeting Status Badge */}
        {isAtMeetingPoint ? (
          <div className="px-4 py-2 rounded-xl bg-[rgba(0,255,136,0.15)] border border-[#00ff88] text-[#00ff88] text-xs font-tech font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,136,0.4)] animate-pulse">
            <Flag className="w-4 h-4 text-[#00ff88]" />
            REUNION AT START! LCM(18, 12) = 36 MIN
          </div>
        ) : (
          <div className="text-xs text-slate-400 font-mono px-3.5 py-1.5 rounded-lg bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)]">
            ELAPSED TIME: <span className="text-[#00d4ff] font-bold text-sm">{minutes}</span> MIN
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
        {/* Animated Circular Track SVG */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative p-4 rounded-2xl bg-[#050810] border border-[rgba(0,255,136,0.25)] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <svg width="300" height="300" className="overflow-visible">
              <circle
                cx={centerX}
                cy={centerY}
                r={radius + 15}
                fill="#070b14"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Main Track Bed */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="#101726"
                strokeWidth="28"
              />
              {/* Outer Sonia Orbit Track */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="rgba(255, 107, 107, 0.4)"
                strokeWidth="1.5"
                strokeDasharray="2 3"
              />
              {/* Inner Ravi Orbit Track */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius - 18}
                fill="none"
                stroke="rgba(0, 212, 255, 0.4)"
                strokeWidth="1.5"
                strokeDasharray="2 3"
              />

              {/* Center Field Hub */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius - 32}
                fill="#0a0e1a"
                stroke="#00ff88"
                strokeWidth="1.5"
              />
              <text
                x={centerX}
                y={centerY - 8}
                textAnchor="middle"
                fill="#00ff88"
                fontSize="11"
                fontWeight="bold"
                fontFamily="Orbitron"
              >
                ORBIT FIELD
              </text>
              <text
                x={centerX}
                y={centerY + 10}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="9"
                fontFamily="Fira Code"
              >
                LCM(18, 12) = 36m
              </text>

              {/* Start Line Marker */}
              <line
                x1={centerX}
                y1={centerY - radius - 15}
                x2={centerX}
                y2={centerY - radius + 15}
                stroke="#ffbd2e"
                strokeWidth="3"
              />
              <text
                x={centerX}
                y={centerY - radius - 20}
                textAnchor="middle"
                fill="#ffbd2e"
                fontSize="10"
                fontWeight="bold"
                fontFamily="Fira Code"
              >
                START LINE
              </text>

              {/* Sonia Runner Pin */}
              <circle
                cx={soniaX}
                cy={soniaY}
                r="9"
                fill="#ff6b6b"
                stroke="#ffffff"
                strokeWidth="2"
                filter="drop-shadow(0px 0px 6px #ff6b6b)"
              />
              <text
                x={soniaX}
                y={soniaY + 3}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="8"
                fontWeight="bold"
                fontFamily="Fira Code"
              >
                S
              </text>

              {/* Ravi Runner Pin */}
              <circle
                cx={raviX}
                cy={raviY}
                r="9"
                fill="#00d4ff"
                stroke="#ffffff"
                strokeWidth="2"
                filter="drop-shadow(0px 0px 6px #00d4ff)"
              />
              <text
                x={raviX}
                y={raviY + 3}
                textAnchor="middle"
                fill="#050810"
                fontSize="8"
                fontWeight="bold"
                fontFamily="Fira Code"
              >
                R
              </text>
            </svg>
          </div>
        </div>

        {/* Live Lap & Mathematical Progress Stats */}
        <div className="lg:col-span-6 space-y-4">
          {/* Sonia Card */}
          <div className="p-4 rounded-xl bg-[#141b24] border border-[rgba(255,107,107,0.3)] shadow-[0_0_15px_rgba(255,107,107,0.05)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff6b6b] shadow-[0_0_8px_#ff6b6b]"></span>
                <span className="font-bold text-white font-tech text-sm">Sonia (Track Outer)</span>
              </div>
              <span className="text-xs font-mono text-[#ff6b6b]">18 min / lap</span>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between">
              <span className="text-xs text-slate-400 font-mono">ROUNDS COMPLETED:</span>
              <span className="text-xl font-mono font-bold text-[#ff6b6b]">
                {soniaLaps.toFixed(2)} <span className="text-xs text-slate-400 font-sans">laps</span>
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">
              At start line on multiples of 18: <span className="text-[#ff6b6b] font-bold">18m, 36m, 54m...</span>
            </div>
          </div>

          {/* Ravi Card */}
          <div className="p-4 rounded-xl bg-[#141b24] border border-[rgba(0,212,255,0.3)] shadow-[0_0_15px_rgba(0,212,255,0.05)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]"></span>
                <span className="font-bold text-white font-tech text-sm">Ravi (Track Inner • Faster)</span>
              </div>
              <span className="text-xs font-mono text-[#00d4ff]">12 min / lap</span>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between">
              <span className="text-xs text-slate-400 font-mono">ROUNDS COMPLETED:</span>
              <span className="text-xl font-mono font-bold text-[#00d4ff]">
                {raviLaps.toFixed(2)} <span className="text-xs text-slate-400 font-sans">laps</span>
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">
              At start line on multiples of 12: <span className="text-[#00d4ff] font-bold">12m, 24m, 36m, 48m...</span>
            </div>
          </div>

          {/* Milestone Log */}
          <div className="p-3.5 rounded-xl bg-[#0a0e1a] border border-[rgba(255,255,255,0.08)] text-xs space-y-2 font-mono">
            <div className={`flex justify-between ${minutes >= 12 ? 'text-white' : 'text-slate-500'}`}>
              <span>• Minute 12:</span>
              <span>Ravi finishes Lap 1 (Sonia @ 0.67 laps)</span>
            </div>
            <div className={`flex justify-between ${minutes >= 18 ? 'text-white' : 'text-slate-500'}`}>
              <span>• Minute 18:</span>
              <span>Sonia finishes Lap 1 (Ravi @ 1.5 laps)</span>
            </div>
            <div className={`flex justify-between ${minutes >= 24 ? 'text-white' : 'text-slate-500'}`}>
              <span>• Minute 24:</span>
              <span>Ravi finishes Lap 2 (Sonia @ 1.33 laps)</span>
            </div>
            <div className={`flex justify-between font-bold ${minutes >= 36 ? 'text-[#00ff88]' : 'text-slate-500'}`}>
              <span>• Minute 36:</span>
              <span>BOTH AT START! Sonia: 2 laps, Ravi: 3 laps</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controller Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-xl flex items-center gap-2 transition-all ${
              isPlaying
                ? 'bg-[rgba(255,189,46,0.18)] text-[#ffbd2e] border border-[#ffbd2e] shadow-[0_0_15px_rgba(255,189,46,0.3)]'
                : 'cyber-btn-primary'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? 'Pause Run' : 'Start Simulation'}
          </button>

          <button
            onClick={handleReset}
            className="cyber-btn-secondary px-3.5 py-2 text-xs font-mono font-semibold flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>

          <button
            onClick={handleJumpToMeeting}
            className="px-3.5 py-2 rounded-xl bg-[rgba(0,255,136,0.12)] hover:bg-[rgba(0,255,136,0.2)] text-[#00ff88] border border-[#00ff88] text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors shadow-[0_0_15px_rgba(0,255,136,0.25)]"
          >
            <FastForward className="w-3.5 h-3.5" />
            Jump to 36 Min (LCM)
          </button>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
          <span>SPEED:</span>
          {[1, 2, 4].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border transition-all ${
                speed === s
                  ? 'bg-[rgba(0,212,255,0.2)] text-[#00d4ff] border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                  : 'bg-[#141b24] text-slate-400 border-[rgba(255,255,255,0.08)]'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
