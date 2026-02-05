import {
  BubbleSelectionQuestion,
} from '@/types/quiz/quiz';
import { useTranslations } from 'next-intl';
import React from 'react';
import Button from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import { Text } from '@/components/ui/typography';
import {
  useMultipleSelection,
} from '@/components/quiz/hooks/use-multiple-selection';

// Split a list into four columns as evenly as possible
function splitIntoColumns<T>(itemList: T[]) {
  const columns: T[][] = [[], [], [], []];

  itemList.forEach((item, index) => {
    const columnIndex = index % 4;

    columns[columnIndex].push(item);
  });

  return columns;
}

const columnOffsetClassList = [
  'pt-1',
  'pt-6',
  'pt-0',
  'pt-9',
];

interface Props {
  nextPageUrl: string;
  question: BubbleSelectionQuestion;
  maxSelections?: number;
}

export default function BubbleSelect({
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

  const columnList = splitIntoColumns(question.options);

  return (
    <>
      <div className="overflow-auto">
        <div className="grid min-w-max grid-cols-4 gap-x-2 w-fit mx-auto p-6">
          {columnList.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={cn(
                'flex flex-col items-center gap-2',
                columnOffsetClassList[columnIndex],
              )}
            >
              {column.map(({ id, translationKey, imageSrc }) => {
                const answer = t(translationKey);

                const checked = selectedAnswersIds.includes(id);
                const disabled = !checked && !canSelectMore;

                return (
                  <button
                    key={id}
                    type="button"
                    disabled={disabled}
                    onClick={() => handleOptionToggle({
                      isChecked: checked,
                      id,
                    })}
                    className={cn(
                      // size
                      'size-22 rounded-full',
                      // layout
                      'flex flex-col items-center justify-center gap-1.5',
                      // background
                      'bg-bg-surface',
                      // ring
                      checked ? 'ring-2 ring-accent' : 'ring-0',
                      // interaction
                      'transition-all duration-150',
                      !disabled && 'hover:scale-[1.02] active:scale-[0.98]',
                      disabled && 'opacity-50 cursor-not-allowed',
                    )}
                    aria-pressed={checked}
                  >
                    <Image
                      src={imageSrc}
                      alt=""
                      width={25}
                      height={25}
                      className="select-none"
                      draggable={false}
                    />

                    <Text className="text-center text-white font-semibold text-[13px] max-w-4/5 leading-none">
                      {answer}
                    </Text>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
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
