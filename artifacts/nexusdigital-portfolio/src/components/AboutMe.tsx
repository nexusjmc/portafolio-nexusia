import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Download } from 'lucide-react';
import { SiGithub, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiDocker } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

// Compact tech icon row
const techIcons = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
];

// Custom small icons
const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
  </svg>
);

export function AboutMe() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="sobre-mi" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col md:flex-row items-center gap-16">

          {/* Text Left */}
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

            {/* Stats */}
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

            {/* ── Compact Tech Stack ── */}
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4">Stack principal</p>
              <div className="flex flex-wrap gap-3">
                {techIcons.map(({ icon: Icon, label, color }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.1 }}
                    title={label}
                    className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-muted border border-border hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default"
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-200"
                      style={{ color: 'var(--icon-color)' } as React.CSSProperties}
                      onMouseEnter={e => (e.currentTarget.style.color = color)}
                      onMouseLeave={e => (e.currentTarget.style.color = '')}
                    />
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
                  </motion.div>
                ))}
                {/* OpenAI custom */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  title="OpenAI"
                  className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-muted border border-border hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default"
                >
                  <span className="text-muted-foreground group-hover:text-[#412991] transition-colors">
                    <OpenAIIcon />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">OpenAI</span>
                </motion.div>
                {/* n8n */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  title="n8n"
                  className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-muted border border-border hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default"
                >
                  <span className="text-sm font-black text-muted-foreground group-hover:text-[#EA4335] transition-colors">n8n</span>
                </motion.div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary dark:border-accent dark:text-accent font-semibold rounded-full hover:bg-primary hover:text-primary-foreground dark:hover:bg-accent dark:hover:text-accent-foreground transition-colors">
                <Download className="w-5 h-5" />
                <span>Descargar CV</span>
              </button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full text-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                <SiGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full text-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Visual Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[40%] order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-primary/30 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-secondary/40 animate-[spin_20s_linear_infinite]" />
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
