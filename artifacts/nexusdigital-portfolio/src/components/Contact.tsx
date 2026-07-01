import { useState } from 'react';
import { Loader2 } from 'lucide-react';

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl text-white/80 font-medium">Hablemos sobre cómo puedo ayudarte</p>
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
