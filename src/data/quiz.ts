import { QuestionType, QuizQuestion } from '@/types/quiz';

/*
 * Todo: Discuss the possibility to build a quiz builder tool rather than
 *  hardcoding quizzes.
 */

// Helper function to ensure type safety when creating questions
function createQuestion<T extends QuizQuestion>(question: T): T {
  return question;
}

export const QUIZ_CONFIG = [
  createQuestion({
    id: 'language',
    type: QuestionType.LanguageSelection,
    title: {
      translationKey: 'language.title',
    },
    subtitle: {
      translationKey: 'language.subtitle',
    },
    languages: [
      { code: 'en', labelTranslationKey: 'language.english' },
      { code: 'fr', labelTranslationKey: 'language.french' },
      { code: 'de', labelTranslationKey: 'language.german' },
      { code: 'es', labelTranslationKey: 'language.spanish' },
    ],
  }),
  createQuestion({
    id: 'gender',
    type: QuestionType.SingleSelectionWithImage,
    title: {
      translationKey: 'gender.title',
    },
    subtitle: {
      translationKey: 'gender.subtitle',
    },
    options: [
      {
        labelTranslationKey: 'gender.female',
        imageSrc: '/images/quiz/gender/female.png',
      },
      {
        labelTranslationKey: 'gender.male',
        imageSrc: '/images/quiz/gender/male.png',
      },
      {
        labelTranslationKey: 'gender.other',
        imageSrc: '/images/quiz/gender/other.png',
      },
    ],
  }),
  createQuestion({
    id: 'age',
    type: QuestionType.SingleSelection,
    title: {
      translationKey: 'age.title',
      type: 'large',
    },
    optionsTranslationKeys: [
      'age.option-1',
      'age.option-2',
      'age.option-3',
      'age.option-4',
    ],
  }),
  createQuestion({
    id: 'hate-in-books',
    type: QuestionType.MultipleSelection,
    title: {
      translationKey: 'hate-in-book.title-plain',
      richTranslationKey: 'hate-in-book.title-rich',
      type: 'large',
    },
    optionsTranslationKeys: [
      'hate-in-book.option-1',
      'hate-in-book.option-2',
      'hate-in-book.option-3',
      'hate-in-book.option-4',
    ],
  }),
  createQuestion({
    id: 'favorite-topics',
    type: QuestionType.BubbleSelection,
    title: {
      translationKey: 'favorite-topic.title',
    },
    subtitle: {
      translationKey: 'favorite-topic.subtitle',
    },
    maxSelections: 3,
    options: [
      {
        labelTranslationKey: 'favorite-topic.option-1',
        imageSrc: '/images/quiz/favorite-topics/werewolf.png',
      },
      {
        labelTranslationKey: 'favorite-topic.option-3',
        imageSrc: '/images/quiz/favorite-topics/action.png',
      },
      {
        labelTranslationKey: 'favorite-topic.option-5',
        imageSrc: '/images/quiz/favorite-topics/royal-obsession.png',
      },
      {
        labelTranslationKey: 'favorite-topic.option-7',
        imageSrc: '/images/quiz/favorite-topics/billionaire.png',
      },
      {
        labelTranslationKey: 'favorite-topic.option-2',
        imageSrc: '/images/quiz/favorite-topics/romance.png',
      },
      {
        labelTranslationKey: 'favorite-topic.option-4',
        imageSrc: '/images/quiz/favorite-topics/young-adult.png',
      },
      {
        labelTranslationKey: 'favorite-topic.option-6',
        imageSrc: '/images/quiz/favorite-topics/bad-boy.png',
      },
    ],
  }),
];
