export type Project = {
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  impact: string;
  stack: string[];
  category: 'GenAI' | 'Agentic AI' | 'Web';
  // No URLs intentionally — content is recruiter-facing only and avoids
  // exposing any internal repository, demo, or codebase reference.
};

export const projects: Project[] = [
  {
    title: 'Defect Resolution Assistant',
    tagline: 'RAG over the internal defect knowledge base',
    problem:
      "Engineers were searching a large internal defect database row-by-row. Finding a similar past defect — and understanding the resolution — was slow and inconsistent.",
    approach:
      'Built a retrieval-augmented chatbot that ingests defect records into ChromaDB, retrieves the most semantically similar context for a user query using cosine similarity, and asks Azure OpenAI to explain the issue and resolution in plain language.',
    impact:
      'Defect lookups became conversational and context-aware. Engineers get explained answers instead of raw rows, accelerating triage and root-cause analysis.',
    stack: ['Python', 'Azure OpenAI', 'ChromaDB', 'Flask', 'MongoDB', 'LangGraph', 'RAG'],
    category: 'GenAI',
  },
  {
    title: 'Third-Party Vulnerability Effort Estimator',
    tagline: 'CVE → product → estimated effort, in one query',
    problem:
      'Different customers ship different versions of third-party software. Tracking which CVEs affect which customer product, and estimating fix effort, was a manual spreadsheet exercise.',
    approach:
      'Designed a RAG-based assistant that parses a natural-language question, locates the affected 3P component in a curated dataset, identifies CVEs for the relevant version, and renders a tabular answer with estimated man-days for remediation.',
    impact:
      'Replaced manual lookup with a single conversational query. Output table shows vulnerable component, product/module, CVE id, and effort estimate — ready to consume in planning meetings.',
    stack: ['Python', 'Azure OpenAI', 'ChromaDB', 'Flask', 'MongoDB', 'LangChain', 'RAG'],
    category: 'GenAI',
  },
  {
    title: 'Agentic AI / MCP Explorations',
    tagline: 'Personal R&D on the next layer of dev tooling',
    problem:
      'Modern engineering tooling is moving from single-shot LLM calls to coordinated agents. I wanted hands-on depth across MCP servers, multi-agent SDLC workflows, and Cursor agent skills.',
    approach:
      'Built and iterated on Model Context Protocol servers, custom Cursor agent skills, and multi-stage SDLC agent pipelines that split work across specialised personas (planner, implementer, reviewer, tester) with shared state.',
    impact:
      'Hands-on depth in MCP server design, agent skill authoring, structured agent state management, and persona-driven workflow orchestration — patterns I now apply in day-to-day engineering work.',
    stack: ['Python', 'MCP', 'LangGraph', 'Cursor SDK', 'Agentic Workflows', 'Prompt Engineering'],
    category: 'Agentic AI',
  },
  {
    title: 'Browser Mini-Games',
    tagline: 'Bite-sized vanilla JS playground',
    problem:
      'Wanted small, self-contained problems that exercise game-loop thinking and DOM performance without any framework overhead.',
    approach:
      'Built four classic browser games — Whack-a-Mole, Snake, Sudoku Solver, and Rock-Paper-Scissors — using only HTML, CSS, and vanilla JavaScript.',
    impact:
      'Strong fundamentals in event handling, animation timing, state machines, and constraint-satisfaction algorithms (Sudoku solver).',
    stack: ['HTML', 'CSS', 'JavaScript', 'DOM'],
    category: 'Web',
  },
];
