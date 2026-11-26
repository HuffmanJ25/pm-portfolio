import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('writing', ({ data }) => !data.draft);
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return rss({
		title: 'Writing by Joel Huffman',
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `${base}/writing/${post.id}/`,
		})),
	});
}
