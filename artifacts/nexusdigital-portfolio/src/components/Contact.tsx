import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const WA_NUMBER = '573001234567';
const WA_MESSAGE = encodeURIComponent('Hola Miguel, vi tu portafolio y quiero hablar contigo sobre un proyecto.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section id="contacto" className="w-full bg-[#3D5ED4] py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Listo para llevar tu proyecto al siguiente nivel?</h2>
          <p className="text-lg text-white/80 font-medium max-w-2xl mx-auto mb-8">
            Cuéntame tu idea — te respondo en menos de 24 horas con una propuesta concreta y sin compromiso.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bf5b] text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_28px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-1"
          >
            <WhatsAppIcon />
            Hablar por WhatsApp
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="w-full md:w-[60%]">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre</label>
                  <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="tu@email.com" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Tipo de Proyecto</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all">
                  <option>Desarrollo Web</option>
                  <option>Automatizaciones</option>
                  <option>Bots Inteligentes</option>
                  <option>Inteligencia Artificial</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Presupuesto (Opcional)</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="ej. $1,000 - $5,000 USD" />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold mb-2">Mensaje</label>
                <textarea required rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none" placeholder="Cuéntame sobre tu idea..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isPending || isSuccess}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center transition-colors"
              >
                {isPending ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : isSuccess ? (
                  '¡Mensaje enviado!'
                ) : (
                  'Enviar mensaje'
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="w-full md:w-[40%] text-white flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg text-secondary font-bold uppercase tracking-wider mb-2">Email</h4>
                <a href="mailto:hola@nexusdigital.co" className="text-2xl font-semibold hover:underline">hola@nexusdigital.co</a>
              </div>
              
              <div>
                <h4 className="text-lg text-secondary font-bold uppercase tracking-wider mb-2">Social</h4>
                <a href="#" className="text-xl font-semibold hover:underline block mb-1">linkedin.com/in/nexusdigital</a>
              </div>

              <div>
                <h4 className="text-lg text-secondary font-bold uppercase tracking-wider mb-2">Calendly</h4>
                <a href="#" className="inline-block px-6 py-3 border-2 border-white rounded-full font-bold hover:bg-white hover:text-accent transition-colors">
                  Agendar una llamada
                </a>
              </div>

              <div className="pt-8 border-t border-white/20">
                <p className="italic text-lg text-white/90">
                  "Creo en el código limpio, en las soluciones que escalan y en los clientes satisfechos. Si tienes una idea, hablemos — puedo convertirla en realidad."
                </p>
                <p className="mt-4 font-bold">⏱️ Respondo en menos de 24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
