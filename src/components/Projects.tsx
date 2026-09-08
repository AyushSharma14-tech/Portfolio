import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';
import { inViewOnce, staggerContainer } from '@/lib/motion';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="What I've shipped, broken down clearly."
          description="Each card explains the problem, the approach, the tech, and the actual impact — the way I'd present work in a design review."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
