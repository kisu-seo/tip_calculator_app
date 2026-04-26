import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tip_calculator_app/',
  plugins: [react()],
});
