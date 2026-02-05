import ThankYouPageContent from '@/components/thank-you/thank-you-page-content';
import { QUIZ_CONFIG } from '@/data/quiz/quiz-config';

export default function ThankYouPage() {
  return <ThankYouPageContent quizConfig={QUIZ_CONFIG} />;
}
