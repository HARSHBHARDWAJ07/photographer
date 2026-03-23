import React from 'react';
import { cn } from '@/src/lib/utils';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export const GlassContainer: React.FC<GlassContainerProps> = ({ 
  children, 
  className, 
  blur = 'xl' 
}) => {
  const blurClass = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
    '3xl': 'backdrop-blur-3xl',
  }[blur];

  return (
    <div className={cn(
      "bg-white/5 border border-white/10 rounded-3xl overflow-hidden",
      blurClass,
      className
    )}>
      {children}
    </div>
  );
};
