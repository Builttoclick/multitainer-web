// Los 3 servicios de Multitainer. Slugs PRESERVADOS del sitio viejo (rankean) — NO cambiar.
// Copy a nivel borrador/placeholder: estructura completa, profundidad final en el pass de authority-pages.
export interface Bloque { h2: string; parrafos?: string[]; lista?: string[]; }
export interface Faq { q: string; a: string; }
export interface Servicio {
  slug: string;
  nombre: string;        // nombre corto (cards, nav, footer)
  categoria: string;     // keyword para H1 (la página le suma la ciudad)
  icon: string;          // inner SVG paths (viewBox 0 0 24 24)
  foto: string;          // /fotos/...
  fotoAlt: string;
  metaTitle: string;     // prefijo del <title>
  titleTail: string;     // cola del <title>
  metaDesc: string;
  hero: string;          // bajada corta
  intro: string[];
  bloques: Bloque[];
  destacados: string[];
  faqs: Faq[];
  // categorías de proyecto relacionadas (interlink servicio -> proyectos)
  categoriasProyecto: string[];
}

const CIUDAD = 'Gran Asunción';

export const servicios: Servicio[] = [
  {
    slug: 'alquiler',
    nombre: 'Alquiler de módulos',
    categoria: 'Alquiler de contenedores y módulos',
    icon: '<rect x="2" y="7" width="20" height="11" rx="1"/><path d="M6 7v11M10 7v11M14 7v11M18 7v11"/>',
    foto: '/fotos/exterior-modulo-oficina.jpg',
    fotoAlt: 'Módulo de oficina en contenedor marítimo listo para entrega — Multitainer',
    metaTitle: 'Alquiler de contenedores y módulos en Paraguay',
    titleTail: 'oficinas, obradores y módulos equipados en alquiler cerca tuyo',
    metaDesc: 'Alquiler de contenedores y módulos equipados en Asunción y Gran Asunción: oficinas, obradores y depósitos listos para usar. Entrega e instalación en obra. Cotización en 24 h.',
    hero: 'Oficinas, obradores y módulos equipados listos para usar. Los entregamos e instalamos en tu obra.',
    intro: [
      'El alquiler de módulos es la forma más rápida de sumar espacio sin invertir en obra fija. Te entregamos un contenedor marítimo ya acondicionado —oficina, obrador o depósito— y lo instalamos en tu predio listo para trabajar desde el primer día.',
      'En Multitainer manejamos unidades de 20 y 40 pies, con revestimiento interior, aislación, instalación eléctrica y aberturas. Coordinamos el traslado y la colocación en todo el Gran Asunción.',
    ],
    bloques: [
      {
        h2: '¿Para qué se usa un módulo en alquiler?',
        lista: [
          'Oficinas de obra y obradores para empresas constructoras.',
          'Depósitos seguros para herramientas, materiales y mercadería.',
          'Casetas de seguridad, control y portería.',
          'Espacios temporales para eventos, ferias y campañas.',
        ],
      },
    ],
    destacados: [
      'Unidades de 20 y 40 pies equipadas',
      'Entrega e instalación en obra',
      'Contratos flexibles por mes',
      'Cobertura en todo el Gran Asunción',
    ],
    faqs: [
      { q: '¿El módulo viene listo para usar?', a: 'Sí. Las unidades de alquiler vienen acondicionadas (revestimiento, aberturas e instalación eléctrica básica) y se entregan instaladas en tu obra. Si necesitás algo específico lo coordinamos antes.' },
      { q: '¿Cómo se traslada e instala?', a: 'Nos encargamos del transporte y la colocación con el equipo adecuado. Solo necesitamos un acceso y una superficie nivelada en el predio.' },
    ],
    categoriasProyecto: ['oficina', 'obrador', 'campamento'],
  },
  {
    slug: 'venta',
    nombre: 'Venta de contenedores',
    categoria: 'Venta de contenedores',
    icon: '<rect x="2" y="7" width="20" height="11" rx="1"/><path d="M2 11h20"/><path d="M7 7V5h10v2"/>',
    foto: '/fotos/exterior-edificio-modular.jpg',
    fotoAlt: 'Contenedores marítimos para la venta — Multitainer',
    metaTitle: 'Venta de contenedores marítimos en Paraguay',
    titleTail: 'contenedores de 20 y 40 pies, nuevos y usados, con entrega cerca tuyo',
    metaDesc: 'Venta de contenedores marítimos de 20 y 40 pies, nuevos y usados, en Asunción y Gran Asunción. Para depósito, obra o proyecto modular. Entrega en obra. Cotización en 24 h.',
    hero: 'Contenedores marítimos de 20 y 40 pies, nuevos y usados, con entrega en todo el Gran Asunción.',
    intro: [
      'Vendemos contenedores marítimos en distintos estados y medidas, para que elijas el que mejor se ajusta a tu proyecto: depósito, base de obra, o punto de partida para una construcción modular a medida.',
      'Te asesoramos sobre el tipo y el estado de contenedor según el uso y el presupuesto, y coordinamos la entrega en tu predio en todo el Gran Asunción.',
    ],
    bloques: [
      {
        h2: 'Qué contenedores vendemos',
        lista: [
          'Contenedores de 20 pies, ideales para depósito y espacios compactos.',
          'Contenedores de 40 pies para grandes volúmenes o proyectos modulares.',
          'Unidades nuevas (one-trip) y usadas en buen estado.',
          'Opción de acondicionamiento y modificación a medida (ver Modificación).',
        ],
      },
    ],
    destacados: [
      'Medidas de 20 y 40 pies',
      'Nuevos y usados',
      'Asesoramiento según el uso',
      'Entrega en obra',
    ],
    faqs: [
      { q: '¿Conviene un contenedor nuevo o usado?', a: 'Depende del uso. Para depósito, un usado en buen estado rinde perfecto y es más económico. Para una oficina o un proyecto a la vista, un contenedor nuevo (one-trip) parte de una mejor base. Te asesoramos según tu caso.' },
      { q: '¿Entregan el contenedor en mi predio?', a: 'Sí, coordinamos el transporte y la descarga en tu obra o predio en todo el Gran Asunción. Solo necesitamos acceso para el camión.' },
    ],
    categoriasProyecto: ['oficina', 'obrador'],
  },
  {
    slug: 'modificacion',
    nombre: 'Modificación a medida',
    categoria: 'Modificación y construcción modular',
    icon: '<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>',
    foto: '/fotos/int-porcelanato-led.jpg',
    fotoAlt: 'Interior de oficina en contenedor con porcelanato e iluminación LED — Multitainer',
    metaTitle: 'Modificación y construcción modular en contenedores',
    titleTail: 'oficinas, vestuarios y showrooms en contenedor, llave en mano cerca tuyo',
    metaDesc: 'Modificación de contenedores y construcción modular llave en mano en Asunción y Gran Asunción: oficinas, vestuarios, showrooms y obradores a medida. Diseño, obra y entrega. Cotización en 24 h.',
    hero: 'Diseñamos y construimos tu oficina, vestuario o showroom en contenedor, llave en mano.',
    intro: [
      'Acá está el corazón de Multitainer: transformamos contenedores marítimos en espacios terminados y funcionales. Diseñamos, fabricamos e instalamos oficinas, vestuarios, showrooms, baños y obradores completos, listos para usar.',
      'Trabajamos llave en mano: nos encargamos del revestimiento, la aislación térmica, el piso, las aberturas, la electricidad, el aire acondicionado y la terminación, según el proyecto que armemos juntos. Entregamos la unidad instalada en tu predio.',
    ],
    bloques: [
      {
        h2: 'Qué construimos en contenedor',
        lista: [
          'Oficinas individuales o unidas (varios contenedores conectados).',
          'Vestuarios y sanitarios para obras, clubes y empresas.',
          'Showrooms y locales comerciales a la vista.',
          'Obradores y campamentos con varias habitaciones y depósito.',
          'Baños equipados con revestimiento y blindex.',
        ],
      },
      {
        h2: 'Llave en mano, de principio a fin',
        parrafos: [
          'Partimos del contenedor crudo y entregamos el espacio terminado: revestimiento interior en PVC o durlock, aislación, piso vinílico o porcelanato, ventanas, puertas, instalación eléctrica e iluminación, y aire acondicionado. Vos definís la terminación; nosotros nos ocupamos de toda la obra.',
        ],
      },
    ],
    destacados: [
      'Diseño y obra llave en mano',
      'Oficinas, vestuarios, showrooms y obradores',
      'Aislación, revestimiento y terminación a medida',
      'Entrega instalada en tu predio',
    ],
    faqs: [
      { q: '¿Cuánto tarda una construcción modular?', a: 'Depende del tamaño y la terminación, pero al fabricarse en taller los plazos son mucho más cortos que una obra tradicional. Te damos un plazo concreto al cotizar, en general en 24 horas.' },
      { q: '¿Puedo unir varios contenedores?', a: 'Sí. Unimos dos o más contenedores para lograr espacios más amplios —oficinas, obradores de varias habitaciones, edificios de dos plantas— con la estructura reforzada para eso.' },
      { q: '¿Incluye baño, electricidad y aire acondicionado?', a: 'Sí, según el proyecto. Trabajamos llave en mano e incluimos baño, instalación eléctrica, iluminación y climatización cuando el espacio lo requiere.' },
    ],
    categoriasProyecto: ['oficina', 'vestuario', 'showroom', 'obrador', 'bano', 'dos-plantas'],
  },
];

export const getServicio = (slug: string) => servicios.find((s) => s.slug === slug);
