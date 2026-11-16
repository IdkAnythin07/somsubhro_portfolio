import React from 'react';

interface BrutalBadgeProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'pink' | 'cyan' | 'lime' | 'black' | 'white';
  size?: 'sm' | 'md';
  shadow?: boolean;
  className?: string;
}

export const BrutalBadge: React.FC<BrutalBadgeProps> = ({
  children,
  variant = 'yellow',
  size = 'sm',
  shadow = true,
  className = '',
}) => {
  const variantStyles = {
    yellow: 'bg-brutal-yellow text-ink border-black',
    pink: 'bg-brutal-pink text-ink border-black',
    cyan: 'bg-brutal-cyan text-ink border-black',
    lime: 'bg-brutal-lime text-ink border-black',
    black: 'bg-black text-white border-black',
    white: 'bg-white text-ink border-black',
  };

  const sizeStyles = {
    sm: 'text-[11px] font-mono font-bold px-2 py-0.5 border-2',
    md: 'text-xs font-mono font-bold px-2.5 py-1 border-[3px]',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 uppercase tracking-wider select-none
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${shadow ? 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : ''}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
