import React, { useState } from 'react';
import { Project } from '../../types';
import { BrutalButton } from '../ui/BrutalButton';
import { BrutalBadge } from '../ui/BrutalBadge';
import { ExternalLink, Github, Star, Filter, Sparkles } from 'lucide-react';

export const ProjectsWindow: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'WEB' | 'SYSTEMS' | 'AI'>('ALL');

  const projects: (Project & { category: 'WEB' | 'SYSTEMS' | 'AI' })[] = [
    {
      id: 'neo-kernel',
      title: 'HYPER-TERMINAL OS',
      tagline: 'In-Browser UNIX Emulation Layer',
      description: 'A WebAssembly-powered POSIX-compatible pseudo-OS running within a React virtual DOM with interactive filesystem mounting and piping.',
      tags: ['React', 'TypeScript', 'WebAssembly', 'Tailwind'],
      metrics: '12.4k GitHub Stars // 60fps canvas',
      accent: 'yellow',
      stars: 1240,
      category: 'SYSTEMS',
      status: 'SHIPPED',
      year: '2026',
      demoUrl: 'https://example.com/hyper-terminal',
      githubUrl: 'https://github.com/example/hyper-terminal',
    },
    {
      id: 'brutal-flow',
      title: 'BRUTALIST WORKFLOW ENGINE',
      tagline: 'Visual Flow Automation Canvas',
      description: 'An unapologetic node-based drag and drop workflow builder with real-time websocket synchronization and infinite zoom canvas.',
      tags: ['Next.js', 'React Flow', 'Zustand', 'WebSockets'],
      metrics: '450k Active Events Processed/mo',
      accent: 'pink',
      stars: 890,
      category: 'WEB',
      status: 'SHIPPED',
      year: '2026',
      demoUrl: 'https://example.com/brutal-flow',
      githubUrl: 'https://github.com/example/brutal-flow',
    },
    {
      id: 'synapse-ai',
      title: 'SYNAPSE LOCAL AGENT',
      tagline: 'Local LLM Reasoning & Task Coordinator',
      description: 'Privacy-first desktop agent orchestrator with multi-modal reasoning and local vector memory embeddings stored in SQLite.',
      tags: ['TypeScript', 'ONNX Runtime', 'WebGPU', 'SQLite'],
      metrics: 'Zero-latency edge inference',
      accent: 'cyan',
      stars: 2150,
      category: 'AI',
      status: 'BETA',
      year: '2026',
      demoUrl: 'https://example.com/synapse',
      githubUrl: 'https://github.com/example/synapse',
    },
    {
      id: 'acid-metrics',
      title: 'ACID METRICS DASHBOARD',
      tagline: 'High-Density Realtime Telemetry',
      description: 'A high-contrast server performance dashboard rendering millions of time-series datapoints with custom WebGL charts.',
      tags: ['React', 'WebGL', 'Rust', 'Tailwind'],
      metrics: 'Sub-millisecond data refresh',
      accent: 'lime',
      stars: 640,
      category: 'WEB',
      status: 'SHIPPED',
      year: '2025',
      demoUrl: 'https://example.com/acid-metrics',
      githubUrl: 'https://github.com/example/acid-metrics',
    },
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const filterColors: Record<string, string> = {
    ALL: 'yellow',
    WEB: 'pink',
    SYSTEMS: 'cyan',
    AI: 'lime',
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header and Filter Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div>
          <h2 className="font-archivo text-xl uppercase tracking-tight flex items-center gap-2">
            <span>📂</span> PROVEN REPERTOIRE // SELECTED WORKS
          </h2>
          <p className="font-mono text-xs text-gray-700 font-semibold mt-0.5">
            Displaying {filteredProjects.length} production applications
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {(['ALL', 'WEB', 'SYSTEMS', 'AI'] as const).map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-3 py-1 font-mono text-xs font-bold uppercase
                  border-2 border-black transition-all cursor-pointer
                  ${
                    isSelected
                      ? 'bg-black text-white shadow-[2px_2px_0px_0px_#FFE600] -translate-y-0.5'
                      : 'bg-canvas text-black hover:bg-brutal-yellow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const headerColors = {
            yellow: 'bg-brutal-yellow',
            pink: 'bg-brutal-pink',
            cyan: 'bg-brutal-cyan',
            lime: 'bg-brutal-lime',
          };

          return (
            <div
              key={project.id}
              className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 flex flex-col justify-between"
            >
              <div>
                {/* Project Card Header */}
                <div
                  className={`
                    p-3 border-b-[3px] border-black flex items-center justify-between
                    ${headerColors[project.accent]}
                  `}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-archivo text-base uppercase tracking-tight">
                      {project.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] font-bold bg-black text-white px-1.5 py-0.5 border border-black">
                      {project.year}
                    </span>
                    <span className="font-mono text-[10px] font-bold bg-white text-black px-1.5 py-0.5 border border-black flex items-center gap-1">
                      <Star size={10} className="fill-black" />
                      {project.stars}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-3">
                  <div className="font-mono text-xs font-bold text-gray-800 uppercase tracking-wide">
                    {project.tagline}
                  </div>

                  <p className="text-xs md:text-sm text-gray-900 font-medium leading-relaxed">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="bg-canvas border-2 border-black p-2 font-mono text-[11px] font-semibold text-black">
                      <span className="text-pink-600 font-bold">▶ </span>
                      {project.metrics}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <BrutalBadge key={tag} variant="white" size="sm">
                        {tag}
                      </BrutalBadge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-3 bg-canvas border-t-[3px] border-black flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] font-bold bg-black text-brutal-lime px-2 py-1">
                  ● {project.status}
                </span>

                <div className="flex items-center gap-2">
                  <BrutalButton
                    variant="white"
                    size="sm"
                    shadowSize="sm"
                    icon={<Github size={13} />}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    CODE
                  </BrutalButton>
                  <BrutalButton
                    variant={project.accent}
                    size="sm"
                    shadowSize="sm"
                    icon={<ExternalLink size={13} />}
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    DEMO
                  </BrutalButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
