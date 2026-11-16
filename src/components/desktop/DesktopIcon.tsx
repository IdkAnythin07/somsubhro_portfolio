import React from 'react';
import { DesktopShortcut } from '../../types';
import { soundFx } from '../../utils/audio';

interface DesktopIconProps {
  shortcut: DesktopShortcut;
  isOpen: boolean;
  onOpen: (id: DesktopShortcut['id']) => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ shortcut, isOpen, onOpen }) => {
  const colorStyles = {
    yellow: 'bg-brutal-yellow hover:bg-[#FFF04D]',
    pink: 'bg-brutal-pink hover:bg-[#FF6DB2]',
    cyan: 'bg-brutal-cyan hover:bg-[#4DF4FF]',
    lime: 'bg-brutal-lime hover:bg-[#5CF78D]',
    purple: 'bg-[#C084FC] hover:bg-[#D8B4FE]',
  };

  const handleClick = () => {
    soundFx.playOpen();
    onOpen(shortcut.id);
  };

  return (
    <div
      onClick={handleClick}
      className="group flex flex-col items-center gap-1.5 p-2 w-24 cursor-pointer select-none transition-all duration-75 text-center"
    >
      {/* Icon Box */}
      <div
        className={`
          relative w-16 h-16 flex items-center justify-center
          border-[3px] border-black
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
          transition-all duration-75
          ${colorStyles[shortcut.color]}
        `}
      >
        <span className="text-3xl filter drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]">
          {shortcut.icon}
        </span>

        {/* Status Indicator if currently open */}
        {isOpen && (
          <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-brutal-lime border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
        )}

        {/* Optional badge */}
        {shortcut.badge && (
          <span className="absolute -bottom-2 -right-1 font-mono text-[9px] font-extrabold bg-black text-white px-1 border border-black">
            {shortcut.badge}
          </span>
        )}
      </div>

      {/* Label */}
      <div className="bg-white border-2 border-black px-1.5 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-brutal-yellow transition-colors max-w-full">
        <span className="font-mono text-[11px] font-bold text-black uppercase tracking-tight block truncate">
          {shortcut.label}
        </span>
      </div>
    </div>
  );
};
