export type Certification = {
  name: string;
  issuer: string;
  date: string; // human-friendly month/year
  category: 'GenAI' | 'Cloud' | 'Security' | 'Productivity' | 'Coding' | 'Business';
};

// Source: public LinkedIn — Licenses & Certifications section.
export const certifications: Certification[] = [
  { name: 'Prompt Engineering', issuer: 'Amdocs', date: 'Oct 2025', category: 'GenAI' },
  { name: 'Generative AI for Beginners', issuer: 'Udemy', date: 'Feb 2025', category: 'GenAI' },
  { name: 'Identity & Access Management — Azure Active Directory', issuer: 'Udemy', date: 'May 2025', category: 'Cloud' },
  { name: 'Vim Masterclass', issuer: 'Udemy', date: 'Mar 2025', category: 'Productivity' },
  { name: 'Production Sensitivity Guidelines', issuer: 'Amdocs', date: 'Feb 2025', category: 'Business' },
  { name: 'Production Code of Conduct', issuer: 'Amdocs', date: 'Jun 2025', category: 'Business' },
  { name: 'Business Conduct — Educational Process', issuer: 'Amdocs', date: 'Jun 2025', category: 'Business' },
  { name: 'GenAI Hackathon', issuer: 'Amdocs', date: 'Mar 2024', category: 'GenAI' },
  { name: 'HackerRank Problem Solving (Basic)', issuer: 'HackerRank', date: 'Jul 2023', category: 'Coding' },
  { name: 'HackerRank SQL (Basic)', issuer: 'HackerRank', date: 'Jul 2023', category: 'Coding' },
];
