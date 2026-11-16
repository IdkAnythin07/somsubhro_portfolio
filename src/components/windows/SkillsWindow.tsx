import React from 'react';
import { BrutalBadge } from '../ui/BrutalBadge';
import { Cpu, Terminal, Layers, Code, Database, Cloud } from 'lucide-react';

export const SkillsWindow: React.FC = () => {
  const skillCategories = [
    {
      title: 'FRONTEND MASTERY',
      icon: <Code size={18} />,
      accent: 'yellow' as const,
      skills: [
        { name: 'React 18 / 19', level: '98%', tag: 'CORE ENGINE' },
        { name: 'TypeScript', level: '96%', tag: 'TYPE RIGIDITY' },
        { name: 'Next.js & Remix', level: '94%', tag: 'SSR / HYBRID' },
        { name: 'Tailwind CSS', level: '99%', tag: 'STYLING MATRIX' },
        { name: 'State (Zustand/Redux)', level: '95%', tag: 'STORE FLOW' },
        { name: 'WebGL / Three.js', level: '82%', tag: 'GRAPHICS CANVAS' },
      ],
    },
    {
      title: 'BACKEND & RUNTIMES',
      icon: <Database size={18} />,
      accent: 'pink' as const,
      skills: [
        { name: 'Node.js & Deno', level: '95%', tag: 'EVENT LOOP' },
        { name: 'Go / Golang', level: '85%', tag: 'CONCURRENCY' },
        { name: 'PostgreSQL & Redis', level: '92%', tag: 'DATA PIPELINES' },
        { name: 'GraphQL & REST', level: '96%', tag: 'API CONTRACTS' },
        { name: 'WebSockets & gRPC', level: '90%', tag: 'REALTIME STREAM' },
        { name: 'Prisma & Drizzle', level: '94%', tag: 'ORM RIGOR' },
      ],
    },
    {
      title: 'DEVOPS & CLOUD ARCHITECTURE',
      icon: <Cloud size={18} />,
      accent: 'cyan' as const,
      skills: [
        { name: 'Docker & Podman', level: '90%', tag: 'CONTAINERS' },
        { name: 'Kubernetes', level: '82%', tag: 'ORCHESTRATION' },
        { name: 'AWS & Cloudflare', level: '88%', tag: 'GLOBAL EDGE' },
        { name: 'CI/CD GitHub Actions', level: '94%', tag: 'AUTOMATION' },
        { name: 'Linux / POSIX', level: '92%', tag: 'SYSADMIN' },
        { name: 'Vite & esbuild', level: '96%', tag: 'BUNDLING' },
      ],
    },
  ];

  const marqueeTechnologies = [
    'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'NEXT.JS', 'NODE.JS', 'DOCKER',
    'POSTGRESQL', 'GRAPHQL', 'RUST', 'GOLANG', 'REDIS', 'KUBERNETES',
    'PRISMA', 'ZUSTAND', 'WEBASSEMBLY', 'WEBGL', 'LINUX'
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Ticker Marquee Banner */}
      <div className="overflow-hidden bg-black text-white py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 font-mono font-extrabold text-sm tracking-wider">
          {marqueeTechnologies.concat(marqueeTechnologies).map((tech, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="text-brutal-yellow">⚡</span>
              <span>{tech}</span>
              <span className="text-brutal-cyan">//</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const headerColors = {
            yellow: 'bg-brutal-yellow',
            pink: 'bg-brutal-pink',
            cyan: 'bg-brutal-cyan',
          };

          return (
            <div
              key={category.title}
              className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
            >
              {/* Category Header */}
              <div
                className={`
                  p-3 border-b-[3px] border-black flex items-center justify-between
                  ${headerColors[category.accent]}
                `}
              >
                <div className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span className="font-archivo text-sm uppercase tracking-wide">
                    {category.title}
                  </span>
                </div>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="p-4 space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between font-mono text-xs font-bold">
                      <span className="text-black">{skill.name}</span>
                      <span className="text-gray-700 bg-canvas px-1.5 py-0.5 border border-black text-[10px]">
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-3.5 bg-canvas border-2 border-black overflow-hidden relative shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      <div
                        style={{ width: skill.level }}
                        className={`h-full border-r-2 border-black ${
                          category.accent === 'yellow'
                            ? 'bg-brutal-yellow'
                            : category.accent === 'pink'
                            ? 'bg-brutal-pink'
                            : 'bg-brutal-cyan'
                        }`}
                      />
                    </div>

                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-tight">
                      &gt; {skill.tag}
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="p-2.5 bg-canvas border-t-[3px] border-black font-mono text-[10px] font-bold text-center uppercase tracking-wider">
                Production-Tested & Battle-Hardened
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Philosophy Banner */}
      <div className="p-4 bg-brutal-yellow border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center font-archivo text-xl">
            🛠️
          </div>
          <div>
            <h4 className="font-archivo text-sm uppercase">Strict Standards Policy</h4>
            <p className="font-mono text-xs text-gray-800">
              Zero sloppy code. 100% type safety, accessible DOM semantics, sub-second load times.
            </p>
          </div>
        </div>
        <div className="font-mono text-xs font-bold bg-black text-white px-3 py-1.5 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          WCAG 2.1 AAA // 100 LIGHTHOUSE
        </div>
      </div>
    </div>
  );
};
