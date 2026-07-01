import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img src="/logo-blanco.png" alt="NexusDigital" className="h-10 w-auto object-contain" />
            <p className="text-white/40 text-xs">2026 NexusDigital. Todos los derechos reservados.</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['Servicios', 'Proyectos', 'Sobre mí', 'Contacto'].map(item => (
              <a
                key={item}
                href={`#${item === 'Sobre mí' ? 'sobre-mi' : item.toLowerCase()}`}
                onClick={e => {
                  e.preventDefault();
                  document.querySelector(`#${item === 'Sobre mí' ? 'sobre-mi' : item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-colors">
              <SiGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
