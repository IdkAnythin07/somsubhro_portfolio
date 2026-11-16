import React, { useState } from 'react';

export type HeaderColor = 'yellow' | 'pink' | 'cyan';

export interface RetroWindowProps {
  /** Filename-like title displayed in monospace on the left (e.g. "ABOUT_ME.exe") */
  title: string;
  /** Vibrant Neobrutalist accent color for the title bar */
  headerColor?: HeaderColor;
  /** Content rendered inside the window body */
  children: React.ReactNode;
  /** Optional custom class for the outer window container */
  className?: string;
  /** Optional default open state (default: true) */
  defaultOpen?: boolean;
  /** Optional default minimized state (default: false) */
  defaultMinimized?: boolean;
  /** Optional default maximized state (default: false) */
  defaultMaximized?: boolean;
  /** Optional callback fired when Close button is clicked */
  onClose?: () => void;
  /** Optional container width class when not maximized (default: "w-full max-w-2xl") */
  widthClass?: string;
  /** Optional icon displayed before the filename */
  icon?: React.ReactNode;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({
  title,
  headerColor = 'yellow',
  children,
  className = '',
  defaultOpen = true,
  defaultMinimized = false,
  defaultMaximized = false,
  onClose,
  widthClass = 'w-full max-w-2xl',
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isMinimized, setIsMinimized] = useState(defaultMinimized);
  const [isMaximized, setIsMaximized] = useState(defaultMaximized);

  // If closed, unmount/hide the window
  if (!isOpen) {
    return null;
  }

  // Header background colors based on prop
  const headerBgMap: Record<HeaderColor, string> = {
    yellow: 'bg-[#FFE600]', // Acid Yellow
    pink: 'bg-[#FF499E]',   // Hot Pink
    cyan: 'bg-[#00F0FF]',   // Electric Cyan
  };

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized((prev) => !prev);
  };

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    // If minimized, expanding it should also un-minimize
    if (isMinimized) {
      setIsMinimized(false);
    }
    setIsMaximized((prev) => !prev);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`
        bg-white text-black
        border-[3px] border-black
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-150 ease-out
        ${isMaximized ? 'w-full max-w-full' : widthClass}
        ${className}
      `}
    >
      {/* Title Bar */}
      <div
        className={`
          flex items-center justify-between px-3 py-2
          border-b-[3px] border-black
          select-none
          ${headerBgMap[headerColor]}
        `}
      >
        {/* Left: Monospace filename */}
        <div className="flex items-center gap-2 overflow-hidden mr-2">
          {icon && <span className="inline-flex shrink-0 text-base">{icon}</span>}
          <span className="font-mono font-bold text-xs sm:text-sm tracking-wider uppercase truncate text-black">
            {title}
          </span>
          {isMinimized && (
            <span className="font-mono text-[10px] bg-black text-white px-1.5 py-0.5 border border-black uppercase font-bold shrink-0">
              MINIMIZED
            </span>
          )}
        </div>

        {/* Right: Three square window control buttons (Minimize, Maximize, Close) */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Minimize button: _ */}
          <button
            type="button"
            onClick={handleMinimize}
            title={isMinimized ? 'Restore window body' : 'Minimize window body'}
            className="
              w-6 h-6 sm:w-7 sm:h-7
              flex items-center justify-center
              bg-white text-black
              border-2 border-black
              font-mono font-black text-xs sm:text-sm
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-x-0.5 hover:-translate-y-0.5
              hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              hover:bg-[#FFE600]
              active:translate-x-0.5 active:translate-y-0.5
              active:shadow-none
              transition-all duration-75 cursor-pointer
            "
          >
            <span className="-mt-1 leading-none">_</span>
          </button>

          {/* Maximize button: □ */}
          <button
            type="button"
            onClick={handleMaximize}
            title={isMaximized ? 'Restore width' : 'Maximize to full width'}
            className="
              w-6 h-6 sm:w-7 sm:h-7
              flex items-center justify-center
              bg-white text-black
              border-2 border-black
              font-mono font-black text-xs sm:text-sm
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-x-0.5 hover:-translate-y-0.5
              hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              hover:bg-[#00F0FF]
              active:translate-x-0.5 active:translate-y-0.5
              active:shadow-none
              transition-all duration-75 cursor-pointer
            "
          >
            <span className="leading-none text-[13px] sm:text-[15px]">□</span>
          </button>

          {/* Close button: × */}
          <button
            type="button"
            onClick={handleClose}
            title="Close window"
            className="
              w-6 h-6 sm:w-7 sm:h-7
              flex items-center justify-center
              bg-white text-black
              border-2 border-black
              font-mono font-black text-sm sm:text-base
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-x-0.5 hover:-translate-y-0.5
              hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              hover:bg-[#FF499E]
              active:translate-x-0.5 active:translate-y-0.5
              active:shadow-none
              transition-all duration-75 cursor-pointer
            "
          >
            <span className="leading-none">×</span>
          </button>
        </div>
      </div>

      {/* Window Body: Collapses to just title bar when isMinimized is true */}
      {!isMinimized && (
        <div className="bg-[#F4F4F0] p-4 sm:p-6 text-black overflow-auto">
          {children}
        </div>
      )}
    </div>
  );
};

export default RetroWindow;
