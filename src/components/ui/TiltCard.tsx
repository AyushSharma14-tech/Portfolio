import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

// Decorator pattern: wraps any card with a 3D tilt-on-hover effect, while
// keeping the child component completely stateless. Reduced motion turns
// the effect off automatically.
export function TiltCard({ children, className, maxTilt = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mvY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mvX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 220,
    damping: 22,
  });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mvX.set(px);
    mvY.set(py);
  }

  function onMouseLeave() {
    mvX.set(0);
    mvY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={
        reduced
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              transformPerspective: 1000,
            }
      }
      className={clsx('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}
