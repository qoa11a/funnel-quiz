import { cn } from '@/lib/cn';
import { calculateProgressWidthPercent } from '@/components/quiz/helpers';
import { Text } from '@/components/ui/typography';
import { ChevronLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';

interface Props {
  currentStep: number;
  totalSteps: number;
  canGoBack: boolean;
}

export default function QuizHeader({
  currentStep,
  totalSteps,
  canGoBack,
}: Props) {
  const progressWidth = calculateProgressWidthPercent({
    currentStep,
    totalSteps,
  });

  return (
    <header className="shrink-0 gap-3 flex flex-col px-6">
      <div className="flex items-center justify-between">
        <span className="size-10">
          {canGoBack && (
            <Link href={`/quiz/${currentStep - 1}`}>
              <button className="size-full flex items-center justify-center cursor-pointer">
                <ChevronLeft />
              </button>
            </Link>
          )}
        </span>

        <Text className="text-neutral-100 font-extrabold">
          <span className="text-accent">{currentStep}</span> / {totalSteps}
        </Text>

        <span className="size-10" />
      </div>

      <div className="w-full h-1 rounded-full bg-neutral-100 overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full bg-accent transition-all duration-300 ease-out',
          )}
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </header>
  );
}
