// Datos centrales del negocio — fuente única de verdad para NAP, links y schema.
// NAP canónico (idéntico en header/footer/schema):
// Multitainer · Gral. Patricio Escobar c/ Gral. J. M. Bruguez, Mariano Roque Alonso 111008
// · (021) 753 900 · recepcion@multitainer.com.py · Lun–Vie 07:00–17:30
export const site = {
  name: 'MULTITAINER',
  legalName: 'Multitainer S.A.',
  tagline: 'Construimos con contenedores',
  url: 'https://multitainer.com.py',
  // NAP
  city: 'Mariano Roque Alonso',
  region: 'Central',
  country: 'PY',
  founded: 2010, // "Pioneros en modificaciones desde 2010"
  addressStreet: 'Gral. Patricio Escobar c/ Gral. J. M. Bruguez',
  addressFull: 'Gral. Patricio Escobar c/ Gral. J. M. Bruguez, Mariano Roque Alonso 111008',
  postalCode: '111008',
  phone: '(021) 753 900',
  phoneIntl: '59521753900', // línea fija, para tel:
  whatsappLabel: '0981 223 938',
  whatsappIntl: '595981223938',
  whatsapp: 'https://wa.me/595981223938',
  email: 'recepcion@multitainer.com.py',
  hours: 'Lun–Vie 07:00–17:30',
  // redes reales (del sitio viejo)
  facebook: 'https://www.facebook.com/multitainer',
  instagram: 'https://www.instagram.com/multitainersa',
  // GBP embed real ("Multitainer S.A. Deposito Contenedores", del sitio viejo)
  gbpEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8235747862727!2d-57.52472662470346!3d-25.209171524190715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da442641ba9c3%3A0xb5a38b5d1760beb6!2sMultitainer%20S.A.%20Deposito%20Contenedores!5e0!3m2!1ses!2spy!4v1773322894718!5m2!1ses!2spy',
  // coords reales del GBP (MRA)
  geo: { lat: -25.2091715, lng: -57.5247266 },
} as const;

export const nav = [
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Proyectos', href: '/proyectos/' },
  { label: 'Áreas', href: '/areas-de-servicio/' },
  { label: 'Nosotros', href: '/sobre-nosotros/' },
  { label: 'Contacto', href: '/contacto/' },
];

// URL de WhatsApp con mensaje pre-cargado
export const waLink = (msg = 'Hola Multitainer, quiero una cotización.') =>
  `${site.whatsapp}?text=${encodeURIComponent(msg)}`;

// Equipo (del sitio viejo). Iniciales para el avatar monograma.
export const team = [
  { nombre: 'Marco Kroker', rol: 'Director', ini: 'MK' },
  { nombre: 'Raquel Leaño', rol: 'Gerente Administrativa y Financiera', ini: 'RL' },
  { nombre: 'Noelia Olmedo', rol: 'Jefa de Taller', ini: 'NO' },
  { nombre: 'Personal calificado', rol: 'Soldadores, pintores y choferes', ini: '+' },
];

// Equipo técnico propio (sin subcontratar)
export const equipoTecnico = 'arquitectos, ingenieros, soldadores, electricistas, plomeros y especialistas en terminaciones';
