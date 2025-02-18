import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.@(js|ts|tsx)'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true
});
