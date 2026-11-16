import React, { useState, useEffect } from 'react';
import { WindowId, WindowState } from './types';
import { TopBar } from './components/desktop/TopBar';
import { DesktopCanvas } from './components/desktop/DesktopCanvas';
import { Dock } from './components/desktop/Dock';
import { soundFx } from './utils/audio';

export const App: React.FC = () => {
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [activeWindowId, setActiveWindowId] = useState<WindowId | undefined>('bio');

  const [windows, setWindows] = useState<Record<WindowId, WindowState>>({
    bio: {
      id: 'bio',
      title: 'About Me // Alexander Dev',
      tag: '~/bio.exe',
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 140, y: 25 },
      size: { width: 740, height: 560 },
      icon: '👤',
      headerColor: 'yellow',
    },
    projects: {
      id: 'projects',
      title: 'Selected Projects & Repertoire',
      tag: '~/portfolio/projects.app',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
      position: { x: 220, y: 45 },
      size: { width: 840, height: 580 },
      icon: '📂',
      headerColor: 'pink',
    },
    skills: {
      id: 'skills',
      title: 'Technical Matrix & Architecture',
      tag: '~/sys/stack.config',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 8,
      position: { x: 200, y: 55 },
      size: { width: 800, height: 560 },
      icon: '⚡',
      headerColor: 'cyan',
    },
    terminal: {
      id: 'terminal',
      title: 'Interactive System CLI Shell',
      tag: '~/bin/sh',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 7,
      position: { x: 260, y: 70 },
      size: { width: 680, height: 460 },
      icon: '💻',
      headerColor: 'lime',
    },
    contact: {
      id: 'contact',
      title: 'Direct Dispatch // Communication Wire',
      tag: '~/net/contact.msg',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 6,
      position: { x: 240, y: 50 },
      size: { width: 720, height: 540 },
      icon: '✉️',
      headerColor: 'pink',
    },
    audio: {
      id: 'audio',
      title: 'Retro Audio Deck // 44.1kHz',
      tag: '~/media/synth.wav',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 5,
      position: { x: 300, y: 80 },
      size: { width: 460, height: 400 },
      icon: '🎵',
      headerColor: 'yellow',
    },
  });

  // Adjust default window dimensions for mobile screens
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setWindows((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((k) => {
          const key = k as WindowId;
          next[key] = {
            ...next[key],
            position: { x: 12, y: 10 },
            size: {
              width: Math.min(window.innerWidth - 24, 700),
              height: Math.min(window.innerHeight - 150, 560),
            },
          };
        });
        return next;
      });
    }
  }, []);

  const bringToFront = (id: WindowId) => {
    const nextZ = maxZIndex + 1;
    setMaxZIndex(nextZ);
    setActiveWindowId(id);
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        zIndex: nextZ,
      },
    }));
  };

  const handleOpenWindow = (id: WindowId) => {
    soundFx.playOpen();
    const nextZ = maxZIndex + 1;
    setMaxZIndex(nextZ);
    setActiveWindowId(id);
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        zIndex: nextZ,
      },
    }));
  };

  const handleCloseWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
        isMinimized: false,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(undefined);
    }
  };

  const handleMinimizeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(undefined);
    }
  };

  const handleMaximizeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id].isMaximized,
      },
    }));
  };

  const handleUpdatePosition = (id: WindowId, pos: { x: number; y: number }) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        position: pos,
      },
    }));
  };

  const handleToggleWindow = (id: WindowId) => {
    const win = windows[id];
    if (!win.isOpen) {
      handleOpenWindow(id);
    } else if (win.isMinimized) {
      handleOpenWindow(id);
    } else if (activeWindowId === id) {
      handleMinimizeWindow(id);
    } else {
      bringToFront(id);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-canvas overflow-hidden select-none">
      {/* Top OS System Bar */}
      <TopBar
        onOpenWindow={handleOpenWindow}
        activeWindowId={activeWindowId}
      />

      {/* Main Interactive Desktop Grid Canvas */}
      <DesktopCanvas
        windows={windows}
        onCloseWindow={handleCloseWindow}
        onMinimizeWindow={handleMinimizeWindow}
        onMaximizeWindow={handleMaximizeWindow}
        onFocusWindow={bringToFront}
        onUpdatePosition={handleUpdatePosition}
        onOpenWindow={handleOpenWindow}
      />

      {/* Floating Bottom Desktop Dock */}
      <Dock
        windows={windows}
        onToggleWindow={handleToggleWindow}
        activeWindowId={activeWindowId}
      />
    </div>
  );
};

export default App;
