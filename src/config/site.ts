// Single source of truth for site config, repo-name-specific bits, and feature flags.
// Update only this file when renaming the repo or moving to a custom domain.

export const site = {
  name: 'Ayush Sharma',
  shortName: 'Ayush',
  role: 'Software Engineer',
  company: 'Amdocs',
  tagline: 'I build production GenAI, RAG, and agentic AI systems.',
  description:
    'Software Engineer at Amdocs building production GenAI, RAG, and agentic AI systems with Python, Azure OpenAI, LangGraph, MCP, and modern Cursor agent skills.',
  location: 'Hisar, Haryana, India',
  email: 'ayushshrma03@gmail.com',
  phone: '+917357355025',
  links: {
    linkedin: 'https://www.linkedin.com/in/ayush-sharma-2b455421a/',
    github: 'https://github.com/ayushshrma03',
    email: 'mailto:ayushshrma03@gmail.com',
    resume: 'resume.pdf',
  },
  // Roles to rotate through in the hero.
  roles: [
    'Software Engineer @ Amdocs',
    'GenAI Engineer',
    'Agentic AI Builder',
    'RAG Systems Developer',
    'MCP Server Author',
  ],
  // Feature flags (kept off by default to protect mobile performance budget).
  features: {
    hero3D: false,
    customCursor: true,
  },
} as const;

export type SiteConfig = typeof site;
