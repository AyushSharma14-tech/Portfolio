export type SkillCategory = {
  name: string;
  icon: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'Code2',
    items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'GenAI & LLM',
    icon: 'Sparkles',
    items: [
      'Azure OpenAI',
      'Prompt Engineering',
      'RAG',
      'LangGraph',
      'LangChain',
      'Agentic Workflows',
      'MCP (Model Context Protocol)',
    ],
  },
  {
    name: 'Backend',
    icon: 'Server',
    items: ['Flask', 'REST APIs', 'Async Python', 'Microservices'],
  },
  {
    name: 'Databases',
    icon: 'Database',
    items: ['MongoDB', 'MySQL', 'Oracle', 'ChromaDB (Vector DB)', 'Vector Search'],
  },
  {
    name: 'Tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Cursor', 'VS Code', 'Postman', 'Vim'],
  },
  {
    name: 'Cloud & Platform',
    icon: 'Cloud',
    items: ['Azure', 'Linux', 'Windows', 'Identity & Access Management'],
  },
];

// Logos rendered in the marquee. Kept text-only to stay image-free for fast load.
export const marqueeTags: string[] = [
  'Python',
  'Azure OpenAI',
  'LangGraph',
  'LangChain',
  'ChromaDB',
  'MongoDB',
  'Flask',
  'RAG',
  'MCP',
  'Cursor',
  'Linux',
  'Git',
  'TypeScript',
  'C++',
  'Prompt Engineering',
  'Vector Search',
];
