import QuizPageContent from '@/components/quiz/quiz-page-content';
import { QUIZ_CONFIG } from '@/data/quiz/quiz-config';

interface Props {
  params: Promise<{ step: string }>;
}

export default async function QuizPage({ params }: Props) {
  const { step } = await params;

  return (
    <QuizPageContent step={step} quizConfig={QUIZ_CONFIG} />
  );
}
