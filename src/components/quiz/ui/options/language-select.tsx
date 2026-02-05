'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Headline } from '@/components/ui/typography';
import QuizAnimatedButton from '@/components/quiz/ui/quiz-animated-button';
import { LanguageSelectionQuestion } from '@/types/quiz';
import {
  useSingleSelection,
} from '@/components/quiz/hooks/use-single-selection';
import { cn } from '@/lib/cn';

interface Props {
  nextPageUrl: string;
  currentStep: number;
  question: LanguageSelectionQuestion;
}

export default function LanguageSelect({
  nextPageUrl,
  currentStep,
  question,
}: Props) {
  const t = useTranslations('Quiz');

  const { initialAnswer, handleOptionSelect } = useSingleSelection({
    nextPageUrl,
    currentStep,
    question,
  });

  return (
    <div className="flex flex-col gap-3 px-6">
      {question.languages.map(({ code, labelTranslationKey }) => {
        const answer = t(labelTranslationKey);

        const isPreselected = initialAnswer === answer;

        return (
          <QuizAnimatedButton
            key={code}
            onSelected={() => handleOptionSelect({
              answer,
              locale: code,
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
