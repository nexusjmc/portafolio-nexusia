import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { projects } from '@/data/projects';
import { useInView } from '@/hooks/useInView';

export function Projects() {
  const [filter, setFilter] = useState('Todo');
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const categories = ['Todo', 'Desarrollo Web', 'Automatizaciones', 'Bots Inteligentes', 'Inteligencia Artificial'];

  const filteredProjects = projects.filter(p => filter === 'Todo' || p.category === filter);

  return (
    <section id="proyectos" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
              Proyectos
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-accent text-white'
                    : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm ${
                  index === 0 && filter === 'Todo' ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`w-full ${index === 0 && filter === 'Todo' ? 'h-72 md:h-96' : 'h-64'} bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`} />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2 text-center">{project.title}</h3>
                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                      {project.clientType}
                    </span>
                  </div>
                  <Link href={`/proyecto/${project.id}`} className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-colors transform hover:-translate-y-1">
                    Ver caso
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
