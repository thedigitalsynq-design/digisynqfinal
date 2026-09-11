import React from 'react';

export type GlassIconColor = 'blue' | 'gold' | 'purple' | 'cyan' | 'emerald' | 'rose' | 'amber';
export type GlassIconSize = 'sm' | 'md' | 'lg' | 'xl';

interface Glass3DIconProps {
  icon?: React.ElementType;
  color?: GlassIconColor;
  size?: GlassIconSize;
  variant?: 'icon' | 'document';
  className?: string;
}

const COLOR_MAP: Record<GlassIconColor, {
  backGrad: string;
  frontGradLight: string;
  frontGradDark: string;
  shadow: string;
  borderColor: string;
}> = {
  blue: {
    backGrad: 'from-[#38bdf8] to-[#1d4ed8]',
    frontGradLight: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(224, 242, 254, 0.6) 60%, rgba(147, 197, 253, 0.35) 100%)',
    frontGradDark: 'linear-gradient(145deg, rgba(255, 255, 255, 0.3) 0%, rgba(56, 189, 248, 0.2) 60%, rgba(29, 78, 216, 0.2) 100%)',
    shadow: 'shadow-[0_12px_24px_-6px_rgba(37,99,235,0.45)]',
    borderColor: 'border-white/90 dark:border-white/40'
  },
  gold: {
    backGrad: 'from-[#fbbf24] to-[#d97706]',
    frontGradLight: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(254, 243, 199, 0.6) 60%, rgba(251, 191, 36, 0.35) 100%)',
    frontGradDark: 'linear-gradient(145deg, rgba(255, 255, 255, 0.3) 0%, rgba(245, 158, 11, 0.25) 60%, rgba(180, 83, 9, 0.2) 100%)',
    shadow: 'shadow-[0_12px_24px_-6px_rgba(217,119,6,0.45)]',
    borderColor: 'border-white/90 dark:border-white/40'
  },
  purple: {
    backGrad: 'from-[#c084fc] to-[#7e22ce]',
    frontGradLight: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(243, 232, 255, 0.6) 60%, rgba(192, 132, 252, 0.35) 100%)',
    frontGradDark: 'linear-gradient(145deg, rgba(255, 255, 255, 0.3) 0%, rgba(168, 85, 247, 0.25) 60%, rgba(126, 34, 206, 0.2) 100%)',
    shadow: 'shadow-[0_12px_24px_-6px_rgba(126,34,206,0.45)]',
    borderColor: 'border-white/90 dark:border-white/40'
  },
  cyan: {
    backGrad: 'from-[#22d3ee] to-[#0369a1]',
    frontGradLight: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(207, 250, 254, 0.6) 60%, rgba(34, 211, 238, 0.35) 100%)',
    frontGradDark: 'linear-gradient(145deg, rgba(255, 255, 255, 0.3) 0%, rgba(6, 182, 212, 0.25) 60%, rgba(3, 105, 161, 0.2) 100%)',
    shadow: 'shadow-[0_12px_24px_-6px_rgba(6,182,212,0.45)]',
    borderColor: 'border-white/90 dark:border-white/40'
  },
  emerald: {
    backGrad: 'from-[#34d399] to-[#047857]',
    frontGradLight: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(209, 250, 229, 0.6) 60%, rgba(52, 211, 153, 0.35) 100%)',
    frontGradDark: 'linear-gradient(145deg, rgba(255, 255, 255, 0.3) 0%, rgba(16, 185, 129, 0.25) 60%, rgba(4, 120, 87, 0.2) 100%)',
    shadow: 'shadow-[0_12px_24px_-6px_rgba(4,120,87,0.45)]',
    borderColor: 'border-white/90 dark:border-white/40'
  },
  rose: {
    backGrad: 'from-[#fb7185] to-[#be123c]',
    frontGradLight: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 228, 230, 0.6) 60%, rgba(251, 113, 133, 0.35) 100%)',
    frontGradDark: 'linear-gradient(145deg, rgba(255, 255, 255, 0.3) 0%, rgba(244, 63, 94, 0.25) 60%, rgba(190, 18, 60, 0.2) 100%)',
    shadow: 'shadow-[0_12px_24px_-6px_rgba(190,18,60,0.45)]',
    borderColor: 'border-white/90 dark:border-white/40'
  },
  amber: {
    backGrad: 'from-[#f59e0b] to-[#b45309]',
    frontGradLight: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(254, 243, 199, 0.6) 60%, rgba(245, 158, 11, 0.35) 100%)',
    frontGradDark: 'linear-gradient(145deg, rgba(255, 255, 255, 0.3) 0%, rgba(217, 119, 6, 0.25) 60%, rgba(180, 83, 9, 0.2) 100%)',
    shadow: 'shadow-[0_12px_24px_-6px_rgba(180,83,9,0.45)]',
    borderColor: 'border-white/90 dark:border-white/40'
  }
};

const SIZE_MAP: Record<GlassIconSize, {
  container: string;
  baseTile: string;
  glassTile: string;
  glassOffset: string;
  rounded: string;
  iconSize: string;
  barHeight: string;
  barGap: string;
}> = {
  sm: {
    container: 'w-10 h-10',
    baseTile: 'w-7 h-7',
    glassTile: 'w-7 h-7',
    glassOffset: 'top-2 left-0',
    rounded: 'rounded-xl',
    iconSize: 'w-3.5 h-3.5',
    barHeight: 'h-0.5',
    barGap: 'gap-1'
  },
  md: {
    container: 'w-12 h-12',
    baseTile: 'w-9 h-9',
    glassTile: 'w-9 h-9',
    glassOffset: 'top-2.5 left-0.5',
    rounded: 'rounded-2xl',
    iconSize: 'w-4.5 h-4.5',
    barHeight: 'h-1',
    barGap: 'gap-1.5'
  },
  lg: {
    container: 'w-16 h-16',
    baseTile: 'w-12 h-12',
    glassTile: 'w-12 h-12',
    glassOffset: 'top-3 left-1',
    rounded: 'rounded-2xl',
    iconSize: 'w-6 h-6',
    barHeight: 'h-1.5',
    barGap: 'gap-2'
  },
  xl: {
    container: 'w-24 h-24',
    baseTile: 'w-18 h-18',
    glassTile: 'w-18 h-18',
    glassOffset: 'top-4 left-1.5',
    rounded: 'rounded-3xl',
    iconSize: 'w-8 h-8',
    barHeight: 'h-2',
    barGap: 'gap-2.5'
  }
};

export const Glass3DIcon: React.FC<Glass3DIconProps> = ({
  icon: Icon,
  color = 'blue',
  size = 'md',
  variant = 'icon',
  className = ''
}) => {
  const conf = COLOR_MAP[color] || COLOR_MAP.blue;
  const sz = SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sz.container} ${className}`}>
      {/* 1. Back Solid Vibrant Rounded Squircle Tile */}
      <div
        className={`absolute top-0 right-0 ${sz.baseTile} ${sz.rounded} bg-gradient-to-br ${conf.backGrad} ${conf.shadow} transition-transform duration-300 group-hover:scale-105`}
      />

      {/* 2. Front Frosted Specular Glass Tile (Layered over back tile) */}
      <div
        className={`absolute ${sz.glassOffset} ${sz.glassTile} ${sz.rounded} glass-3d-tile flex flex-col items-center justify-center p-1.5 transition-transform duration-300 group-hover:-translate-y-0.5`}
      >
        {variant === 'document' ? (
          /* Embossed 3D Document Bars (Exact User Image Motif) */
          <div className={`w-3/4 flex flex-col ${sz.barGap}`}>
            <div className={`w-full ${sz.barHeight} bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.15)]`} />
            <div className={`w-full ${sz.barHeight} bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.15)]`} />
            <div className={`w-full ${sz.barHeight} bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.15)]`} />
            <div className={`w-3/5 ${sz.barHeight} bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.15)]`} />
          </div>
        ) : Icon ? (
          /* High-Fidelity Vector Icon in 3D Frosted Relief */
          <Icon className={`${sz.iconSize} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]`} />
        ) : (
          <div className={`w-3/4 flex flex-col ${sz.barGap}`}>
            <div className={`w-full ${sz.barHeight} bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.15)]`} />
            <div className={`w-full ${sz.barHeight} bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.15)]`} />
            <div className={`w-3/5 ${sz.barHeight} bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.15)]`} />
          </div>
        )}
      </div>
    </div>
  );
};
