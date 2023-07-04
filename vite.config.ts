import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.tsx',
    },
    outDir: 'build',
  },
  server: {
    port: 8081,
    strictPort: true,
  }
});
