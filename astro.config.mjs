// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  base: '/portfolio/', // ⚠️ IMPORTANTE: cambia esto por el nombre de tu repositorio
  vite: {
    plugins: [tailwindcss()]
  }
});



