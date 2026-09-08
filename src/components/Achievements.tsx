import { motion } from 'framer-motion';
import { Award, Crown, Medal, Rocket, Trophy, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { achievements } from '@/data/achievements';
import { fadeUp, inViewOnce, scaleIn, staggerContainer } from '@/lib/motion';

const ICONS: Record<string, LucideIcon> = {
  Trophy,
  Award,
  Crown,
  Medal,
  Zap,
  Rocket,
};

export function Achievements() {
  return (
    <section id="achievements" className="section bg-surface/30 border-y border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Achievements"
          title="A few things I'm proud of."
          description="Academic merit, national-level rank, and competitive chess — moments that shaped how I think and work."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((a) => {
            const Icon = ICONS[a.icon] ?? Award;
            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="surface-card surface-card-hover p-6 relative overflow-hidden"
              >
                <motion.div
                  variants={scaleIn}
                  aria-hidden
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20"
                />
                <div className="relative flex items-start gap-4">
                  <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-glow"
                    style={{
                      background:
                        'linear-gradient(135deg, rgb(var(--color-accent)) 0%, rgb(var(--color-accent-3)) 100%)',
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-soft leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
