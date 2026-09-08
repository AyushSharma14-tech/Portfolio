export type AgenticCapability = {
  title: string;
  blurb: string;
  icon: string;
  tags: string[];
};

// Public-safe descriptions of agentic AI capability areas. NO internal project
// names, repos, or proprietary identifiers — these are general capability
// statements only.
export const agenticCapabilities: AgenticCapability[] = [
  {
    title: 'Model Context Protocol (MCP) Servers',
    blurb:
      'Designing and shipping MCP servers that expose tools, resources, and prompts to LLM clients. Clean tool boundaries, typed contracts, and tested error paths.',
    icon: 'Plug',
    tags: ['MCP', 'Tools API', 'Typed Contracts'],
  },
  {
    title: 'Cursor Agent Skills',
    blurb:
      'Authoring reusable Cursor agent skills with structured SKILL.md files, scoped behaviour, and clean activation triggers — so agents pick the right capability at the right moment.',
    icon: 'Sparkles',
    tags: ['Cursor', 'SKILL.md', 'Activation Triggers'],
  },
  {
    title: 'Multi-Agent SDLC Workflows',
    blurb:
      'Persona-driven pipelines (planner, implementer, reviewer, tester) with shared state, decision gates, and content-safety review steps that gate publishing.',
    icon: 'Workflow',
    tags: ['Personas', 'State Sharing', 'Decision Gates'],
  },
  {
    title: 'Agent-to-Agent (A2A) Protocols',
    blurb:
      'Hands-on with the A2A protocol pattern — letting specialised agents collaborate across boundaries via well-typed message contracts instead of brittle prompt chains.',
    icon: 'Network',
    tags: ['A2A', 'Message Contracts', 'Coordination'],
  },
  {
    title: 'Production RAG Pipelines',
    blurb:
      'End-to-end RAG: ingestion, chunking strategy, embeddings, vector storage in ChromaDB, contextual retrieval, and grounded generation with Azure OpenAI.',
    icon: 'BrainCircuit',
    tags: ['ChromaDB', 'Azure OpenAI', 'Cosine Retrieval'],
  },
  {
    title: 'Prompt Engineering at Scale',
    blurb:
      'Reusable prompt patterns, structured output contracts, and evaluation loops — so prompt-driven systems behave predictably as the surface area grows.',
    icon: 'Wand2',
    tags: ['Structured Output', 'Eval Loops', 'Pattern Library'],
  },
];
