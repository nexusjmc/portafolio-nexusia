import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Download } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export function AboutMe() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="sobre-mi" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Text Left (bottom on mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[60%] order-2 md:order-1"
          >
            <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Sobre mí</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Miguel Ángel Quintero G.
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Soy NexusDigital, desarrollador web full-stack apasionado por construir productos digitales que combinan diseño moderno con tecnología de vanguardia.
              </p>
              <p>
                Me especializo en transformar ideas en realidad: desde sitios web de alto rendimiento hasta bots inteligentes y flujos de trabajo automatizados con inteligencia artificial. Cada proyecto es una oportunidad de resolver un problema real de manera eficiente y escalable.
              </p>
              <p>
                Trabajo de forma remota con clientes en toda Latinoamérica, entregando soluciones que generan impacto medible desde el primer día.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <div className="text-3xl md:text-4xl font-black text-accent mb-1">3+</div>
                <div className="text-sm text-muted-foreground font-medium">Años de exp.</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-accent mb-1">20+</div>
                <div className="text-sm text-muted-foreground font-medium">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-accent mb-1">5</div>
                <div className="text-sm text-muted-foreground font-medium">Países</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary dark:border-accent dark:text-accent font-semibold rounded-full hover:bg-primary hover:text-primary-foreground dark:hover:bg-accent dark:hover:text-accent-foreground transition-colors">
                <Download className="w-5 h-5" />
                <span>Descargar CV</span>
              </button>
              <a href="#" className="p-3 bg-muted rounded-full text-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                <SiGithub className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-muted rounded-full text-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Visual Right (top on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[40%] order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-primary/30 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-secondary/40 animate-[spin_20s_linear_infinite]" />
              
              {/* Inner Circle */}
              <div className="absolute inset-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl font-black text-white tracking-tighter">MQ</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
