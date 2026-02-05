import {
  SingleSelectionQuestion,
} from '@/types/quiz';
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
  question: SingleSelectionQuestion;
}

export default function SingleSelect({
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
      {question.optionsTranslationKeys.map((translationKey, index) => {
        const answer = t(translationKey);

        const isPreselected = initialAnswer === answer;

        return (
          <QuizAnimatedButton
            key={index}
            onSelected={() => handleOptionSelect({ answer })}
            className={cn(
              "justify-center",
              isPreselected && "ring-2 ring-accent",
            )}
          >
            <Text className="text-center text-white font-medium">
              {answer}
            </Text>
          </QuizAnimatedButton>
        );
      })}
    </div>
  );
}
