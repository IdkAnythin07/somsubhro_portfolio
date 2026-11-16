import React, { useState } from 'react';
import { RetroWindow } from './components/RetroWindow';
import { TopStatusBar } from './components/navigation/TopStatusBar';
import { BottomDock, WindowDockState } from './components/navigation/BottomDock';
import { CreativeLabWindow } from './components/windows/CreativeLabWindow';
import { OfflineModeWindow } from './components/windows/OfflineModeWindow';
import { Footer } from './components/navigation/Footer';
import {
  ExternalLink,
  Github,
  Mail,
  FileText,
  Sparkles,
  Palette,
  Terminal,
  Gamepad2,
  HardDrive,
  Cpu,
  Layers,
  ArrowUpRight,
  Code2,
} from 'lucide-react';

export const App: React.FC = () => {
  // Controlled UI states for all three portfolio windows
  const [windowStates, setWindowStates] = useState<Record<'about' | 'lab' | 'offline', WindowDockState>>({
    about: { isOpen: true, isMinimized: false, isMaximized: false },
    lab: { isOpen: true, isMinimized: false, isMaximized: false },
    offline: { isOpen: true, isMinimized: false, isMaximized: false },
  });

  const [activeWindow, setActiveWindow] = useState<'about' | 'lab' | 'offline'>('about');

  // Smoothly restore (if closed/minimized) and scroll into view
  const handleRestoreAndScroll = (key: 'about' | 'lab' | 'offline') => {
    setActiveWindow(key);
    setWindowStates((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        isOpen: true,
        isMinimized: false,
      },
    }));

    // Wait for state render (in case window was unmounted), then scroll smoothly
    setTimeout(() => {
      const el = document.getElementById(key);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const updateWindowState = (key: 'about' | 'lab' | 'offline', updates: Partial<WindowDockState>) => {
    setWindowStates((prev) => ({
      ...prev,
      [key]: { ...prev[key], ...updates },
    }));
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F4F0] bg-grid-canvas text-black flex flex-col font-sans pb-28">
      {/* Neobrutalist OS Top Status Bar */}
      <TopStatusBar
        onNavigateTo={handleRestoreAndScroll}
        activeWindowId={activeWindow}
      />

      {/* Main Workspace */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-10 flex flex-col items-center">

        {/* Intro System Banner */}
        <div className="w-full max-w-3xl bg-white border-[3px] border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">💻</span>
            <div>
              <div className="font-mono text-xs font-black tracking-wide uppercase flex items-center gap-2">
                <span>DESKTOP RUNTIME ACTIVE</span>
                <span className="w-2 h-2 rounded-full bg-[#23F365] border border-black inline-block animate-pulse" />
              </div>
              <p className="font-mono text-xs text-gray-700 mt-0.5">
                Click controls on any window: <b className="text-black">_</b> collapse, <b className="text-black">□</b> full width, <b className="text-black">×</b> close.
              </p>
            </div>
          </div>
          <div className="font-mono text-[11px] font-bold bg-[#F4F4F0] px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            RESTORE ANYTIME VIA DOCK ↓
          </div>
        </div>

        {/* 1. ABOUT_ME.exe (Acid Yellow Header) */}
        <RetroWindow
          id="about"
          title="ABOUT_ME.exe"
          headerColor="yellow"
          widthClass="w-full max-w-4xl"
          icon={<span className="text-sm">⚡</span>}
          isOpen={windowStates.about.isOpen}
          isMinimized={windowStates.about.isMinimized}
          isMaximized={windowStates.about.isMaximized}
          onOpenChange={(open) => updateWindowState('about', { isOpen: open })}
          onMinimizeChange={(min) => updateWindowState('about', { isMinimized: min })}
          onMaximizeChange={(max) => updateWindowState('about', { isMaximized: max })}
          onClose={() => updateWindowState('about', { isOpen: false })}
        >
          {/* Two-column Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Left Column: High-contrast framed visual card / avatar placeholder */}
            <div className="lg:col-span-5 w-full flex flex-col items-center">
              <div className="w-full bg-white border-[3px] border-black p-3.5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 flex flex-col gap-3">

                {/* Visual Viewfinder Header with Filmstrip metadata */}
                <div className="flex items-center justify-between border-b-2 border-black pb-1.5 font-mono text-[10px] font-bold text-gray-700">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                    <span>REC // 00:00:01:00</span>
                  </span>
                  <span>1080 x 1350</span>
                </div>

                {/* Framed Graphic Artwork / Visual Placeholder with Viewfinder Corners */}
                <div className="relative w-full aspect-[4/5] bg-[#F4F4F0] border-2 border-black overflow-hidden flex flex-col items-center justify-center p-4 select-none">

                  {/* Subtle Grid Canvas Background inside frame */}
                  <div className="absolute inset-0 bg-grid-canvas opacity-70 pointer-events-none" />

                  {/* Viewfinder crosshairs & crop marks */}
                  <div className="absolute top-2 left-2 font-mono text-xs font-bold text-black pointer-events-none">┌</div>
                  <div className="absolute top-2 right-2 font-mono text-xs font-bold text-black pointer-events-none">┐</div>
                  <div className="absolute bottom-2 left-2 font-mono text-xs font-bold text-black pointer-events-none">└</div>
                  <div className="absolute bottom-2 right-2 font-mono text-xs font-bold text-black pointer-events-none">┘</div>

                  {/* Center Illustration: Stylized Geometric Animator Silhouette / Reel */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div className="relative">
                      {/* Stylized Film Reel / Creative Monogram Frame */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#FFE600] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-display font-black text-4xl text-black">
                        SC
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#FF499E] text-black font-mono font-extrabold text-[10px] px-1.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        KEYFRAME
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <div className="font-mono text-xs font-extrabold uppercase tracking-wider text-black">
                        Somsubhra Chakraborty
                      </div>
                      <div className="font-mono text-[10px] text-gray-600 font-semibold">
                        Creative Canvas &bull; Adobe PS / AI
                      </div>
                    </div>
                  </div>

                  {/* Film Perforations simulation */}
                  <div className="absolute top-0 bottom-0 left-1 w-2 flex flex-col justify-between py-2 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <span key={i} className="w-1.5 h-2 bg-black border border-black inline-block" />
                    ))}
                  </div>
                  <div className="absolute top-0 bottom-0 right-1 w-2 flex flex-col justify-between py-2 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <span key={i} className="w-1.5 h-2 bg-black border border-black inline-block" />
                    ))}
                  </div>
                </div>

                {/* Stylized "FRAME 01 / 24 FPS" Badge */}
                <div className="flex items-center justify-between bg-[#FFE600] border-2 border-black px-2.5 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono font-black text-xs uppercase tracking-wider text-black flex items-center gap-1.5">
                    <span>🎬</span>
                    <span>FRAME 01 / 24 FPS</span>
                  </span>
                  <span className="font-mono text-[10px] font-extrabold bg-black text-white px-1.5 py-0.5">
                    PROD. READY
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Name, Highlight Badge, Bio, and Tactile CTA */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">

              {/* Header Title Section */}
              <div className="space-y-2.5">
                {/* Oversized Bold Display Name */}
                <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-black uppercase tracking-tight leading-[1.08]">
                  Somsubhra Chakraborty
                </h1>

                {/* Hot Pink Highlight Badge */}
                <div>
                  <span className="inline-block bg-[#FF499E] text-black border-2 border-black font-mono font-bold text-xs sm:text-sm px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
                    Animator, Visual Designer & Storyteller
                  </span>
                </div>
              </div>

              {/* Exact Bio rendered with clean, high readability */}
              <div className="bg-white border-[2.5px] border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3 font-sans">
                <p className="text-sm sm:text-base leading-relaxed text-gray-900 font-medium">
                  Hello, I am Somsubhra Chakraborty, an animator, visual designer and storyteller passionate about bringing imagination to life one frame at a time. Right now, I spend most of my creative hours diving deep into the world of animation, improving my craft in Adobe Photoshop and Illustrator, and experimenting with different visual styles, textures, and compositions.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-900 font-medium">
                  Whether I am building posters or studying how movement gives a character emotion, I love understanding how every small detail comes together to tell a bigger story. My goal is to grow into an animator who creates visuals that do not just look good but genuinely make people feel something.
                </p>
              </div>

              {/* Action Area: Tactile Primary CTA Button */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleRestoreAndScroll('lab')}
                  className="
                    inline-flex items-center justify-center gap-2 px-6 py-3
                    bg-[#FFE600] text-black
                    border-[3px] border-black
                    font-mono font-black text-xs sm:text-sm uppercase tracking-wider
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                    active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                    transition-all duration-75 cursor-pointer
                  "
                >
                  <span>EXPLORE MY CRAFT ↓</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleRestoreAndScroll('offline')}
                  className="
                    inline-flex items-center justify-center gap-2 px-4 py-3
                    bg-white text-black
                    border-2 border-black
                    font-mono font-bold text-xs uppercase tracking-wider
                    shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                    hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                    active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                    transition-all duration-75 cursor-pointer
                  "
                >
                  <Mail size={14} />
                  <span>Get In Touch</span>
                </button>
              </div>

            </div>

          </div>
        </RetroWindow>

        {/* 2. THE_CREATIVE_LAB.psd (Electric Cyan Header) */}
        <RetroWindow
          id="lab"
          title="THE_CREATIVE_LAB.psd"
          headerColor="cyan"
          widthClass="w-full max-w-4xl"
          icon={<span className="text-sm">🎨</span>}
          isOpen={windowStates.lab.isOpen}
          isMinimized={windowStates.lab.isMinimized}
          isMaximized={windowStates.lab.isMaximized}
          onOpenChange={(open) => updateWindowState('lab', { isOpen: open })}
          onMinimizeChange={(min) => updateWindowState('lab', { isMinimized: min })}
          onMaximizeChange={(max) => updateWindowState('lab', { isMaximized: max })}
          onClose={() => updateWindowState('lab', { isOpen: false })}
        >
          <CreativeLabWindow />
        </RetroWindow>

        {/* 3. OFFLINE_MODE.sav (Hot Pink Header) */}
        <RetroWindow
          id="offline"
          title="OFFLINE_MODE.sav"
          headerColor="pink"
          widthClass="w-full max-w-4xl"
          icon={<span className="text-sm">💾</span>}
          isOpen={windowStates.offline.isOpen}
          isMinimized={windowStates.offline.isMinimized}
          isMaximized={windowStates.offline.isMaximized}
          onOpenChange={(open) => updateWindowState('offline', { isOpen: open })}
          onMinimizeChange={(min) => updateWindowState('offline', { isMinimized: min })}
          onMaximizeChange={(max) => updateWindowState('offline', { isMaximized: max })}
          onClose={() => updateWindowState('offline', { isOpen: false })}
        >
          <OfflineModeWindow />
        </RetroWindow>

      </main>

      {/* Bold Neobrutalist Footer */}
      <Footer onScrollToTop={() => handleRestoreAndScroll('about')} />

      {/* Neobrutalist Floating Bottom Taskbar / Dock */}
      <BottomDock
        windows={windowStates}
        onRestoreAndScroll={handleRestoreAndScroll}
      />
    </div>
  );
};

export default App;
