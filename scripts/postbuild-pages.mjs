// SPA fallback for GitHub Pages: copy dist/index.html to dist/404.html
// so deep links keep working when GitHub Pages serves a 404.
import { copyFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');
const src = resolve(distDir, 'index.html');
const dest = resolve(distDir, '404.html');

if (!existsSync(src)) {
  console.error('[postbuild-pages] dist/index.html not found. Did vite build run?');
  process.exit(1);
}

copyFileSync(src, dest);
console.log('[postbuild-pages] dist/404.html created from dist/index.html');
