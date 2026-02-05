import { QuestionType } from '@/types/quiz';
import { isBrowser } from '@/utils/is-browser';
import { LocalStorageKey } from '@/constants/local-storage-key';

export interface QuizAnswerRecord {
  number: number;
  title: string;
  type: QuestionType;
  answer: string | string[];
  updatedAt: string;
}

export interface QuizAnswers {
  [questionId: string]: QuizAnswerRecord;
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
    questionId: string,
    record: Omit<QuizAnswerRecord, 'updatedAt'>,
  ) {
    if (!isBrowser()) return;

    const allAnswers = this.getAll();

    allAnswers[questionId] = {
      ...allAnswers[questionId],
      ...record,
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
