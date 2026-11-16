import React, { useState, useRef, useEffect } from 'react';
import { WindowState } from '../../types';
import { soundFx } from '../../utils/audio';
import { Minus, Square, X, Copy } from 'lucide-react';

interface WindowProps {
  window: WindowState;
  onClose: (id: WindowState['id']) => void;
  onMinimize: (id: WindowState['id']) => void;
  onMaximize: (id: WindowState['id']) => void;
  onFocus: (id: WindowState['id']) => void;
  onUpdatePosition: (id: WindowState['id'], pos: { x: number; y: number }) => void;
  children: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({
  window: win,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onUpdatePosition,
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; winX: number; winY: number }>({
    startX: 0,
    startY: 0,
    winX: win.position.x,
    winY: win.position.y,
  });

  const headerColors = {
    yellow: 'bg-brutal-yellow text-ink',
    pink: 'bg-brutal-pink text-ink',
    cyan: 'bg-brutal-cyan text-ink',
    lime: 'bg-brutal-lime text-ink',
    purple: 'bg-[#C084FC] text-ink',
    orange: 'bg-[#FB923C] text-ink',
    white: 'bg-white text-ink',
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus(win.id);
    if (win.isMaximized) return;

    // Only drag when clicking the header, not on header buttons
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      winX: win.position.x,
      winY: win.position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragRef.current.startX;
      const deltaY = e.clientY - dragRef.current.startY;
      
      const newX = Math.max(10, Math.min(window.innerWidth - 120, dragRef.current.winX + deltaX));
      const newY = Math.max(48, Math.min(window.innerHeight - 100, dragRef.current.winY + deltaY));

      onUpdatePosition(win.id, { x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, win.id, onUpdatePosition]);

  if (!win.isOpen || win.isMinimized) return null;

  return (
    <div
      onMouseDown={() => onFocus(win.id)}
      style={{
        zIndex: win.zIndex,
        transform: win.isMaximized
          ? 'none'
          : `translate3d(${win.position.x}px, ${win.position.y}px, 0)`,
        width: win.isMaximized ? 'calc(100vw - 32px)' : `${win.size.width}px`,
        height: win.isMaximized ? 'calc(100vh - 120px)' : `${win.size.height}px`,
        top: win.isMaximized ? '48px' : 0,
        left: win.isMaximized ? '16px' : 0,
        position: 'absolute',
      }}
      className={`
        flex flex-col bg-white
        border-[3px] border-black
        ${win.isMaximized ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'}
        transition-[box-shadow,width,height,top,left] duration-150 ease-out
      `}
    >
      {/* Window Title Bar */}
      <div
        onMouseDown={handleMouseDown}
        className={`
          flex items-center justify-between px-3 py-2
          border-b-[3px] border-black
          select-none cursor-grab active:cursor-grabbing
          ${headerColors[win.headerColor] || 'bg-brutal-yellow'}
        `}
      >
        {/* Left: Window Title and Icon */}
        <div className="flex items-center gap-2 overflow-hidden mr-2">
          <span className="text-base select-none">{win.icon}</span>
          <span className="font-display font-bold text-sm tracking-wide truncate uppercase">
            {win.title}
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] font-semibold bg-black text-white px-2 py-0.5 border border-black shadow-[1px_1px_0px_0px_rgba(255,255,255,1)]">
            {win.tag}
          </span>
        </div>

        {/* Right: Window Controls (Neobrutalism traffic lights) */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Minimize button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playClick();
              onMinimize(win.id);
            }}
            title="Minimize"
            className="w-6 h-6 flex items-center justify-center bg-brutal-yellow hover:bg-yellow-300 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <Minus size={12} strokeWidth={3} className="text-black" />
          </button>

          {/* Maximize/Restore button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playClick();
              onMaximize(win.id);
            }}
            title={win.isMaximized ? "Restore" : "Maximize"}
            className="w-6 h-6 flex items-center justify-center bg-brutal-cyan hover:bg-cyan-300 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            {win.isMaximized ? (
              <Copy size={11} strokeWidth={3} className="text-black" />
            ) : (
              <Square size={11} strokeWidth={3} className="text-black" />
            )}
          </button>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playClose();
              onClose(win.id);
            }}
            title="Close"
            className="w-6 h-6 flex items-center justify-center bg-brutal-pink hover:bg-pink-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <X size={12} strokeWidth={3} className="text-black" />
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-1 overflow-y-auto bg-canvas relative">
        {children}
      </div>
    </div>
  );
};
