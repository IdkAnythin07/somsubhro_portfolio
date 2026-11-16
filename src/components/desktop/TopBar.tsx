import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal, Layers, Wifi, BatteryCharging } from 'lucide-react';
import { soundFx } from '../../utils/audio';
import { WindowId } from '../../types';

interface TopBarProps {
  onOpenWindow: (id: WindowId) => void;
  activeWindowId?: WindowId;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenWindow, activeWindowId }) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
      setDate(
        now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
    if (!muted) soundFx.playClick();
  };

  return (
    <header className="relative z-50 h-11 bg-white border-b-[3px] border-black flex items-center justify-between px-3 select-none">
      {/* Left: OS Brand & Menus */}
      <div className="flex items-center gap-3">
        {/* Apple/Retro OS style logo badge */}
        <div className="relative">
          <button
            onClick={() => {
              soundFx.playClick();
              setDropdownOpen(!dropdownOpen);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-brutal-yellow hover:bg-[#FFF04D] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer font-display font-extrabold text-xs tracking-wider"
          >
            <span className="text-sm">⚡</span>
            <span>DEV.OS</span>
          </button>

          {/* Quick Menu Dropdown */}
          {dropdownOpen && (
            <div
              className="absolute left-0 top-10 w-52 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-50 py-1 font-mono text-xs"
              onClick={() => setDropdownOpen(false)}
            >
              <div className="px-3 py-1.5 font-bold uppercase tracking-wider text-[11px] bg-canvas border-b-2 border-black flex items-center justify-between">
                <span>System Apps</span>
                <span className="text-brutal-pink">v3.8</span>
              </div>
              <button
                onClick={() => onOpenWindow('bio')}
                className="w-full text-left px-3 py-2 hover:bg-brutal-yellow border-b border-gray-200 font-bold flex items-center gap-2"
              >
                <span>👤</span> About Me [bio.exe]
              </button>
              <button
                onClick={() => onOpenWindow('projects')}
                className="w-full text-left px-3 py-2 hover:bg-brutal-pink border-b border-gray-200 font-bold flex items-center gap-2"
              >
                <span>📂</span> Projects [projects.app]
              </button>
              <button
                onClick={() => onOpenWindow('skills')}
                className="w-full text-left px-3 py-2 hover:bg-brutal-cyan border-b border-gray-200 font-bold flex items-center gap-2"
              >
                <span>⚡</span> Tech Stack [skills.sys]
              </button>
              <button
                onClick={() => onOpenWindow('terminal')}
                className="w-full text-left px-3 py-2 hover:bg-black hover:text-white border-b border-gray-200 font-bold flex items-center gap-2"
              >
                <span>💻</span> Terminal [sh]
              </button>
              <button
                onClick={() => onOpenWindow('contact')}
                className="w-full text-left px-3 py-2 hover:bg-brutal-lime border-b border-gray-200 font-bold flex items-center gap-2"
              >
                <span>✉️</span> Contact [mail.exe]
              </button>
              <div className="px-3 py-1.5 text-[10px] text-gray-500 font-mono">
                Press ESC or click to close
              </div>
            </div>
          )}
        </div>

        {/* Quick window links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs font-bold uppercase">
          <button
            onClick={() => onOpenWindow('bio')}
            className={`px-2 py-0.5 border-2 border-black transition-all ${
              activeWindowId === 'bio'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#FFE600]'
                : 'hover:bg-brutal-yellow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => onOpenWindow('projects')}
            className={`px-2 py-0.5 border-2 border-black transition-all ${
              activeWindowId === 'projects'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#FF499E]'
                : 'hover:bg-brutal-pink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => onOpenWindow('skills')}
            className={`px-2 py-0.5 border-2 border-black transition-all ${
              activeWindowId === 'skills'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#00F0FF]'
                : 'hover:bg-brutal-cyan shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            Stack
          </button>
          <button
            onClick={() => onOpenWindow('terminal')}
            className={`px-2 py-0.5 border-2 border-black transition-all ${
              activeWindowId === 'terminal'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#23F365]'
                : 'hover:bg-black hover:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            CLI
          </button>
          <button
            onClick={() => onOpenWindow('contact')}
            className={`px-2 py-0.5 border-2 border-black transition-all ${
              activeWindowId === 'contact'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#FF499E]'
                : 'hover:bg-brutal-lime shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Center: System Status Pill */}
      <div className="hidden lg:flex items-center gap-2 bg-canvas px-3 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono text-[11px] font-bold">
        <span className="w-2.5 h-2.5 rounded-full bg-brutal-lime border border-black animate-pulse" />
        <span className="tracking-wide">STATUS: ONLINE // AVAILABLE FOR CONTRACT & FULLTIME</span>
      </div>

      {/* Right: Sound, Wifi, Battery, Clock */}
      <div className="flex items-center gap-2">
        {/* Audio FX Mute toggle */}
        <button
          onClick={toggleSound}
          title={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
          className="p-1 bg-white hover:bg-brutal-cyan border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          {isMuted ? (
            <VolumeX size={15} strokeWidth={2.5} className="text-gray-600" />
          ) : (
            <Volume2 size={15} strokeWidth={2.5} className="text-black" />
          )}
        </button>

        {/* Battery & Wifi icons */}
        <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-canvas border-2 border-black font-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Wifi size={13} strokeWidth={2.5} />
          <BatteryCharging size={13} strokeWidth={2.5} className="text-green-600" />
          <span className="text-[11px]">100%</span>
        </div>

        {/* Clock */}
        <div className="bg-black text-brutal-yellow px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono text-xs font-bold tracking-wider flex items-center gap-1.5">
          <span className="hidden xl:inline text-gray-300 font-normal">{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </header>
  );
};
