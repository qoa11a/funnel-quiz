'use client';

import React from 'react';
import QuizButtonBase from './quiz-button-base';
import { cn } from '@/lib/cn';
import Checkbox from '@/components/ui/checkbox';

interface Props extends Omit<
  React.ComponentPropsWithoutRef<typeof QuizButtonBase>,
  'onClick'
> {
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
  checkboxAriaLabel?: string;
}

export default function QuizMultipleSelectButton({
  checked,
  onCheckedChange,
  checkboxAriaLabel = 'Selected',
  className,
  children,
  disabled,
  name,
  value,
  ...rest
}: Props) {
  const toggle = () => {
    if (disabled) return;

    onCheckedChange(!checked);
  };

  return (
    <QuizButtonBase
      {...rest}
      disabled={disabled}
      role="checkbox"
      aria-checked={checked}
      onClick={(e) => {
        if (e.defaultPrevented) return;

        toggle();
      }}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggle();
        }
      }}
      className={cn(
        'flex w-full items-center justify-between gap-3',
        checked && 'ring-2 ring-accent',
        className,
      )}
    >
      <span className="min-w-0 flex-1">{children}</span>

      <Checkbox
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        label={checkboxAriaLabel}
        onChange={(e) => onCheckedChange(e.target.checked)}
      />
    </QuizButtonBase>
  );
}
