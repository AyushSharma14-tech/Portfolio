import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/config/site';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a href="#hero" className="inline-flex items-center gap-2 font-display text-lg font-semibold">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-glow"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(var(--color-accent)) 0%, rgb(var(--color-accent-2)) 100%)',
                }}
              >
                A
              </span>
              {site.name}
            </a>
            <p className="mt-4 text-sm text-text-soft max-w-sm">
              {site.tagline} Based in {site.location}.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-soft">Navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li><a href="#about" className="text-text-soft hover:text-text">About</a></li>
              <li><a href="#experience" className="text-text-soft hover:text-text">Experience</a></li>
              <li><a href="#skills" className="text-text-soft hover:text-text">Skills</a></li>
              <li><a href="#projects" className="text-text-soft hover:text-text">Projects</a></li>
              <li><a href="#agentic" className="text-text-soft hover:text-text">Agentic AI</a></li>
              <li><a href="#certifications" className="text-text-soft hover:text-text">Certifications</a></li>
              <li><a href="#contact" className="text-text-soft hover:text-text">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-soft">Connect</h3>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={site.links.email}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-text-soft hover:border-accent/50 hover:text-text"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-text-soft hover:border-accent/50 hover:text-text"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-text-soft hover:border-accent/50 hover:text-text"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#hero"
                aria-label="Back to top"
                className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-text-soft hover:border-accent/50 hover:text-text"
              >
                <ArrowUp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-3 border-t border-border pt-6 text-xs text-text-soft md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. Built with React, Tailwind, and Framer Motion.</p>
          <p>Designed for clarity, animated for delight.</p>
        </div>
      </div>
    </footer>
  );
}
