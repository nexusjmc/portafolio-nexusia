import { useInView } from '@/hooks/useInView';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Blog() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const articles = [
    {
      title: 'Cómo automaticé mi proceso de ventas con n8n y OpenAI',
      readTime: '5 min',
      date: 'Jan 2025',
      excerpt: 'Descubre el paso a paso para crear un flujo que califica leads mientras duermes.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'React vs Astro: cuándo elegir cada uno',
      readTime: '7 min',
      date: 'Feb 2025',
      excerpt: 'Una comparativa práctica basada en proyectos reales para tomar la mejor decisión de arquitectura.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Construye un bot de WhatsApp en 30 minutos',
      readTime: '6 min',
      date: 'Mar 2025',
      excerpt: 'Guía rápida utilizando la Cloud API oficial y Node.js para tu primer bot.',
      gradient: 'from-green-400 to-emerald-600'
    }
  ];

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Artículos recientes
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
          </h2>
          <a href="#" className="hidden md:flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center text-xs font-medium text-muted-foreground mb-4">
                  <span>{article.date}</span>
                  <span>{article.readTime} read</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {article.excerpt}
                </p>
                <a href="#" className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Leer artículo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-accent font-semibold">
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
