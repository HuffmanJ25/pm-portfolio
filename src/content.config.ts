import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies: src/content/work/*.md
const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		org: z.string(),
		role: z.string(),
		timeframe: z.string(),
		/** Headline numbers shown at the top of the case study and on its card */
		outcomes: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
		tags: z.array(z.string()).default([]),
		/** Lower numbers show first */
		order: z.number().default(100),
		draft: z.boolean().default(false),
	}),
});

// Writing (blog posts): src/content/writing/*.md
const writing = defineCollection({
	loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { work, writing };
