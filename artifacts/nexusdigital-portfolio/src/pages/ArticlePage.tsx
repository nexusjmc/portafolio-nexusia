import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react';
import { articles } from '@/data/articles';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import NotFound from '@/pages/not-found';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  const otherArticles = articles.filter(a => a.slug !== slug).slice(0, 2);

  if (!article) return <NotFound />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero gradient header */}
      <div className={`h-72 md:h-96 w-full bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 sm:px-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold mb-6 hover:gap-3 transition-all text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Todos los artículos
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-white/70 text-xs">
                <Tag className="w-3 h-3" />{article.date}
              </span>
              <span className="flex items-center gap-1 text-white/70 text-xs">
                <Clock className="w-3 h-3" />{article.readTime} lectura
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {article.content.map((block, idx) => {
                if (block.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-foreground mt-10 mb-4">
                      {block.replace('## ', '')}
                    </h2>
                  );
                }
                if (block.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-foreground mt-8 mb-3">
                      {block.replace('### ', '')}
                    </h3>
                  );
                }
                if (block.startsWith('```')) {
                  const code = block.replace(/^```\w*\n/, '').replace(/```$/, '');
                  return (
                    <pre key={idx} className="bg-muted rounded-xl p-4 overflow-x-auto text-sm font-mono my-6 border border-border">
                      <code>{code}</code>
                    </pre>
                  );
                }
                return (
                  <p key={idx} className="text-muted-foreground leading-relaxed mb-6">
                    {block}
                  </p>
                );
              })}
            </motion.div>

            {/* Author card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 p-6 bg-muted/40 rounded-2xl border border-border flex items-center gap-5"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-black text-white">MQ</span>
              </div>
              <div>
                <p className="font-bold text-foreground">Miguel Ángel Quintero G.</p>
                <p className="text-sm text-muted-foreground">Full-Stack Developer · Especialista en Automatización & IA</p>
                <a href="/#contacto" className="text-accent text-sm font-semibold hover:underline">
                  ¿Quieres trabajar juntos? Contáctame →
                </a>
              </div>
            </motion.div>
          </div>

          {/* More articles */}
          {otherArticles.length > 0 && (
            <div className="max-w-4xl mx-auto pb-16 border-t border-border pt-12">
              <h3 className="text-2xl font-bold mb-8">Más artículos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherArticles.map(a => (
                  <Link key={a.slug} href={`/blog/${a.slug}`}>
                    <div className="group flex gap-4 p-4 rounded-xl border border-border hover:border-accent hover:bg-muted/30 transition-all cursor-pointer">
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${a.gradient} flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-muted-foreground">{a.date} · {a.readTime}</span>
                        <p className="font-bold text-sm mt-1 group-hover:text-accent transition-colors line-clamp-2">
                          {a.title}
                        </p>
                        <span className="text-accent text-xs font-semibold flex items-center gap-1 mt-2">
                          Leer <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
