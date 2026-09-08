export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'internship';
  summary: string;
  highlights: string[];
  stack: string[];
};

// Source: public LinkedIn + resume.
export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Amdocs',
    location: 'Gurugram, Haryana, India',
    period: 'Aug 2024 — Present',
    type: 'full-time',
    summary:
      'Backend engineer on the GenAI engineering team. I build retrieval-augmented assistants and agentic workflows that turn slow, manual engineering processes into fast, conversational ones.',
    highlights: [
      'Designed and shipped a RAG-based defect resolution assistant that improves searchability on the internal defect knowledge base, returning context-aware answers instead of raw rows.',
      'Built a third-party software vulnerability effort-estimation assistant that maps customer products → 3P components → CVEs and surfaces estimated remediation effort in tabular form.',
      'Owned ingestion, embedding, vector storage, and contextual retrieval pipelines using ChromaDB + Azure OpenAI; wired Flask APIs and MongoDB-backed conversation state.',
      'Authored prompt-engineering patterns and reusable RAG primitives that are now applied across multiple internal use cases.',
    ],
    stack: [
      'Python',
      'Azure OpenAI',
      'LangGraph',
      'LangChain',
      'ChromaDB',
      'MongoDB',
      'Flask',
      'Linux',
      'RAG',
      'Prompt Engineering',
    ],
  },
  {
    role: 'Project Trainee',
    company: 'Amdocs',
    location: 'Gurugram, Haryana, India',
    period: 'Feb 2024 — May 2024',
    type: 'internship',
    summary:
      'Four-month engineering internship contributing to a GenAI initiative. Converted from intern to full-time engineer based on delivery.',
    highlights: [
      'Contributed to an early GenAI project that became part of the team\'s production roadmap.',
      'Recognized at the Amdocs GenAI Hackathon (Mar 2024).',
    ],
    stack: ['Python', 'GenAI', 'Prompt Engineering'],
  },
];
