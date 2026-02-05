import {
  OptionsType,
  QuizQuestion,
} from '@/types/quiz/quiz';
import { quizStorage } from '@/storage/quiz/quiz-storage';

interface CalculateProgressWidthPercentParams {
  currentStep: number;
  totalSteps: number;
  maxVisualProgress?: number;
}

export function calculateProgressWidthPercent({
  currentStep,
  totalSteps,
  maxVisualProgress = 0.96,
}: CalculateProgressWidthPercentParams) {
  if (totalSteps <= 0) return 0;

  const safeStep = Math.min(Math.max(currentStep, 0), totalSteps);

  const progress = safeStep / totalSteps;

  return progress * maxVisualProgress * 100;
}

type ResolvedOptions<Q> =
  Q extends { optionsType: OptionsType.Static; options: infer O }
    ? O
    : Q extends { optionsType: OptionsType.Dependant; fallbackOptions: infer F }
      ? F
      : never;

export function resolveOptions<Q extends QuizQuestion>(question: Q): ResolvedOptions<Q> {
  if (question.optionsType === OptionsType.Static) {
    return question.options as ResolvedOptions<Q>;
  }

  const dependantQuestionId = question.dependantQuestionId;

  const savedAnswers = quizStorage.getAll()[dependantQuestionId];

  if (!savedAnswers) {
    console.error(`No saved answers found for dependant question ID: ${dependantQuestionId}`);

    return question.fallbackOptions as ResolvedOptions<Q>;
  }

  const savedAnswerIds = savedAnswers.answerIds;

  for (const rule of question.rules) {
    for (const id of savedAnswerIds) {
      if (rule.dependantOptionIds.includes(id)) {
        return rule.options as ResolvedOptions<Q>;
      }
    }
  }

  return question.fallbackOptions as ResolvedOptions<Q>;
}
