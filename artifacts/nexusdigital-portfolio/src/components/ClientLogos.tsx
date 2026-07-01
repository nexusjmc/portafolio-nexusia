export function ClientLogos() {
  const clients = ['TechCo', 'Agencia+', 'StartupMX', 'DigitalAR', 'Nexus Labs', 'CloudBI'];

  return (
    <section id="clientes" className="py-12 border-y border-border/50 bg-muted/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            Clientes y Colaboraciones
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, idx) => (
            <span
              key={idx}
              className="text-2xl md:text-3xl font-black uppercase tracking-tighter opacity-30 grayscale hover:grayscale-0 hover:opacity-100 hover:text-accent transition-all duration-300 cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
