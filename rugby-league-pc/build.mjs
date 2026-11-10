// Bundles src/ into play/game.js (a classic script, so play/index.html also works when opened straight from disk).
import * as esbuild from 'esbuild';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const serve = process.argv.includes('--serve');
const opts = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: !serve,
  sourcemap: serve ? 'inline' : false,
  outfile: 'play/game.js',
  loader: { '.woff2': 'dataurl', '.css': 'text' },
  logLevel: 'info',
};
if (serve) {
  const ctx = await esbuild.context(opts);
  await ctx.watch();
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.png': 'image/png', '.ico': 'image/x-icon' };
  createServer(async (req, res) => {
    const p = join('play', req.url === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]));
    try { const d = await readFile(p); res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); res.end(d); }
    catch { res.writeHead(404); res.end('not found'); }
  }).listen(8080, () => console.log('Sixth Tackle dev server: http://localhost:8080'));
} else {
  await esbuild.build(opts);
}
