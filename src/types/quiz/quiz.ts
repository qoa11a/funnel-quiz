import { routing } from '@/i18n/routing';
import { QuizTranslationKey } from '@/types/translations';

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
  type?: 'regular' | 'large';
}

// Later we may add support for different subtitle types
interface Subtitle {
  translationKey: QuizTranslationKey;
}

interface BaseQuestion {
  id: string;
  title: Title;
  subtitle?: Subtitle;
}

export interface LanguageOption {
  code: (typeof routing.locales)[number];
  labelTranslationKey: QuizTranslationKey;
}

export interface LanguageSelectionQuestion extends BaseQuestion {
  type: QuestionType.LanguageSelection;
  languages: LanguageOption[];
}

export interface SingleSelectionWithImageOption {
  imageSrc: string;
  labelTranslationKey: QuizTranslationKey;
}

export interface SingleSelectionWithImageQuestion extends BaseQuestion {
  type: QuestionType.SingleSelectionWithImage;
  options: SingleSelectionWithImageOption[];
}

export interface SingleSelectionQuestion extends BaseQuestion {
  type: QuestionType.SingleSelection;
  optionsTranslationKeys: QuizTranslationKey[];
}

export interface MultipleSelectionQuestion extends BaseQuestion {
  type: QuestionType.MultipleSelection;
  optionsTranslationKeys: QuizTranslationKey[];
  maxSelections?: number;
}

interface BubbleOption {
  imageSrc: string;
  labelTranslationKey: QuizTranslationKey;
}

export interface BubbleSelectionQuestion extends BaseQuestion {
  type: QuestionType.BubbleSelection;
  options: BubbleOption[];
  maxSelections?: number;
}

export type QuizQuestion =
  | LanguageSelectionQuestion
  | SingleSelectionWithImageQuestion
  | SingleSelectionQuestion
  | MultipleSelectionQuestion
  | BubbleSelectionQuestion;

export type QuizConfig = QuizQuestion[];
