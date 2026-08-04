// Vendedores de Multitainer para el catalogo web con routing de WhatsApp por asesor.
// Cada vendedor tiene su URL /catalogo/<slug> con el MISMO catalogo, pero todos los
// botones "Cotizar por WhatsApp" apuntan a SU numero (no al central de site.ts).
// Asi cada asesor reparte su link y los leads le caen directo (y GA4 atribuye por vendedor).
export interface Vendedor {
  slug: string;
  nombre: string;
  whatsappIntl: string; // formato wa.me sin + ni espacios
  whatsappLabel: string; // formato lindo para mostrar
  email: string;
  // activo=false lo saca del REPARTO AUTOMATICO (/whatsapp y /links), pero NO borra
  // su pagina /catalogo/<slug>: ese link lo reparte el asesor a mano y tiene que
  // seguir andando aunque este de vacaciones. Para sacarlo de la rotacion alcanza
  // con poner false aca; ojo que /whatsapp tiene su propia copia del array (es un
  // HTML suelto fuera de Astro) y hay que tocar los dos lados.
  activo: boolean;
}

export const vendedores: Vendedor[] = [
  { slug: 'carlos', nombre: 'Carlos González', whatsappIntl: '595986641000', whatsappLabel: '0986 641 000', email: 'carlos@multitainer.com.py', activo: true },
  { slug: 'angel', nombre: 'Ángel Casco', whatsappIntl: '595986648000', whatsappLabel: '0986 648 000', email: 'angel@multitainer.com.py', activo: true },
  { slug: 'livio', nombre: 'Livio Rolón', whatsappIntl: '595971423222', whatsappLabel: '0971 423 222', email: 'livio@multitainer.com.py', activo: true },
];

// URL de WhatsApp del vendedor con mensaje pre-cargado.
export const waVendedor = (intl: string, msg = 'Hola, vi el catálogo de Multitainer y quiero una cotización.') =>
  `https://wa.me/${intl}?text=${encodeURIComponent(msg)}`;
