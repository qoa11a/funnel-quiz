import React from 'react';
import { quizStorage } from '@/storage/quiz-storage';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { QuizQuestion } from '@/types/quiz';

interface HandleOptionToggleParams {
  isChecked: boolean;
  answer: string;
}

interface Props {
  nextPageUrl: string;
  currentStep: number;
  question: QuizQuestion;
}

export const useMultipleSelection = ({
  nextPageUrl,
  currentStep,
  question,
}: Props) => {
  const t = useTranslations('Quiz');
  const router = useRouter();

  const [
    selectedAnswers,
    setSelectedAnswers,
  ] = React.useState<string[]>([]);

  React.useEffect(() => {
    const savedQuestion = quizStorage.getAll()[question.id];

    const answers = savedQuestion?.answer;

    const initialAnswers = Array.isArray(answers) ? answers : [];

    setSelectedAnswers(initialAnswers);
  }, [question.id]);

  const handleOptionToggle = ({
    isChecked,
    answer,
  }: HandleOptionToggleParams) => {
    setSelectedAnswers((prev) => {
      const nextValue = isChecked
        ? prev.filter((a) => a !== answer)
        : [...prev, answer];

      quizStorage.updateAnswer(question.id, {
        number: currentStep,
        title: t(question.title.translationKey),
        type: question.type,
        answer: nextValue,
      });

      return nextValue;
    });
  };

  const handleNextButtonClick = () => {
    quizStorage.updateAnswer(question.id, {
      number: currentStep,
      title: t(question.title.translationKey),
      type: question.type,
      answer: selectedAnswers,
    });

    router.push(nextPageUrl);
  };

  return {
    selectedAnswers,
    handleOptionToggle,
    handleNextButtonClick,
  };
};
