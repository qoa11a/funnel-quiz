'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Headline } from '@/components/ui/typography';
import QuizAnimatedButton from '@/components/quiz/ui/quiz-animated-button';
import { LanguageSelectionQuestion } from '@/types/quiz/quiz';
import {
  useSingleSelection,
} from '@/components/quiz/hooks/use-single-selection';
import { cn } from '@/lib/cn';
import { resolveOptions } from '@/components/quiz/helpers';

interface Props {
  nextPageUrl: string;
  question: LanguageSelectionQuestion;
}

export default function LanguageSelect({
  nextPageUrl,
  question,
}: Props) {
  const t = useTranslations('Quiz');

  const { initialAnswerId, handleOptionSelect } = useSingleSelection({
    nextPageUrl,
    question,
  });

  const options = resolveOptions(question);

  return (
    <div className="flex flex-col gap-3 px-6">
      {options.map(({ id, locale, translationKey }) => {
        const answer = t(translationKey);

        const isPreselected = initialAnswerId === id;

        return (
          <QuizAnimatedButton
            key={id}
            onSelected={() => handleOptionSelect({
              id,
              locale,
            })}
            className={cn(isPreselected && 'ring-2 ring-accent')}
          >
            <Headline className="font-semibold text-white">
              {answer}
            </Headline>
          </QuizAnimatedButton>
        );
      })}
    </div>
  );
}
