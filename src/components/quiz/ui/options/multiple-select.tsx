import {
  MultipleSelectionQuestion,
} from '@/types/quiz/quiz';
import { useTranslations } from 'next-intl';
import { Text } from '@/components/ui/typography';
import QuizMultipleSelectButton
  from '@/components/quiz/ui/quiz-multiple-select-button';
import React from 'react';
import Button from '@/components/ui/button';
import {
  useMultipleSelection,
} from '@/components/quiz/hooks/use-multiple-selection';

interface Props {
  nextPageUrl: string;
  currentStep: number;
  question: MultipleSelectionQuestion;
  maxSelections?: number;
}

export default function MultipleSelect({
  nextPageUrl,
  currentStep,
  question,
  maxSelections,
}: Props) {
  const t = useTranslations('Quiz');

  const {
    selectedAnswers,
    handleOptionToggle,
    handleNextButtonClick,
  } = useMultipleSelection({
    nextPageUrl,
    currentStep,
    question,
  });

  const isButtonDisabled = selectedAnswers.length === 0;

  const canSelectMore = (
    maxSelections === undefined ||
    selectedAnswers.length < maxSelections
  );

  return (
    <>
      <div className="flex flex-col gap-3 px-6">
        {question.optionsTranslationKeys.map((translationKey, index) => {
          const answer = t(translationKey);

          const checked = selectedAnswers.includes(answer);
          const disabled = !checked && !canSelectMore;

          return (
            <QuizMultipleSelectButton
              key={index}
              checked={checked}
              disabled={disabled}
              onCheckedChange={(nextIsChecked) => handleOptionToggle({
                isChecked: !nextIsChecked,
                answer,
              })}
              className="justify-center"
            >
              <Text className="text-center text-white font-medium">
                {answer}
              </Text>
            </QuizMultipleSelectButton>
          );
        })}
      </div>

      <Button
        disabled={isButtonDisabled}
        className="mt-auto mx-6"
        onClick={handleNextButtonClick}
      >
        {t('next')}
      </Button>
    </>
  );
}
