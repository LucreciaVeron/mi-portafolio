import React from 'react';
import { motion } from 'framer-motion';
import { myData } from '../data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-neutral-950 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white text-center mb-20"
        >
          Proyectos <span className="text-violet-500">Destacados</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {myData.projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;