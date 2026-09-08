import { motion } from 'framer-motion';
import {
  Award,
  Cloud,
  Code,
  Sparkles,
  ShieldCheck,
  KeyboardIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { certifications, type Certification } from '@/data/certifications';
import { fadeUp, inViewOnce, staggerContainer } from '@/lib/motion';

const CATEGORY_ICON: Record<Certification['category'], LucideIcon> = {
  GenAI: Sparkles,
  Cloud,
  Security: ShieldCheck,
  Productivity: KeyboardIcon,
  Coding: Code,
  Business: Award,
};

const CATEGORY_COLOR: Record<Certification['category'], string> = {
  GenAI: 'from-violet-500 to-fuchsia-500',
  Cloud: 'from-sky-500 to-blue-500',
  Security: 'from-emerald-500 to-teal-500',
  Productivity: 'from-amber-500 to-orange-500',
  Coding: 'from-pink-500 to-rose-500',
  Business: 'from-indigo-500 to-violet-500',
};

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning, documented."
          description="Certifications from Amdocs, Udemy, and HackerRank — across GenAI, cloud, security, productivity, and coding fundamentals."
        />

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {certifications.map((c) => {
            const Icon = CATEGORY_ICON[c.category];
            const grad = CATEGORY_COLOR[c.category];
            return (
              <motion.div
                key={c.name + c.date}
                variants={fadeUp}
                className="surface-card surface-card-hover p-5 group"
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white shadow-glow`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display font-semibold leading-snug">
                  {c.name}
                </h3>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-text-soft">{c.issuer}</span>
                  <span className="chip text-[10px] py-0.5 px-2">{c.date}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
