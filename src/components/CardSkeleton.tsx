/**
 * Loading placeholders for data-driven card grids.
 * Mirrors the real card geometry (12px radius, same padding) so content
 * swaps in without a layout shift. Uses a calm pulse, not a flashy shimmer.
 */

interface CardGridSkeletonProps {
  /** Number of placeholder cards to render. */
  count?: number;
  /** Tailwind grid-template classes for the wrapper. */
  gridClassName?: string;
  /** Render a compact row (avatar + two lines) instead of a full card. */
  compact?: boolean;
}

export function CardGridSkeleton({
  count = 6,
  gridClassName = "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
  compact = false,
}: CardGridSkeletonProps) {
  return (
    <div className={gridClassName} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-card rounded-xl border border-border p-6 animate-pulse"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted shrink-0" />
            <div className="flex flex-col gap-2 min-w-0 flex-1">
              <div className="h-4 rounded bg-muted w-3/4" />
              <div className="h-3 rounded bg-muted w-1/2" />
            </div>
          </div>
          {!compact && (
            <div className="flex flex-col gap-2 mt-5">
              <div className="h-3 rounded bg-muted w-full" />
              <div className="h-3 rounded bg-muted w-5/6" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
