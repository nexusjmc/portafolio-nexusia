import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const testimonials = [
    {
      text: 'Miguel transformó completamente nuestra presencia digital. El bot de WhatsApp que desarrolló nos ahorra 40 horas semanales.',
      name: 'Carlos Mendoza',
      role: 'CEO, TechStartup CO'
    },
    {
      text: 'Profesional, puntual y con un código impecable. El sistema de automatización superó todas nuestras expectativas.',
      name: 'Ana García',
      role: 'Directora, Agencia Digital MX'
    },
    {
      text: 'El chatbot de IA entiende a nuestros clientes mejor que algunos agentes. Increíble resultado.',
      name: 'Roberto Silva',
      role: 'Fundador, E-Commerce AR'
    }
  ];

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplayId = setInterval(scrollNext, 5000);
    return () => clearInterval(autoplayId);
  }, [emblaApi, scrollNext]);

  return (
    <section id="testimoniales" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Lo que dicen mis clientes
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-accent"></span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((test, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8">
                <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm text-center">
                  <div className="text-6xl text-secondary mb-4 leading-none font-serif">"</div>
                  <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
                    {test.text}
                  </p>
                  <div>
                    <h4 className="font-bold text-lg">{test.name}</h4>
                    <p className="text-muted-foreground">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
