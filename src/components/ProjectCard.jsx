import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group hover:border-violet-500/50 transition-colors duration-300 flex flex-col h-full"
    >
      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="relative h-48 overflow-hidden block cursor-pointer">
        <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </a>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
              {project.title}
            </h3>
            
            <div className="flex gap-4">
                {/* Botón GitHub */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Ver Código"
                  className="text-neutral-400 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <FaGithub size={22}/>
                </a>
                
                {/* Botón Demo */}
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Ver Demo en vivo"
                  className="text-neutral-400 hover:text-violet-400 hover:scale-110 transition-all duration-300"
                >
                  <FaExternalLinkAlt size={20}/>
                </a>
            </div>
        </div>
        
        <p className="text-neutral-400 mb-6 text-sm leading-relaxed flex-grow">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800 mt-auto">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-neutral-800 text-violet-300 text-xs font-bold uppercase tracking-wider rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;