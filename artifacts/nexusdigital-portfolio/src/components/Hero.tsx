import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const services = [
  'Desarrollo Web a Medida',
  'Automatizaciones con IA',
  'Bots Inteligentes',
  'E-commerce & Tiendas Online',
  'Integraciones & APIs',
  'Consultoría Digital',
];

const WA_NUMBER = '573001234567';
const WA_MESSAGE = encodeURIComponent('Hola Miguel, vi tu portafolio y quiero hablar contigo sobre un proyecto.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = services[index];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) setTimeout(() => setDeleting(true), 1800);
      } else {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex(p => (p + 1) % services.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#021a8a] to-[#0a0a2e]" />

      {/* Glow orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/30 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#B3C3FC]/20 blur-[100px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating particles */}
      {[
        { top: '22%', left: '12%', w: 3, dur: 6, del: 0 },
        { top: '65%', left: '8%',  w: 2, dur: 9, del: 1.5 },
        { top: '35%', right: '14%', w: 4, dur: 7, del: 0.5 },
        { top: '70%', right: '10%', w: 2, dur: 11, del: 2 },
        { top: '50%', left: '30%',  w: 2, dur: 8, del: 3 },
        { top: '18%', right: '30%', w: 3, dur: 10, del: 1 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.del }}
          className="absolute rounded-full bg-accent/50 blur-[2px] pointer-events-none"
          style={{
            top: p.top,
            left: 'left' in p ? p.left : undefined,
            right: 'right' in p ? p.right : undefined,
            width: p.w * 4,
            height: p.w * 4,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center pb-28">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.4rem,6vw,5.5rem)] font-black leading-[1.08] tracking-tight max-w-4xl"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Tu web. Tu bot.
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#B3C3FC] via-[#8fa8ff] to-[#6B88FF] bg-clip-text text-transparent">
            Tu IA.
          </span>
          <span className="text-white/90"> Todo bajo</span>
          <br />
          <span className="text-white/90">un mismo techo.</span>
        </motion.h1>

        {/* Typewriter pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 inline-flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 backdrop-blur-sm px-6 py-3"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
          <span className="text-[#B3C3FC] text-base md:text-lg font-semibold min-w-[220px] text-left">
            {text}
            <span className="inline-block w-0.5 h-5 bg-[#B3C3FC] ml-0.5 align-middle animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-7 text-base md:text-lg text-white/45 max-w-xl leading-relaxed"
        >
          Desarrollador full-stack especializado en{' '}
          <span className="text-white/75 font-medium">automatizaciones e inteligencia artificial</span>{' '}
          para llevar tu negocio al siguiente nivel digital.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary */}
          <button
            onClick={() => document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#6B88FF] hover:from-accent/90 hover:to-[#6B88FF]/90 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-[0_0_32px_rgba(61,94,212,0.45)] hover:shadow-[0_0_48px_rgba(61,94,212,0.65)] transition-all hover:-translate-y-0.5"
          >
            Ver mi trabajo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white/70 hover:text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5"
          >
            Hablemos ahora
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 group cursor-pointer"
        aria-label="Ir a servicios"
      >
        <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase group-hover:text-white/50 transition-colors">scroll</span>
        <ChevronDown className="w-5 h-5 text-white/25 animate-bounce group-hover:text-white/50 transition-colors" />
      </motion.button>
    </section>
  );
}
