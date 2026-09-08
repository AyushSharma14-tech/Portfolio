import type { Variants, Transition } from 'framer-motion';

// Centralized motion variants and easing tokens.
// Strategy: keep one library of reusable variants so the whole site feels coherent.

export const easings = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  outBack: [0.34, 1.56, 0.64, 1] as const,
  inOutCubic: [0.65, 0, 0.35, 1] as const,
} as const;

export const transitions = {
  base: { duration: 0.7, ease: easings.outExpo } satisfies Transition,
  snappy: { duration: 0.4, ease: easings.outExpo } satisfies Transition,
  spring: { type: 'spring', stiffness: 220, damping: 24 } satisfies Transition,
  bouncy: { type: 'spring', stiffness: 300, damping: 18 } satisfies Transition,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.base },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: transitions.spring },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: transitions.base },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: transitions.base },
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren, delayChildren },
  },
});

// Default viewport options for whileInView triggers.
// Trigger early but only once to avoid jitter on scroll-up.
export const inViewOnce = { once: true, amount: 0.2 } as const;
