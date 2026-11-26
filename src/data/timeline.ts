// Career timeline, curated from the master resume Google Doc
// ("Joel Huffman - Product Manager Resume"). To refresh it, ask Claude to "sync my resume".
// Keep each `headline` to one outcome-first line; the card leads with it.
// Public-site rule: keep employer figures approximate (no exact savings, customer or user counts)
// and don't name security vendors. Exact numbers stay on the resume sent to recruiters.

export type TimelineKind = 'role' | 'milestone' | 'project' | 'now';

export interface TimelineEntry {
	id: string;
	kind: TimelineKind;
	/** YYYY-MM */
	start: string;
	/** YYYY-MM; omit for a single-date milestone */
	end?: string;
	title: string;
	org: string;
	headline: string;
	details: string[];
	skills?: string[];
	/** Path (without the base) to a related case study */
	link?: { href: string; label: string };
}

export const timeline: TimelineEntry[] = [
	{
		id: 'cendyn-early',
		kind: 'role',
		start: '2017-05',
		end: '2020-08',
		title: 'Data Quality → Business Analyst → Product Owner',
		org: 'Cendyn',
		headline: 'Grew from data quality into product owner of Engage, a front-desk app for hotel staff.',
		details: [
			'Observed and interviewed hotel staff on site to set roadmap priorities for Engage.',
			'Wrote requirements for new data products and built Excel and Cognos reports that surfaced business opportunities.',
			'Validated Oracle Opera PMS integration data in SQL Server, supported database migrations and created onboarding training.',
		],
		skills: ['User research', 'SQL', 'Requirements', 'Reporting'],
	},
	{
		id: 'amex',
		kind: 'role',
		start: '2020-11',
		end: '2021-08',
		title: 'Product Analyst',
		org: 'American Express',
		headline: 'Validated financial data pipelines and API flows in a large-scale SAFe organization.',
		details: [
			'Analyzed financial data pipelines with Splunk, Hive and Postman, and validated API data flows with third-party global tools.',
			'Wrote user stories with acceptance criteria and feature-level metrics in a SAFe agile environment.',
			'Contract via PGM TEK, then direct.',
		],
		skills: ['Data pipelines', 'APIs', 'Splunk', 'SAFe'],
	},
	{
		id: 'cendyn-po',
		kind: 'role',
		start: '2021-08',
		end: '2022-07',
		title: 'Product Owner',
		org: 'Cendyn',
		headline: 'Led KPI-driven improvements to loyalty and Engage products for hotel clients.',
		details: [
			'Worked with external partner systems on data accuracy.',
			'Ran data validation and defect triage that protected the integrity of financial reporting.',
			'Interviewed users and executive stakeholders, and defined feature-level metrics with global teams.',
		],
		skills: ['KPIs', 'Stakeholder interviews', 'Data quality'],
	},
	{
		id: 'ctm',
		kind: 'role',
		start: '2022-08',
		end: '2026-10',
		title: 'Product Manager',
		org: 'Corporate Travel Management',
		headline:
			'Consolidated three regional traveler-profile systems into one global platform for thousands of companies and millions of travelers.',
		details: [
			'Product lead for a 9-person global profile team and a 7-engineer North America profile team.',
			'Built the build-vs-buy cost analysis behind the in-house decision, weighing savings, data ownership and delivery speed.',
			'Shipped a PNR-tracking tool for support that cut stuck-reservation resolution from weeks to hours, with six-figure annual savings and 20% fewer errors.',
			'Led role-based access control with feature-level permissions and enterprise single sign-on.',
			'Took payment-card tokenization through PCI compliance sign-off; ran staged rollouts with feature flags and beta groups.',
		],
		skills: ['Platform strategy', 'Identity & RBAC', 'APIs & data contracts', 'PCI', 'Staged rollouts'],
		link: { href: '/work/traveler-profile-platform/', label: 'Read the case study' },
	},
	{
		id: 'all-star',
		kind: 'milestone',
		start: '2024-01',
		title: 'CTM All-Star Award',
		org: 'Corporate Travel Management',
		headline: 'Recognized with CTM’s All-Star Award.',
		details: [],
	},
	{
		id: 'wall-panel',
		kind: 'project',
		start: '2026-11',
		title: 'Smart-home wall panel (side project)',
		org: 'Personal',
		headline: 'Directed an AI-assisted build of a touch wall panel for smart lights; cut idle network requests ~70%.',
		details: [
			'Turned a locked-down Fire tablet into a single-purpose control panel.',
			'Kept API keys on the home PC; the tablet never sees them.',
			'Found a real-hardware bug that mock tests missed.',
		],
		skills: ['AI-assisted development', 'Prototyping', 'Security'],
		link: { href: '/work/smart-home-wall-panel/', label: 'Read the case study' },
	},
	{
		id: 'now',
		kind: 'now',
		start: '2026-11',
		title: 'Now',
		org: 'Open to new roles',
		headline: 'Looking for my next Product Manager role in identity, data platforms or AI-enabled workflow tools.',
		details: ['IBM AI Product Manager Professional Certificate (Coursera), in progress.'],
		skills: ['Applied AI', 'Discovery', 'Prototyping'],
	},
];

export const education = [
	{ title: 'B.A.S., IT Management', org: 'Santa Fe College, Gainesville, FL' },
	{ title: 'Programming Specialist Certification', org: 'Santa Fe College, Gainesville, FL' },
	{ title: 'A.A.S., Wind Energy & Turbine Technology', org: 'Iowa Lakes Community College, Estherville, IA' },
	{ title: 'IBM AI Product Manager Professional Certificate', org: 'Coursera · in progress' },
];

export const skills = {
	Product: [
		'Product strategy',
		'Roadmaps',
		'Discovery',
		'Go-to-market',
		'Feature flags & staged rollouts',
		'KPIs',
		'Agile/Scrum',
	],
	Technical: [
		'Identity & access (SSO, RBAC)',
		'APIs & data contracts',
		'Data pipelines',
		'Integrations',
		'PCI & privacy compliance',
		'SQL',
	],
	'Tools & AI': [
		'Jira',
		'Confluence',
		'Figma',
		'Postman',
		'Splunk',
		'Azure',
		'Craft.io',
		'ProductPlan',
		'Claude Code',
		'ChatGPT',
		'Gemini',
	],
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatMonth(ym: string): string {
	const [y, m] = ym.split('-').map(Number);
	return `${MONTHS[m - 1]} ${y}`;
}

export function formatRange(entry: TimelineEntry): string {
	if (entry.kind === 'milestone') return entry.start.slice(0, 4);
	if (entry.kind === 'now') return 'Now';
	if (!entry.end) return formatMonth(entry.start);
	return `${formatMonth(entry.start)} – ${formatMonth(entry.end)}`;
}
