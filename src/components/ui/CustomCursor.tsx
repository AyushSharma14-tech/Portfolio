import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

// Two-element custom cursor: a small dot that tracks the pointer 1:1 and a
// larger ring that lags behind via a spring. Disabled on touch devices and
// when the user prefers reduced motion.
export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.4 });

  // We keep an eye on whether the *primary* input is fine (mouse/trackpad).
  // On touch, we never enable the custom cursor.
  const lastWasMouse = useRef(true);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === 'undefined') return;
    const fine = window.matchMedia('(pointer: fine)');
    const apply = () => {
      setEnabled(fine.matches);
    };
    apply();
    fine.addEventListener('change', apply);
    return () => fine.removeEventListener('change', apply);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      lastWasMouse.current = e.pointerType === 'mouse';
      if (!lastWasMouse.current) return;
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]');
      setHovering(!!interactive);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          scale: hovering ? 1.6 : 1,
          transition: 'scale 0.2s ease',
        }}
      />
    </>
  );
}
