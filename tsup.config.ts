import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: true,          // shared chunks for ESM
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  banner: { js: '"use client";' }, // keeps it usable in Next.js App Router
});