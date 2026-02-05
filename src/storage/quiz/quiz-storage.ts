import { isBrowser } from '@/utils/is-browser';
import { LocalStorageKey } from '@/enums/local-storage-key';
import { OptionId } from '@/enums/quiz/option-id';
import { QuestionId } from '@/enums/quiz/question-id';

export interface QuizAnswerRecord {
  answerIds: OptionId[];
  updatedAt: string;
}

export type QuizAnswers = {
  [Q in QuestionId]?: QuizAnswerRecord;
}

/*
 * Todo: Integrate Sentry or another error tracking service to log errors.
 */

function safeParseQuizAnswers(raw: string | null): QuizAnswers | null {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);

    if (typeof parsed === 'object' && parsed !== null) {
      return parsed as QuizAnswers;
    }

    return null;
  } catch {
    return null;
  }
}

export const quizStorage = {
  getAll(): QuizAnswers {
    if (!isBrowser()) return {};

    const raw = localStorage.getItem(LocalStorageKey.QuizAnswers);

    return safeParseQuizAnswers(raw) || {};
  },

  updateAnswer(
    questionId: QuestionId,
    answerIds: QuizAnswerRecord['answerIds'],
  ) {
    if (!isBrowser()) return;

    const allAnswers = this.getAll();

    allAnswers[questionId] = {
      ...allAnswers[questionId],
      answerIds,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(
        LocalStorageKey.QuizAnswers,
        JSON.stringify(allAnswers),
      );
    } catch {
      // Do nothing
    }
  },

  clear() {
    if (!isBrowser()) return;

    try {
      localStorage.removeItem(LocalStorageKey.QuizAnswers);
    } catch {
      // Do nothing
    }
  },
};
