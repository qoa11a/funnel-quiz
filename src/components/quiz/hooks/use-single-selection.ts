import { quizStorage } from '@/storage/quiz/quiz-storage';
import { useRouter } from '@/i18n/navigation';
import { QuizQuestion } from '@/types/quiz/quiz';
import { useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import React from 'react';

interface HandleOptionSelectParams {
  answer: string;
  locale?: (typeof routing.locales)[number];
}

interface Props {
  nextPageUrl: string;
  currentStep: number;
  question: QuizQuestion;
}

export const useSingleSelection = ({
  nextPageUrl,
  currentStep,
  question,
}: Props) => {
  const t = useTranslations('Quiz');
  const router = useRouter();

  const [initialAnswer, setInitialAnswer] = React.useState<string | null>(null);

  React.useEffect(() => {
    const savedQuestion = quizStorage.getAll()[question.id];

    const answer = savedQuestion?.answer;

    setInitialAnswer(typeof answer === 'string' ? answer : null);
  }, [question.id]);

  const handleOptionSelect = ({ answer, locale }: HandleOptionSelectParams) => {
    setInitialAnswer(null);

    quizStorage.updateAnswer(question.id, {
      number: currentStep,
      title: t(question.title.translationKey),
      type: question.type,
      answer,
    });

    router.push(nextPageUrl, { locale });
  };

  return { initialAnswer, handleOptionSelect };
};
