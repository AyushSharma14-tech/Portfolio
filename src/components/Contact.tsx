import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, FileText, Github, Linkedin, Mail, Send, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { MagneticButton } from './ui/MagneticButton';
import { site } from '@/config/site';
import { fadeUp, inViewOnce, staggerContainer } from '@/lib/motion';

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard may be blocked (e.g. insecure context). The button still
      // shows the email value in the title attribute as a fallback.
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Have an interesting problem? Let's talk."
          description="The fastest way to reach me is email. Resume, GitHub, and LinkedIn are all one click away."
          align="center"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          className="mx-auto max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 backdrop-blur-md p-8 md:p-12 text-center"
          >
            {/* Decorative aurora */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-mesh-aurora opacity-50 animate-gradient-pan"
              style={{ backgroundSize: '200% 200%' }}
            />

            <div className="inline-flex items-center gap-2 chip">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Available for full-time roles & GenAI collaboration
            </div>

            <h3 className="mt-6 font-display text-display-lg heading-gradient">
              Let's build something together.
            </h3>
            <p className="mt-4 text-text-soft">
              Whether you're hiring for a GenAI engineer, looking to ship an agentic AI feature,
              or want to chat about Python + LLM architecture — I'd love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href={site.links.email} className="btn-primary">
                <Send className="h-4 w-4" />
                Email me
              </MagneticButton>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? 'Email copied' : 'Copy email address'}
                title={site.email}
                className="btn-ghost"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    {site.email}
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={site.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm hover:border-accent/50"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm hover:border-accent/50"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm hover:border-accent/50"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${site.email}?subject=Hello%20Ayush&body=Hi%20Ayush%2C`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm hover:border-accent/50"
              >
                <Mail className="h-4 w-4" /> Quick mailto
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
