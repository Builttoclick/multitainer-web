// Los servicios de Multitainer, en orden de prioridad.
// Construcción modular = servicio ESTRELLA y primero. Slugs preservados del sitio viejo (rankean).
// Copy basado en la página de servicios real del sitio viejo.
export interface Bloque { h2: string; parrafos?: string[]; lista?: string[]; }
export interface Faq { q: string; a: string; }
export interface Servicio {
  slug: string;
  nombre: string;
  categoria: string;
  estrella?: boolean;
  icon: string;
  foto: string;
  fotoAlt: string;
  metaTitle: string;
  titleTail: string;
  metaDesc: string;
  hero: string;
  intro: string[];
  bloques: Bloque[];
  destacados: string[];
  faqs: Faq[];
  categoriasProyecto: string[];
}

export const servicios: Servicio[] = [
  {
    slug: 'modificacion',
    nombre: 'Construcción modular',
    categoria: 'Construcción modular con contenedores',
    estrella: true,
    icon: '<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>',
    foto: '/fotos/int-porcelanato-led.jpg',
    fotoAlt: 'Interior de oficina en contenedor terminado con porcelanato e iluminación LED — Multitainer',
    metaTitle: 'Construcción modular con contenedores en Paraguay',
    titleTail: 'casas, oficinas, vestuarios y showrooms en contenedor, llave en mano cerca tuyo',
    metaDesc: 'Construcción modular con contenedores marítimos en Asunción y Gran Asunción: casas, oficinas, obradores, vestuarios y showrooms llave en mano. Equipo técnico propio. Cotización en 24 h.',
    hero: 'Tomamos contenedores marítimos y los transformamos en espacios terminados, listos para usar desde el día de entrega.',
    intro: [
      'Este es el corazón de lo que hacemos y el servicio que más nos diferencia. La construcción modular con contenedores es exactamente lo que suena: tomamos contenedores marítimos de 20 o 40 pies y los convertimos en espacios habitables y funcionales, completamente terminados.',
      'Cada proyecto es llave en mano: revestimiento térmico, instalación eléctrica certificada, sanitaria completa, pisos terminados, ventanas, puertas, aire acondicionado y acabados exteriores. Todo incluido, todo ejecutado por nuestro propio equipo.',
    ],
    bloques: [
      {
        h2: 'Qué construimos en contenedor',
        lista: [
          'Casas de contenedor: de una vivienda compacta de un módulo a casas de varios contenedores combinados.',
          'Oficinas para empresas, estudios profesionales o espacios de trabajo en obra.',
          'Obradores resistentes, equipados y trasladables cuando termina la obra.',
          'Showrooms y stands para ferias, eventos y locales comerciales con identidad fuerte.',
          'Depósitos y almacenamiento seguro, ventilado y con acceso controlado.',
          'Baños y vestuarios: módulos sanitarios completos para obras y eventos.',
          'Habitaciones y ampliaciones rápidas, sin tocar la construcción existente.',
        ],
      },
      {
        h2: 'Llave en mano, ejecutado por nuestro equipo',
        parrafos: [
          'No subcontratamos. Arquitectos, ingenieros, soldadores, electricistas, plomeros y especialistas en terminaciones trabajan bajo el mismo techo, coordinados internamente. Eso significa menos demoras, menos fricciones y más control sobre el resultado.',
        ],
      },
    ],
    destacados: [
      'Casas, oficinas, obradores, showrooms y más',
      'Llave en mano: eléctrica, sanitaria, aire y pisos',
      'Equipo técnico propio, sin subcontratar',
      'Cotización en 24 horas',
    ],
    faqs: [
      { q: '¿Se puede hacer una casa de verdad con contenedores?', a: 'Sí. Una casa de contenedor bien ejecutada es una vivienda real, confortable y durable, desde un módulo compacto hasta varios contenedores combinados con múltiples ambientes.' },
      { q: '¿En cuánto tiempo recibo una cotización?', a: 'En 24 horas desde el primer contacto. No importa la complejidad del proyecto, en un día hábil tenés una propuesta con números reales.' },
      { q: '¿Qué necesito para empezar un proyecto?', a: 'Solo contarnos qué necesitás: tipo de espacio, uso previsto y ubicación aproximada. Si tenés planos o referencias, mejor, pero no son obligatorios para empezar.' },
    ],
    categoriasProyecto: ['oficina', 'vestuario', 'showroom', 'obrador', 'bano', 'dos-plantas'],
  },
  {
    slug: 'alquiler',
    nombre: 'Alquiler de módulos',
    categoria: 'Alquiler de módulos y contenedores',
    icon: '<rect x="2" y="7" width="20" height="11" rx="1"/><path d="M6 7v11M10 7v11M14 7v11M18 7v11"/>',
    foto: '/fotos/exterior-modulo-oficina.jpg',
    fotoAlt: 'Módulo de oficina en contenedor equipado listo para alquiler — Multitainer',
    metaTitle: 'Alquiler de módulos y contenedores en Paraguay',
    titleTail: 'oficinas y módulos equipados en alquiler, entrega en 1 a 2 días cerca tuyo',
    metaDesc: 'Alquiler de módulos equipados en Asunción y Gran Asunción: oficinas, showrooms y módulos listos en stock, con entrega en 1 a 2 días hábiles. Aire, eléctrica y baño incluidos. Cotización en 24 h.',
    hero: 'Cuando necesitás un espacio funcional ya: módulos de 20 y 40 pies equipados, listos en stock.',
    intro: [
      'Tenemos módulos de 20 y 40 pies completamente equipados, listos en stock, con entrega en 1 a 2 días hábiles en Asunción y alrededores. No hay tiempo de espera por construcción porque el módulo ya está terminado.',
      'El proceso es directo: llamás, confirmamos disponibilidad y coordinamos la entrega.',
    ],
    bloques: [
      {
        h2: 'Cada módulo incluye, sin excepción',
        lista: [
          'Aire acondicionado instalado y funcionando.',
          'Revestimiento térmico interior.',
          'Instalación eléctrica completa.',
          'Pisos terminados.',
          'Baño completo con grifería (donde aplica).',
        ],
      },
      {
        h2: 'Tipos de módulos en alquiler',
        lista: [
          'Oficinas equipadas, listas para trabajar.',
          'Showrooms con frente abierto para ferias y eventos.',
          'Módulos desmontables para instalaciones temporales.',
        ],
      },
    ],
    destacados: [
      'Entrega en 1 a 2 días hábiles',
      'Módulos 100% equipados',
      'Oficinas, showrooms y dormitorios',
      'Sin tiempo de obra',
    ],
    faqs: [
      { q: '¿Cuál es el servicio más rápido que ofrecen?', a: 'El alquiler de módulos. Tenemos unidades en stock completamente equipadas con entrega en 1 a 2 días hábiles en Asunción y Mariano Roque Alonso. Es la solución más rápida del mercado.' },
      { q: '¿Puedo alquilar un módulo y después comprarlo?', a: 'Es algo que podemos evaluar. Contanos los detalles de tu situación y armamos una propuesta que tenga sentido para lo que necesitás.' },
    ],
    categoriasProyecto: ['oficina', 'obrador', 'campamento'],
  },
  {
    slug: 'venta',
    nombre: 'Venta de contenedores',
    categoria: 'Venta de contenedores',
    icon: '<rect x="2" y="7" width="20" height="11" rx="1"/><path d="M2 11h20"/><path d="M7 7V5h10v2"/>',
    foto: '/fotos/exterior-edificio-modular.jpg',
    fotoAlt: 'Contenedores marítimos verificados para la venta — Multitainer',
    metaTitle: 'Venta de contenedores marítimos en Paraguay',
    titleTail: 'contenedores usados de 20 y 40 pies, verificados y con entrega cerca tuyo',
    metaDesc: 'Venta de contenedores marítimos usados de 20 y 40 pies en Asunción y todo Paraguay: estado verificado, entrega con grúa propia e instalación incluida. Modificables después. Cotización en 24 h.',
    hero: 'Contenedores usados de 20 y 40 pies, verificados por nuestro equipo, con entrega e instalación incluidas.',
    intro: [
      'Para quien necesita el contenedor sin modificaciones, listo para uso propio o como base para un proyecto. Vendemos contenedores usados de 20 y 40 pies, verificados antes de cada venta.',
      'No son fotos de archivo ni descripciones genéricas: verificamos el estado real de cada unidad y te informamos exactamente lo que vas a recibir. La entrega se hace con nuestras grúas propias, así no tenés que resolver la logística.',
    ],
    bloques: [
      {
        h2: 'Verificado antes de venderlo',
        lista: [
          'Estructura.',
          'Piso.',
          'Techo.',
          'Puertas.',
          'Estanqueidad interior.',
        ],
      },
      {
        h2: '¿Querés modificarlo después?',
        parrafos: [
          'Si en algún momento querés convertirlo en una oficina, una casa o cualquier otro espacio, nuestro equipo de construcción modular puede intervenir el contenedor cuando estés listo, sin necesidad de empezar con otro proveedor.',
        ],
      },
    ],
    destacados: [
      'Usados de 20 y 40 pies',
      'Estado verificado y documentado',
      'Entrega con grúa propia',
      'Modificable después con el mismo equipo',
    ],
    faqs: [
      { q: '¿Venden contenedores nuevos o usados?', a: 'Solo usados. Todos verificados por nuestro equipo antes de la venta: estructura, piso, techo, puertas y estanqueidad interior, con información real sobre cada unidad.' },
      { q: '¿Puedo comprar un contenedor y modificarlo después con ustedes?', a: 'Sí, y es habitual. Lo comprás hoy, lo instalás en tu terreno, y cuando estés listo cotizás la modificación. El mismo equipo lo interviene sin que tengas que empezar con otro proveedor.' },
    ],
    categoriasProyecto: ['oficina', 'obrador'],
  },
  {
    slug: 'transporte',
    nombre: 'Transporte y logística',
    categoria: 'Transporte de contenedores',
    icon: '<path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',
    foto: '/fotos/exterior-obrador.jpg',
    fotoAlt: 'Módulo de contenedor entregado e instalado en obra — Multitainer',
    metaTitle: 'Transporte e instalación de contenedores en Paraguay',
    titleTail: 'grúas y vehículos propios, entrega e instalación en todo el país cerca tuyo',
    metaDesc: 'Transporte e instalación de contenedores con grúas y vehículos propios, cobertura en todo Paraguay y entrega en 1 a 2 días. También transporte de contenedores para terceros. Cotización en 24 h.',
    hero: 'Grúas y vehículos propios. Entregamos e instalamos en todo Paraguay, y movemos contenedores para terceros.',
    intro: [
      'La logística es uno de los puntos donde más se pierde calidad en el mercado de contenedores. Muchos proveedores venden o construyen, pero la entrega queda en manos de terceros que no conocen el proyecto. En Multitainer el transporte es 100% interno: grúas propias y vehículos propios.',
      'La instalación la hace el mismo equipo que conoce el proyecto, con cobertura nacional real: entregamos e instalamos en cualquier punto del país, no solo en la zona de Asunción.',
    ],
    bloques: [
      {
        h2: 'Qué significa logística propia',
        lista: [
          'La instalación la hace el mismo equipo que conoce el proyecto.',
          'Una sola empresa, una sola responsabilidad.',
          'Cobertura nacional real, en todo Paraguay.',
          'Más cuidado en la instalación: cuando la grúa es tuya, el contenedor se trata diferente.',
        ],
      },
      {
        h2: 'Transporte para terceros',
        parrafos: [
          'Cuando las grúas no están ocupadas en proyectos propios, ofrecemos servicio de transporte de contenedores para terceros, útil para empresas que necesitan mover unidades sin tener flota propia.',
        ],
      },
    ],
    destacados: [
      'Grúas y vehículos propios',
      'Entrega e instalación en 1 a 2 días',
      'Cobertura en todo Paraguay',
      'Transporte de contenedores para terceros',
    ],
    faqs: [
      { q: '¿Hacen entregas en el interior de Paraguay?', a: 'Sí. Tenemos grúas y logística propia y operamos en todo el país. El costo de traslado varía según la distancia y siempre se detalla en la cotización inicial.' },
      { q: '¿Transportan contenedores que no son de ustedes?', a: 'Sí. Cuando las grúas están disponibles ofrecemos transporte de contenedores para terceros, ideal para empresas que necesitan mover unidades sin flota propia.' },
    ],
    categoriasProyecto: ['obrador'],
  },
];

export const getServicio = (slug: string) => servicios.find((s) => s.slug === slug);
