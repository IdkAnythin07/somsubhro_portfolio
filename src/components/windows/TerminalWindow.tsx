import React, { useState, useRef, useEffect } from 'react';
import { soundFx } from '../../utils/audio';

interface TerminalWindowProps {
  onOpenWindow?: (id: 'bio' | 'projects' | 'skills' | 'contact') => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ onOpenWindow }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'sysinfo',
      output: (
        <div className="space-y-1 text-xs">
          <div className="text-brutal-yellow font-bold">
            ⚡ DEV.OS v3.8.4 [Neobrutalism Desktop Edition]
          </div>
          <div className="text-gray-300">
            Kernel: Linux 6.12.0-rc4-dev x86_64 // Node.js v26.13.1
          </div>
          <div className="text-brutal-cyan">
            Type <span className="text-brutal-pink font-bold underline">help</span> to view available system commands.
          </div>
        </div>
      ),
    },
  ]);
  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [prevCommands, setPrevCommands] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    soundFx.playClick();
    setPrevCommands((prev) => [...prev, trimmed]);
    setCommandIndex(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <div className="text-brutal-yellow font-bold uppercase tracking-wider">Available Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2">
              <div><span className="text-brutal-cyan font-bold">about</span> - Summary of profile & experience</div>
              <div><span className="text-brutal-cyan font-bold">projects</span> - Showcase of production apps</div>
              <div><span className="text-brutal-cyan font-bold">skills</span> - Breakdown of tech stack</div>
              <div><span className="text-brutal-cyan font-bold">contact</span> - Direct channels & socials</div>
              <div><span className="text-brutal-cyan font-bold">theme</span> - Neobrutalism color specs</div>
              <div><span className="text-brutal-cyan font-bold">date</span> - Print current system time</div>
              <div><span className="text-brutal-cyan font-bold">clear</span> - Clear screen history</div>
              <div><span className="text-brutal-cyan font-bold">sudo</span> - Elevated command privileges</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="text-xs font-mono space-y-1">
            <div className="text-brutal-yellow font-bold">ALEXANDER DEV // SENIOR FULL-STACK ARCHITECT</div>
            <div className="text-gray-300">
              Passionate builder crafting resilient, high-speed web systems and iconic Neobrutalist interfaces.
            </div>
            <div className="text-brutal-lime">Status: Open for senior engineering & architectural roles.</div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs font-mono space-y-1.5">
            <div className="text-brutal-pink font-bold">FEATURED PROJECTS:</div>
            <div className="pl-2 border-l-2 border-brutal-cyan space-y-1">
              <div><span className="text-white font-bold">1. HYPER-TERMINAL OS</span> - In-browser POSIX pseudo-kernel (1.2k stars)</div>
              <div><span className="text-white font-bold">2. BRUTALIST WORKFLOW ENGINE</span> - Node-based visual automation platform</div>
              <div><span className="text-white font-bold">3. SYNAPSE LOCAL AGENT</span> - Onnx Runtime WebGPU local inference engine</div>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs font-mono space-y-1">
            <div className="text-brutal-cyan font-bold">TECHNICAL MATRIX:</div>
            <div><span className="text-brutal-yellow">Frontend:</span> React 19, TypeScript, Next.js, Tailwind CSS, WebGL, Zustand</div>
            <div><span className="text-brutal-pink">Backend:</span> Node.js, Go, PostgreSQL, Redis, GraphQL, WebSockets</div>
            <div><span className="text-brutal-lime">Infra:</span> Docker, Kubernetes, AWS, Cloudflare, Linux, Vite</div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs font-mono space-y-1">
            <div className="text-brutal-yellow font-bold">CHANNELS:</div>
            <div>Email: <a href="mailto:alex@neobrutalism.dev" className="text-brutal-cyan underline">alex@neobrutalism.dev</a></div>
            <div>GitHub: <a href="https://github.com" target="_blank" rel="noreferrer" className="text-brutal-pink underline">github.com/alex-dev</a></div>
            <div>X/Twitter: <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-brutal-yellow underline">@alexander_dev</a></div>
          </div>
        );
        break;

      case 'theme':
        outputNode = (
          <div className="text-xs font-mono space-y-1 bg-gray-900 p-2 border border-gray-700">
            <div className="text-white font-bold">NEOBRUTALISM DESKTOP PALETTE SPEC:</div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#F4F4F0] border border-white inline-block" />
              <span>Canvas Off-White: #F4F4F0</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFE600] inline-block" />
              <span className="text-brutal-yellow">Acid Yellow: #FFE600</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FF499E] inline-block" />
              <span className="text-brutal-pink">Hot Pink: #FF499E</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#00F0FF] inline-block" />
              <span className="text-brutal-cyan">Electric Cyan: #00F0FF</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#000000] border border-white inline-block" />
              <span>Stark Black Ink: #000000 (3px solid borders + 6px hard shadows)</span>
            </div>
          </div>
        );
        break;

      case 'date':
        outputNode = (
          <div className="text-xs font-mono text-gray-300">
            {new Date().toISOString()}
          </div>
        );
        break;

      case 'sudo':
        outputNode = (
          <div className="text-xs font-mono text-brutal-pink font-bold">
            [ACCESS DENIED]: Nice try! Guest users do not have root privileges in DEV.OS.
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <div className="text-xs font-mono text-red-400">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-brutal-yellow font-bold">help</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output: outputNode,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (prevCommands.length > 0) {
        const nextIdx = commandIndex === -1 ? prevCommands.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIdx);
        setInputVal(prevCommands[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex !== -1) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < prevCommands.length) {
          setCommandIndex(nextIdx);
          setInputVal(prevCommands[nextIdx]);
        } else {
          setCommandIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="h-full min-h-[380px] bg-black text-white p-4 font-mono text-xs flex flex-col justify-between cursor-text"
    >
      {/* Terminal Output history */}
      <div className="space-y-3 overflow-y-auto pr-1">
        <div className="text-gray-400 text-[11px] pb-2 border-b border-gray-800 flex items-center justify-between">
          <span>Connected to tty1 via localhost // TLS 1.3</span>
          <span className="text-brutal-lime">LIVE SESSION</span>
        </div>

        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-brutal-lime font-bold">guest@dev-os</span>
              <span className="text-gray-600">:</span>
              <span className="text-brutal-cyan font-bold">~</span>
              <span className="text-white">$</span>
              <span className="text-brutal-yellow font-bold">{item.command}</span>
            </div>
            <div className="pl-3">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt */}
      <div className="flex items-center gap-2 pt-3 border-t border-gray-800 shrink-0">
        <span className="text-brutal-lime font-bold">guest@dev-os</span>
        <span className="text-gray-600">:</span>
        <span className="text-brutal-cyan font-bold">~</span>
        <span className="text-white">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 bg-transparent text-brutal-yellow font-mono text-xs focus:outline-none caret-brutal-pink"
          placeholder="Type 'help' for commands..."
        />
      </div>
    </div>
  );
};
