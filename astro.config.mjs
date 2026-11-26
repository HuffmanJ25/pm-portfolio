// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Hosted on GitHub Pages as a project site: https://huffmanj25.github.io/pm-portfolio/
	site: 'https://huffmanj25.github.io',
	base: '/pm-portfolio',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			// Body text: highly legible sans-serif, bundled locally.
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-body',
			fallbacks: ['system-ui', 'sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			// Headings: a soft, warm serif.
			provider: fontProviders.google(),
			name: 'Fraunces',
			cssVariable: '--font-display',
			weights: [400, 600],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'serif'],
		},
	],
});
