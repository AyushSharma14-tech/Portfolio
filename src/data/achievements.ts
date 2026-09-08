export type Achievement = {
  title: string;
  description: string;
  icon: string;
};

// Source: resume + public LinkedIn.
export const achievements: Achievement[] = [
  {
    title: 'CUET PG — All India Rank 42',
    description: 'Secured AIR 42 in the Common University Entrance Test (PG), leading to admission at JNU for MCA.',
    icon: 'Trophy',
  },
  {
    title: 'POSE Scholar',
    description: 'Awarded the Promotion of Science Education (POSE) scholarship during graduation for academic merit in Mathematics.',
    icon: 'Award',
  },
  {
    title: 'Chess Medalist — District, State, Inter-College',
    description: 'Gold, Silver, and Bronze medals across District, State, and Inter-College level Chess Championships.',
    icon: 'Crown',
  },
  {
    title: 'Outstanding Performance — 12th Class',
    description: 'Certificate of Outstanding Performance from the Haryana Board of School Education (HBSE) — 93.4% in 12th.',
    icon: 'Medal',
  },
  {
    title: 'Amdocs GenAI Hackathon',
    description: 'Recognized at the Amdocs GenAI Hackathon during the project trainee phase.',
    icon: 'Zap',
  },
  {
    title: 'Intern → Full-Time Conversion',
    description: 'Converted from a 4-month engineering internship to a Software Engineer role at Amdocs based on project delivery.',
    icon: 'Rocket',
  },
];
