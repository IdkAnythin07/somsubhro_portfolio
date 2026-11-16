import React, { useState } from 'react';
import {
  Palette,
  Layers,
  Eye,
  EyeOff,
  Lock,
  Sparkles,
  Sliders,
  Move,
  PenTool,
  Type,
  Square,
  Brush,
  Film,
  Compass,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';

interface CreativeSkill {
  id: string;
  name: string;
  category: 'tool' | 'motion' | 'design';
  layerNum: string;
  badge: string;
  color: 'cyan' | 'pink' | 'yellow' | 'lime';
  shortDesc: string;
  deepDive: {
    workflow: string;
    focus: string;
    toolsUsed: string[];
    outputTypes: string[];
  };
}

export const CreativeLabWindow: React.FC = () => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>('photoshop');
  const [activeFilter, setActiveFilter] = useState<'all' | 'tool' | 'motion' | 'design'>('all');

  const skills: CreativeSkill[] = [
    {
      id: 'photoshop',
      name: 'Adobe Photoshop',
      category: 'tool',
      layerNum: 'LAYER 01',
      badge: 'RASTER & PAINTING',
      color: 'cyan',
      shortDesc: 'Digital painting, atmospheric textures, character color grading, and multi-layer raster compositing.',
      deepDive: {
        workflow: 'Developing keyframe character lighting, custom textured brushes, and atmospheric tone maps.',
        focus: 'Hand-painted lighting gradients, grain overlays, and mood palettes.',
        toolsUsed: ['Custom Texture Brushes', 'Adjustment Layers', 'Smart Filters', 'Clipping Masks'],
        outputTypes: ['Production Keyframes', 'Digital Illustrations', 'Concept Moodboards'],
      },
    },
    {
      id: 'illustrator',
      name: 'Adobe Illustrator',
      category: 'tool',
      layerNum: 'LAYER 02',
      badge: 'VECTOR RIGOR',
      color: 'yellow',
      shortDesc: 'Geometric character turnarounds, iconography, scalable layout systems, and crisp vector silhouettes.',
      deepDive: {
        workflow: 'Drafting pixel-perfect vector silhouettes ready for rigging, cut-out animation, and typographic treatments.',
        focus: 'Clean anchor curves, bold negative space, and mathematical color proportion.',
        toolsUsed: ['Pen Tool', 'Shape Builder', 'Pathfinder', 'Global Swatches'],
        outputTypes: ['Animation Asset Packs', 'Editorial Posters', 'Brand Graphics'],
      },
    },
    {
      id: 'animation',
      name: 'Animation',
      category: 'motion',
      layerNum: 'LAYER 03',
      badge: '24 FPS MOTION',
      color: 'pink',
      shortDesc: '12 principles of animation, squash & stretch, anticipation, timing, and breathing emotional weight into characters.',
      deepDive: {
        workflow: 'Breaking down physical forces, easing arcs, and micro-movements that make stylized characters feel alive.',
        focus: 'Emotional pacing, secondary action, weight distribution, and rhythmic timing.',
        toolsUsed: ['Frame-by-Frame Timelines', 'Onion Skinning', 'Motion Arcs', 'Spacing Charts'],
        outputTypes: ['Character Loops', 'Micro-Animations', 'Narrative Sequences'],
      },
    },
    {
      id: 'storytelling',
      name: 'Visual Storytelling',
      category: 'motion',
      layerNum: 'LAYER 04',
      badge: 'NARRATIVE ARC',
      color: 'yellow',
      shortDesc: 'Cinematic framing, visual pacing, directing the audience eye, and conveying deeper emotional subtext.',
      deepDive: {
        workflow: 'Drafting thumbnail storyboards, dramatic focal points, and lighting beats to propel the character journey.',
        focus: 'Visual metaphors, thematic motifs, and evocative scene staging.',
        toolsUsed: ['Thumbnail Boards', 'Rule of Thirds', 'Golden Ratio Grids', 'Color Scripts'],
        outputTypes: ['Storyboard Animatics', 'Sequential Art', 'Story Pitches'],
      },
    },
    {
      id: 'posters',
      name: 'Poster Design',
      category: 'design',
      layerNum: 'LAYER 05',
      badge: 'TYPOGRAPHY & SCALE',
      color: 'pink',
      shortDesc: 'High-impact editorial hierarchy, daring contrast, retro-modern typography pairing, and memorable centerpieces.',
      deepDive: {
        workflow: 'Combining brutal scale contrast, stark display typography, and structured grid balance.',
        focus: 'Visual arresting power, readable hierarchy, and tactile composition.',
        toolsUsed: ['Modular Grids', 'Kerning Tables', 'Scale Inversion', 'Asymmetry'],
        outputTypes: ['Exhibition Posters', 'Cultural Prints', 'Screenprints'],
      },
    },
    {
      id: 'textures',
      name: 'Textures & Compositions',
      category: 'design',
      layerNum: 'LAYER 06',
      badge: 'ORGANIC DEPTH',
      color: 'cyan',
      shortDesc: 'Handcrafted halftone dot patterns, paper grains, risograph overlays, and spatial environmental depth.',
      deepDive: {
        workflow: 'Synthesizing organic analog imperfections over sharp digital vectors for tactile tangibility.',
        focus: 'Rhythmic noise, depth-of-field separation, and material authenticity.',
        toolsUsed: ['Halftone Generators', 'Noise Displacement', 'Paper Scans', 'Blend Modes'],
        outputTypes: ['Texture Overlays', 'Printed Ephemera', 'Tactile Canvas'],
      },
    },
  ];

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  const selectedSkill = skills.find((s) => s.id === selectedSkillId) || skills[0];

  const colorStyles = {
    cyan: {
      tag: 'bg-[#00F0FF] text-black',
      border: 'border-[#00F0FF]',
      activeCard: 'bg-[#00F0FF]',
    },
    pink: {
      tag: 'bg-[#FF499E] text-black',
      border: 'border-[#FF499E]',
      activeCard: 'bg-[#FF499E]',
    },
    yellow: {
      tag: 'bg-[#FFE600] text-black',
      border: 'border-[#FFE600]',
      activeCard: 'bg-[#FFE600]',
    },
    lime: {
      tag: 'bg-[#23F365] text-black',
      border: 'border-[#23F365]',
      activeCard: 'bg-[#23F365]',
    },
  };

  return (
    <div className="space-y-6">
      
      {/* Photoshop App Document Context Bar */}
      <div className="bg-white border-[3px] border-black p-2.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-3 select-none font-mono text-xs">
        {/* Left: Document metadata */}
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-[#00F0FF] border border-black flex items-center justify-center font-black text-[10px]">
            Ps
          </span>
          <span className="font-bold text-black tracking-tight">
            THE_CREATIVE_LAB.psd @ 100% (RGB/8#)
          </span>
          <span className="hidden sm:inline bg-black text-[#00F0FF] px-1.5 py-0.5 text-[10px] font-bold">
            300 DPI
          </span>
        </div>

        {/* Photoshop Tools Palette Shortcuts */}
        <div className="hidden md:flex items-center gap-1 bg-[#F4F4F0] p-1 border-2 border-black">
          {[
            { label: 'V', title: 'Move Tool' },
            { label: 'M', title: 'Marquee' },
            { label: 'L', title: 'Lasso' },
            { label: 'B', title: 'Brush' },
            { label: 'P', title: 'Pen Tool' },
            { label: 'T', title: 'Type Tool' },
          ].map((tool, idx) => (
            <span
              key={tool.label}
              title={tool.title}
              className={`w-5 h-5 flex items-center justify-center border font-bold text-[10px] cursor-default ${
                idx === 3
                  ? 'bg-black text-[#FFE600] border-black'
                  : 'bg-white text-black border-gray-300'
              }`}
            >
              {tool.label}
            </span>
          ))}
        </div>

        {/* Right: Layers Mode State */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
          <span className="text-gray-600">BLEND: NORMAL</span>
          <span className="text-black bg-[#FFE600] px-1.5 py-0.5 border border-black">
            OPAC: 100%
          </span>
        </div>
      </div>

      {/* Prominent Core Creative Focus Callout Banner */}
      <div className="relative overflow-hidden bg-[#FFE600] border-[3px] border-black p-5 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] select-none">
        
        {/* Corner registration marks */}
        <div className="absolute top-2 left-2 font-mono text-xs font-black text-black pointer-events-none">⊕</div>
        <div className="absolute top-2 right-2 font-mono text-xs font-black text-black pointer-events-none">⊕</div>
        <div className="absolute bottom-2 left-2 font-mono text-xs font-black text-black pointer-events-none">⊕</div>
        <div className="absolute bottom-2 right-2 font-mono text-xs font-black text-black pointer-events-none">⊕</div>

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-black text-white px-2.5 py-0.5 font-mono text-[11px] font-extrabold uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles size={12} className="text-[#FFE600]" />
            CORE CREATIVE FOCUS
          </div>

          <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-black uppercase tracking-tight leading-snug">
            &ldquo;Building emotional depth and character movement through every frame.&rdquo;
          </h2>

          <p className="font-mono text-xs sm:text-sm font-bold text-gray-900 tracking-wide">
            Every layer, vector anchor, and frame timing exists to amplify story emotion.
          </p>
        </div>
      </div>

      {/* Filter Tabs for the Bento Grid */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          <Layers size={16} />
          <span className="font-mono font-black text-xs uppercase tracking-wider text-black">
            DAILY CREATIVE MATRIX // 6 LAYERS
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: 'all', label: 'ALL LAYERS' },
            { id: 'tool', label: 'SOFTWARE' },
            { id: 'motion', label: 'ANIMATION & STORY' },
            { id: 'design', label: 'DESIGN & TEXTURE' },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`
                  px-2.5 py-1 border-2 border-black font-mono font-bold text-[11px] uppercase
                  transition-all duration-75 cursor-pointer
                  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                  hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                  active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                  ${
                    isActive
                      ? 'bg-black text-[#00F0FF] font-black'
                      : 'bg-white hover:bg-[#F4F4F0] text-black'
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Bento Grid (6 Skills) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => {
          const isSelected = selectedSkillId === skill.id;
          const style = colorStyles[skill.color];

          return (
            <div
              key={skill.id}
              onClick={() => setSelectedSkillId(skill.id)}
              className={`
                group relative bg-white border-[3px] border-black p-4
                cursor-pointer transition-all duration-100 flex flex-col justify-between select-none
                ${
                  isSelected
                    ? 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ring-2 ring-black -translate-x-0.5 -translate-y-0.5'
                    : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                }
              `}
            >
              <div>
                {/* Card Layer Header (Photoshop style) */}
                <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-black tracking-wider text-gray-700">
                    <Eye size={12} className={isSelected ? 'text-black' : 'text-gray-400'} />
                    <span>{skill.layerNum}</span>
                  </div>

                  <span className={`font-mono text-[9px] font-extrabold px-1.5 py-0.5 border border-black uppercase ${style.tag}`}>
                    {skill.badge}
                  </span>
                </div>

                {/* Skill Title */}
                <h3 className="font-display font-black text-base sm:text-lg text-black uppercase tracking-tight group-hover:underline">
                  {skill.name}
                </h3>

                {/* Short Breakdown */}
                <p className="font-sans text-xs text-gray-800 leading-relaxed font-medium mt-1.5">
                  {skill.shortDesc}
                </p>
              </div>

              {/* Bottom State / Click Prompt */}
              <div className="pt-4 flex items-center justify-between border-t border-gray-200 mt-3 font-mono text-[10px]">
                <span className={`font-bold flex items-center gap-1 ${isSelected ? 'text-black' : 'text-gray-500'}`}>
                  {isSelected ? (
                    <>
                      <CheckCircle2 size={11} className="text-black" />
                      <span>LAYER INSPECTED</span>
                    </>
                  ) : (
                    <span>CLICK TO INSPECT</span>
                  )}
                </span>
                <span className="font-bold underline text-black">
                  {isSelected ? 'ACTIVE' : 'DETAILS →'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Layer Inspector Deep-Dive Panel */}
      {selectedSkill && (
        <div className="bg-white border-[3px] border-black p-4 sm:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black pb-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-black text-[#00F0FF] border border-black flex items-center justify-center font-mono font-black text-xs">
                ⚙
              </span>
              <div>
                <span className="font-mono text-[10px] font-extrabold text-gray-600 uppercase tracking-widest block">
                  LAYER INSPECTOR // {selectedSkill.layerNum}
                </span>
                <h4 className="font-display font-black text-lg sm:text-xl text-black uppercase tracking-tight">
                  {selectedSkill.name} Breakdown
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="bg-[#FFE600] px-2 py-0.5 border border-black font-bold uppercase">
                {selectedSkill.badge}
              </span>
            </div>
          </div>

          {/* Workflow & Focus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="bg-[#F4F4F0] p-3 border-2 border-black space-y-1">
              <span className="font-bold text-[10px] text-gray-600 block uppercase">
                HOW I USE THIS IN PRODUCTION
              </span>
              <p className="font-sans text-xs text-gray-900 font-medium leading-relaxed">
                {selectedSkill.deepDive.workflow}
              </p>
            </div>

            <div className="bg-[#F4F4F0] p-3 border-2 border-black space-y-1">
              <span className="font-bold text-[10px] text-gray-600 block uppercase">
                CREATIVE FOCUS & MASTERY
              </span>
              <p className="font-sans text-xs text-gray-900 font-medium leading-relaxed">
                {selectedSkill.deepDive.focus}
              </p>
            </div>
          </div>

          {/* Tools & Artifacts Tags */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1 border-t border-gray-200">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold text-gray-600 uppercase block">
                PRIMARY TECHNIQUES & SHORTCUTS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedSkill.deepDive.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] font-bold px-2 py-0.5 bg-white border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-1 sm:text-right">
              <span className="font-mono text-[10px] font-bold text-gray-600 uppercase block">
                DELIVERABLE ARTIFACTS:
              </span>
              <div className="flex flex-wrap sm:justify-end gap-1.5">
                {selectedSkill.deepDive.outputTypes.map((out) => (
                  <span
                    key={out}
                    className="font-mono text-[10px] font-extrabold px-2 py-0.5 bg-[#00F0FF] text-black border border-black"
                  >
                    {out}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
