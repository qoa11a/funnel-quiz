import { OptionsType, QuestionType, QuizQuestion } from '@/types/quiz/quiz';
import { QuestionId } from '@/enums/quiz/question-id';
import {
  AgeGroupOptionId,
  FavoriteTopicsOptionId,
  GenderOptionId,
  HateInBooksOptionId,
  LanguageOptionId,
} from '@/enums/quiz/option-id';

/*
 * Todo: Discuss the possibility to build a quiz builder tool rather than
 *  hardcoding quizzes.
 */

// Helper function to ensure type safety when creating questions
function createQuestion<Q extends QuizQuestion>(question: Q): Q {
  return question;
}

export const QUIZ_CONFIG = [
  createQuestion({
    id: QuestionId.Language,
    type: QuestionType.LanguageSelection,
    optionsType: OptionsType.Static,
    title: {
      translationKey: 'language.title',
    },
    subtitle: {
      translationKey: 'language.subtitle',
    },
    options: [
      {
        id: LanguageOptionId.English,
        locale: 'en',
        translationKey: 'language.english',
      },
      {
        id: LanguageOptionId.French,
        locale: 'fr',
        translationKey: 'language.french',
      },
      {
        id: LanguageOptionId.German,
        locale: 'de',
        translationKey: 'language.german',
      },
      {
        id: LanguageOptionId.Spanish,
        locale: 'es',
        translationKey: 'language.spanish',
      },
    ],
  }),

  createQuestion({
    id: QuestionId.Gender,
    type: QuestionType.SingleSelectionWithImage,
    optionsType: OptionsType.Static,
    title: {
      translationKey: 'gender.title',
    },
    subtitle: {
      translationKey: 'gender.subtitle',
    },
    options: [
      {
        id: GenderOptionId.Female,
        translationKey: 'gender.female',
        imageSrc: '/images/quiz/gender/female.png',
      },
      {
        id: GenderOptionId.Male,
        translationKey: 'gender.male',
        imageSrc: '/images/quiz/gender/male.png',
      },
      {
        id: GenderOptionId.Other,
        translationKey: 'gender.other',
        imageSrc: '/images/quiz/gender/other.png',
      },
    ],
  }),

  createQuestion({
    id: QuestionId.AgeGroup,
    type: QuestionType.SingleSelection,
    optionsType: OptionsType.Static,
    title: {
      translationKey: 'age.title',
    },
    options: [
      {
        id: AgeGroupOptionId.Age18to29,
        translationKey: 'age.option-1',
      },
      {
        id: AgeGroupOptionId.Age30to39,
        translationKey: 'age.option-2',
      },
      {
        id: AgeGroupOptionId.Age40to49,
        translationKey: 'age.option-3',
      },
      {
        id: AgeGroupOptionId.Age50plus,
        translationKey: 'age.option-4',
      },
    ],
  }),

  createQuestion({
    id: QuestionId.HateInBooks,
    type: QuestionType.MultipleSelection,
    optionsType: OptionsType.Static,
    title: {
      translationKey: 'hate-in-book.title-plain',
      richTranslationKey: 'hate-in-book.title-rich',
    },
    options: [
      {
        id: HateInBooksOptionId.LackOfLogic,
        translationKey: 'hate-in-book.option-1',
      },
      {
        id: HateInBooksOptionId.SlowSpeed,
        translationKey: 'hate-in-book.option-2',
      },
      {
        id: HateInBooksOptionId.LackOfHumor,
        translationKey: 'hate-in-book.option-3',
      },
      {
        id: HateInBooksOptionId.GenericEnding,
        translationKey: 'hate-in-book.option-4',
      },
    ],
  }),

  createQuestion({
    id: QuestionId.FavoriteTopics,
    type: QuestionType.BubbleSelection,
    optionsType: OptionsType.Dependant,
    title: {
      translationKey: 'favorite-topic.title',
    },
    subtitle: {
      translationKey: 'favorite-topic.subtitle',
    },
    maxSelections: 3,
    dependantQuestionId: QuestionId.AgeGroup,
    rules: [
      {
        dependantOptionIds: [AgeGroupOptionId.Age40to49, AgeGroupOptionId.Age50plus],
        options: [
          {
            id: FavoriteTopicsOptionId.Werewolf,
            translationKey: 'favorite-topic.option-1',
            imageSrc: '/images/quiz/favorite-topics/werewolf.png',
          },
          {
            id: FavoriteTopicsOptionId.Action,
            translationKey: 'favorite-topic.option-3',
            imageSrc: '/images/quiz/favorite-topics/action.png',
          },
          {
            id: FavoriteTopicsOptionId.RoyalObsession,
            translationKey: 'favorite-topic.option-5',
            imageSrc: '/images/quiz/favorite-topics/royal-obsession.png',
          },
          {
            id: FavoriteTopicsOptionId.Billionaire,
            translationKey: 'favorite-topic.option-7',
            imageSrc: '/images/quiz/favorite-topics/billionaire.png',
          },
          {
            id: FavoriteTopicsOptionId.Romance,
            translationKey: 'favorite-topic.option-2',
            imageSrc: '/images/quiz/favorite-topics/romance.png',
          },
          {
            id: FavoriteTopicsOptionId.YoungAdult,
            translationKey: 'favorite-topic.option-4',
            imageSrc: '/images/quiz/favorite-topics/young-adult.png',
          },
          {
            id: FavoriteTopicsOptionId.BadBoy,
            translationKey: 'favorite-topic.option-6',
            imageSrc: '/images/quiz/favorite-topics/bad-boy.png',
          },
        ],
      },
    ],
    fallbackOptions: [
      {
        id: FavoriteTopicsOptionId.Wolves,
        translationKey: 'favorite-topic.option-8',
        imageSrc: '/images/quiz/favorite-topics/werewolf.png',
      },
      {
        id: FavoriteTopicsOptionId.Dances,
        translationKey: 'favorite-topic.option-10',
        imageSrc: '/images/quiz/favorite-topics/action.png',
      },
      {
        id: FavoriteTopicsOptionId.Politics,
        translationKey: 'favorite-topic.option-12',
        imageSrc: '/images/quiz/favorite-topics/royal-obsession.png',
      },
      {
        id: FavoriteTopicsOptionId.Finance,
        translationKey: 'favorite-topic.option-14',
        imageSrc: '/images/quiz/favorite-topics/billionaire.png',
      },
      {
        id: FavoriteTopicsOptionId.Love,
        translationKey: 'favorite-topic.option-9',
        imageSrc: '/images/quiz/favorite-topics/romance.png',
      },
      {
        id: FavoriteTopicsOptionId.GoodGirl,
        translationKey: 'favorite-topic.option-11',
        imageSrc: '/images/quiz/favorite-topics/young-adult.png',
      },
      {
        id: FavoriteTopicsOptionId.Cowboys,
        translationKey: 'favorite-topic.option-13',
        imageSrc: '/images/quiz/favorite-topics/bad-boy.png',
      },
    ],
  }),
];
