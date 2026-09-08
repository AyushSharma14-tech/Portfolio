import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Target, Zap } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import type { Project } from '@/data/projects';
import { fadeUp } from '@/lib/motion';

type Props = {
  project: Project;
  index: number;
};

const categoryAccent: Record<Project['category'], string> = {
  GenAI: 'from-accent to-accent-2',
  'Agentic AI': 'from-accent-2 to-accent-3',
  Web: 'from-accent-3 to-accent',
};

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <TiltCard className="h-full">
        <article className="surface-card surface-card-hover gradient-border h-full p-6 md:p-7 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-text-soft">
                0{index + 1} · {project.category}
              </span>
              <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-text-soft">{project.tagline}</p>
            </div>
            <div
              aria-hidden
              className={`h-10 w-10 rounded-xl bg-gradient-to-br ${categoryAccent[project.category]} opacity-80 shadow-glow shrink-0`}
            />
          </div>

          <div className="mt-6 space-y-4 text-sm text-text-soft leading-relaxed">
            <div className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface-2 text-accent shrink-0">
                <Lightbulb className="h-3.5 w-3.5" />
              </span>
              <p>
                <span className="text-text font-medium">Problem.</span> {project.problem}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface-2 text-accent-2 shrink-0">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <p>
                <span className="text-text font-medium">Approach.</span> {project.approach}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface-2 text-accent-3 shrink-0">
                <Target className="h-3.5 w-3.5" />
              </span>
              <p>
                <span className="text-text font-medium">Impact.</span> {project.impact}
              </p>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-text-soft">
              <Zap className="h-3.5 w-3.5" />
              Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}
