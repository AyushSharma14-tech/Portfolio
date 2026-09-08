// Public profile facts. Source: resume + public LinkedIn only.

export type EducationEntry = {
  degree: string;
  institute: string;
  period: string;
  score: string;
  note?: string;
};

export type Highlight = {
  label: string;
  value: string;
  sub: string;
};

export type Profile = {
  fullName: string;
  headline: string;
  about: string[];
  highlights: Highlight[];
  education: EducationEntry[];
};

export const profile: Profile = {
  fullName: 'Ayush Sharma',
  headline: 'Software Engineer building production GenAI & Agentic AI systems',
  about: [
    "I'm a Software Engineer at Amdocs working on production GenAI and agentic AI systems. I build retrieval-augmented assistants, multi-agent SDLC workflows, and Model Context Protocol servers that help engineering teams ship faster.",
    "Before Amdocs I completed my MCA at Jawaharlal Nehru University (CUET PG AIR-42), and a B.Sc. in Mathematics where I was a POSE Scholar. Outside engineering I've represented at District, State, and Inter-College level chess championships — the same pattern recognition shows up in how I design systems.",
  ],
  highlights: [
    { label: 'Years in industry', value: '1.5+', sub: 'Software Engineer @ Amdocs' },
    { label: 'GenAI projects shipped', value: '2', sub: 'RAG + Effort estimation' },
    { label: 'Certifications', value: '9+', sub: 'GenAI, Cloud, Security' },
    { label: 'Chess medals', value: '3', sub: 'District, State, Inter-College' },
  ],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institute: 'Jawaharlal Nehru University, New Delhi',
      period: '2022 — 2024',
      score: 'CGPA 7.4 / 9',
      note: 'CUET PG AIR-42',
    },
    {
      degree: 'Bachelor of Science (Mathematics)',
      institute: 'Govt. College, Hisar',
      period: '2018 — 2021',
      score: '79%',
      note: 'POSE Scholar',
    },
    {
      degree: 'Diploma in Computer Application',
      institute: 'Hartron Skill Center, Hisar',
      period: '2021 — 2022',
      score: 'A+ Grade',
    },
    {
      degree: 'Senior Secondary (12th)',
      institute: 'Govt. Sr. Sec. School',
      period: '2017 — 2018',
      score: '93.4%',
    },
  ],
};
