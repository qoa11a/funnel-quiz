import { routing } from '@/i18n/routing';
import { QuizTranslationKey } from '@/types/translations';
import { QuestionId } from '@/enums/quiz/question-id';
import {
  AgeGroupOptionId, FavoriteTopicsOptionId,
  GenderOptionId, HateInBooksOptionId,
  LanguageOptionId,
} from '@/enums/quiz/option-id';

/* ---- General ---- */
export enum QuestionType {
  LanguageSelection = 'LanguageSelection',
  SingleSelection = 'SingleSelection',
  SingleSelectionWithImage = 'SingleSelectionWithImage',
  MultipleSelection = 'MultipleSelection',
  BubbleSelection = 'BubbleSelection',
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
  subtitle?: Subtitle;
}

/* ---- Language selection question ---- */
interface LanguageSelectionOption {
  id: LanguageOptionId;
  locale: (typeof routing.locales)[number];
  translationKey: QuizTranslationKey;
}

export interface LanguageSelectionQuestion extends BaseQuestion {
  type: QuestionType.LanguageSelection;
  languages: LanguageSelectionOption[];
}

/* ---- Single selection with image question ---- */
type SingleSelectionWithImageOptionId = GenderOptionId;

interface SingleSelectionWithImageOption {
  id: SingleSelectionWithImageOptionId;
  imageSrc: string;
  translationKey: QuizTranslationKey;
}

export interface SingleSelectionWithImageQuestion extends BaseQuestion {
  type: QuestionType.SingleSelectionWithImage;
  options: SingleSelectionWithImageOption[];
}

/* ---- Single selection question ---- */
type SingleSelectionOptionId = AgeGroupOptionId;

interface SingleSelectionOption {
  id: SingleSelectionOptionId;
  translationKey: QuizTranslationKey;
}

export interface SingleSelectionQuestion extends BaseQuestion {
  type: QuestionType.SingleSelection;
  options: SingleSelectionOption[];
}

/* ---- Multiple selection question ---- */
type MultipleSelectionOptionId = HateInBooksOptionId;

interface MultipleSelectionOption {
  id: MultipleSelectionOptionId;
  translationKey: QuizTranslationKey;
}

export interface MultipleSelectionQuestion extends BaseQuestion {
  type: QuestionType.MultipleSelection;
  options: MultipleSelectionOption[];
  maxSelections?: number;
}

/* ---- Bubble selection question ---- */
type BubbleSelectionOptionId = FavoriteTopicsOptionId;

interface BubbleSelectionOption {
  id: BubbleSelectionOptionId;
  imageSrc: string;
  translationKey: QuizTranslationKey;
}

export interface BubbleSelectionQuestion extends BaseQuestion {
  type: QuestionType.BubbleSelection;
  options: BubbleSelectionOption[];
  maxSelections?: number;
}

/* ---- General ---- */
export type QuizQuestion =
  | LanguageSelectionQuestion
  | SingleSelectionWithImageQuestion
  | SingleSelectionQuestion
  | MultipleSelectionQuestion
  | BubbleSelectionQuestion;

export type QuizConfig = QuizQuestion[];
