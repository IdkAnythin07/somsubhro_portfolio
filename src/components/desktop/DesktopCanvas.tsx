import React from 'react';
import { WindowId, WindowState, DesktopShortcut } from '../../types';
import { DesktopIcon } from './DesktopIcon';
import { Window } from './Window';
import { AboutWindow } from '../windows/AboutWindow';
import { ProjectsWindow } from '../windows/ProjectsWindow';
import { SkillsWindow } from '../windows/SkillsWindow';
import { TerminalWindow } from '../windows/TerminalWindow';
import { ContactWindow } from '../windows/ContactWindow';
import { AudioPlayerWindow } from '../windows/AudioPlayerWindow';

interface DesktopCanvasProps {
  windows: Record<WindowId, WindowState>;
  onCloseWindow: (id: WindowId) => void;
  onMinimizeWindow: (id: WindowId) => void;
  onMaximizeWindow: (id: WindowId) => void;
  onFocusWindow: (id: WindowId) => void;
  onUpdatePosition: (id: WindowId, pos: { x: number; y: number }) => void;
  onOpenWindow: (id: WindowId) => void;
}

export const DesktopCanvas: React.FC<DesktopCanvasProps> = ({
  windows,
  onCloseWindow,
  onMinimizeWindow,
  onMaximizeWindow,
  onFocusWindow,
  onUpdatePosition,
  onOpenWindow,
}) => {
  const shortcuts: DesktopShortcut[] = [
    { id: 'bio', label: 'About_Me', filename: 'bio.exe', icon: '👤', color: 'yellow', badge: 'BIO' },
    { id: 'projects', label: 'Projects', filename: 'projects.app', icon: '📂', color: 'pink', badge: 'NEW' },
    { id: 'skills', label: 'Tech_Stack', filename: 'skills.sys', icon: '⚡', color: 'cyan' },
    { id: 'terminal', label: 'Terminal', filename: 'terminal.sh', icon: '💻', color: 'lime', badge: 'CLI' },
    { id: 'contact', label: 'Contact', filename: 'mail.exe', icon: '✉️', color: 'purple' },
    { id: 'audio', label: 'Music_Deck', filename: 'audio.wav', icon: '🎵', color: 'yellow' },
  ];

  return (
    <main className="relative w-full h-[calc(100vh-44px)] bg-grid-canvas overflow-hidden">
      {/* Subtle Neobrutalism watermark badge in background */}
      <div className="absolute right-8 bottom-24 pointer-events-none select-none opacity-20 hidden md:block">
        <div className="font-archivo text-6xl text-black border-4 border-black p-4 rotate-[-3deg]">
          NEO.BRUTAL // 2026
        </div>
      </div>

      {/* Desktop Shortcuts Column */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-3">
        {shortcuts.map((shortcut) => (
          <DesktopIcon
            key={shortcut.id}
            shortcut={shortcut}
            isOpen={windows[shortcut.id]?.isOpen && !windows[shortcut.id]?.isMinimized}
            onOpen={onOpenWindow}
          />
        ))}
      </div>

      {/* Windows Layer */}
      {Object.values(windows).map((win) => {
        let content: React.ReactNode = null;
        switch (win.id) {
          case 'bio':
            content = <AboutWindow onOpenWindow={onOpenWindow} />;
            break;
          case 'projects':
            content = <ProjectsWindow />;
            break;
          case 'skills':
            content = <SkillsWindow />;
            break;
          case 'terminal':
            content = <TerminalWindow onOpenWindow={onOpenWindow} />;
            break;
          case 'contact':
            content = <ContactWindow />;
            break;
          case 'audio':
            content = <AudioPlayerWindow />;
            break;
        }

        return (
          <Window
            key={win.id}
            window={win}
            onClose={onCloseWindow}
            onMinimize={onMinimizeWindow}
            onMaximize={onMaximizeWindow}
            onFocus={onFocusWindow}
            onUpdatePosition={onUpdatePosition}
          >
            {content}
          </Window>
        );
      })}
    </main>
  );
};
