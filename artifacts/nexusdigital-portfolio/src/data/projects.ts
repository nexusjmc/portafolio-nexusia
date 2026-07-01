export type Project = {
  id: number;
  title: string;
  category: string;
  clientType: string;
  description: string;
  tags: string[];
  gradient: string;
  client: string;
  role: string;
  year: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Escalable',
    category: 'Desarrollo Web',
    clientType: 'Retail',
    description: 'Plataforma de ventas B2C con 50k productos y sistema de recomendaciones.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-indigo-500 to-blue-600',
    client: 'TechRetailers S.A.',
    role: 'Lead Full-Stack Developer',
    year: '2024',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    metrics: [
      { label: 'Incremento de Ventas', value: '+35%' },
      { label: 'Tiempo de Carga', value: '< 1s' },
      { label: 'Uptime', value: '99.9%' }
    ],
    challenge: 'El cliente experimentaba caídas constantes durante los días de rebajas masivas y tiempos de carga inaceptables para un catálogo de más de 50.000 productos. La experiencia de usuario en móvil era deficiente y las conversiones se veían afectadas.',
    solution: 'Se reescribió la plataforma utilizando una arquitectura basada en microservicios con Node.js y se implementó una base de datos distribuida apoyada con caché en Redis. El frontend se modernizó con React garantizando una experiencia de usuario fluida y orientada a móvil, integrando finalmente un sistema de recomendaciones basado en historial de navegación.',
    liveUrl: 'https://ecommerce-demo.up.railway.app'
  },
  {
    id: 2,
    title: 'Pipeline de Automatización',
    category: 'Automatizaciones',
    clientType: 'Agencia',
    description: 'Flujo n8n + OpenAI que procesa 800 leads/día sin intervención humana.',
    tags: ['n8n', 'OpenAI', 'Python'],
    gradient: 'from-emerald-400 to-teal-500',
    client: 'MarketingPro MX',
    role: 'Especialista en Automatización',
    year: '2024',
    stack: ['n8n', 'OpenAI API', 'Python', 'Webhooks'],
    metrics: [
      { label: 'Leads Procesados', value: '800/día' },
      { label: 'Tiempo Ahorrado', value: '40h/sem' },
      { label: 'Precisión', value: '98%' }
    ],
    challenge: 'El equipo de ventas dedicaba la mayor parte de su tiempo clasificando y asignando leads manualmente, lo que provocaba una demora de hasta 24 horas en el primer contacto. Se necesitaba un sistema para cualificar instantáneamente a los prospectos.',
    solution: 'Se diseñó un pipeline integral utilizando n8n para conectar los formularios web y redes sociales con OpenAI, que analiza el contenido de cada solicitud para categorizar al lead. Posteriormente, el sistema asigna el lead al agente adecuado o lo introduce en una campaña de nutrición automatizada según su perfil.',
    liveUrl: 'https://pipeline-demo.up.railway.app'
  },
  {
    id: 3,
    title: 'Bot Calificador de Leads',
    category: 'Bots Inteligentes',
    clientType: 'Real Estate',
    description: 'WhatsApp bot con NLP que aumentó conversiones un 40%.',
    tags: ['WhatsApp API', 'NLP', 'Node.js'],
    gradient: 'from-violet-500 to-purple-600',
    client: 'Inmobiliaria Futuro',
    role: 'Desarrollador AI/Bot',
    year: '2023',
    stack: ['WhatsApp Cloud API', 'Dialogflow', 'Node.js', 'MongoDB'],
    metrics: [
      { label: 'Aumento en Conversión', value: '+40%' },
      { label: 'Atención', value: '24/7' },
      { label: 'Tasa de Respuesta', value: '< 2s' }
    ],
    challenge: 'La inmobiliaria recibía cientos de consultas fuera del horario laboral. Los clientes potenciales se enfriaban antes de ser contactados al día siguiente, perdiendo numerosas oportunidades de venta.',
    solution: 'Desarrollo de un agente conversacional para WhatsApp capaz de entender lenguaje natural, mostrar propiedades según las necesidades del usuario, responder preguntas frecuentes y agendar visitas automáticamente sincronizando con los calendarios de los agentes de bienes raíces.',
    liveUrl: 'https://bot-demo.up.railway.app'
  },
  {
    id: 4,
    title: 'Asistente IA Contextual',
    category: 'Inteligencia Artificial',
    clientType: 'SaaS',
    description: 'Chatbot con memoria de conversación para atención al cliente 24/7.',
    tags: ['OpenAI', 'LangChain', 'Pinecone'],
    gradient: 'from-orange-400 to-amber-500',
    client: 'SaaS Innovators',
    role: 'AI Engineer',
    year: '2024',
    stack: ['OpenAI', 'LangChain', 'Pinecone', 'Next.js'],
    metrics: [
      { label: 'Resolución Automática', value: '75%' },
      { label: 'CSAT Score', value: '4.8/5' },
      { label: 'Reducción Tickets', value: '60%' }
    ],
    challenge: 'El equipo de soporte estaba saturado por consultas repetitivas que se encontraban en la documentación. Los usuarios preferían abrir tickets antes que buscar en la base de conocimientos.',
    solution: 'Implementación de un sistema RAG (Retrieval-Augmented Generation) utilizando LangChain y Pinecone para indexar toda la documentación y tickets históricos. El asistente responde preguntas complejas citando fuentes exactas y escala la conversación a un humano solo cuando es estrictamente necesario, manteniendo el contexto.',
    liveUrl: 'https://asistente-ia.up.railway.app'
  }
];
