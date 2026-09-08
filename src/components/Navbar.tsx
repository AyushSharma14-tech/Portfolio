import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import clsx from 'clsx';
import { ThemeToggle } from './ui/ThemeToggle';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { site } from '@/config/site';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'agentic', label: 'Agentic AI' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('hero');
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver lights up the nav item for the section currently
  // closest to the top of the viewport.
  useEffect(() => {
    const ids = ['hero', ...NAV_ITEMS.map((n) => n.id)];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-bg/70 backdrop-blur-xl border-b border-border'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="container-page flex h-16 items-center justify-between">
          <a
            href="#hero"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 text-base font-display font-semibold tracking-tight"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-glow"
              style={{
                background:
                  'linear-gradient(135deg, rgb(var(--color-accent)) 0%, rgb(var(--color-accent-2)) 100%)',
              }}
            >
              <span className="text-sm font-bold">A</span>
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={clsx(
                    'relative px-3 py-2 text-sm font-medium transition-colors duration-300',
                    isActive ? 'text-text' : 'text-text-soft hover:text-text',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full"
                      style={{
                        background:
                          'linear-gradient(90deg, rgb(var(--color-accent)) 0%, rgb(var(--color-accent-2)) 100%)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-text-soft transition-colors hover:border-accent/50 hover:text-text"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-text-soft transition-colors hover:border-accent/50 hover:text-text"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <ThemeToggle />
            <a href={site.links.resume} target="_blank" rel="noopener noreferrer" className="btn-primary hidden md:inline-flex">
              <FileText className="h-4 w-4" />
              Resume
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Top scroll-progress bar */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-border/60">
          <div
            className="h-full origin-left"
            style={{
              transform: `scaleX(${progress})`,
              background:
                'linear-gradient(90deg, rgb(var(--color-accent)) 0%, rgb(var(--color-accent-2)) 50%, rgb(var(--color-accent-3)) 100%)',
              transition: 'transform 0.05s linear',
            }}
            aria-hidden
          />
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-bg/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.nav
              aria-label="Mobile primary"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-surface border-l border-border shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <span className="font-display font-semibold">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto py-4">
                {NAV_ITEMS.map((item, i) => (
                  <li key={item.id}>
                    <motion.a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                      className="block px-6 py-4 text-lg font-medium text-text border-b border-border/50 hover:bg-surface-2"
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
              <div className="p-5 border-t border-border flex flex-col gap-3">
                <a href={site.links.resume} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
                <div className="flex gap-3">
                  <a
                    href={site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
