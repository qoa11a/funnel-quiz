'use client';

import QuizHeader from '@/components/quiz/ui/quiz-header';
import QuizRenderer from '@/components/quiz/ui/question-renderer';
import { QuizConfig } from '@/types/quiz/quiz';

interface Props {
  step: string;
  quizConfig: QuizConfig;
}

export default function QuizPageContent({ step, quizConfig }: Props) {
  const currentStep = Number(step);
  const totalSteps = quizConfig.length;
  const canGoBack = currentStep > 1;

  const currentQuestion = quizConfig[currentStep - 1];

  const nextPageUrl = currentStep >= totalSteps
    ? '/loader'
    : `/quiz/${currentStep + 1}`;

  return (
    <div className="max-w-2xl mx-auto w-full flex flex-col min-h-0 flex-1 py-6">
      <QuizHeader
        currentStep={currentStep}
        totalSteps={totalSteps}
        canGoBack={canGoBack}
      />

      <QuizRenderer
        currentQuestion={currentQuestion}
        nextPageUrl={nextPageUrl}
      />
    </div>
  );
}
