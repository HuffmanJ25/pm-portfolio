// Serves a saved version snapshot so it can be viewed or screenshotted.
// Usage: node scripts/serve-snapshot.mjs v1 [port]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const version = process.argv[2] ?? 'v1';
const port = Number(process.argv[3] ?? 4400);
const root = resolve('docs/versions', version, 'site');

const types = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
	'.jpg': 'image/jpeg',
	'.png': 'image/png',
	'.ico': 'image/x-icon',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.xml': 'application/xml',
};

createServer(async (req, res) => {
	const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
	let file = normalize(join(root, url));
	if (!file.startsWith(root)) {
		res.writeHead(403).end();
		return;
	}
	try {
		if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
		const body = await readFile(file);
		res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
		res.end(body);
	} catch {
		res.writeHead(404).end('Not found');
	}
}).listen(port, () => console.log(`Serving ${version} snapshot at http://localhost:${port}`));
