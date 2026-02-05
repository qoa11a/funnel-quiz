import React from 'react';
import { cn } from '@/lib/cn';

type Props = React.ComponentPropsWithRef<'input'>;

export default function Input({ className, ...rest }: Props) {
  return (
    <input
      className={cn(
        'h-19 px-5 bg-bg-surface text-[17px] rounded-2xl outline-none',
        'placeholder:font-medium placeholder:text-neutral-300-50 transition-all duration-200',
        'focus-visible:bg-focused-input focus-visible:ring-2 focus-visible:ring-accent',
        className,
      )}
      {...rest}
    />
  );
}
