// Builds a link that works under the site's base path (/pm-portfolio on GitHub Pages).
export function url(path = '/'): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const clean = path.startsWith('/') ? path : `/${path}`;
	return `${base}${clean}`;
}

// The current path with the base removed, for highlighting the active nav link.
export function stripBase(pathname: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
	return rest || '/';
}
