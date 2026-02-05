import { quizStorage } from '@/storage/quiz/quiz-storage';
import { OptionsType, QuizConfig, QuizQuestion } from '@/types/quiz/quiz';
import { useTranslations } from 'next-intl';
import { OptionId } from '@/enums/quiz/option-id';
import { LocalStorageKey } from '@/enums/local-storage-key';

type CsvRow = Array<string | number | boolean | null | undefined>;

function escapeCsvCell(value: CsvRow[number]) {
  const s = value ? String(value) : '';

  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }

  return s;
}

function rowsToCsv(rows: CsvRow[]) {
  return rows
    .map((row) => row.map(escapeCsvCell).join(','))
    .join('\r\n');
}

interface DownloadTextFileParams {
  content: string;
  filename: string;
  mimeType: string;
}

function downloadTextFile({
  content,
  filename,
  mimeType,
}: DownloadTextFileParams) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

interface ExportRow {
  order: number;
  title: string;
  type: string;
  answer: string;
}

interface GetAnswersAsTranslationKeyParams {
  answerIds: OptionId[];
  questionConfig: QuizQuestion;
}

function getAnswersAsTranslationKeys({
  answerIds,
  questionConfig,
}: GetAnswersAsTranslationKeyParams) {
  if (questionConfig.optionsType === OptionsType.Static) {
    return answerIds.map((answerId) => {
      const option = questionConfig.options
        .find((option) => option.id === answerId);

      return option?.translationKey;
    });
  }

  return answerIds.map((answerId) => {
    const optionFromFallback = questionConfig.fallbackOptions
      .find((option) => option.id === answerId);

    if (optionFromFallback) return optionFromFallback.translationKey;

    const allOptions = questionConfig.rules
      .map(({ options }) => options);

    return allOptions.map((options) => {
      const option = options
        .find(({ id }) => id === answerId);

      return option?.translationKey;
    });
  });
}

interface ExportQuizAnswersAsCsvParams {
  quizConfig: QuizConfig;
  tQuiz: ReturnType<typeof useTranslations<'Quiz'>>;
  tEmail: ReturnType<typeof useTranslations<'Email'>>;
  filename?: string;
}

export function exportQuizAnswersAsCsv({
  quizConfig,
  tQuiz,
  tEmail,
  filename = 'quiz-answers.csv',
}: ExportQuizAnswersAsCsvParams) {
  const rowsToExport: ExportRow[] = [];
  const quizAnswers = quizStorage.getAll();

  for (const [questionId, answerRecord] of Object.entries(quizAnswers)) {
    const questionConfig = quizConfig.find((q) => q.id === questionId);

    if (!questionConfig) return;

    const answerTranslationKeys = getAnswersAsTranslationKeys({
      answerIds: answerRecord.answerIds,
      questionConfig,
    });

    const answers = answerTranslationKeys
      .filter((translationKey) => typeof translationKey === 'string')
      .map((translationKey) => tQuiz(translationKey));

    const order = quizConfig.findIndex((q) => q.id === questionId) + 1;
    const title = tQuiz(questionConfig.title.translationKey);
    const type = questionConfig.type;
    const answer = answers.join(', ');

    rowsToExport.push({
      order,
      title,
      type,
      answer,
    });
  }

  const email = localStorage.getItem(LocalStorageKey.Email);

  rowsToExport.push({
    order: rowsToExport.length + 1,
    title: tEmail('email'),
    type: 'Email',
    answer: email || '',
  });

  const csvRows: CsvRow[] = [
    ['Order', 'Title', 'Type', 'Answer'],
    ...rowsToExport.map((row) => [row.order, row.title, row.type, row.answer]),
  ];

  const csv = rowsToCsv(csvRows);

  downloadTextFile({
    content: csv,
    filename,
    mimeType: 'text/csv;charset=utf-8',
  });
}
