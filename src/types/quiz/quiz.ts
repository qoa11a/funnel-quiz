import { routing } from '@/i18n/routing';
import { QuizTranslationKey } from '@/types/translations';
import { QuestionId } from '@/enums/quiz/question-id';
import {
  AgeGroupOptionId, FavoriteTopicsOptionId,
  GenderOptionId, HateInBooksOptionId,
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

interface StaticLanguageSelectionQuestion extends BaseQuestion {
  type: QuestionType.LanguageSelection;
  optionsType: OptionsType.Static;
  options: LanguageSelectionOption[];
}

interface DependantLanguageSelectionQuestion extends BaseQuestion {
  type: QuestionType.LanguageSelection;
  optionsType: OptionsType.Dependant;
  dependantQuestionId: QuestionId;
  rules: {
    dependantOptionIds: OptionId[];
    options: LanguageSelectionOption[];
  }[];
  fallbackOptions: LanguageSelectionOption[];
}

export type LanguageSelectionQuestion =
  | StaticLanguageSelectionQuestion
  | DependantLanguageSelectionQuestion;

/* ---- Single selection with image question ---- */
type SingleSelectionWithImageOptionId = GenderOptionId;

interface SingleSelectionWithImageOption {
  id: SingleSelectionWithImageOptionId;
  imageSrc: string;
  translationKey: QuizTranslationKey;
}

interface StaticSingleSelectionWithImageQuestion extends BaseQuestion {
  type: QuestionType.SingleSelectionWithImage;
  optionsType: OptionsType.Static;
  options: SingleSelectionWithImageOption[];
}

interface DependantSingleSelectionWithImageQuestion extends BaseQuestion {
  type: QuestionType.SingleSelectionWithImage;
  optionsType: OptionsType.Dependant;
  dependantQuestionId: QuestionId;
  rules: {
    dependantOptionIds: OptionId[];
    options: SingleSelectionWithImageOption[];
  }[];
  fallbackOptions: SingleSelectionWithImageOption[];
}

export type SingleSelectionWithImageQuestion =
  | StaticSingleSelectionWithImageQuestion
  | DependantSingleSelectionWithImageQuestion;

/* ---- Single selection question ---- */
type SingleSelectionOptionId = AgeGroupOptionId;

interface SingleSelectionOption {
  id: SingleSelectionOptionId;
  translationKey: QuizTranslationKey;
}

interface StaticSingleSelectionQuestion extends BaseQuestion {
  type: QuestionType.SingleSelection;
  optionsType: OptionsType.Static;
  options: SingleSelectionOption[];
}

interface DependantSingleSelectionQuestion extends BaseQuestion {
  type: QuestionType.SingleSelection;
  optionsType: OptionsType.Dependant;
  dependantQuestionId: QuestionId;
  rules: {
    dependantOptionIds: OptionId[];
    options: SingleSelectionOption[];
  }[];
  fallbackOptions: SingleSelectionOption[];
}

export type SingleSelectionQuestion =
  | StaticSingleSelectionQuestion
  | DependantSingleSelectionQuestion;

/* ---- Multiple selection question ---- */
type MultipleSelectionOptionId = HateInBooksOptionId;

interface MultipleSelectionOption {
  id: MultipleSelectionOptionId;
  translationKey: QuizTranslationKey;
}

interface StaticMultipleSelectionQuestion extends BaseQuestion {
  type: QuestionType.MultipleSelection;
  optionsType: OptionsType.Static;
  options: MultipleSelectionOption[];
  maxSelections?: number;
}

interface DependantMultipleSelectionQuestion extends BaseQuestion {
  type: QuestionType.MultipleSelection;
  optionsType: OptionsType.Dependant;
  dependantQuestionId: QuestionId;
  rules: {
    dependantOptionIds: OptionId[];
    options: MultipleSelectionOption[];
  }[];
  fallbackOptions: MultipleSelectionOption[];
  maxSelections?: number;
}

export type MultipleSelectionQuestion =
  | StaticMultipleSelectionQuestion
  | DependantMultipleSelectionQuestion;

/* ---- Bubble selection question ---- */
type BubbleSelectionOptionId = FavoriteTopicsOptionId;

export interface BubbleSelectionOption {
  id: BubbleSelectionOptionId;
  imageSrc: string;
  translationKey: QuizTranslationKey;
}

interface StaticBubbleSelectionQuestion extends BaseQuestion {
  type: QuestionType.BubbleSelection;
  optionsType: OptionsType.Static;
  options: BubbleSelectionOption[];
  maxSelections?: number;
}

/*
 * Todo: Ask PMs if we plan to add complex dependant rules. If so, implement
 *  a simple query language to define the rules (AND, OR, NOT, etc.).
 */

interface DependantBubbleSelectionQuestion extends BaseQuestion {
  type: QuestionType.BubbleSelection;
  optionsType: OptionsType.Dependant;
  dependantQuestionId: QuestionId;
  rules: {
    dependantOptionIds: OptionId[];
    options: BubbleSelectionOption[];
  }[];
  fallbackOptions: BubbleSelectionOption[];
  maxSelections?: number;
}

export type BubbleSelectionQuestion =
  | StaticBubbleSelectionQuestion
  | DependantBubbleSelectionQuestion;

/* ---- General ---- */
export type QuizQuestion =
  | LanguageSelectionQuestion
  | SingleSelectionWithImageQuestion
  | SingleSelectionQuestion
  | MultipleSelectionQuestion
  | BubbleSelectionQuestion;

export type QuizConfig = QuizQuestion[];
