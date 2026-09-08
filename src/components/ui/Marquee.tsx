import clsx from 'clsx';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  reverse?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
  fade?: boolean;
};

// CSS-only infinite marquee. Duplicates the children once and animates a
// 50% translateX so the loop appears seamless. No JS scroll listener needed.
export function Marquee({ children, reverse = false, speed = 'normal', className, fade = true }: Props) {
  const duration = speed === 'slow' ? '60s' : speed === 'fast' ? '24s' : '40s';

  return (
    <div
      className={clsx('relative overflow-hidden', fade && 'marquee-fade', className)}
      style={
        fade
          ? ({
              maskImage:
                'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
            } as React.CSSProperties)
          : undefined
      }
    >
      <div
        className={clsx(
          'flex w-max gap-6',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
        )}
        style={{ animationDuration: duration }}
      >
        <div className="flex shrink-0 gap-6">{children}</div>
        <div className="flex shrink-0 gap-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
