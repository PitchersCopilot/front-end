import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react()],
    base: '/',
  };
  console.log(mode);
  if (mode === 'production') {
    config.base = '/front-end/';
  }

  return config;
});
