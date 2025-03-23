import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static', // o 'server' si usas funciones
  integrations: [tailwind()],
});
