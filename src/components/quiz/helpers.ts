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
