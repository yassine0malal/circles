// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yassine0malal.github.io',
  base: '/circles',
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: true
    }
  }
});