import React, { useState } from 'react';
import { RetroWindow } from './components/RetroWindow';
import { ExternalLink, Github, Mail, FileText, Send, Sparkles, RefreshCw } from 'lucide-react';

export const App: React.FC = () => {
  // Track open state for the 3 demo windows so users can restore them after closing
  const [openWindows, setOpenWindows] = useState({
    about: true,
    projects: true,
    contact: true,
  });

  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const restoreAll = () => {
    setOpenWindows({ about: true, projects: true, contact: true });
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F4F0] bg-grid-canvas text-black flex flex-col font-sans">
      {/* Top OS Status Bar */}
      <header className="sticky top-0 z-50 bg-white border-b-[3px] border-black px-4 py-2.5 flex items-center justify-between shadow-[0_2px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3">
          <div className="bg-[#FFE600] border-2 border-black px-2.5 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            PORTFOLIO.OS
          </div>
          <span className="hidden sm:inline font-mono text-xs font-semibold text-gray-700">
            Classic OS Frame // Desktop Workspace
          </span>
        </div>

        {/* Restore Closed Windows Bar */}
        <div className="flex items-center gap-2">
          {(!openWindows.about || !openWindows.projects || !openWindows.contact) && (
            <button
              onClick={restoreAll}
              className="
                flex items-center gap-1.5 px-3 py-1 bg-[#FFE600] border-2 border-black
                font-mono font-bold text-xs uppercase
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                transition-all duration-75 cursor-pointer
              "
            >
              <RefreshCw size={12} className="stroke-[3]" />
              <span>Restore Closed Windows</span>
            </button>
          )}

          <div className="bg-black text-[#FFE600] px-2.5 py-1 border-2 border-black font-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8 space-y-8 flex flex-col items-center">
        
        {/* Intro Guide Pill */}
        <div className="w-full max-w-2xl bg-white border-[3px] border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#23F365] border border-black inline-block" />
            <span>Interactive Controls:</span>
            <span className="text-gray-600 font-normal">
              Click <b className="text-black font-mono">_</b> to collapse to title bar, <b className="text-black font-mono">□</b> to expand full width, <b className="text-black font-mono">×</b> to close.
            </span>
          </div>
        </div>

        {/* WINDOW 1: Acid Yellow Header ("ABOUT_ME.exe") */}
        {openWindows.about && (
          <RetroWindow
            title="ABOUT_ME.exe"
            headerColor="yellow"
            onClose={() => setOpenWindows((prev) => ({ ...prev, about: false }))}
          >
            <div className="space-y-5">
              {/* Profile Card with tactile hover */}
              <div className="bg-white border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#FFE600] border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-mono font-black text-2xl select-none">
                    ⚡
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-black">
                      Software Engineer
                    </h2>
                    <p className="font-mono text-xs sm:text-sm text-gray-700 font-semibold">
                      Full-Stack Web Architect & Interface Designer
                    </p>
                  </div>
                </div>

                {/* Tactile Button */}
                <button
                  type="button"
                  onClick={() => alert('Download CV triggered!')}
                  className="
                    inline-flex items-center gap-2 px-4 py-2
                    bg-[#FFE600] text-black
                    border-[3px] border-black
                    font-mono font-bold text-xs uppercase
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                    active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                    transition-all duration-75 cursor-pointer
                  "
                >
                  <FileText size={14} />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Bio Description */}
              <p className="text-sm leading-relaxed font-medium text-gray-900">
                Specialized in building robust, performant web applications with clean component architecture, snappy micro-interactions, and high-contrast typography.
              </p>

              {/* Tactile Interactive Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'EXPERIENCE', val: '5+ YRS', color: 'bg-white' },
                  { label: 'PROJECTS', val: '30+ APPS', color: 'bg-[#FFE600]' },
                  { label: 'TECH STACK', val: 'REACT + TS', color: 'bg-[#00F0FF]' },
                  { label: 'STATUS', val: 'AVAILABLE', color: 'bg-[#23F365]' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`
                      p-3 border-2 border-black
                      shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                      hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                      transition-all duration-100 ${stat.color}
                    `}
                  >
                    <div className="font-mono text-[10px] font-bold text-gray-700">{stat.label}</div>
                    <div className="font-mono font-bold text-sm sm:text-base text-black mt-0.5">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </RetroWindow>
        )}

        {/* WINDOW 2: Hot Pink Header ("PROJECTS.app") */}
        {openWindows.projects && (
          <RetroWindow
            title="PROJECTS.app"
            headerColor="pink"
            onClose={() => setOpenWindows((prev) => ({ ...prev, projects: false }))}
          >
            <div className="space-y-4">
              <div className="font-mono text-xs font-bold text-gray-700 uppercase tracking-wide">
                Selected Production Projects & Repositories
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Card 1 */}
                <div className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
                      <span className="font-mono font-bold text-sm uppercase">Cloud Workspace</span>
                      <span className="font-mono text-[10px] font-bold bg-[#FFE600] px-1.5 py-0.5 border border-black">2026</span>
                    </div>
                    <p className="text-xs text-gray-800 leading-relaxed">
                      A real-time collaborative workspace with offline-first local cache synchronization and multi-tab state coordination.
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {['React', 'TypeScript', 'Tailwind'].map((t) => (
                        <span key={t} className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-[#F4F4F0] border border-black">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="
                        inline-flex items-center gap-1 px-3 py-1.5
                        bg-white text-black border-2 border-black
                        font-mono font-bold text-xs uppercase
                        shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                        hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                        active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                        transition-all duration-75 cursor-pointer
                      "
                    >
                      <Github size={12} />
                      <span>Code</span>
                    </button>
                    <button
                      type="button"
                      className="
                        inline-flex items-center gap-1 px-3 py-1.5
                        bg-[#FF499E] text-black border-2 border-black
                        font-mono font-bold text-xs uppercase
                        shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                        hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                        active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                        transition-all duration-75 cursor-pointer
                      "
                    >
                      <ExternalLink size={12} />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>

                {/* Project Card 2 */}
                <div className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
                      <span className="font-mono font-bold text-sm uppercase">Telemetry Engine</span>
                      <span className="font-mono text-[10px] font-bold bg-[#00F0FF] px-1.5 py-0.5 border border-black">2026</span>
                    </div>
                    <p className="text-xs text-gray-800 leading-relaxed">
                      High-density real-time metrics visualizer handling thousands of data points at 60 FPS using hardware acceleration.
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {['Next.js', 'Canvas API', 'WebSocket'].map((t) => (
                        <span key={t} className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-[#F4F4F0] border border-black">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="
                        inline-flex items-center gap-1 px-3 py-1.5
                        bg-white text-black border-2 border-black
                        font-mono font-bold text-xs uppercase
                        shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                        hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                        active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                        transition-all duration-75 cursor-pointer
                      "
                    >
                      <Github size={12} />
                      <span>Code</span>
                    </button>
                    <button
                      type="button"
                      className="
                        inline-flex items-center gap-1 px-3 py-1.5
                        bg-[#00F0FF] text-black border-2 border-black
                        font-mono font-bold text-xs uppercase
                        shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                        hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                        active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                        transition-all duration-75 cursor-pointer
                      "
                    >
                      <ExternalLink size={12} />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </RetroWindow>
        )}

        {/* WINDOW 3: Electric Cyan Header ("CONTACT.msg") */}
        {openWindows.contact && (
          <RetroWindow
            title="CONTACT.msg"
            headerColor="cyan"
            onClose={() => setOpenWindows((prev) => ({ ...prev, contact: false }))}
          >
            <div className="space-y-4">
              {messageSent ? (
                <div className="bg-white border-2 border-black p-6 text-center space-y-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-12 h-12 mx-auto bg-[#23F365] border-2 border-black flex items-center justify-center font-mono font-bold text-xl">
                    ✓
                  </div>
                  <h3 className="font-mono font-bold text-base uppercase">Message Dispatched</h3>
                  <p className="font-mono text-xs text-gray-700">
                    Thank you! Your inquiry has been received.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setMessageSent(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="
                      px-4 py-2 bg-[#FFE600] border-2 border-black
                      font-mono font-bold text-xs uppercase
                      shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                      hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                      active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                      transition-all duration-75 cursor-pointer
                    "
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!formData.name || !formData.email || !formData.message) return;
                    setMessageSent(true);
                  }}
                  className="space-y-3 font-mono"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase block text-black">
                        Name <span className="text-[#FF499E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-white px-3 py-2 border-2 border-black font-mono text-xs focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase block text-black">
                        Email <span className="text-[#FF499E]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full bg-white px-3 py-2 border-2 border-black font-mono text-xs focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase block text-black">
                      Message <span className="text-[#FF499E]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or project inquiry here..."
                      className="w-full bg-white px-3 py-2 border-2 border-black font-mono text-xs focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                    />
                  </div>

                  {/* Tactile Submit Button */}
                  <button
                    type="submit"
                    className="
                      w-full inline-flex items-center justify-center gap-2 px-4 py-2.5
                      bg-[#FFE600] text-black
                      border-[3px] border-black
                      font-mono font-bold text-xs uppercase tracking-wider
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                      hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                      active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                      transition-all duration-75 cursor-pointer
                    "
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </RetroWindow>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-black bg-white p-3 text-center font-mono text-xs text-gray-700">
        RetroWindow Component // Clean Neobrutalist OS Frame
      </footer>
    </div>
  );
};

export default App;
