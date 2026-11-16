import React from 'react';

export interface WindowDockState {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
}

interface BottomDockProps {
  windows: {
    about: WindowDockState;
    lab: WindowDockState;
    offline: WindowDockState;
  };
  onRestoreAndScroll: (windowKey: 'about' | 'lab' | 'offline') => void;
}

export const BottomDock: React.FC<BottomDockProps> = ({ windows, onRestoreAndScroll }) => {
  const dockItems: Array<{
    key: 'about' | 'lab' | 'offline';
    title: string;
    icon: string;
    accentBg: string;
    accentHover: string;
  }> = [
    {
      key: 'about',
      title: 'ABOUT_ME.exe',
      icon: '⚡',
      accentBg: 'bg-[#FFE600]',
      accentHover: 'hover:bg-[#FFF04D]',
    },
    {
      key: 'lab',
      title: 'THE_CREATIVE_LAB.psd',
      icon: '🎨',
      accentBg: 'bg-[#00F0FF]',
      accentHover: 'hover:bg-[#4DF4FF]',
    },
    {
      key: 'offline',
      title: 'OFFLINE_MODE.sav',
      icon: '💾',
      accentBg: 'bg-[#FF499E]',
      accentHover: 'hover:bg-[#FF6DB2]',
    },
  ];

  return (
    <aside className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] select-none">
      <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {dockItems.map((item) => {
          const state = windows[item.key];
          const isClosed = !state.isOpen;
          const isMinimized = state.isOpen && state.isMinimized;
          const isFullyOpen = state.isOpen && !state.isMinimized;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onRestoreAndScroll(item.key)}
              title={
                isClosed
                  ? `Restore ${item.title}`
                  : isMinimized
                  ? `Expand & Focus ${item.title}`
                  : `Scroll to ${item.title}`
              }
              className={`
                group relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2
                border-[2.5px] border-black font-mono font-bold text-xs
                transition-all duration-75 cursor-pointer
                shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                ${
                  isFullyOpen
                    ? `${item.accentBg} text-black font-black`
                    : isMinimized
                    ? 'bg-[#F4F4F0] text-black border-dashed'
                    : 'bg-gray-100 text-gray-700 opacity-80 hover:opacity-100'
                }
                ${item.accentHover}
              `}
            >
              {/* Icon */}
              <span className="text-sm sm:text-base leading-none">{item.icon}</span>

              {/* Title Text (hidden on tiny screens, visible on sm+) */}
              <span className="hidden sm:inline tracking-tight truncate max-w-[140px] md:max-w-none">
                {item.title}
              </span>

              {/* Status Indicator Badge */}
              {isFullyOpen && (
                <span className="w-2 h-2 rounded-full bg-[#23F365] border border-black shrink-0" />
              )}

              {isMinimized && (
                <span className="text-[9px] font-mono px-1 bg-black text-[#FFE600] border border-black font-extrabold uppercase">
                  MIN
                </span>
              )}

              {isClosed && (
                <span className="text-[9px] font-mono px-1 bg-[#FF499E] text-white border border-black font-extrabold uppercase">
                  RESTORE
                </span>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
