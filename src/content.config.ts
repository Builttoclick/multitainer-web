import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    // categoría del proyecto -> filtro en /proyectos + interlink al servicio
    categoria: z.enum([
      'vivienda',
      'oficina',
      'obrador',
      'vestuario',
      'showroom',
      'campamento',
      'evento',
      'bano',
      'dos-plantas',
    ]),
    zona: z.string(), // una de las 9 zonas o "Gran Asunción"
    medida: z.string().optional(), // "20 pies", "40 pies", "módulos unidos"
    cliente: z.string().optional(), // "4 Pets", "CONMEBOL"...
    resumen: z.string(),
    anio: z.number().optional(),
    estado: z.enum(['Terminado', 'En obra']).optional(),
    destacado: z.boolean().default(false),
    orden: z.number().default(0),

    portada: z.string().optional(),
    portada_alt: z.string().optional(),
    galeria: z.array(z.object({ src: z.string(), alt: z.string().optional() })).default([]),

    destacados: z.array(z.string()).default([]),
    faqs: z.array(z.object({ pregunta: z.string(), respuesta: z.string() })).default([]),

    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

export const collections = { proyectos };
