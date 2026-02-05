import { QuestionType, QuizQuestion } from '@/types/quiz';
import { useTranslations } from 'next-intl';
import { Headline, TitleH3 } from '@/components/ui/typography';
import LanguageSelect from '@/components/quiz/ui/options/language-select';
import SingleSelectWithImage
  from '@/components/quiz/ui/options/single-select-with-image';
import SingleSelect from '@/components/quiz/ui/options/single-select';
import MultipleSelect from '@/components/quiz/ui/options/multiple-select';
import BubbleSelect from '@/components/quiz/ui/options/bubble-select';

interface Props {
  currentStep: number;
  currentQuestion: QuizQuestion;
  nextPageUrl: string;
}

export default function QuizRenderer({
  currentStep,
  currentQuestion,
  nextPageUrl,
}: Props) {
  const t = useTranslations('Quiz');

  return (
    <main className="flex-1 min-h-0 mt-12 flex flex-col gap-6">
      <div className="px-6">
        <TitleH3 className="text-center">
          {currentQuestion.title.richTranslationKey
            ? t.rich(currentQuestion.title.richTranslationKey, {
              accent: (chunks) => (
                <span className="text-accent">{chunks}</span>
              ),
            })
            : t(currentQuestion.title.translationKey)
          }
        </TitleH3>

        {currentQuestion.subtitle?.translationKey && (
          <Headline className="text-center mt-4">
            {t(currentQuestion.subtitle.translationKey)}
          </Headline>
        )}
      </div>

      {currentQuestion.type === QuestionType.LanguageSelection && (
        <LanguageSelect
          currentStep={currentStep}
          question={currentQuestion}
          nextPageUrl={nextPageUrl}
        />
      )}

      {currentQuestion.type === QuestionType.SingleSelectionWithImage && (
        <SingleSelectWithImage
          currentStep={currentStep}
          question={currentQuestion}
          nextPageUrl={nextPageUrl}
        />
      )}

      {currentQuestion.type === QuestionType.SingleSelection && (
        <SingleSelect
          currentStep={currentStep}
          question={currentQuestion}
          nextPageUrl={nextPageUrl}
        />
      )}

      {currentQuestion.type === QuestionType.MultipleSelection && (
        <MultipleSelect
          currentStep={currentStep}
          question={currentQuestion}
          nextPageUrl={nextPageUrl}
        />
      )}

      {currentQuestion.type === QuestionType.BubbleSelection && (
        <BubbleSelect
          currentStep={currentStep}
          question={currentQuestion}
          nextPageUrl={nextPageUrl}
          maxSelections={currentQuestion.maxSelections}
        />
      )}
    </main>
  );
}
