import React from 'react';
import { soundFx } from '../../utils/audio';

interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'yellow' | 'pink' | 'cyan' | 'lime' | 'black' | 'white';
  size?: 'sm' | 'md' | 'lg';
  shadowSize?: 'sm' | 'md' | 'lg' | 'none';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({
  variant = 'yellow',
  size = 'md',
  shadowSize = 'md',
  icon,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const variantStyles = {
    yellow: 'bg-brutal-yellow text-ink border-black hover:bg-[#FFF04D]',
    pink: 'bg-brutal-pink text-ink border-black hover:bg-[#FF6DB2]',
    cyan: 'bg-brutal-cyan text-ink border-black hover:bg-[#4DF4FF]',
    lime: 'bg-brutal-lime text-ink border-black hover:bg-[#5CF78D]',
    black: 'bg-black text-white border-black hover:bg-[#1a1a1a]',
    white: 'bg-white text-ink border-black hover:bg-[#f0f0ec]',
  };

  const sizeStyles = {
    sm: 'text-xs font-mono font-bold px-2.5 py-1.5 gap-1.5',
    md: 'text-sm font-display font-bold px-4 py-2 gap-2',
    lg: 'text-base font-display font-bold px-6 py-3 gap-2.5',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]',
    md: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
    lg: 'shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]',
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundFx.playClick();
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center justify-center
        border-[3px] border-black
        transition-all duration-75 uppercase tracking-wide cursor-pointer
        select-none disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${shadowStyles[shadowSize]}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
