import React from 'react';
import { cn } from '@/lib/cn';

type Props = React.ComponentPropsWithRef<'button'>;

export default function Button({ children, className, ...rest }: Props) {
  return (
    <button
      className={cn(
        // base
        'h-14 rounded-full text-lg font-extrabold transition-all duration-200',
        'bg-accent text-white',

        // interaction
        'cursor-pointer hover:brightness-110 active:scale-[0.98]',

        // disabled
        'disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:brightness-100',
        'disabled:bg-accent-40 disabled:text-white/70',

        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
