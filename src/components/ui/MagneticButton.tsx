import {
  forwardRef,
  useRef,
  useCallback,
  type ReactNode,
  type CSSProperties,
} from 'react';
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import clsx from 'clsx';

type Props = Omit<HTMLMotionProps<'a'>, 'ref'> & {
  children: ReactNode;
  strength?: number;
};

// "Magnetic" hover effect: button gently follows the cursor when nearby.
// Disabled automatically for users who prefer reduced motion.
export const MagneticButton = forwardRef<HTMLAnchorElement, Props>(function MagneticButton(
  { children, strength = 0.35, className, style, onMouseMove, onMouseLeave, ...rest },
  ref,
) {
  const localRef = useRef<HTMLAnchorElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const x = useSpring(mvX, { stiffness: 200, damping: 18, mass: 0.4 });
  const y = useSpring(mvY, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      onMouseMove?.(e);
      if (reduced) return;
      const el = localRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
      mvX.set(dx);
      mvY.set(dy);
    },
    [reduced, strength, mvX, mvY, onMouseMove],
  );

  const handleLeave = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      onMouseLeave?.(e);
      mvX.set(0);
      mvY.set(0);
    },
    [mvX, mvY, onMouseLeave],
  );

  return (
    <motion.a
      ref={(node) => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduced ? style : ({ x, y, ...(style ?? {}) } as CSSProperties)}
      className={clsx(className)}
      {...rest}
    >
      {children}
    </motion.a>
  );
});
