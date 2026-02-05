'use client';

import React from 'react';
import QuizButtonBase from '@/components/quiz/ui/quiz-button-base';
import { cn } from '@/lib/cn';

interface Props extends Omit<React.ComponentPropsWithoutRef<typeof QuizButtonBase>, 'onClick' | 'onAnimationEnd'> {
  isSelected?: boolean;
  onSelected: () => void; // Runs after the animation ends
}

export default function QuizAnimatedButton({
  onSelected,
  disabled,
  isSelected: isSelectedProp,
  className,
  ...rest
}: Props) {
  const [isSelected, setIsSelected] = React.useState(false);

  const selected = isSelectedProp ?? isSelected;

  return (
    <QuizButtonBase
      {...rest}
      className={cn(
        isSelected && 'animate-quiz-select',
        className,
      )}
      disabled={disabled ?? selected}
      onClick={(e) => {
        if (e.defaultPrevented) return;

        setIsSelected(true);
      }}
      onAnimationEnd={(e) => {
        if (e.defaultPrevented) return;

        if (e.animationName !== 'quiz-select') return;

        onSelected();
      }}
    />
  );
}
