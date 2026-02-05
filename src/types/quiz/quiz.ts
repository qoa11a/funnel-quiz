import { routing } from '@/i18n/routing';
import { QuizTranslationKey } from '@/types/translations';
import { QuestionId } from '@/enums/quiz/question-id';
import {
  AgeGroupOptionId,
  FavoriteTopicsOptionId,
  GenderOptionId,
  HateInBooksOptionId,
  LanguageOptionId, OptionId,
} from '@/enums/quiz/option-id';

/* ---- General ---- */
export enum QuestionType {
  LanguageSelection = 'LanguageSelection',
  SingleSelection = 'SingleSelection',
  SingleSelectionWithImage = 'SingleSelectionWithImage',
  MultipleSelection = 'MultipleSelection',
  BubbleSelection = 'BubbleSelection',
}

export enum OptionsType {
  Static = 'Static',
  Dependant = 'Dependant',
}

type StaticOptionsQuestion<O> = {
  optionsType: OptionsType.Static;
  options: O;
};

/*
 * Todo: Ask PMs if we plan to add complex dependant rules. If so, implement
 *  a simple query language to define the rules (AND, OR, NOT, etc.).
 */

type DependantOptionsQuestion<O> = {
  optionsType: OptionsType.Dependant;
  dependantQuestionId: QuestionId;
  fallbackOptions: O;
  rules: Array<{
    dependantOptionIds: OptionId[];
    options: O;
  }>;
};

type OptionsQuestion<O> =
  StaticOptionsQuestion<O>
  | DependantOptionsQuestion<O>;

interface Title {
  translationKey: QuizTranslationKey;
  richTranslationKey?: QuizTranslationKey;
}

interface Subtitle {
  translationKey: QuizTranslationKey;
}

interface BaseQuestion {
  id: QuestionId;
  title: Title;
  type: QuestionType;
  optionsType: OptionsType;
  subtitle?: Subtitle;
}

/* ---- Language selection question ---- */
interface LanguageSelectionOption {
  id: LanguageOptionId;
  locale: (typeof routing.locales)[number];
  translationKey: QuizTranslationKey;
}

interface LanguageSelectionQuestionCore extends BaseQuestion {
  type: QuestionType.LanguageSelection;
}

export type LanguageSelectionQuestion =
  LanguageSelectionQuestionCore & OptionsQuestion<LanguageSelectionOption[]>;

/* ---- Single selection with image question ---- */
type SingleSelectionWithImageOptionId = GenderOptionId;

interface SingleSelectionWithImageOption {
  id: SingleSelectionWithImageOptionId;
  imageSrc: string;
  translationKey: QuizTranslationKey;
}

interface SingleSelectionWithImageQuestionCore extends BaseQuestion {
  type: QuestionType.SingleSelectionWithImage;
}

export type SingleSelectionWithImageQuestion =
  SingleSelectionWithImageQuestionCore
  & OptionsQuestion<SingleSelectionWithImageOption[]>;

/* ---- Single selection question ---- */
type SingleSelectionOptionId = AgeGroupOptionId;

interface SingleSelectionOption {
  id: SingleSelectionOptionId;
  translationKey: QuizTranslationKey;
}

interface SingleSelectionQuestionCore extends BaseQuestion {
  type: QuestionType.SingleSelection;
}

export type SingleSelectionQuestion =
  SingleSelectionQuestionCore & OptionsQuestion<SingleSelectionOption[]>;

/* ---- Multiple selection question ---- */
type MultipleSelectionOptionId = HateInBooksOptionId;

interface MultipleSelectionOption {
  id: MultipleSelectionOptionId;
  translationKey: QuizTranslationKey;
}

interface MultipleSelectionQuestionCore extends BaseQuestion {
  type: QuestionType.MultipleSelection;
  maxSelections?: number;
}

export type MultipleSelectionQuestion =
  MultipleSelectionQuestionCore & OptionsQuestion<MultipleSelectionOption[]>;

/* ---- Bubble selection question ---- */
type BubbleSelectionOptionId = FavoriteTopicsOptionId;

export interface BubbleSelectionOption {
  id: BubbleSelectionOptionId;
  imageSrc: string;
  translationKey: QuizTranslationKey;
}

interface BubbleSelectionQuestionCore extends BaseQuestion {
  type: QuestionType.BubbleSelection;
  maxSelections?: number;
}

export type BubbleSelectionQuestion =
  BubbleSelectionQuestionCore & OptionsQuestion<BubbleSelectionOption[]>;

/* ---- General ---- */
export type QuizQuestion =
  | LanguageSelectionQuestion
  | SingleSelectionWithImageQuestion
  | SingleSelectionQuestion
  | MultipleSelectionQuestion
  | BubbleSelectionQuestion;

export type QuizConfig = QuizQuestion[];
