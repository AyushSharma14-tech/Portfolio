import { motion } from 'framer-motion';
import clsx from 'clsx';
import { fadeUp, inViewOnce, staggerContainer } from '@/lib/motion';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

// Single source of truth for section headings so every section has the
// same rhythm, animation, and tone.
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: Props) {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      className={clsx('mb-12 md:mb-16', align === 'center' && 'text-center mx-auto max-w-3xl', className)}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="section-eyebrow">
          <span className="h-px w-8 bg-accent/60" aria-hidden />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-display-lg md:text-display-xl font-display heading-gradient"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base md:text-lg text-text-soft max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
