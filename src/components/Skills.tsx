import { motion } from 'framer-motion';
import { Code2, Sparkles, Server, Database, Wrench, Cloud } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Marquee } from './ui/Marquee';
import { skillCategories, marqueeTags } from '@/data/skills';
import { fadeUp, inViewOnce, scaleIn, staggerContainer } from '@/lib/motion';

// Map category icon name to a real lucide component.
const ICONS = {
  Code2,
  Sparkles,
  Server,
  Database,
  Wrench,
  Cloud,
} as const;

type IconName = keyof typeof ICONS;

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit I reach for."
          description="Strong on Python and the GenAI stack. Comfortable across backend, databases, and Linux. Always sharpening prompt-engineering and agent design."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat) => {
            const Icon = ICONS[cat.icon as IconName] ?? Code2;
            return (
              <motion.div
                key={cat.name}
                variants={fadeUp}
                className="surface-card surface-card-hover p-5 md:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{cat.name}</h3>
                </div>
                <motion.ul
                  variants={staggerContainer(0.04)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={inViewOnce}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {cat.items.map((item) => (
                    <motion.li key={item} variants={scaleIn} className="chip">
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech marquee */}
        <div className="mt-14">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-text-soft mb-6">
            Hands-on with
          </p>
          <Marquee speed="normal">
            {marqueeTags.map((tag) => (
              <div
                key={tag}
                className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-border bg-surface/50 px-5 py-2.5 text-sm text-text-soft"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {tag}
              </div>
            ))}
          </Marquee>
          <div className="mt-4">
            <Marquee speed="normal" reverse>
              {[...marqueeTags].reverse().map((tag) => (
                <div
                  key={`r-${tag}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-border bg-surface/50 px-5 py-2.5 text-sm text-text-soft"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                  {tag}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
