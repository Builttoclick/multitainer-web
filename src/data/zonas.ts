// Las 9 zonas de Local SEO. Slugs PRESERVADOS del sitio viejo (rankean) - NO cambiar.
// Copy a nivel borrador/placeholder: profundidad final en el pass de authority-pages.
export interface FaqZ { q: string; a: string; }
export interface Zona {
  slug: string;
  nombre: string;
  metaTitle: string;
  titleTail: string;
  metaDesc: string;
  hero: string;
  intro: string[];
  local: string[];
  faqs: FaqZ[];
}

export const zonas: Zona[] = [
  {
    slug: 'mariano-roque-alonso',
    nombre: 'Mariano Roque Alonso',
    metaTitle: 'Contenedores y construcción modular en Mariano Roque Alonso',
    titleTail: 'alquiler, venta y modificación de contenedores en Mariano Roque Alonso',
    metaDesc: 'Contenedores y construcción modular en Mariano Roque Alonso: alquiler, venta y oficinas, obradores y vestuarios a medida. Acá está nuestra planta. Cotización en 24 h.',
    hero: 'Somos de Mariano Roque Alonso. Acá está nuestra planta, sobre Gral. Patricio Escobar.',
    intro: [
      'Multitainer tiene su base y su planta de fabricación en Mariano Roque Alonso. Desde acá diseñamos, modificamos y entregamos contenedores y módulos a todo el Gran Asunción.',
      'Si estás en MRA, somos tu proveedor más cercano: alquiler de módulos, venta de contenedores y construcción modular llave en mano, con los plazos de entrega más cortos de toda nuestra cobertura.',
    ],
    local: [
      'Atendemos viviendas, comercios, industrias y obras de toda Mariano Roque Alonso. Por estar acá mismo, las visitas, la medición y la entrega son inmediatas.',
    ],
    faqs: [
      { q: '¿Dónde está la planta de Multitainer?', a: 'En Mariano Roque Alonso, sobre Gral. Patricio Escobar casi Gral. J. M. Bruguez. Es nuestra base de fabricación y desde acá salimos a todo el Gran Asunción.' },
      { q: '¿Puedo ir a ver contenedores al predio?', a: 'Sí. Coordinás una visita y te mostramos las unidades disponibles y proyectos terminados en planta.' },
    ],
  },
  {
    slug: 'asuncion',
    nombre: 'Asunción',
    metaTitle: 'Contenedores y construcción modular en Asunción',
    titleTail: 'alquiler, venta y modificación de contenedores en Asunción',
    metaDesc: 'Contenedores y construcción modular en Asunción: alquiler de módulos, venta de contenedores y oficinas, obradores y showrooms a medida. Entrega en obra. Cotización en 24 h.',
    hero: 'Llegamos a toda Asunción con módulos, contenedores y proyectos a medida.',
    intro: [
      'Cruzamos a Asunción de forma constante para entregar módulos de oficina y obrador, vender contenedores y montar proyectos modulares en obras y empresas de la capital.',
      'Desde nuestra planta en Mariano Roque Alonso, Asunción está a pocos minutos: coordinamos la entrega y la instalación según la realidad de cada obra y del tránsito.',
    ],
    local: [
      'Trabajamos con constructoras, comercios y empresas de toda Asunción: obradores para obras en el microcentro y los barrios, depósitos, casetas de seguridad y showrooms comerciales a la vista.',
    ],
    faqs: [
      { q: '¿Entregan e instalan en Asunción?', a: 'Sí. Coordinamos el transporte y la colocación del módulo o contenedor en tu obra o predio en cualquier punto de Asunción.' },
      { q: '¿Hacen obradores para obras en Asunción?', a: 'Sí, es uno de los pedidos más frecuentes en la capital: obradores y oficinas de obra equipados, entregados listos para usar.' },
    ],
  },
  {
    slug: 'san-lorenzo',
    nombre: 'San Lorenzo',
    metaTitle: 'Contenedores y construcción modular en San Lorenzo',
    titleTail: 'alquiler, venta y modificación de contenedores en San Lorenzo',
    metaDesc: 'Contenedores y construcción modular en San Lorenzo: alquiler de módulos, venta de contenedores y oficinas, obradores y vestuarios a medida. Entrega en obra. Cotización en 24 h.',
    hero: 'San Lorenzo está dentro de nuestra zona de trabajo habitual.',
    intro: [
      'Atendemos San Lorenzo con el catálogo completo: alquiler de módulos, venta de contenedores y construcción modular a medida para viviendas, comercios e industrias.',
      'Desde Mariano Roque Alonso llegamos sin problema para medir, entregar e instalar en toda la ciudad.',
    ],
    local: [
      'San Lorenzo concentra mucha actividad comercial e industrial: hacemos obradores, depósitos, casetas y showrooms para empresas y obras de la zona.',
    ],
    faqs: [
      { q: '¿Llegan a todo San Lorenzo?', a: 'Sí, San Lorenzo está dentro de nuestra cobertura habitual de Gran Asunción. Coordinamos la visita y la entrega sin problema.' },
      { q: '¿Hacen depósitos en contenedor para San Lorenzo?', a: 'Sí. Vendemos y alquilamos contenedores para depósito seguro de mercadería, herramientas y materiales.' },
    ],
  },
  {
    slug: 'luque',
    nombre: 'Luque',
    metaTitle: 'Contenedores y construcción modular en Luque',
    titleTail: 'alquiler, venta y modificación de contenedores en Luque',
    metaDesc: 'Contenedores y construcción modular en Luque: alquiler de módulos, venta de contenedores y oficinas, obradores y showrooms a medida. Entrega en obra. Cotización en 24 h.',
    hero: 'Luque está a pocos minutos de nuestra planta en Mariano Roque Alonso.',
    intro: [
      'Luque limita con Mariano Roque Alonso, así que es una de las zonas que atendemos más rápido. Entregamos módulos, vendemos contenedores y montamos proyectos a medida en toda la ciudad.',
      'El crecimiento de Luque trajo muchas obras y comercios nuevos que necesitan obradores, depósitos y espacios modulares: justo lo nuestro.',
    ],
    local: [
      'Atendemos las zonas residenciales, industriales y comerciales de Luque, incluido el corredor cercano al aeropuerto y a las avenidas principales.',
    ],
    faqs: [
      { q: '¿Cuánto tardan en llegar a Luque?', a: 'Al estar pegado a Mariano Roque Alonso, es una de las zonas que atendemos más rápido. Coordinamos la entrega en pocos días.' },
      { q: '¿Hacen oficinas en contenedor para Luque?', a: 'Sí. Diseñamos y entregamos oficinas en contenedor llave en mano, instaladas en tu predio.' },
    ],
  },
  {
    slug: 'capiata',
    nombre: 'Capiatá',
    metaTitle: 'Contenedores y construcción modular en Capiatá',
    titleTail: 'alquiler, venta y modificación de contenedores en Capiatá',
    metaDesc: 'Contenedores y construcción modular en Capiatá: alquiler de módulos, venta de contenedores y oficinas, obradores y depósitos a medida. Entrega en obra. Cotización en 24 h.',
    hero: 'Capiatá está dentro de nuestro corredor de cobertura habitual.',
    intro: [
      'Capiatá forma parte del corredor donde trabajamos seguido. Llevamos módulos de oficina y obrador, vendemos contenedores y montamos proyectos modulares para viviendas, comercios e industrias.',
      'Sobre la Ruta 2 y las avenidas principales hay mucha actividad que necesita depósitos, obradores y casetas: los entregamos listos para usar.',
    ],
    local: [
      'Cubrimos las zonas residenciales y los barrios sobre la Ruta 2 y los accesos comerciales de Capiatá.',
    ],
    faqs: [
      { q: '¿Atienden en Capiatá?', a: 'Sí, Capiatá está dentro de nuestra zona de cobertura habitual. Coordinamos la entrega y la instalación en tu predio.' },
      { q: '¿Tienen contenedores para depósito en Capiatá?', a: 'Sí, vendemos y alquilamos contenedores de 20 y 40 pies para depósito seguro.' },
    ],
  },
  {
    slug: 'lambare',
    nombre: 'Lambaré',
    metaTitle: 'Contenedores y construcción modular en Lambaré',
    titleTail: 'alquiler, venta y modificación de contenedores en Lambaré',
    metaDesc: 'Contenedores y construcción modular en Lambaré: alquiler de módulos, venta de contenedores y oficinas, obradores y showrooms a medida. Entrega en obra. Cotización en 24 h.',
    hero: 'Trabajamos en Lambaré con el catálogo completo de Multitainer.',
    intro: [
      'Lambaré está dentro de nuestra zona de trabajo en Gran Asunción. Entregamos módulos, vendemos contenedores y construimos espacios modulares a medida para casas, comercios e industrias.',
      'Desde Mariano Roque Alonso coordinamos la entrega y la instalación en toda la ciudad.',
    ],
    local: [
      'Atendemos las zonas residenciales de Lambaré y los corredores comerciales e industriales sobre las avenidas principales y la costanera.',
    ],
    faqs: [
      { q: '¿Llegan a Lambaré?', a: 'Sí, Lambaré está dentro de nuestra cobertura habitual de Gran Asunción. Coordinamos la entrega sin problema.' },
      { q: '¿Hacen showrooms o locales en contenedor para Lambaré?', a: 'Sí. Construimos showrooms y locales comerciales en contenedor, a la vista y terminados llave en mano.' },
    ],
  },
  {
    slug: 'fernando-de-la-mora',
    nombre: 'Fernando de la Mora',
    metaTitle: 'Contenedores y construcción modular en Fernando de la Mora',
    titleTail: 'alquiler, venta y modificación de contenedores en Fernando de la Mora',
    metaDesc: 'Contenedores y construcción modular en Fernando de la Mora: alquiler de módulos, venta de contenedores y oficinas, obradores y depósitos a medida. Entrega en obra. Cotización en 24 h.',
    hero: 'Fernando de la Mora, dentro de nuestro radio de entrega rápida.',
    intro: [
      'Fernando de la Mora está muy cerca de nuestra planta, así que es una de las zonas que atendemos con mayor rapidez. Entregamos módulos de oficina y obrador, vendemos contenedores y construimos a medida.',
      'La cercanía hace que medir, fabricar y colocar en Fernando de la Mora sea ágil, ideal cuando necesitás resolver rápido.',
    ],
    local: [
      'Cubrimos Fernando de la Mora Norte y Sur, atendiendo zonas residenciales, comercios y obras sobre las avenidas principales.',
    ],
    faqs: [
      { q: '¿Atienden rápido en Fernando de la Mora?', a: 'Sí, por la cercanía con nuestra planta es de las zonas que resolvemos más rápido. Coordinamos la visita en pocos días.' },
      { q: '¿Alquilan obradores para Fernando de la Mora?', a: 'Sí. Entregamos obradores y oficinas de obra equipadas, instaladas en tu predio.' },
    ],
  },
  {
    slug: 'aregua',
    nombre: 'Areguá',
    metaTitle: 'Contenedores y construcción modular en Areguá',
    titleTail: 'alquiler, venta y modificación de contenedores en Areguá',
    metaDesc: 'Contenedores y construcción modular en Areguá: alquiler de módulos, venta de contenedores y oficinas, obradores y depósitos a medida. Entrega en obra. Cotización en 24 h.',
    hero: 'Llegamos a Areguá con módulos, contenedores y proyectos a medida.',
    intro: [
      'Areguá está dentro de nuestra zona de cobertura. Entregamos módulos de oficina y obrador, vendemos contenedores y montamos espacios modulares para viviendas, emprendimientos y obras de la zona.',
      'Coordinamos el traslado y la instalación desde nuestra planta en Mariano Roque Alonso.',
    ],
    local: [
      'Atendemos las zonas residenciales y turísticas de Areguá, además de obras y emprendimientos sobre los accesos principales.',
    ],
    faqs: [
      { q: '¿Atienden en Areguá?', a: 'Sí, Areguá está dentro de nuestra cobertura. Coordinamos la entrega y la instalación en tu predio.' },
      { q: '¿Hacen módulos para emprendimientos en Areguá?', a: 'Sí. Construimos locales, oficinas y módulos a medida, ideales para emprendimientos y proyectos turísticos.' },
    ],
  },
  {
    slug: 'villeta',
    nombre: 'Villeta',
    metaTitle: 'Contenedores y construcción modular en Villeta',
    titleTail: 'alquiler, venta y modificación de contenedores en Villeta',
    metaDesc: 'Contenedores y construcción modular en Villeta: alquiler de módulos, venta de contenedores y oficinas, obradores y depósitos industriales a medida. Entrega en obra. Cotización en 24 h.',
    hero: 'Villeta, zona industrial donde los módulos y contenedores se usan a diario.',
    intro: [
      'Villeta es una zona industrial y portuaria, justo donde los contenedores y los módulos rinden al máximo. Entregamos obradores, oficinas, depósitos y casetas, y vendemos contenedores para industrias y obras de la zona.',
      'Coordinamos la logística de entrega e instalación desde Mariano Roque Alonso hasta tu predio en Villeta.',
    ],
    local: [
      'Atendemos el polo industrial y portuario de Villeta: obradores para grandes obras, depósitos, casetas de control y oficinas de planta.',
    ],
    faqs: [
      { q: '¿Trabajan con industrias en Villeta?', a: 'Sí. Villeta es zona industrial y trabajamos seguido con empresas de la zona: obradores, oficinas de planta, depósitos y casetas.' },
      { q: '¿Venden contenedores para uso industrial en Villeta?', a: 'Sí, vendemos contenedores de 20 y 40 pies, nuevos y usados, para depósito y uso industrial, con entrega en obra.' },
    ],
  },
];

export const getZona = (slug: string) => zonas.find((z) => z.slug === slug);
