import {
  SingleSelectionWithImageQuestion,
} from '@/types/quiz';
import Image from 'next/image';
import QuizAnimatedButton from '@/components/quiz/ui/quiz-animated-button';
import { useTranslations } from 'next-intl';
import { Text } from '@/components/ui/typography';
import {
  useSingleSelection,
} from '@/components/quiz/hooks/use-single-selection';
import { cn } from '@/lib/cn';

interface Props {
  nextPageUrl: string;
  currentStep: number;
  question: SingleSelectionWithImageQuestion;
}

export default function SingleSelectWithImage({
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
    <div className="flex flex-wrap justify-center gap-3 px-6">
      {question.options.map(({ imageSrc, labelTranslationKey }, index) => {
        const answer = t(labelTranslationKey);

        const isPreselected = initialAnswer === answer;

        return (
          <QuizAnimatedButton
            key={index}
            onSelected={() => handleOptionSelect({ answer })}
            className={cn(
              'flex-col h-auto py-7 px-6 gap-3 min-w-25',
              isPreselected && 'ring-2 ring-accent',
            )}
          >
            <Image
              src={imageSrc}
              alt=""
              width={52}
              height={52}
            />

            <Text className="text-center text-white font-semibold">
              {answer}
            </Text>
          </QuizAnimatedButton>
        );
      })}
    </div>
  );
}
