import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { profile } from '@/data/profile';
import { site } from '@/config/site';
import { fadeUp, inViewOnce, slideInLeft, slideInRight, staggerContainer } from '@/lib/motion';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="A short story about how I got here."
          description="From mathematics to MCA at JNU, then into the GenAI engineering team at Amdocs — with a stop at the chess board along the way."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: about copy */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="lg:col-span-7 space-y-5"
          >
            {profile.about.map((para) => (
              <motion.p
                key={para.slice(0, 24)}
                variants={fadeUp}
                className="text-base md:text-lg text-text-soft leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 pt-2">
              <span className="chip">
                <MapPin className="h-3.5 w-3.5" />
                {site.location}
              </span>
              <span className="chip">
                <Sparkles className="h-3.5 w-3.5" />
                {site.role} @ {site.company}
              </span>
              <span className="chip">
                <GraduationCap className="h-3.5 w-3.5" />
                MCA, JNU — CUET PG AIR-42
              </span>
            </motion.div>
          </motion.div>

          {/* Right: education timeline */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="lg:col-span-5"
          >
            <div className="surface-card p-6 md:p-7">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-accent" />
                Education
              </h3>
              <ul className="mt-5 space-y-5">
                {profile.education.map((edu, i) => (
                  <motion.li
                    key={edu.degree}
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inViewOnce}
                    transition={{ delay: i * 0.05 }}
                    className="relative pl-5 border-l border-border"
                  >
                    <span className="absolute left-[-5px] top-1.5 inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
                    <p className="text-sm font-semibold text-text">{edu.degree}</p>
                    <p className="text-sm text-text-soft">{edu.institute}</p>
                    <p className="text-xs text-text-soft/80 mt-0.5">
                      {edu.period} · {edu.score}
                      {edu.note ? ` · ${edu.note}` : ''}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
