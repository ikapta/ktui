import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    name: 'nui',
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: !options.watch,
    external: ['react', 'react-dom', 'react-router-dom'],
  }
})