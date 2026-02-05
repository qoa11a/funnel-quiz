function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function calculateNormalizedAnimationProgress(
  animationStartTimestampMs: number,
  currentTimestampMs: number,
  totalAnimationDurationMs: number,
) {
  const elapsedTimeMs = currentTimestampMs - animationStartTimestampMs;
  return clamp(elapsedTimeMs / totalAnimationDurationMs, 0, 1);
}

export function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
