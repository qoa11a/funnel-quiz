import { quizStorage } from '@/storage/quiz/quiz-storage';
import { useRouter } from '@/i18n/navigation';
import { QuizQuestion } from '@/types/quiz/quiz';
import { routing } from '@/i18n/routing';
import React from 'react';
import { OptionId } from '@/enums/quiz/option-id';

interface HandleOptionSelectParams {
  id: OptionId;
  locale?: (typeof routing.locales)[number];
}

interface Props {
  nextPageUrl: string;
  question: QuizQuestion;
}

export const useSingleSelection = ({
  nextPageUrl,
  question,
}: Props) => {
  const router = useRouter();

  const [
    initialAnswerId,
    setInitialAnswerId,
  ] = React.useState<OptionId | null>(null);

  React.useEffect(() => {
    const savedQuestion = quizStorage.getAll()[question.id];

    const answer = savedQuestion?.answerIds;

    setInitialAnswerId(Array.isArray(answer) ? answer[0] : null);
  }, [question.id]);

  const handleOptionSelect = ({ id, locale }: HandleOptionSelectParams) => {
    setInitialAnswerId(null);

    quizStorage.updateAnswer(question.id, [id]);

    router.push(nextPageUrl, { locale });
  };

  return { initialAnswerId, handleOptionSelect };
};
