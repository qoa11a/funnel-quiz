import {
  SingleSelectionQuestion,
} from '@/types/quiz/quiz';
import QuizAnimatedButton from '@/components/quiz/ui/quiz-animated-button';
import { useTranslations } from 'next-intl';
import { Text } from '@/components/ui/typography';
import {
  useSingleSelection,
} from '@/components/quiz/hooks/use-single-selection';
import { cn } from '@/lib/cn';

interface Props {
  nextPageUrl: string;
  question: SingleSelectionQuestion;
}

export default function SingleSelect({
  nextPageUrl,
  question,
}: Props) {
  const t = useTranslations('Quiz');

  const { initialAnswerId, handleOptionSelect } = useSingleSelection({
    nextPageUrl,
    question,
  });

  return (
    <div className="flex flex-col gap-3 px-6">
      {question.options.map(({ id, translationKey }) => {
        const answer = t(translationKey);

        const isPreselected = initialAnswerId === id;

        return (
          <QuizAnimatedButton
            key={id}
            onSelected={() => handleOptionSelect({ id })}
            className={cn(
              'justify-center',
              isPreselected && 'ring-2 ring-accent',
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
