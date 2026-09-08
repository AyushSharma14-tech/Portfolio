import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { experience } from '@/data/experience';
import { fadeUp, inViewOnce, staggerContainer } from '@/lib/motion';

export function Experience() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start 70%', 'end 30%'],
  });
  // Drives the height of the gradient progress line as the user scrolls
  // through the timeline section.
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="section bg-surface/30 border-y border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped real software."
          description="Production GenAI engineering at Amdocs — from a 4-month internship to full-time engineer on the GenAI team."
        />

        <div ref={wrapperRef} className="relative">
          {/* Vertical track */}
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
          />
          {/* Animated progress overlay */}
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px md:-translate-x-1/2 origin-top"
          >
            <div className="h-full w-full" style={{
              background: 'linear-gradient(to bottom, rgb(var(--color-accent)) 0%, rgb(var(--color-accent-2)) 50%, rgb(var(--color-accent-3)) 100%)',
              boxShadow: '0 0 12px rgb(var(--color-accent) / 0.55)',
            }} />
          </motion.div>

          <motion.ol
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="space-y-12 md:space-y-20"
          >
            {experience.map((item, i) => {
              const onLeft = i % 2 === 0;
              return (
                <motion.li
                  key={item.role + item.period}
                  variants={fadeUp}
                  className="relative pl-12 md:pl-0"
                >
                  {/* Node */}
                  <span
                    aria-hidden
                    className="absolute left-4 md:left-1/2 top-1.5 inline-flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-accent shadow-glow ring-4 ring-bg"
                  />

                  <div
                    className={`md:grid md:grid-cols-2 md:gap-12 ${onLeft ? '' : 'md:[direction:rtl]'}`}
                  >
                    <div
                      className={`surface-card surface-card-hover p-5 md:p-6 [direction:ltr] ${
                        onLeft ? '' : 'md:col-start-2'
                      }`}
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                          {item.period}
                        </span>
                        <span className="chip">
                          {item.type === 'full-time' ? 'Full-time' : 'Internship'}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl md:text-2xl font-display font-semibold">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-text-soft flex items-center gap-2 flex-wrap text-sm">
                        <Briefcase className="h-3.5 w-3.5" />
                        {item.company}
                        <span className="opacity-50">·</span>
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </p>
                      <p className="mt-4 text-text-soft text-sm md:text-base leading-relaxed">
                        {item.summary}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex gap-2 text-sm text-text-soft">
                            <span className="mt-2 inline-block h-1 w-1 rounded-full bg-accent shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {item.stack.map((s) => (
                          <span key={s} className="chip">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
