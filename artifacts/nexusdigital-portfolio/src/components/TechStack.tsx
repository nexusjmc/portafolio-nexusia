import { useInView } from '@/hooks/useInView';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiAstro, SiTailwindcss,
  SiNodedotjs, SiPython, SiFastapi,
  SiPostgresql, SiMongodb, SiDocker,
} from 'react-icons/si';

// Custom OpenAI icon (no official si icon)
const SiOpenai = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

const N8nIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-3H8v3H6.5v-9H8v4.5h3v-4.5h1.5v9H11zm5 0h-1.5v-9H16v9z"/>
  </svg>
);

export function TechStack() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const categories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB', level: 95 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 90 },
        { name: 'Astro', icon: SiAstro, color: '#FF5D01', level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 90 },
        { name: 'Python', icon: SiPython, color: '#3776AB', level: 85 },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688', level: 80 },
      ]
    },
    {
      title: 'Datos e Infraestructura',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 85 },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
        { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 75 },
      ]
    },
    {
      title: 'IA & Automatización',
      skills: [
        { name: 'OpenAI', icon: SiOpenai, color: '#412991', level: 90 },
        { name: 'n8n', icon: N8nIcon, color: '#EA4335', level: 95 },
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Stack Tecnológico
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-accent"></span>
          </h2>
        </div>

        <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <h3 className="text-xl font-bold border-b border-border pb-2">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon 
                          className="w-5 h-5 text-muted-foreground group-hover:text-[var(--hover-color)] transition-colors duration-300"
                          style={{ '--hover-color': skill.color } as React.CSSProperties}
                        />
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + (catIdx * 0.1) + (idx * 0.1) }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
