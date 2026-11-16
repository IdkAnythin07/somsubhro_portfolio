import React, { useState, useEffect } from 'react';

interface TopStatusBarProps {
  onNavigateTo: (windowId: 'about' | 'lab' | 'offline') => void;
  activeWindowId?: 'about' | 'lab' | 'offline';
}

export const TopStatusBar: React.FC<TopStatusBarProps> = ({ onNavigateTo, activeWindowId }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b-[3px] border-black px-3 sm:px-5 py-2.5 flex items-center justify-between shadow-[0_3px_0px_0px_rgba(0,0,0,1)] select-none">
      {/* Left: Bold Brand Badge & Live Status Pill */}
      <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap">
        {/* Brand Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FFE600] border-[2.5px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-mono font-black text-xs sm:text-sm tracking-wider uppercase">
          <span className="text-sm sm:text-base leading-none">⚡</span>
          <span>SOMSUBHRA.OS</span>
        </div>

        {/* Live Status Indicator Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-[#F4F4F0] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono text-[11px] font-bold tracking-wide">
          <span className="w-2.5 h-2.5 rounded-full bg-[#23F365] border border-black animate-pulse shrink-0" />
          <span className="text-black">AVAILABLE FOR CREATIVE WORK</span>
        </div>
      </div>

      {/* Center / Right: Quick Anchor Links & Clock */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Anchor Navigation Links */}
        <nav className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => onNavigateTo('about')}
            className={`
              px-2 sm:px-2.5 py-1 border-2 border-black font-mono font-bold text-[10px] sm:text-xs uppercase
              transition-all duration-75 cursor-pointer
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
              ${
                activeWindowId === 'about'
                  ? 'bg-[#FFE600] text-black font-black'
                  : 'bg-white hover:bg-[#FFE600] text-black'
              }
            `}
          >
            <span className="sm:hidden">ABOUT</span>
            <span className="hidden sm:inline">ABOUT_ME</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTo('lab')}
            className={`
              px-2 sm:px-2.5 py-1 border-2 border-black font-mono font-bold text-[10px] sm:text-xs uppercase
              transition-all duration-75 cursor-pointer
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
              ${
                activeWindowId === 'lab'
                  ? 'bg-[#00F0FF] text-black font-black'
                  : 'bg-white hover:bg-[#00F0FF] text-black'
              }
            `}
          >
            <span className="sm:hidden">LAB</span>
            <span className="hidden sm:inline">CREATIVE_LAB</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTo('offline')}
            className={`
              px-2 sm:px-2.5 py-1 border-2 border-black font-mono font-bold text-[10px] sm:text-xs uppercase
              transition-all duration-75 cursor-pointer
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
              ${
                activeWindowId === 'offline'
                  ? 'bg-[#FF499E] text-black font-black'
                  : 'bg-white hover:bg-[#FF499E] text-black'
              }
            `}
          >
            <span className="sm:hidden">OFFLINE</span>
            <span className="hidden sm:inline">OFFLINE_MODE</span>
          </button>
        </nav>

        {/* Real-time Clock */}
        <div className="hidden sm:flex items-center px-2.5 py-1 bg-black text-[#FFE600] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono text-xs font-bold tracking-wider">
          {time || '00:00:00'}
        </div>
      </div>
    </header>
  );
};
