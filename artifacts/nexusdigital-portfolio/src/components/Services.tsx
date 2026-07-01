import { motion } from 'framer-motion';
import { Globe, Zap, Bot, Brain } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Globe,
      title: 'Desarrollo Web',
      description: 'Sitios y aplicaciones web modernas, rápidas y escalables construidas con las últimas tecnologías del ecosistema.',
    },
    {
      icon: Zap,
      title: 'Automatizaciones',
      description: 'Automatizo flujos de trabajo repetitivos para que tu equipo se enfoque en tareas de alto valor.',
    },
    {
      icon: Bot,
      title: 'Bots Inteligentes',
      description: 'Bots para WhatsApp, Telegram y Discord que atienden, califican leads y venden 24/7 sin intervención humana.',
    },
    {
      icon: Brain,
      title: 'Inteligencia Artificial',
      description: 'Integro modelos de IA en tus procesos: chatbots contextuales, análisis de datos y generación de contenido.',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Servicios
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
          </h2>
        </div>

        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
