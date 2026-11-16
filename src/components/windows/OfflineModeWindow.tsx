import React, { useState } from 'react';
import {
  Heart,
  Gamepad2,
  Tv,
  Target,
  Users,
  Sparkles,
  Disc,
  Send,
  MessageCircle,
  Mail,
  Zap,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';

export const OfflineModeWindow: React.FC = () => {
  const [activeGame, setActiveGame] = useState<string>('genshin');

  const games = [
    {
      id: 'genshin',
      name: 'Genshin Impact',
      tag: 'OPEN WORLD // CEL-SHADED',
      note: 'Vibrant world-building, stylized lighting, elemental visual FX, and fluid character animations.',
      color: 'bg-[#00F0FF]',
    },
    {
      id: 'nte',
      name: 'Neverness to Everness',
      tag: 'URBAN SUPERNATURAL // ANIME',
      note: 'High-density futuristic cityscapes, supernatural action choreography, and atmospheric dusk palettes.',
      color: 'bg-[#FF499E]',
    },
    {
      id: 'freefire',
      name: 'Free Fire',
      tag: 'BATTLE ROYALE // TACTICAL',
      note: 'Split-second reflexes, dynamic movement pacing, situational awareness, and squad coordination.',
      color: 'bg-[#FFE600]',
    },
    {
      id: 'codm',
      name: 'Call of Duty: Mobile',
      tag: 'FPS // PRECISION REFLEXES',
      note: 'Surgical accuracy, tactical pacing, fast spatial tracking, and adrenaline-charged competitive focus.',
      color: 'bg-[#23F365]',
    },
  ];

  return (
    <div className="space-y-6">
      
      {/* Bold Quote Banner */}
      <div className="relative bg-[#00F0FF] border-[3px] border-black p-5 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] select-none">
        {/* Corner registration marks */}
        <div className="absolute top-2 left-2 font-mono text-xs font-black text-black pointer-events-none">⊕</div>
        <div className="absolute top-2 right-2 font-mono text-xs font-black text-black pointer-events-none">⊕</div>
        <div className="absolute bottom-2 left-2 font-mono text-xs font-black text-black pointer-events-none">⊕</div>
        <div className="absolute bottom-2 right-2 font-mono text-xs font-black text-black pointer-events-none">⊕</div>

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-black text-white px-2.5 py-0.5 font-mono text-[11px] font-extrabold uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Heart size={12} className="text-[#FF499E] fill-[#FF499E]" />
            CORE PHILOSOPHY & VALUES
          </div>

          <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-black uppercase tracking-tight leading-snug">
            &ldquo;Who you are as a person matters just as much as the work you create.&rdquo;
          </h2>

          <p className="font-mono text-xs sm:text-sm font-bold text-gray-900 tracking-wide">
            Life offline shapes the depth, sensitivity, and perspective behind every single frame.
          </p>
        </div>
      </div>

      {/* Four Distinct Neobrutalist Sub-Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* CARD 1: Strategy & Focus (Carrom) */}
        <div className="bg-white border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-[#FFE600] border border-black flex items-center justify-center text-xs">
                  🎯
                </span>
                <span className="font-mono font-black text-xs uppercase tracking-wider text-black">
                  STRATEGY & FOCUS // CARROM
                </span>
              </div>
              <span className="font-mono text-[10px] font-extrabold bg-[#FFE600] text-black px-1.5 py-0.5 border border-black">
                PRECISION
              </span>
            </div>

            {/* Board Graphic Simulation */}
            <div className="bg-[#F4F4F0] border-2 border-black p-3 text-center space-y-1 font-mono text-xs select-none">
              <div className="flex items-center justify-center gap-3 font-bold text-gray-800">
                <span className="px-2 py-0.5 bg-black text-white border border-black text-[10px]">STRIKER</span>
                <span>⟶</span>
                <span className="w-5 h-5 rounded-full bg-[#FFE600] border-2 border-black inline-flex items-center justify-center font-bold text-[10px]">
                  ⊚
                </span>
                <span className="w-5 h-5 rounded-full bg-[#FF499E] border-2 border-black inline-flex items-center justify-center font-bold text-[10px]">
                  ★
                </span>
                <span className="w-5 h-5 rounded-full bg-white border-2 border-black inline-flex items-center justify-center font-bold text-[10px]">
                  ○
                </span>
              </div>
              <div className="text-[10px] text-gray-600 font-bold uppercase tracking-wider pt-1">
                ANGLES &bull; REBOUND PHYSICS &bull; COMPOSURE
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              Playing Carrom is my masterclass in patience and precision. Reading rebound trajectories, calculating angles, and holding composure under pressure directly mirror the discipline of frame-by-frame animation: steady hands, calculated timing, and intense focus before every strike.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 mt-2 flex items-center justify-between font-mono text-[11px] font-bold text-gray-700">
            <span>MINDSET: STEADY & PATIENT</span>
            <span className="text-black bg-[#FFE600] px-1.5 py-0.5 border border-black">24 FPS TIMING</span>
          </div>
        </div>

        {/* CARD 2: Gaming Worlds (Retro Game Cartridge) */}
        <div className="bg-white border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-[#FF499E] border border-black flex items-center justify-center text-xs">
                  🎮
                </span>
                <span className="font-mono font-black text-xs uppercase tracking-wider text-black">
                  GAMING WORLDS // SAVE SLOT 01
                </span>
              </div>
              <span className="font-mono text-[10px] font-extrabold bg-[#FF499E] text-black px-1.5 py-0.5 border border-black">
                128MB MEMORY
              </span>
            </div>

            {/* Cartridge Gold Contact Pins Simulation */}
            <div className="flex justify-center gap-1 py-1 bg-black p-1 border border-black">
              {[...Array(16)].map((_, i) => (
                <span key={i} className="w-2 sm:w-2.5 h-1.5 bg-[#FFE600] inline-block" />
              ))}
            </div>

            {/* Games List (Interactive selection) */}
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              {games.map((game) => (
                <button
                  key={game.id}
                  type="button"
                  onClick={() => setActiveGame(game.id)}
                  className={`
                    p-2 border-2 border-black text-left transition-all duration-75 cursor-pointer
                    ${
                      activeGame === game.id
                        ? `${game.color} text-black font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5`
                        : 'bg-[#F4F4F0] hover:bg-white text-gray-800'
                    }
                  `}
                >
                  <div className="font-black text-[11px] truncate">{game.name}</div>
                  <div className="text-[9px] text-gray-700 font-semibold truncate mt-0.5">{game.tag}</div>
                </button>
              ))}
            </div>

            {/* Selected Game Commentary */}
            <div className="bg-[#F4F4F0] border-2 border-black p-2.5 font-mono text-xs space-y-1">
              <div className="font-bold text-[10px] text-gray-600 uppercase">
                {games.find((g) => g.id === activeGame)?.name} // INSPIRATION LOG:
              </div>
              <p className="font-sans text-xs text-gray-900 font-medium leading-relaxed">
                {games.find((g) => g.id === activeGame)?.note}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 mt-2 flex items-center justify-between font-mono text-[11px] font-bold text-gray-700">
            <span>ACTIVE CARTRIDGE: LOADED</span>
            <span className="text-black bg-[#FF499E] px-1.5 py-0.5 border border-black">4 TITLES</span>
          </div>
        </div>

        {/* CARD 3: Anime Inspiration */}
        <div className="bg-white border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-[#00F0FF] border border-black flex items-center justify-center text-xs">
                  📺
                </span>
                <span className="font-mono font-black text-xs uppercase tracking-wider text-black">
                  ANIME INSPIRATION // SAKUGA
                </span>
              </div>
              <span className="font-mono text-[10px] font-extrabold bg-[#00F0FF] text-black px-1.5 py-0.5 border border-black">
                EXPRESSIVE ART
              </span>
            </div>

            {/* Stylized Japanese Anime Typography Strip */}
            <div className="bg-[#FFE600] border-2 border-black p-2 flex items-center justify-between font-mono text-xs font-bold text-black select-none">
              <span className="flex items-center gap-1.5">
                <Sparkles size={13} />
                <span>DYNAMIC KEYFRAMES</span>
              </span>
              <span className="text-[11px] font-black tracking-widest bg-black text-[#FFE600] px-1.5 py-0.5">
                アニメーション
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              Anime is my creative north star. The way Japanese animation harnesses expressive exaggeration, intense emotional pacing, dramatic camera shifts, and breathtaking sakuga keyframes is an endless source of inspiration. It pushes me to give every character genuine soul and explosive kinetic energy.
            </p>

            {/* Creative takeaway pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Kinetic Pacing', 'Emotional Exaggeration', 'Camera Angles', 'Character Soul'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] font-bold px-2 py-0.5 bg-[#F4F4F0] border border-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 mt-2 flex items-center justify-between font-mono text-[11px] font-bold text-gray-700">
            <span>INSPIRATION ENGINE</span>
            <span className="text-black bg-[#00F0FF] px-1.5 py-0.5 border border-black">FLUID MOTION</span>
          </div>
        </div>

        {/* CARD 4: Vibe & Community */}
        <div className="bg-white border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-[#23F365] border border-black flex items-center justify-center text-xs">
                  🤝
                </span>
                <span className="font-mono font-black text-xs uppercase tracking-wider text-black">
                  VIBE & COMMUNITY // HUMAN FIRST
                </span>
              </div>
              <span className="font-mono text-[10px] font-extrabold bg-[#23F365] text-black px-1.5 py-0.5 border border-black">
                APPROACHABLE
              </span>
            </div>

            {/* Highlight Banner */}
            <div className="bg-[#F4F4F0] border-2 border-black p-2.5 flex items-center gap-2.5 font-mono text-xs">
              <div className="w-8 h-8 rounded-full bg-[#FFE600] border-2 border-black flex items-center justify-center shrink-0 font-bold">
                ☕
              </div>
              <div>
                <div className="font-bold text-black uppercase text-[11px]">Always Ready To Help</div>
                <div className="text-[10px] text-gray-600">Zero ego &bull; Knowledge shared freely</div>
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              I believe great work is built on genuine kindness and open collaboration. I am naturally approachable and love helping other creatives untangle design obstacles in Photoshop or Illustrator, sharing animation insights, or simply being a positive, supportive voice on the team.
            </p>

            {/* Quick Action Pill */}
            <div className="pt-1">
              <a
                href="mailto:somsubhra.dev@gmail.com"
                className="
                  inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFE600] border-2 border-black
                  font-mono font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                  hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                  active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all
                "
              >
                <Mail size={12} />
                <span>Say Hello / Ask A Question</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 mt-2 flex items-center justify-between font-mono text-[11px] font-bold text-gray-700">
            <span>COMMUNITY STATUS: OPEN</span>
            <span className="text-black bg-[#23F365] px-1.5 py-0.5 border border-black">COLLABORATIVE</span>
          </div>
        </div>

      </div>

    </div>
  );
};
