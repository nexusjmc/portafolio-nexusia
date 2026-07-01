import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-react';
import { articles } from '@/data/articles';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-accent font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">NexusDigital</span>
            <h1 className="text-4xl md:text-6xl font-black text-primary dark:text-white mb-4">
              Artículos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tutoriales, comparativas y casos de uso reales sobre desarrollo web, automatización e inteligencia artificial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient header */}
                <div className={`h-52 w-full bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
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
                  <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h2>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
