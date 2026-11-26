// Site-wide settings and personal details.

export const SITE_TITLE = 'Joel Huffman · Product Manager';
export const SITE_DESCRIPTION =
	'Product manager with 6+ years in travel and hospitality technology: identity, data platforms and workflow automation.';

export const PERSON = {
	name: 'Joel Huffman',
	role: 'Product Manager',
	focus: 'Identity, Data Platforms & Workflow Automation',
	location: 'Colorado Springs, CO',
	currently: 'Open to Product Manager roles in identity, data platforms and AI-enabled workflow tools.',
};

// Public resume PDF, served from this site (public/resume.pdf). It is exported from the private
// Google Doc "Joel Huffman - Resume (Public)", a redacted copy of the master resume.
// Keep it in sync with scripts/RESUME-SYNC.md; never publish the master Doc directly.
export const RESUME_PDF_URL = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/resume.pdf`;

export const LINKS = {
	email: 'HuffmanJ25@gmail.com',
	linkedin: 'https://www.linkedin.com/in/joelhuffman',
	github: 'https://github.com/HuffmanJ25',
};
