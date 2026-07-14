import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://multitainer.com.py',
  compressHTML: true,
  integrations: [
    sitemap({
      // /admin y las paginas por vendedor (noindex, links privados) quedan fuera del sitemap
      filter: (page) => !page.includes('/admin') && !/\/catalogo\/[^/]+\/$/.test(page),
      changefreq: 'weekly',
      lastmod: new Date(),
      priority: 0.7,
      serialize(item) {
        const u = item.url;
        if (u === 'https://multitainer.com.py/') item.priority = 1.0;
        else if (/\/(servicios|proyectos|catalogo)\/$/.test(u)) item.priority = 0.9;
        else if (/\/areas-de-servicio\/[^/]+\/[^/]+\/$/.test(u)) item.priority = 0.8;
        else if (/\/(servicios|proyectos|areas-de-servicio)\/[^/]+\/$/.test(u)) item.priority = 0.8;
        else if (/\/(sobre-nosotros|contacto|areas-de-servicio)\/$/.test(u)) item.priority = 0.6;
        return item;
      },
    }),
  ],
});
