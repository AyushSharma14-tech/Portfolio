import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { site } from '@/config/site';
import { profile } from '@/data/profile';
import { fadeUp, staggerContainer, transitions } from '@/lib/motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % site.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Animated mesh background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-mesh-aurora opacity-90 animate-gradient-pan"
          style={{ backgroundSize: '200% 200%' }}
        />
        <div className="absolute inset-0 bg-grid-light opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgb(var(--color-bg)) 95%)',
          }}
        />
      </div>

      {/* Floating decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-float-slow" />
        <div
          className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent-2/25 blur-3xl animate-float-slow"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-accent-3/20 blur-3xl animate-float-slow"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="container-page relative flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-text-soft backdrop-blur-md">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to collaboration & opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 font-display text-display-2xl tracking-tight"
          >
            <span className="block text-text-soft text-2xl md:text-3xl font-medium mb-3">
              Hi, I'm
            </span>
            <span className="heading-gradient">Ayush Sharma.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-baseline gap-x-3 text-2xl md:text-4xl font-display font-semibold"
          >
            <span className="text-text">I'm a</span>
            <span className="relative inline-flex min-h-[1.2em] items-baseline">
              <motion.span
                key={roleIndex}
                initial={reduced ? false : { y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={transitions.spring}
                className="shimmer-text"
              >
                {site.roles[roleIndex]}
              </motion.span>
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg md:text-xl text-text-soft leading-relaxed"
          >
            {profile.headline}. Currently building retrieval-augmented assistants and multi-agent
            workflows at <span className="text-text font-medium">Amdocs</span>. MCA from JNU
            (CUET PG AIR-42), POSE Scholar, chess medalist.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticButton href="#contact" className="btn-primary">
              <Sparkles className="h-4 w-4" />
              Let's talk
            </MagneticButton>
            <MagneticButton href={site.links.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              View Resume
            </MagneticButton>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-text-soft transition-colors hover:border-accent/50 hover:text-text"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-text-soft transition-colors hover:border-accent/50 hover:text-text"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={site.links.email}
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-text-soft transition-colors hover:border-accent/50 hover:text-text"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Highlight stats */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl"
          >
            {profile.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="surface-card surface-card-hover p-4"
              >
                <div className="text-2xl md:text-3xl font-display font-bold heading-gradient">
                  {h.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-text-soft">
                  {h.label}
                </div>
                <div className="mt-1 text-xs text-text-soft/80">{h.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-2 text-text-soft hover:text-text"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <motion.span
            animate={reduced ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
