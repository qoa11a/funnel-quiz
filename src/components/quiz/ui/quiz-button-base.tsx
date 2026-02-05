import React from 'react';
import { cn } from '@/lib/cn';

type Props = React.ComponentPropsWithoutRef<'button'>;

export default function QuizButtonBase({
  className,
  children,
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        'h-15 cursor-pointer flex items-center px-5 rounded-2xl transition-all duration-200 bg-bg-surface',
        'hover:bg-bg-surface/80 hover:scale-[1.01] active:scale-[0.99]',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
