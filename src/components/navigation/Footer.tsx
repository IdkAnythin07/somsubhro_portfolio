import React from 'react';
import { Mail, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';

interface FooterProps {
  onScrollToTop?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const socialLinks = [
    {
      name: 'EMAIL',
      href: 'mailto:somsubhra.dev@gmail.com',
      icon: '✉️',
      color: 'bg-[#FFE600] hover:bg-[#FFF04D]',
    },
    {
      name: 'LINKEDIN',
      href: 'https://linkedin.com',
      icon: '💼',
      color: 'bg-[#00F0FF] hover:bg-[#4DF4FF]',
    },
    {
      name: 'INSTAGRAM',
      href: 'https://instagram.com',
      icon: '📸',
      color: 'bg-[#FF499E] hover:bg-[#FF6DB2]',
    },
    {
      name: 'ARTSTATION',
      href: 'https://artstation.com',
      icon: '🎨',
      color: 'bg-[#23F365] hover:bg-[#5CF78D]',
    },
    {
      name: 'GITHUB',
      href: 'https://github.com',
      icon: '🐙',
      color: 'bg-white hover:bg-[#F4F4F0]',
    },
  ];

  return (
    <footer className="w-full bg-white border-t-[3px] border-black mt-16 pt-8 pb-20 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Tier: Big Brand Identity & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-black pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-[#FFE600] border-2 border-black flex items-center justify-center font-mono font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                ⚡
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-black uppercase tracking-tight">
                Somsubhra Chakraborty
              </h3>
            </div>
            <p className="font-mono text-xs sm:text-sm text-gray-700 font-bold tracking-wide">
              Animator, Visual Designer & Storyteller
            </p>
          </div>

          {/* Return to Top Button */}
          <button
            type="button"
            onClick={onScrollToTop}
            className="
              inline-flex items-center gap-2 px-3.5 py-2
              bg-[#FFE600] text-black border-2 border-black
              font-mono font-bold text-xs uppercase tracking-wider
              shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
              transition-all duration-75 cursor-pointer
            "
          >
            <ArrowUp size={14} className="stroke-[3]" />
            <span>TOP OF OS</span>
          </button>
        </div>

        {/* Middle Tier: Tactile Social & Contact Links */}
        <div className="space-y-2">
          <span className="font-mono text-[11px] font-black uppercase text-gray-600 tracking-wider block">
            CONNECT & TRANSMIT DISPATCH // DIRECT CHANNELS
          </span>

          <div className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`
                  inline-flex items-center gap-2 px-3 py-1.5
                  border-2 border-black font-mono font-black text-xs uppercase
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                  hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                  active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                  transition-all duration-75 text-black
                  ${link.color}
                `}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
                <ExternalLink size={11} className="stroke-[2.5]" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Copyright & Colophon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-gray-200 font-mono text-[11px] text-gray-700 font-bold">
          <div>
            SOMSUBHRA CHAKRABORTY &bull; 2026 // ALL RIGHTS RESERVED
          </div>
          <div className="text-black bg-[#F4F4F0] px-2 py-0.5 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            NEOBRUTALISM DESKTOP OS // CRAFTED WITH INTENT
          </div>
        </div>

      </div>
    </footer>
  );
};
