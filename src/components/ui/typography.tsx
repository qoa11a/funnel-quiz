import React from 'react';
import { cn } from '@/lib/cn';

/*
 * Component names are derived from Figma.
 */

type TitleH3Props = React.ComponentProps<'h3'>;

export function TitleH3({ children, className, ...rest }: TitleH3Props) {
  return (
    <h3
      className={cn(
        'font-nunito-sans font-bold text-[28px]',
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

type HeadlineProps = React.ComponentProps<'p'>;

export function Headline({ children, className, ...rest }: HeadlineProps) {
  return (
    <p
      className={cn(
        'font-nunito-sans text-[17px] text-neutral-300',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

type TextProps = React.ComponentProps<'p'>;

export function Text({ children, className, ...rest }: TextProps) {
  return (
    <p
      className={cn(
        'font-nunito-sans text-[17px] text-neutral-300',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}
