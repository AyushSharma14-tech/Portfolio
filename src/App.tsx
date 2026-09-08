import { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AgenticExplorations } from './components/AgenticExplorations';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { site } from './config/site';

// CustomCursor adds a polish layer but is feature-flagged so it can be
// turned off in one place (config/site.ts).
const MountedCursor = site.features.customCursor ? CustomCursor : () => null;

export default function App() {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-glow"
      >
        Skip to content
      </a>

      <Navbar />
      <Suspense fallback={null}>
        <MountedCursor />
      </Suspense>

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AgenticExplorations />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
