// @ts-check
import { defineConfig } from 'astro/config';
import github from '@astrojs/github-pages';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: github(),
  base: '/portfolio/', // ⚠️ IMPORTANTE: cambia esto por el nombre de tu repositorio
  vite: {
    plugins: [tailwindcss()]
  }
});



