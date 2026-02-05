import Quiz from '@/components/quiz/quiz';
import { QUIZ_CONFIG } from '@/data/quiz/quiz-config';

interface Props {
  params: Promise<{ step: string }>;
}

export default async function Home({ params }: Props) {
  const { step } = await params;

  return (
    <Quiz step={step} quizConfig={QUIZ_CONFIG} />
  );
}
