import React from 'react';
import { quizStorage } from '@/storage/quiz/quiz-storage';
import { useRouter } from '@/i18n/navigation';
import { QuizQuestion } from '@/types/quiz/quiz';
import { OptionId } from '@/enums/quiz/option-id';

interface HandleOptionToggleParams {
  isChecked: boolean;
  id: OptionId;
}

interface Props {
  nextPageUrl: string;
  question: QuizQuestion;
}

export const useMultipleSelection = ({
  nextPageUrl,
  question,
}: Props) => {
  const router = useRouter();

  const [
    selectedAnswersIds,
    setSelectedAnswersIds,
  ] = React.useState<OptionId[]>([]);

  React.useEffect(() => {
    const savedQuestion = quizStorage.getAll()[question.id];

    const answers = savedQuestion?.answerIds;

    const initialAnswers = Array.isArray(answers) ? answers : [];

    setSelectedAnswersIds(initialAnswers);
  }, [question.id]);

  const handleOptionToggle = ({
    isChecked,
    id,
  }: HandleOptionToggleParams) => {
    setSelectedAnswersIds((prev) => {
      const nextValue = isChecked
        ? prev.filter((a) => a !== id)
        : [...prev, id];

      quizStorage.updateAnswer(question.id, nextValue);

      return nextValue;
    });
  };

  const handleNextButtonClick = () => {
    quizStorage.updateAnswer(question.id, selectedAnswersIds);

    router.push(nextPageUrl);
  };

  return {
    selectedAnswersIds,
    handleOptionToggle,
    handleNextButtonClick,
  };
};
