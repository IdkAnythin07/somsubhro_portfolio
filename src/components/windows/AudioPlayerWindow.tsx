import React, { useState, useEffect } from 'react';
import { BrutalButton } from '../ui/BrutalButton';
import { BrutalBadge } from '../ui/BrutalBadge';
import { Play, Pause, SkipForward, SkipBack, Disc, Radio } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const AudioPlayerWindow: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const playlist = [
    { title: 'SYNTHWAVE_ODYSSEY.MID', artist: 'NEO-RETRO KERNEL', duration: '3:42', bpm: '124 BPM' },
    { title: 'CHIP_TUNE_DREAMSCAPE.XM', artist: 'PIXEL ARCHITECT', duration: '2:55', bpm: '138 BPM' },
    { title: 'NEOBRUTAL_BEATS.MOD', artist: 'BYTE SHIFT', duration: '4:10', bpm: '95 BPM' },
  ];

  const currentTrack = playlist[trackIndex];

  const togglePlay = () => {
    soundFx.playClick();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    soundFx.playClick();
    setTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    soundFx.playClick();
    setTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="p-4 md:p-6 space-y-5 bg-canvas font-mono">
      {/* Tape / Deck Housing */}
      <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5 space-y-4">
        {/* Cassette visualization */}
        <div className="bg-black border-[3px] border-black p-4 text-white relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] text-brutal-yellow font-bold uppercase pb-2 border-b border-gray-800">
            <span className="flex items-center gap-1.5">
              <Radio size={14} className="text-brutal-pink" />
              <span>STEREO CASSETTE DECK</span>
            </span>
            <span className="text-brutal-cyan">{isPlaying ? '● PLAYING' : '❚❚ PAUSED'}</span>
          </div>

          <div className="py-4 flex items-center justify-around">
            {/* Left Reel */}
            <div className={`w-14 h-14 rounded-full border-4 border-brutal-yellow flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
              <div className="w-4 h-4 bg-white border-2 border-black" />
            </div>

            {/* Equalizer Bars */}
            <div className="flex items-end gap-1.5 h-12">
              {[40, 75, 90, 60, 85, 95, 50, 80, 65, 90, 45, 70].map((h, i) => (
                <div
                  key={i}
                  style={{
                    height: isPlaying ? `${Math.max(15, (h * (0.6 + Math.random() * 0.4)))}%` : '15%',
                    transition: 'height 0.15s ease-in-out',
                  }}
                  className={`w-1.5 ${
                    i % 3 === 0
                      ? 'bg-brutal-yellow'
                      : i % 3 === 1
                      ? 'bg-brutal-pink'
                      : 'bg-brutal-cyan'
                  }`}
                />
              ))}
            </div>

            {/* Right Reel */}
            <div className={`w-14 h-14 rounded-full border-4 border-brutal-cyan flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
              <div className="w-4 h-4 bg-white border-2 border-black" />
            </div>
          </div>

          <div className="text-center font-mono text-xs text-gray-300">
            {currentTrack.title} // {currentTrack.bpm}
          </div>
        </div>

        {/* Track Info */}
        <div className="flex items-center justify-between bg-canvas p-3 border-2 border-black">
          <div>
            <div className="font-archivo text-sm uppercase text-black">{currentTrack.title}</div>
            <div className="font-mono text-xs text-gray-700 font-semibold">{currentTrack.artist}</div>
          </div>
          <BrutalBadge variant="pink" size="sm">
            {currentTrack.duration}
          </BrutalBadge>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <BrutalButton
            variant="white"
            size="sm"
            shadowSize="sm"
            onClick={prevTrack}
            icon={<SkipBack size={14} />}
          >
            PREV
          </BrutalButton>

          <BrutalButton
            variant={isPlaying ? 'pink' : 'yellow'}
            size="md"
            shadowSize="md"
            onClick={togglePlay}
            icon={isPlaying ? <Pause size={16} /> : <Play size={16} />}
          >
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </BrutalButton>

          <BrutalButton
            variant="white"
            size="sm"
            shadowSize="sm"
            onClick={nextTrack}
            icon={<SkipForward size={14} />}
          >
            NEXT
          </BrutalButton>
        </div>
      </div>
    </div>
  );
};
