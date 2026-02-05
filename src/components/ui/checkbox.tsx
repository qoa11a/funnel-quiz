import * as React from 'react';
import { cn } from '@/lib/cn';
import { Check } from 'lucide-react';

interface Props extends Omit<React.ComponentPropsWithRef<'input'>, 'type'> {
  label?: string;
}

export default function Checkbox({ className, label, ...rest }: Props) {
  return (
    <span className={cn('relative inline-flex items-center', className)}>
      <input
        type="checkbox"
        className="peer sr-only"
        aria-label={label}
        {...rest}
      />

      <span
        aria-hidden="true"
        className={cn(
          'flex justify-center items-center size-6 rounded-lg border transition-all',
          'border-accent bg-bg-control',
          'peer-checked:bg-accent',
          'peer-disabled:opacity-50',
          'text-transparent peer-checked:text-white',
        )}
      >
        <Check
          className="size-4 transition-colors"
        />
      </span>
    </span>
  );
}
