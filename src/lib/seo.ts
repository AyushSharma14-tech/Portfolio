import { site } from '@/config/site';

// Helper to build a stable JSON-LD Person object from site config.
// Kept in lib/ so any page or template can re-emit the same schema.
export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    worksFor: { '@type': 'Organization', name: site.company },
    url: site.links.github,
    sameAs: [site.links.linkedin, site.links.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hisar',
      addressRegion: 'Haryana',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'Generative AI',
      'Retrieval Augmented Generation',
      'Agentic AI',
      'Model Context Protocol',
      'Python',
      'LangGraph',
      'Azure OpenAI',
    ],
  };
}

export const personJsonLd = buildPersonJsonLd();
