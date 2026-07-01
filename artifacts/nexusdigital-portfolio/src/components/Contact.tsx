import { motion } from 'framer-motion';

const WA_NUMBER = '573001234567';
const WA_MESSAGE = encodeURIComponent('Hola Miguel, vi tu portafolio y quiero hablar contigo sobre un proyecto.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const WhatsAppIcon = ({ size = 6 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`w-${size} h-${size} shrink-0`}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const checks = ['Sin costo inicial', 'Propuesta concreta', 'Sin compromiso'];

export function Contact() {
  return (
    <section id="contacto" className="relative w-full py-28 overflow-hidden">
      {/* Background — same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#021a8a] to-[#0a0a2e]" />

      {/* Glow orbs — same as Hero */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/30 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#B3C3FC]/20 blur-[100px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Main card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-16 flex flex-col items-center text-center shadow-[0_0_80px_rgba(61,94,212,0.15)]"
        >
          {/* Headline */}
          <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-black text-white leading-tight tracking-tight mb-5">
            ¿Listo para llevar tu proyecto{' '}
            <span className="text-[#B3C3FC]">al siguiente nivel?</span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-white/55 max-w-lg mb-10 leading-relaxed">
            Cuéntame tu idea — te respondo en menos de{' '}
            <span className="text-white font-semibold">24 horas</span>{' '}
            con una propuesta concreta y sin compromiso.
          </p>

          {/* WhatsApp button */}
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-[0_4px_40px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_60px_rgba(37,211,102,0.55)] transition-shadow mb-8"
          >
            <WhatsAppIcon size={6} />
            Hablar por WhatsApp
          </motion.a>

          {/* Check pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {checks.map(item => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-white/40">
                <svg className="w-4 h-4 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
