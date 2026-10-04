import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// base: './' so the built site works from any static host or a local folder.
export default defineConfig({
  base: './',
  plugins: [preact()],
});
