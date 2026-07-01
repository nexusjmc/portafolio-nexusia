import { useInView } from '@/hooks/useInView';
import { motion } from 'framer-motion';
import { Search, Layout, PenTool, Beaker, Rocket } from 'lucide-react';

export function WorkProcess() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const steps = [
    { icon: Search, title: 'Discovery & Research', desc: 'Análisis profundo del problema y objetivos.' },
    { icon: Layout, title: 'Ideation & Wireframes', desc: 'Estructuración y flujos de usuario.' },
    { icon: PenTool, title: 'Design & Prototype', desc: 'UI/UX de alta fidelidad y validación.' },
    { icon: Beaker, title: 'Testing & Iteration', desc: 'Desarrollo, pruebas y ajustes de calidad.' },
    { icon: Rocket, title: 'Delivery & Support', desc: 'Lanzamiento, monitoreo y mantenimiento.' },
  ];

  return (
    <section id="proceso" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Proceso de Trabajo
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-accent"></span>
          </h2>
        </div>

        <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
          {/* Dashed line connector */}
          <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 border-t-2 border-dashed border-border z-0" />
          <div className="md:hidden absolute top-12 bottom-12 left-8 w-0.5 border-l-2 border-dashed border-border z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex md:flex-col items-center md:text-center gap-6 md:gap-4"
              >
                <div className="relative shrink-0 w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-lg">
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>
                  <step.icon className="w-7 h-7 text-primary dark:text-foreground" />
                </div>
                
                <div className="flex-1 md:flex-none">
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
