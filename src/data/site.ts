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
  // redes — PENDIENTE confirmar handles reales con Marco
  facebook: '',
  instagram: '',
  // GBP embed — PENDIENTE: pegar el embed real del Google Business Profile
  gbpEmbed: '',
  // coords aprox. de MRA — PENDIENTE confirmar con el pin del GBP
  geo: { lat: -25.2010, lng: -57.5320 },
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
