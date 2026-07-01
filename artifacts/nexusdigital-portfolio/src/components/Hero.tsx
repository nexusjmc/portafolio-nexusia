import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const roles = [
    'Full-Stack Developer',
    'Especialista en Automatización',
    'Experto en IA',
    'Builder de Productos Digitales'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  const scrollToProjects = () => {
    document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16">

      {/* ── Background: deep gradient + mesh overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#021a8a] to-[#0a0a2e]" />

      {/* Radial glow top-right */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/30 blur-[120px] pointer-events-none" />
      {/* Radial glow bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#B3C3FC]/20 blur-[100px] pointer-events-none" />

      {/* Fine grid on top */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[15%] w-3 h-3 rounded-full bg-accent-light/60 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/3 right-[20%] w-5 h-5 rounded-full bg-accent/40 blur-sm"
      />
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-1/2 right-[10%] w-2 h-2 rounded-full bg-white/30 blur-[2px]"
      />

      {/* ── Content ── */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-bold text-[#B3C3FC] tracking-wide mb-4"
        >
          Tu web. Tu bot. Tu IA. Todo bajo un mismo techo.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(2rem,5vw,4.5rem)] font-black text-white leading-tight tracking-tight max-w-4xl"
        >
          MIGUEL ANGEL QUINTERO GIRALDO
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 h-9 flex items-center text-xl md:text-2xl font-semibold text-[#B3C3FC]"
        >
          <span>{currentText}</span>
          <span className="w-0.5 h-6 bg-[#B3C3FC] ml-1 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-base md:text-lg text-white/70 font-medium max-w-2xl leading-relaxed"
        >
          Soy NexusDigital — desarrollador full-stack especializado en automatizaciones e inteligencia artificial para llevar tu negocio al siguiente nivel digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_28px_rgba(61,94,212,0.5)] hover:shadow-[0_0_40px_rgba(61,94,212,0.7)] transition-all transform hover:-translate-y-1"
          >
            Ver mi trabajo
          </button>
          <a
            href="#contacto"
            onClick={e => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="border-2 border-white/30 hover:border-white/60 text-white/80 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
          >
            Contáctame
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — clickable */}
      <motion.button
        onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 group cursor-pointer"
        aria-label="Ir a servicios"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase group-hover:text-white/70 transition-colors">scroll</span>
        <ChevronDown className="w-6 h-6 text-white/40 animate-bounce group-hover:text-white/70 transition-colors" />
      </motion.button>
    </section>
  );
}
