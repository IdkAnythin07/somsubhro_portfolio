import React, { useState } from 'react';
import { BrutalButton } from '../ui/BrutalButton';
import { BrutalBadge } from '../ui/BrutalBadge';
import { Send, CheckCircle2, Mail, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const ContactWindow: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    soundFx.playOpen();
    setSubmitted(true);
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', color: 'bg-white', icon: '🐙' },
    { name: 'X / Twitter', url: 'https://twitter.com', color: 'bg-brutal-cyan', icon: '🐦' },
    { name: 'LinkedIn', url: 'https://linkedin.com', color: 'bg-brutal-yellow', icon: '💼' },
    { name: 'Discord', url: 'https://discord.com', color: 'bg-brutal-pink', icon: '👾' },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Top Banner */}
      <div className="p-4 bg-brutal-pink border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center font-archivo text-xl">
            ✉️
          </div>
          <div>
            <h2 className="font-archivo text-base uppercase text-ink">
              TRANSMIT DISPATCH // DIRECT WIRE
            </h2>
            <p className="font-mono text-xs text-gray-900 font-semibold">
              Fastest response via email: alex@neobrutalism.dev (within 4 hours)
            </p>
          </div>
        </div>
        <BrutalBadge variant="white" size="sm">
          STATUS: INBOX OPEN
        </BrutalBadge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Form */}
        <div className="md:col-span-2 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 mx-auto bg-brutal-lime border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-3xl">
                ✓
              </div>
              <h3 className="font-archivo text-xl uppercase">TRANSMISSION DISPATCHED</h3>
              <p className="font-mono text-xs text-gray-700 max-w-sm mx-auto">
                Your message has been encoded and placed into priority queue. Expect a response soon.
              </p>
              <BrutalButton
                variant="yellow"
                size="sm"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
                }}
              >
                SEND ANOTHER MESSAGE
              </BrutalButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider block">
                    Your Name <span className="text-brutal-pink">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full bg-canvas px-3 py-2 border-[3px] border-black font-mono text-xs focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider block">
                    Email Address <span className="text-brutal-pink">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@computing.org"
                    className="w-full bg-canvas px-3 py-2 border-[3px] border-black font-mono text-xs focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider block">
                  Engagement Type
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-canvas px-3 py-2 border-[3px] border-black font-mono text-xs focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <option value="Project Inquiry">Project Inquiry (Build an App / UI)</option>
                  <option value="Full-time Role">Full-time Senior Engineering Role</option>
                  <option value="Consulting / Advisory">Technical Advisory / Code Review</option>
                  <option value="Coffee & Chat">Coffee & Tech Chat</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider block">
                  Message Payload <span className="text-brutal-pink">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your requirements, timeline, and architectural expectations..."
                  className="w-full bg-canvas px-3 py-2 border-[3px] border-black font-mono text-xs focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                />
              </div>

              <BrutalButton
                type="submit"
                variant="yellow"
                size="md"
                className="w-full"
                icon={<Send size={15} />}
              >
                TRANSMIT MESSAGE NOW
              </BrutalButton>
            </form>
          )}
        </div>

        {/* Right Column: Direct Channels */}
        <div className="space-y-4">
          <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 space-y-3">
            <h3 className="font-archivo text-sm uppercase border-b-2 border-black pb-1.5 flex items-center gap-2">
              <Globe size={15} /> DIRECT NETWORKS
            </h3>

            <div className="space-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    flex items-center justify-between p-2.5
                    border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                    hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                    active:translate-x-[1px] active:translate-y-[1px] active:shadow-none
                    transition-all font-mono text-xs font-bold
                    ${social.color}
                  `}
                >
                  <span className="flex items-center gap-2">
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Location & PGP info */}
          <div className="bg-canvas border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 font-mono text-[11px] space-y-1">
            <div className="font-bold uppercase text-black">LOCATION:</div>
            <div className="text-gray-700">San Francisco, CA (UTC-7) // Remote Global</div>
            <div className="font-bold uppercase text-black pt-1">PGP FINGERPRINT:</div>
            <div className="text-[10px] text-gray-600 break-all">
              4F9B 81C2 A440 923E E881 BF10 7C39 0081
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
