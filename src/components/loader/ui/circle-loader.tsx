'use client';

import React from 'react';
import { Text } from '@/components/ui/typography';
import {
  calculateNormalizedAnimationProgress, easeOutCubic,
} from '@/components/loader/helpers';

interface Props {
  durationMs: number;
  onComplete: () => void;
}

export default function CircleLoader({
  durationMs,
  onComplete,
}: Props) {
  const progressCircleRef = React.useRef<SVGCircleElement | null>(null);
  const percentTextRef = React.useRef<HTMLSpanElement | null>(null);

  const rafIdRef = React.useRef<number | null>(null);
  const startTimestampRef = React.useRef<number | null>(null);
  const completedRef = React.useRef(false);

  const loaderSvgSizePx = 252;
  const circleStrokeWidthPx = 12;
  const circleRadiusPx = (loaderSvgSizePx - circleStrokeWidthPx) / 2;
  const circleCircumferencePx = 2 * Math.PI * circleRadiusPx;

  React.useEffect(() => {
    completedRef.current = false;
    startTimestampRef.current = null;

    const circleEl = progressCircleRef.current;
    const textEl = percentTextRef.current;

    if (!circleEl || !textEl) return;

    circleEl.style.strokeDasharray = String(circleCircumferencePx);

    const tick = (nowMs: number) => {
      if (startTimestampRef.current === null) startTimestampRef.current = nowMs;

      const normalized = calculateNormalizedAnimationProgress(
        startTimestampRef.current,
        nowMs,
        durationMs,
      );

      const isDone = normalized >= 1;

      const eased = easeOutCubic(normalized);
      const easedPercent = eased * 100;

      const dashOffset = circleCircumferencePx * (1 - eased);
      circleEl.style.strokeDashoffset = String(dashOffset);

      const nextDisplay = isDone
        ? 100
        : Math.min(99, Math.round(easedPercent));
      textEl.textContent = `${nextDisplay}%`;

      if (!isDone) {
        rafIdRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    };
  }, [durationMs, onComplete, circleCircumferencePx]);

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        className="relative"
        style={{ width: loaderSvgSizePx, height: loaderSvgSizePx }}
      >
        <svg width={loaderSvgSizePx} height={loaderSvgSizePx} className="block">
          {/* Track */}
          <circle
            cx={loaderSvgSizePx / 2}
            cy={loaderSvgSizePx / 2}
            r={circleRadiusPx}
            fill="none"
            stroke="currentColor"
            strokeWidth={circleStrokeWidthPx}
            className="text-neutral-100"
          />

          {/* Progress */}
          <circle
            ref={progressCircleRef}
            cx={loaderSvgSizePx / 2}
            cy={loaderSvgSizePx / 2}
            r={circleRadiusPx}
            fill="none"
            stroke="currentColor"
            strokeWidth={circleStrokeWidthPx}
            strokeLinecap="round"
            className="text-accent"
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <Text className="text-white font-extrabold text-[52px]">
            <span ref={percentTextRef}>0%</span>
          </Text>
        </div>
      </div>
    </div>
  );
}
