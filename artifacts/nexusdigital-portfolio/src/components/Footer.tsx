import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-bold text-2xl tracking-tight">
          NexusDigital
        </div>
        
        <div className="text-secondary text-sm font-semibold uppercase tracking-wider">
          Disponible para proyectos freelance
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-colors">
            <SiGithub className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 mt-8 text-center text-white/50 text-sm">
        &copy; {year} NexusDigital. Todos los derechos reservados.
      </div>
    </footer>
  );
}
