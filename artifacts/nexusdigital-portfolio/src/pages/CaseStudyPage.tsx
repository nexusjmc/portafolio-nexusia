import { useParams, Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import { CustomCursor } from '@/components/CustomCursor';
import { Footer } from '@/components/Footer';
import NotFound from '@/pages/not-found';

export default function CaseStudyPage() {
  const params = useParams();
  const id = parseInt(params.id || '0');
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  const nextProject = projects.find(p => p.id === (id % projects.length) + 1);
  const prevProject = projects.find(p => p.id === (id === 1 ? projects.length : id - 1));

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <CustomCursor />
      
      {/* Navbar Minimal para volver */}
      <nav className="fixed top-0 left-0 w-full p-4 md:p-6 z-50 mix-blend-difference text-white">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5" /> Volver al portafolio
        </Link>
      </nav>

      {/* Hero Header */}
      <header className={`w-full h-[40vh] md:h-[60vh] bg-gradient-to-br ${project.gradient} relative flex items-end pb-12 md:pb-24`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-white">
          <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight max-w-5xl">
            {project.title}
          </h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Meta & Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4 space-y-8 border-t border-border pt-8">
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Cliente</h4>
              <p className="font-semibold text-lg">{project.client}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Rol</h4>
              <p className="font-semibold text-lg">{project.role}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Año</h4>
              <p className="font-semibold text-lg">{project.year}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 border-t border-border pt-8">
            <h2 className="text-3xl font-bold mb-6">Resumen del Proyecto</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Content sections */}
        <div className="max-w-4xl mx-auto space-y-24">
          <section>
            <h3 className="text-3xl font-bold mb-6 text-accent">El Desafío</h3>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.challenge}
            </p>
          </section>

          {/* Image Gallery Placeholder */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`h-64 md:h-96 rounded-2xl bg-gradient-to-tr ${project.gradient} opacity-80`} />
            <div className={`h-64 md:h-96 rounded-2xl bg-gradient-to-bl ${project.gradient} opacity-90`} />
          </section>

          <section>
            <h3 className="text-3xl font-bold mb-6 text-accent">La Solución</h3>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.solution}
            </p>
          </section>

          {/* Metrics */}
          <section>
            <h3 className="text-3xl font-bold mb-8 text-center md:text-left">Resultados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-card border border-border p-8 rounded-2xl text-center">
                  <div className="text-4xl md:text-5xl font-black text-accent mb-2">{metric.value}</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Project Navigation */}
        <div className="mt-32 pt-12 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-8">
          {prevProject && (
            <Link href={`/proyecto/${prevProject.id}`} className="group flex flex-col text-center sm:text-left">
              <span className="text-sm text-muted-foreground mb-1">Proyecto Anterior</span>
              <span className="text-xl font-bold group-hover:text-accent transition-colors">{prevProject.title}</span>
            </Link>
          )}
          {nextProject && (
            <Link href={`/proyecto/${nextProject.id}`} className="group flex flex-col text-center sm:text-right">
              <span className="text-sm text-muted-foreground mb-1">Siguiente Proyecto</span>
              <span className="text-xl font-bold group-hover:text-accent transition-colors">{nextProject.title}</span>
            </Link>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
