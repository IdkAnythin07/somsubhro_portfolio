import React from 'react';
import { WindowId, WindowState } from '../../types';
import { soundFx } from '../../utils/audio';

interface DockProps {
  windows: Record<WindowId, WindowState>;
  onToggleWindow: (id: WindowId) => void;
  activeWindowId?: WindowId;
}

export const Dock: React.FC<DockProps> = ({ windows, onToggleWindow, activeWindowId }) => {
  const dockItems: Array<{
    id: WindowId;
    label: string;
    icon: string;
    accent: string;
    hoverBg: string;
  }> = [
    { id: 'bio', label: 'About', icon: '👤', accent: '#FFE600', hoverBg: 'hover:bg-brutal-yellow' },
    { id: 'projects', label: 'Projects', icon: '📂', accent: '#FF499E', hoverBg: 'hover:bg-brutal-pink' },
    { id: 'skills', label: 'Stack', icon: '⚡', accent: '#00F0FF', hoverBg: 'hover:bg-brutal-cyan' },
    { id: 'terminal', label: 'Terminal', icon: '💻', accent: '#23F365', hoverBg: 'hover:bg-brutal-lime' },
    { id: 'contact', label: 'Contact', icon: '✉️', accent: '#A055FF', hoverBg: 'hover:bg-[#C084FC]' },
    { id: 'audio', label: 'Player', icon: '🎵', accent: '#FF6600', hoverBg: 'hover:bg-[#FB923C]' },
  ];

  const handleClick = (id: WindowId) => {
    soundFx.playClick();
    onToggleWindow(id);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-2 p-2 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {dockItems.map((item) => {
          const win = windows[item.id];
          const isOpen = win?.isOpen && !win?.isMinimized;
          const isActive = activeWindowId === item.id && isOpen;

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              title={`${item.label} (${win?.isOpen ? (win.isMinimized ? 'Minimized' : 'Open') : 'Closed'})`}
              className={`
                relative group flex flex-col items-center justify-center
                w-12 h-12 md:w-14 md:h-14
                border-[2px] border-black
                transition-all duration-75
                ${item.hoverBg}
                ${
                  isActive
                    ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-1'
                    : 'bg-canvas text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'
                }
                active:translate-y-0 active:shadow-none
              `}
            >
              <span className="text-xl md:text-2xl">{item.icon}</span>

              {/* Tooltip on hover */}
              <span className="absolute -top-10 px-2 py-0.5 bg-black text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {item.label}
              </span>

              {/* Active Indicator dot */}
              {win?.isOpen && (
                <span
                  style={{ backgroundColor: win.isMinimized ? '#9CA3AF' : item.accent }}
                  className="absolute -bottom-1 w-2 h-2 rounded-full border border-black"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
