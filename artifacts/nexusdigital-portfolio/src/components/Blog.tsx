import { useInView } from '@/hooks/useInView';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'wouter';
import { articles } from '@/data/articles';

export function Blog() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Artículos recientes
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
          </h2>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header gradient */}
              <div className={`h-48 w-full bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime} lectura</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm"
                >
                  Leer artículo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent font-semibold">
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
