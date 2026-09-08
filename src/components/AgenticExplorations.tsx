import { motion } from 'framer-motion';
import {
  Plug,
  Sparkles,
  Workflow,
  Network,
  BrainCircuit,
  Wand2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { TiltCard } from './ui/TiltCard';
import { agenticCapabilities } from '@/data/agentic';
import { fadeUp, inViewOnce, staggerContainer } from '@/lib/motion';

const ICONS: Record<string, LucideIcon> = {
  Plug,
  Sparkles,
  Workflow,
  Network,
  BrainCircuit,
  Wand2,
};

export function AgenticExplorations() {
  return (
    <section id="agentic" className="section bg-surface/30 border-y border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Agentic AI Explorations"
          title="Beyond chatbots — building the next layer of AI tooling."
          description="Personal R&D and on-the-job depth across MCP, agent skills, multi-agent SDLC pipelines, A2A protocols, and grounded generation. Generic capability descriptions only — no internal project identifiers."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {agenticCapabilities.map((cap) => {
            const Icon = ICONS[cap.icon] ?? Sparkles;
            return (
              <motion.div key={cap.title} variants={fadeUp} className="h-full">
                <TiltCard className="h-full" maxTilt={5}>
                  <div className="surface-card surface-card-hover h-full p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-glow"
                        style={{
                          background:
                            'linear-gradient(135deg, rgb(var(--color-accent)) 0%, rgb(var(--color-accent-2)) 100%)',
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-lg font-semibold leading-tight">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm text-text-soft leading-relaxed">
                      {cap.blurb}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {cap.tags.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
