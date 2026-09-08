import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export function ThemeToggle({ className }: Props) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={clsx(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-full',
        'border border-border bg-surface/60 backdrop-blur-md',
        'transition-colors duration-300 hover:border-accent/50',
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex"
        >
          {isDark ? <Moon className="h-4 w-4 text-text" /> : <Sun className="h-4 w-4 text-text" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
