import React from 'react';
import { BrutalButton } from '../ui/BrutalButton';
import { BrutalBadge } from '../ui/BrutalBadge';
import { FileText, Github, Send, Terminal, Zap, Shield, Sparkles } from 'lucide-react';
import { WindowId } from '../../types';

interface AboutWindowProps {
  onOpenWindow: (id: WindowId) => void;
}

export const AboutWindow: React.FC<AboutWindowProps> = ({ onOpenWindow }) => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Top Banner Card */}
      <div className="p-5 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar with offset border */}
          <div className="relative">
            <div className="w-20 h-20 bg-brutal-yellow border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-archivo text-3xl">
              ⚡
            </div>
            <span className="absolute -bottom-2 -right-2 px-1.5 py-0.5 bg-black text-white font-mono text-[9px] font-extrabold uppercase border border-black">
              LVL.99
            </span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="font-archivo text-2xl md:text-3xl uppercase tracking-tight text-ink">
                ALEXANDER DEV
              </h1>
              <BrutalBadge variant="lime" size="sm">
                AVAILABLE NOW
              </BrutalBadge>
            </div>
            <p className="font-mono text-xs md:text-sm text-gray-700 font-semibold">
              Principal Full-Stack Engineer // Neobrutalist UI Architect
            </p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <BrutalButton
            variant="yellow"
            size="sm"
            icon={<FileText size={14} />}
            onClick={() => alert("Resume downloaded: alex_dev_resume_2026.pdf")}
          >
            CV.PDF
          </BrutalButton>
          <BrutalButton
            variant="pink"
            size="sm"
            icon={<Send size={14} />}
            onClick={() => onOpenWindow('contact')}
          >
            HIRE ME
          </BrutalButton>
        </div>
      </div>

      {/* Bio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column: Mission statement */}
        <div className="md:col-span-2 p-5 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
          <div className="flex items-center justify-between border-b-2 border-black pb-2">
            <h2 className="font-display font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={16} className="text-brutal-yellow fill-brutal-yellow" />
              SYSTEM BIO & PHILOSOPHY
            </h2>
            <span className="font-mono text-[11px] bg-canvas px-2 py-0.5 border border-black font-bold">
              SYS.KERNEL // v4.2
            </span>
          </div>

          <p className="text-sm md:text-base leading-relaxed font-medium">
            Building software with a fierce rejection of boring corporate minimalism. I combine high-performance React architectures, TypeScript rigidity, and unapologetic Neobrutalism aesthetics to craft digital experiences that leave a lasting mark.
          </p>

          <p className="text-xs md:text-sm text-gray-800 leading-relaxed font-mono">
            &gt; Core expertise in high-throughput frontend web applications, distributed systems, state management engines, and responsive micro-interactions.
          </p>

          {/* Quick tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            <BrutalBadge variant="cyan">React 18+</BrutalBadge>
            <BrutalBadge variant="yellow">TypeScript</BrutalBadge>
            <BrutalBadge variant="pink">Tailwind CSS</BrutalBadge>
            <BrutalBadge variant="lime">Node.js</BrutalBadge>
            <BrutalBadge variant="white">Next.js</BrutalBadge>
            <BrutalBadge variant="black">Docker</BrutalBadge>
          </div>
        </div>

        {/* Right Column: Key Metrics */}
        <div className="p-5 bg-brutal-cyan border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
          <div className="border-b-2 border-black pb-2 mb-4">
            <h3 className="font-display font-bold text-base uppercase tracking-wider flex items-center gap-1.5">
              <Zap size={16} /> METRICS
            </h3>
          </div>

          <div className="space-y-3 font-mono">
            <div className="bg-white p-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-[10px] text-gray-600 font-bold uppercase">Experience</div>
              <div className="font-archivo text-xl text-black">7+ YEARS</div>
            </div>

            <div className="bg-white p-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-[10px] text-gray-600 font-bold uppercase">Shipped Projects</div>
              <div className="font-archivo text-xl text-black">42+ APPS</div>
            </div>

            <div className="bg-white p-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-[10px] text-gray-600 font-bold uppercase">Lighthouse Perf</div>
              <div className="font-archivo text-xl text-black">100 / 100</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features / Terminal Teaser */}
      <div className="p-4 bg-black text-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚡</span>
          <div>
            <div className="font-mono text-xs text-brutal-yellow font-bold uppercase tracking-wide">
              Power user mode enabled
            </div>
            <div className="text-sm font-semibold">
              Prefer command-line interfaces? Try out the built-in desktop terminal.
            </div>
          </div>
        </div>
        <BrutalButton
          variant="yellow"
          size="sm"
          icon={<Terminal size={14} />}
          onClick={() => onOpenWindow('terminal')}
        >
          LAUNCH TERMINAL
        </BrutalButton>
      </div>
    </div>
  );
};
