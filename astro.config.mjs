// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repo-name',
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: true
    }
  }
});