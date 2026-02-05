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
  question: MultipleSelectionQuestion;
  maxSelections?: number;
}

export default function MultipleSelect({
  nextPageUrl,
  question,
  maxSelections,
}: Props) {
  const t = useTranslations('Quiz');

  const {
    selectedAnswersIds,
    handleOptionToggle,
    handleNextButtonClick,
  } = useMultipleSelection({
    nextPageUrl,
    question,
  });

  const isButtonDisabled = selectedAnswersIds.length === 0;

  const canSelectMore = (
    maxSelections === undefined ||
    selectedAnswersIds.length < maxSelections
  );

  return (
    <>
      <div className="flex flex-col gap-3 px-6">
        {question.options.map(({ id, translationKey }) => {
          const answer = t(translationKey);

          const checked = selectedAnswersIds.includes(id);
          const disabled = !checked && !canSelectMore;

          return (
            <QuizMultipleSelectButton
              key={id}
              checked={checked}
              disabled={disabled}
              onCheckedChange={(nextIsChecked) => handleOptionToggle({
                isChecked: !nextIsChecked,
                id,
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
