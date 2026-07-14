// Catalogo de productos Multitainer (fuente unica para las paginas /catalogo/*).
// Un solo data map alimenta el catalogo de los 3 vendedores + el central.
// Fotos ya optimizadas a webp: las de la linea industrial en public/fotos/catalogo/<slug>/,
// las del batch de proyectos en public/fotos/proyectos/<carpeta>/ (ya deployadas).
// Regla de la casa: cero guion largo en el copy.

export interface Foto {
  file: string; // stem del archivo (sin carpeta ni extension); la extension es .webp
  alt: string;
}

export interface Producto {
  slug: string;
  titulo: string;
  tipo: string; // etiqueta corta: 20', 40', Especial, Institucional, Evento, Premium, Dos plantas
  categoria: string; // id de seccion: obra | comercio | vivienda
  dir: string; // carpeta bajo /fotos/ donde viven las webp de este producto
  desc: string; // pitch de una linea
  specs: string[]; // 4-5 bullets tecnicos
  fotos: Foto[]; // [0] = hero (portada de la ficha)
}

// URL de una foto del catalogo.
export const fotoUrl = (dir: string, file: string) => `/fotos/${dir}/${file}.webp`;

// USPs del brochure, para la franja de confianza.
export const usps = [
  'Entrega en máx. 28 días',
  'Cotización rápida',
  'Llave en mano',
  'Grúas propias',
  'Cobertura nacional',
];

// Secciones del catalogo, en orden de aparicion.
export const categorias = [
  { id: 'obra', titulo: 'Obra, industria e institucional', sub: 'Los módulos que trabajan: oficinas de obra, alojamiento, sanitarios y proyectos combinados.' },
  { id: 'comercio', titulo: 'Oficinas, comercio y eventos', sub: 'Tu marca a la calle: oficinas ejecutivas, showrooms y stands que se ven.' },
  { id: 'vivienda', titulo: 'Vivienda y hospedaje', sub: 'Del contenedor a tu casa o tu posada, con terminación premium.' },
];

export const productos: Producto[] = [
  // ===================== OBRA, INDUSTRIA E INSTITUCIONAL =====================
  {
    slug: 'oficina-obra-20',
    titulo: "Oficina de obra 20'",
    tipo: "20'",
    categoria: 'obra',
    dir: 'catalogo/oficina-obra-20',
    desc: 'El clásico para arrancar la obra. Aislada, con baño y aire, lista para usar el día que llega.',
    specs: [
      "Módulo 6,00 × 2,43 × 2,60 m",
      'Revestimiento PVC + aislación isopor ignífugo 5 cm',
      'LED embutida y aire acondicionado',
      'Baño con inodoro y lavatorio',
      'Ventana Blindex y piso vinílico símil parquet',
    ],
    fotos: [
      { file: 'oficina-contenedor-20-pies-blanca-exterior-frontal-hero', alt: "Oficina de obra en contenedor de 20 pies pintada de blanco, vista frontal con puerta y ventana Blindex" },
      { file: 'oficina-contenedor-20-pies-blanca-interior-aire-acondicionado-led', alt: 'Interior de la oficina 20 pies con aire acondicionado split, LED embutida y revestimiento PVC blanco' },
      { file: 'oficina-contenedor-20-pies-blanca-interior-vacio-pvc-led', alt: 'Interior vacío de la oficina 20 pies con paredes y cielorraso en PVC blanco y piso vinílico símil parquet' },
      { file: 'oficina-contenedor-20-pies-blanca-bano-inodoro-vanitory-01', alt: 'Baño de la oficina 20 pies con inodoro y lavatorio pedestal, revestimiento PVC' },
      { file: 'oficina-contenedor-20-pies-blanca-exterior-frontal-grua-instalacion', alt: 'Oficina de obra 20 pies siendo instalada con grúa propia de Multitainer' },
    ],
  },
  {
    slug: 'oficina-doble-40',
    titulo: "Oficina doble 40'",
    tipo: "40'",
    categoria: 'obra',
    dir: 'catalogo/oficina-doble-40',
    desc: 'Dos ambientes de trabajo en un solo módulo de 40 pies, con pasillo interno y baño completo.',
    specs: [
      "Módulo 12,00 × 2,43 × 2,60 m, dos ambientes",
      'Pasillo interno que conecta las oficinas',
      'Baño completo con inodoro y lavatorio',
      'PVC, LED embutida y aire acondicionado',
      'Ventanas Blindex y piso vinílico',
    ],
    fotos: [
      { file: 'doble-oficina-contenedor-40-pies-exterior-lateral', alt: 'Oficina doble en contenedor de 40 pies blanco, vista lateral completa con ventanas Blindex' },
      { file: 'pasillo-interior-doble-oficina-piso-vinilico-led', alt: 'Pasillo interior que conecta las dos oficinas, con PVC blanco, LED embutida y piso vinílico' },
      { file: 'oficina-interior-vacia-aire-acondicionado-piso-madera', alt: 'Oficina interior vacía con aire acondicionado split, LED y revestimiento PVC blanco' },
      { file: 'bano-contenedor-inodoro-lavatorio-ventana', alt: 'Baño del módulo con inodoro, lavatorio y ventana, revestimiento PVC' },
    ],
  },
  {
    slug: 'oficina-kitchenette-40',
    titulo: "Oficina con kitchenette 40'",
    tipo: "40'",
    categoria: 'obra',
    dir: 'catalogo/oficina-kitchenette-40',
    desc: 'Oficina, cocina y baño en un solo módulo de 40 pies. Para equipos que pasan el día completo en obra.',
    specs: [
      "Módulo 12,00 × 2,43 × 2,60 m",
      'Kitchenette con mesada de granito y bacha de acero',
      'Baño completo con ducha',
      'Oficina con piso vinílico y ventanas con visera',
      'PVC + aislación isopor 5 cm',
    ],
    fotos: [
      { file: 'contenedor-40-pies-oficina-kitchenette-bano-exterior-frontal', alt: 'Contenedor de 40 pies gris con oficina, kitchenette y baño, vista exterior frontal' },
      { file: 'kitchenette-contenedor-mesada-granito-bacha-alacena', alt: 'Kitchenette en L con mesada de granito negro, bacha de acero inoxidable y muebles bajomesada' },
      { file: 'oficina-contenedor-piso-vinilico-ventanas-doble', alt: 'Oficina interior con piso vinílico símil parquet y dos ventanas de marco negro' },
      { file: 'bano-contenedor-ventana-desague-piso-vanitory', alt: 'Baño del módulo con revestimiento gris, inodoro, vanitory y ventana de ventilación' },
    ],
  },
  {
    slug: 'dormitorio-40',
    titulo: "Dormitorio y campamento 40'",
    tipo: "40'",
    categoria: 'obra',
    dir: 'catalogo/dormitorio-40',
    desc: 'Alojamiento para tu personal de obra. Hasta seis literas por módulo, aislado y con aire acondicionado.',
    specs: [
      'Hasta 6 literas metálicas por módulo',
      'Revestimiento PVC acanalado y aire acondicionado',
      'Piso vinílico símil madera',
      'Ideal obradores, campamentos y frentes de obra',
      'Branding Multitainer o del cliente opcional',
    ],
    fotos: [
      { file: 'contenedor-40-pies-exterior-logo-multitainer-herrajes', alt: 'Contenedor de 40 pies para dormitorio, vista exterior en ángulo con el logo Multitainer' },
      { file: 'dormitorio-grande-contenedor-40-pies-literas-pvc-aire', alt: 'Dormitorio grande con varias literas metálicas, PVC acanalado y aire acondicionado' },
      { file: 'dormitorio-chico-contenedor-40-pies-dos-literas-pvc', alt: 'Dormitorio con dos literas metálicas enfrentadas y revestimiento PVC blanco' },
      { file: 'dormitorio-chico-contenedor-40-pies-aire-acondicionado-pvc', alt: 'Dormitorio con litera, aire acondicionado split y revestimiento PVC acanalado' },
    ],
  },
  {
    slug: 'vestuario-20',
    titulo: "Vestuario 20'",
    tipo: "20'",
    categoria: 'obra',
    dir: 'catalogo/vestuario-20',
    desc: 'Vestuario para personal, listo para instalar. Bancos, ventilación y aire, con opción de duchas.',
    specs: [
      "Módulo 6,00 × 2,43 × 2,60 m",
      'Bancos y perchas, revestimiento PVC',
      'LED embutida y aire acondicionado',
      'Ventilación y ventana Blindex',
      'Opción con duchas incorporadas',
    ],
    fotos: [
      { file: 'vestuario-contenedor-20-pies-fachada-frontal-ventana-puerta', alt: 'Vestuario en contenedor de 20 pies, fachada frontal con ventana y puerta de acceso' },
      { file: 'vestuario-contenedor-20-pies-interior-bancos-cielorraso-pvc', alt: 'Interior del vestuario con bancos, revestimiento PVC gris y LED embutida' },
      { file: 'vestuario-contenedor-20-pies-fachada-lateral-arboles', alt: 'Vestuario contenedor 20 pies, vista lateral en tres cuartos con marcos gris oscuro' },
      { file: 'vestuario-contenedor-20-pies-interior-aire-acondicionado-ventana', alt: 'Interior del vestuario con aire acondicionado split y rejilla de ventilación' },
    ],
  },
  {
    slug: 'sanitario-duchas-40',
    titulo: "Módulo sanitario y duchas 40'",
    tipo: "40'",
    categoria: 'obra',
    dir: 'catalogo/sanitario-duchas-40',
    desc: 'Baños y duchas para obra o evento. Cubículos individuales, revestimiento lavable y ducha eléctrica.',
    specs: [
      'Duchas individuales separadas',
      'Inodoros en cubículos independientes',
      'Revestimiento PVC lavable',
      'Ducha eléctrica y ventilación alta',
      'Para obras, campamentos y eventos',
    ],
    fotos: [
      { file: 'modulo-sanitario-contenedor-40-pies-duchas-separadas-vista-frontal', alt: 'Módulo sanitario en contenedor de 40 pies con duchas separadas, vista frontal' },
      { file: 'modulo-sanitario-contenedor-40-pies-fachada-puertas-individuales', alt: 'Fachada lateral del módulo sanitario con fila de puertas individuales y ventanas basculantes' },
      { file: 'ducha-individual-interior-revestimiento-pvc-contenedor', alt: 'Interior de una ducha individual con revestimiento de paneles PVC' },
      { file: 'modulo-sanitario-contenedor-40-pies-vista-lateral-completa', alt: 'Vista lateral completa del módulo sanitario de 40 pies con puertas individuales' },
    ],
  },
  {
    slug: 'puesto-control',
    titulo: 'Puesto de control multi-módulo',
    tipo: 'Especial',
    categoria: 'obra',
    dir: 'catalogo/puesto-control',
    desc: 'Proyectos combinados a medida. Varios módulos, dos pisos, oficinas y dormitorios en una sola instalación.',
    specs: [
      'Combinación de módulos, hasta dos pisos',
      'Oficinas, dormitorios y baño integrados',
      'Pasarela y escalera metálica',
      'Instalación en obra con grúa propia',
      'Apto uso institucional (referencia: SENAVE)',
    ],
    fotos: [
      { file: 'puesto-control-exterior-frontal-completo-senave', alt: 'Puesto de control multi-módulo de dos pisos instalado en frontera, con logos institucionales SENAVE' },
      { file: 'puesto-control-pasarela-bienvenidos-paraguay-cisterna', alt: 'Puesto de control desde la pasarela, con el cartel Bienvenidos a Paraguay y un camión cisterna' },
      { file: 'puesto-control-camion-multitainer-fila-cisternas', alt: 'Camión de Multitainer frente al puesto de control ya instalado, con fila de cisternas' },
      { file: 'dormitorio-camas-embaladas-aire-acondicionado', alt: 'Dormitorio del puesto de control con camas nuevas embaladas y aire acondicionado' },
    ],
  },
  {
    slug: 'aulas-edificios',
    titulo: 'Aulas y edificios modulares',
    tipo: 'Institucional',
    categoria: 'obra',
    dir: 'proyectos/aulas-oficinas-modulares',
    desc: 'Aulas, oficinas y edificios para instituciones. Se apilan en dos niveles y se instalan en cualquier punto del país.',
    specs: [
      'Módulos combinables, hasta dos niveles',
      'Aulas, oficinas o salas según uso',
      'Estructura calculada y terminación completa',
      'Para sector público, escuelas y empresas',
      'Instalación nacional con grúa propia',
    ],
    fotos: [
      { file: 'edificio-modular-contenedor-blanco-oficinas-dos-niveles__036', alt: 'Edificio modular de contenedores blancos de dos niveles para oficinas institucionales' },
      { file: 'aula-movil-contenedor-blanco-unicef-gobierno-mural__109', alt: 'Aula móvil en contenedor blanco con mural, para uso institucional y educativo' },
      { file: 'hilera-modulos-contenedor-blancos-institucional__045', alt: 'Hilera de módulos de contenedor blancos instalados en un predio institucional' },
      { file: 'modulos-contenedor-blancos-aulas-institucional-predio__072', alt: 'Módulos de contenedor blancos usados como aulas en un predio institucional' },
    ],
  },

  // ===================== OFICINAS, COMERCIO Y EVENTOS =====================
  {
    slug: 'oficina-premium-40',
    titulo: "Oficina ejecutiva premium 40'",
    tipo: "40'",
    categoria: 'comercio',
    dir: 'catalogo/oficina-premium-40',
    desc: 'La cara corporativa de tu empresa en contenedor. Terminación premium, sala de directorio y oficinas privadas.',
    specs: [
      'Terminación premium en microcemento y madera',
      'Sala de directorio + oficinas privadas',
      'Kitchenette y baño con deco',
      'Opción elevada sobre pilotes, con escalera',
      'Diseño y branding a medida, llave en mano',
    ],
    fotos: [
      { file: 'oficina-contenedor-40-pies-elevada-vista-frontal-completa', alt: 'Oficina ejecutiva en contenedor de 40 pies elevada sobre pilotes de madera, vista frontal completa' },
      { file: 'sala-reuniones-contenedor-oficina-mesa-directorio-tv-ventanales', alt: 'Sala de reuniones con mesa de directorio, sillas ejecutivas, TV y ventanales' },
      { file: 'oficina-privada-contenedor-escritorio-madera-deco-plantas', alt: 'Oficina privada con escritorio ejecutivo de madera, aire acondicionado y decoración' },
      { file: 'oficina-contenedor-elevada-pilotes-madera-escalera-cochera', alt: 'Oficina contenedor elevada sobre pilotes con escalera metálica y cochera debajo' },
    ],
  },
  {
    slug: 'oficina-comtel',
    titulo: 'Oficina comercial con marca',
    tipo: "40'",
    categoria: 'comercio',
    dir: 'proyectos/oficina-comtel',
    desc: 'Tu marca a la calle. Oficina comercial con frente vidriado, letras corporativas y patio, como la que hicimos para Comtel.',
    specs: [
      'Módulos unidos con frente vidriado',
      'Letras y branding corporativo a medida',
      'Entrada vidriada y patio con planteras',
      'Terminación comercial lista para atender',
      'Proyecto real: Comtel, Asunción',
    ],
    fotos: [
      { file: 'oficina-comercial-contenedor-comtel-ventanas-espejadas__076', alt: 'Oficina comercial en contenedor para Comtel, con ventanas espejadas y frente vidriado' },
      { file: 'oficina-comercial-contenedor-comtel-letras-acero__078', alt: 'Fachada de la oficina Comtel con letras corporativas de acero' },
      { file: 'oficina-contenedor-blanca-entrada-vidriada-comercial__059', alt: 'Entrada vidriada de oficina comercial en contenedor blanco' },
      { file: 'oficina-comercial-contenedor-marca-comtel__065', alt: 'Oficina en contenedor con la marca Comtel a la calle' },
    ],
  },
  {
    slug: 'showroom-40',
    titulo: "Showroom comercial 40'",
    tipo: "40'",
    categoria: 'comercio',
    dir: 'catalogo/showroom-40',
    desc: 'Tu local o vidriera en contenedor. Frente vidriado, apertura al público y terminación comercial a medida.',
    specs: [
      'Frente vidriado tipo vidriera',
      'Apertura amplia al público',
      'Terminación comercial a medida',
      'Branding e iluminación incluidos',
      'Base para local, stand o punto de venta',
    ],
    fotos: [
      { file: 'showroom-contenedor-40-pies-fachada-frontal-jdm-shop', alt: 'Showroom en contenedor de 40 pies con frente vidriado y banda superior negra, fachada frontal' },
      { file: 'showroom-contenedor-40-pies-fachada-pileta-exterior', alt: 'Fachada del showroom contenedor desde un ángulo cerrado, con frente acristalado' },
      { file: 'showroom-contenedor-40-pies-patio-industrial-contexto', alt: 'Showroom contenedor 40 pies instalado, con contexto de patio industrial de fondo' },
      { file: 'showroom-contenedor-40-pies-puerta-original-herrajes', alt: 'Extremo del showroom contenedor mostrando las puertas originales de container y sus herrajes' },
    ],
  },
  {
    slug: 'stand-eventos',
    titulo: 'Stand para eventos',
    tipo: 'Evento',
    categoria: 'comercio',
    dir: 'proyectos/stand-evento-personal-flow',
    desc: 'Stands y activaciones que se ven. Dos plantas, iluminación LED y terraza, del render al armado, como el de Personal y Samsung.',
    specs: [
      'Stand de una o dos plantas',
      'Iluminación LED y terraza',
      'Diseño de marca del render al armado',
      'Impacto visual para ferias y activaciones',
      'Proyecto real: Personal Flow + Samsung',
    ],
    fotos: [
      { file: 'showroom-contenedor-personal-flow-samsung-mission-rock-noche__117', alt: 'Stand de dos plantas en contenedor para Personal Flow y Samsung, iluminado de noche' },
      { file: 'showroom-contenedor-dos-plantas-led-evento-nocturno__034', alt: 'Stand de contenedor de dos plantas con iluminación LED en un evento nocturno' },
      { file: 'showroom-contenedor-personal-flow-led-azul-publico__157', alt: 'Stand Personal Flow con iluminación LED azul y público en el evento' },
      { file: 'render-stand-contenedor-personal-flow-samsung__080', alt: 'Render de diseño del stand de contenedores para Personal Flow y Samsung' },
    ],
  },

  // ===================== VIVIENDA Y HOSPEDAJE =====================
  {
    slug: 'casa-lujo',
    titulo: 'Casa de lujo en contenedor',
    tipo: 'Premium',
    categoria: 'vivienda',
    dir: 'proyectos/casa-lujo-pabellon-vidrio',
    desc: 'La casa en contenedor que no parece contenedor. Pabellón de vidrio piso a techo, cocina con isla y pileta integrada al jardín.',
    specs: [
      'Varios contenedores integrados',
      'Pabellón de vidrio piso a techo',
      'Cocina con isla y galería de porcelanato',
      'Pileta integrada al jardín',
      'Terminación premium llave en mano',
    ],
    fotos: [
      { file: 'casa-contenedor-lujo-pileta-atardecer-pabellon-vidrio__058', alt: 'Casa de lujo en contenedor con pileta y pabellón de vidrio al atardecer' },
      { file: 'living-casa-contenedor-lujo-pabellon-vidrio-pileta-sofa-gris__048', alt: 'Living de la casa de lujo con pabellón de vidrio abierto a la pileta' },
      { file: 'cocina-lujo-casa-contenedor-vigas-acero-madera-colgantes__052', alt: 'Cocina de lujo en casa contenedor con vigas de acero y lámparas colgantes' },
      { file: 'casa-contenedor-lujo-galeria-atardecer-living-exterior__032', alt: 'Galería de la casa de lujo al atardecer, con living exterior' },
    ],
  },
  {
    slug: 'casa-dos-plantas',
    titulo: 'Casa de dos plantas',
    tipo: 'Dos plantas',
    categoria: 'vivienda',
    dir: 'proyectos/casa-dos-plantas',
    desc: 'El doble de casa sin ocupar más terreno. Contenedores apilados con revestimiento de piedra, escalera de hormigón y carport.',
    specs: [
      'Contenedores apilados en dos plantas',
      'Revestimiento de piedra y terminación completa',
      'Escalera de hormigón y carport',
      'Más metros en el mismo lote',
      'Estructura calculada llave en mano',
    ],
    fotos: [
      { file: 'casa-contenedor-dos-plantas-gris-piedra-palmeras__003', alt: 'Casa de dos plantas en contenedor con revestimiento de piedra y palmeras' },
      { file: 'casa-contenedor-dos-plantas-gris-escalera-hormigon__005', alt: 'Casa de dos plantas en contenedor con escalera de hormigón' },
      { file: 'casa-contenedor-dos-plantas-negra-carport__007', alt: 'Casa de dos plantas en contenedor pintada de negro con carport' },
      { file: 'casa-contenedor-dos-plantas-gris-frente-palmeras__010', alt: 'Frente de la casa de dos plantas en contenedor con palmeras' },
    ],
  },
  {
    slug: 'cabana-hospedaje',
    titulo: 'Cabaña y hospedaje',
    tipo: "40'",
    categoria: 'vivienda',
    dir: 'proyectos/cabana-blanca-quincho',
    desc: 'Cabaña llave en mano para hospedaje o descanso. Deck de hierro, quincho con horno de leña e integrada al jardín.',
    specs: [
      'Contenedor de 40 pies terminado',
      'Deck y pérgola de hierro',
      'Quincho con horno de leña',
      'Ideal posadas, Airbnb y casas de fin de semana',
      'Lista para habitar, integrada al jardín',
    ],
    fotos: [
      { file: 'cabana-contenedor-blanca-pergola-hierro-deck__002', alt: 'Cabaña blanca en contenedor con pérgola de hierro y deck' },
      { file: 'deck-hierro-cabana-blanca-horno-faroles__009', alt: 'Deck de hierro de la cabaña con horno de leña y faroles' },
      { file: 'casa-contenedor-blanca-deck-amplio-puerta-madera__004', alt: 'Cabaña blanca en contenedor con deck amplio y puerta de madera' },
      { file: 'cabana-contenedor-crema-elevada-deck-baranda__014', alt: 'Cabaña en contenedor color crema elevada, con deck y baranda' },
    ],
  },
];
