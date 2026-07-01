export type Article = {
  slug: string;
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  gradient: string;
  category: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: 'automatize-ventas-n8n-openai',
    title: 'Cómo automaticé mi proceso de ventas con n8n y OpenAI',
    readTime: '5 min',
    date: 'Ene 2025',
    category: 'Automatización',
    excerpt: 'Descubre el paso a paso para crear un flujo que califica leads mientras duermes.',
    gradient: 'from-orange-500 to-red-500',
    content: [
      'Imagina despertar cada mañana y encontrar en tu CRM una lista de leads ya calificados, segmentados y listos para recibir una propuesta. Sin haber movido un dedo durante la noche. Eso es exactamente lo que logré para uno de mis clientes —y en este artículo te cuento cómo lo construí desde cero usando n8n y la API de OpenAI.',
      '## El problema: demasiados leads, muy poco tiempo',
      'La agencia de marketing digital recibía alrededor de 80 formularios de contacto al día a través de distintos canales: su sitio web, Facebook Lead Ads e Instagram. El equipo de ventas tenía que revisar cada uno manualmente, leer el mensaje, categorizar la necesidad y asignarlo al vendedor correspondiente. Esto tomaba entre 2 y 3 horas diarias de trabajo humano, y muchos leads se perdían por respuestas tardías.',
      '## La solución: un pipeline 100% automático',
      'El flujo que construimos funciona así: cada vez que llega un nuevo lead (desde cualquier canal), un webhook de n8n lo captura inmediatamente. El mensaje se envía a GPT-4 con un prompt específico que extrae la necesidad principal, la urgencia percibida y el presupuesto estimado. Luego, una función de clasificación asigna una puntuación del 1 al 10 según el potencial del lead.',
      '### Paso 1: Configurar los triggers',
      'En n8n, creamos tres nodos de tipo "Webhook" —uno por canal. Todos apuntan al mismo flujo de procesamiento. El payload normalizado garantiza que el siguiente nodo reciba siempre el mismo formato, sin importar el origen del lead.',
      '### Paso 2: El prompt de clasificación',
      'El prompt que enviamos a OpenAI es clave. Le pedimos que actúe como un especialista en ventas B2B y que analice el mensaje del lead respondiendo con un JSON estructurado: necesidad principal, urgencia (alta/media/baja), presupuesto estimado en rangos y puntuación de 1-10. Esto nos da datos estructurados y accionables en milisegundos.',
      '### Paso 3: Enrutar y notificar',
      'Con la puntuación en mano, una condición simple del tipo IF-ELSE decide: si el lead tiene 8 o más puntos, va directo a WhatsApp del vendedor senior con un resumen del lead. Si tiene entre 5 y 7, entra a una secuencia de email nurturing. Si tiene menos de 5, queda registrado en el CRM como frío para seguimiento posterior.',
      '## Resultados después de 60 días',
      'El tiempo de respuesta al lead bajó de un promedio de 4 horas a menos de 2 minutos. El equipo de ventas recuperó casi 15 horas semanales que ahora dedica a cerrar, no a clasificar. Y la tasa de conversión de lead a cliente subió un 28% simplemente por la velocidad de contacto.',
      '## Conclusión',
      'La combinación de n8n para la orquestación de flujos y OpenAI para el procesamiento de lenguaje natural es tremendamente poderosa. No requiere conocimientos avanzados de programación —n8n es visual— y el costo mensual de la API de OpenAI para este volumen fue de aproximadamente $12 USD. Si tu negocio recibe leads regularmente y pierdes tiempo cualificándolos manualmente, este es el primer flujo que deberías automatizar.'
    ]
  },
  {
    slug: 'react-vs-astro',
    title: 'React vs Astro: cuándo elegir cada uno',
    readTime: '7 min',
    date: 'Feb 2025',
    category: 'Desarrollo Web',
    excerpt: 'Una comparativa práctica basada en proyectos reales para tomar la mejor decisión de arquitectura.',
    gradient: 'from-blue-500 to-cyan-500',
    content: [
      'Una de las preguntas más frecuentes que recibo de clientes y colegas es: "¿uso React o Astro para mi proyecto?" La respuesta honesta es: depende. Pero en lugar de dejarme en esa respuesta vaga, en este artículo voy a darte un criterio claro basado en proyectos reales que he construido con ambas herramientas.',
      '## ¿Qué es cada una?',
      'React es una biblioteca de UI basada en componentes que vive en el navegador. Cuando construyes una app con React (via Vite o Next.js), el navegador descarga JavaScript, lo ejecuta y renderiza el HTML resultante. Esto lo hace perfecto para interfaces altamente interactivas.',
      'Astro, en cambio, adopta un enfoque radicalmente distinto: "ship zero JavaScript by default." Genera HTML estático en el servidor o en el momento del build. Si necesitas interactividad en una parte específica, puedes insertar componentes de React, Vue o Svelte como "islas" dentro del HTML estático. El resultado: páginas ultra-rápidas con muy poco JS en el cliente.',
      '## Cuándo usar Astro',
      'Astro es mi primera elección cuando el proyecto es principalmente de contenido: sitios corporativos, portfolios, landings, blogs y documentación. Las ventajas son contundentes: Core Web Vitals perfectos por defecto, SEO impecable (el HTML ya viene listo para los crawlers), tiempo de desarrollo más corto para proyectos sin lógica de estado compleja, y hosting prácticamente gratuito en plataformas como Vercel o Netlify gracias al output estático.',
      'Un ejemplo reciente: reconstruí el sitio de una clínica dental con Astro. La versión anterior en WordPress tardaba 4.2 segundos en cargar. La nueva versión en Astro: 0.8 segundos. La puntuación de PageSpeed pasó de 52 a 98. Y el cliente puede editar el contenido vía Markdown sin tocar código.',
      '## Cuándo usar React',
      'React (o Next.js) brilla cuando la aplicación tiene estado complejo, autenticación, dashboards en tiempo real, o cuando el usuario pasa largos períodos interactuando dentro de la aplicación sin recargar la página. Un SaaS, una plataforma de ecommerce con carrito y checkout, o un panel de administración: React.',
      'También es la mejor opción cuando el equipo ya conoce React y el tiempo de entrega es ajustado. La curva de aprendizaje de Astro es baja, pero hay que contar con el tiempo de adaptación mental al paradigma de las islas.',
      '## El criterio definitivo',
      'Me hago estas tres preguntas antes de elegir: ¿El usuario va a pasar más de 5 minutos en la misma vista sin recargar? → React. ¿El SEO es crítico para el éxito del proyecto? → Astro. ¿Hay estado global complejo (carrito, sesión, filtros interdependientes)? → React.',
      '## Conclusión',
      'No hay una respuesta universal. Pero con este criterio puedes tomar la decisión correcta en menos de 5 minutos. En mi experiencia, el 60% de los proyectos de clientes pequeños y medianos se benefician más de Astro. El 40% restante, donde la interactividad es el núcleo del producto, necesita React. Y si alguna vez no estás seguro, Astro con islas de React te da lo mejor de ambos mundos.'
    ]
  },
  {
    slug: 'bot-whatsapp-30-minutos',
    title: 'Construye un bot de WhatsApp en 30 minutos',
    readTime: '6 min',
    date: 'Mar 2025',
    category: 'Bots',
    excerpt: 'Guía rápida utilizando la Cloud API oficial y Node.js para tu primer bot.',
    gradient: 'from-green-400 to-emerald-600',
    content: [
      'WhatsApp tiene más de 2 mil millones de usuarios activos. Si tu negocio atiende clientes en Latinoamérica, casi con certeza muchos de ellos prefieren escribirte por ahí antes que llamar o enviar un correo. En esta guía te explico cómo construir un bot funcional usando la WhatsApp Cloud API oficial de Meta y Node.js en aproximadamente 30 minutos.',
      '## Requisitos previos',
      'Necesitas: una cuenta de desarrollador en Meta for Developers, una app de tipo "Business" con el producto de WhatsApp habilitado, un número de teléfono de prueba (Meta lo provee gratis para desarrollo), y Node.js 18+ instalado en tu máquina o servidor.',
      '## Paso 1: Configurar el webhook',
      'La WhatsApp Cloud API usa webhooks: Meta enviará un HTTP POST a tu servidor cada vez que alguien te escriba. Necesitas un endpoint HTTPS público. Para desarrollo local puedes usar ngrok. El endpoint debe verificar el token de tu webhook respondiendo el `hub.challenge` que Meta envía en el GET de verificación.',
      '```javascript\napp.get(\'/webhook\', (req, res) => {\n  const token = req.query[\'hub.verify_token\'];\n  if (token === process.env.VERIFY_TOKEN) {\n    res.send(req.query[\'hub.challenge\']);\n  } else {\n    res.sendStatus(403);\n  }\n});\n```',
      '## Paso 2: Recibir mensajes',
      'Cuando un usuario te escribe, Meta hace un POST a tu webhook con un payload JSON. Dentro de ese payload, el campo `entry[0].changes[0].value.messages[0]` contiene el mensaje. El tipo puede ser `text`, `image`, `audio`, etc. Para empezar, nos concentramos en `text`.',
      '## Paso 3: Responder con la API',
      'Para enviar una respuesta, haces un POST a `https://graph.facebook.com/v18.0/{PHONE_NUMBER_ID}/messages` con tu token de acceso. El cuerpo incluye el `to` (número del usuario), el `type` del mensaje y el contenido.',
      '```javascript\nawait axios.post(\n  `https://graph.facebook.com/v18.0/${process.env.PHONE_ID}/messages`,\n  {\n    messaging_product: \'whatsapp\',\n    to: phoneNumber,\n    type: \'text\',\n    text: { body: \'¡Hola! ¿En qué te puedo ayudar?\' }\n  },\n  { headers: { Authorization: `Bearer ${process.env.TOKEN}` } }\n);\n```',
      '## Paso 4: Añadir lógica de conversación',
      'Con los pasos anteriores ya tienes un bot que responde. Ahora puedes añadir lógica: si el mensaje contiene "precio", responde con tu lista de precios; si contiene "horario", responde con tu horario de atención. Para flujos más complejos con memoria de conversación, guarda el estado del usuario en Redis y conecta OpenAI para respuestas más naturales.',
      '## Despliegue',
      'Una vez que funciona local, despliega en Railway o Render. Ambos permiten despliegues desde GitHub con SSL automático, lo que te da el HTTPS que Meta requiere para los webhooks. El plan gratuito de Railway es suficiente para manejar cientos de usuarios simultáneos.',
      '## Conclusión',
      'En 30 minutos tienes un bot funcional conectado a WhatsApp oficial. Sin librerías no oficiales que pueden ser bloqueadas, sin riesgo de ban del número. Desde aquí el cielo es el límite: puedes integrar catálogos de productos, pagos, agendamiento, y todo lo que tu negocio necesite. Si quieres que te ayude a construir un bot personalizado para tu empresa, escríbeme.'
    ]
  }
];
