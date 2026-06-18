// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    css: {
      // This explicitly defines the block Tailwind v4 is searching for,
      // preventing the "devSourcemap of undefined" crash.
      devSourcemap: true
    }
  }
});