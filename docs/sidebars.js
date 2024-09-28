// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	tutorialSidebar: [
		{
			type: 'html',
			value: 'Start Here',
			className: 'sidebar-title'
		},
		{
			id: 'getting-started',
			label: '✨ Getting Started',
			type: 'doc'
		},
		{
			type: 'html',
			value: 'Core Concepts',
			className: 'sidebar-title'
		},
		{
			type: 'category',
			label: 'CLI Tools',
			link: {
				id: 'cli/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'cli/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				'cli/create-robo',
				'cli/robo'
			]
		},
		{
			type: 'category',
			label: 'Core Package',
			link: {
				id: 'robojs/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'robojs/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				'robojs/config',
				'robojs/flashcore',
				{
					id: 'robojs/internals',
					label: '👀 Internals',
					type: 'doc'
				},
				'robojs/linting',
				'robojs/logger',
				'robojs/mode',
				'robojs/modules',
				'robojs/portal',
				'robojs/files',
				'robojs/state',
				'robojs/typescript'
			]
		},
		{
			type: 'category',
			label: 'Hosting',
			link: {
				id: 'hosting/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'hosting/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				'hosting/roboplay',
				'hosting/self-host'
			]
		},
		{
			type: 'category',
			label: 'Plugins',
			link: {
				id: 'plugins/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'plugins/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				'plugins/create',
				'plugins/install',
				'plugins/seed'
			]
		},
		{
			type: 'html',
			value: 'Building Apps',
			className: 'sidebar-title'
		},
		{
			type: 'category',
			label: 'Discord Activities',
			link: {
				id: 'discord-activities/getting-started',
				type: 'doc'
			},
			items: [
				{
					id: 'discord-activities/getting-started',
					label: '✨ Getting Started',
					type: 'doc'
				},
				'discord-activities/proxy',
				'discord-activities/multiplayer'
			]
		},
		{
			type: 'category',
			label: 'Discord Bots',
			link: {
				id: 'discord-bots/getting-started',
				type: 'doc'
			},
			items: [
				{
					id: 'discord-bots/getting-started',
					label: '✨ Getting Started',
					type: 'doc'
				},
				'discord-bots/commands',
				'discord-bots/context-menu',
				'discord-bots/debug',
				'discord-bots/events',
				'discord-bots/invite',
				'discord-bots/middleware',
				{
					id: 'discord-bots/migrate',
					label: '⭐ Migrating',
					type: 'doc'
				},
				'discord-bots/sage',
				'discord-bots/secrets'
			]
		},
		{
			type: 'html',
			value: 'Ecosystem',
			className: 'sidebar-title'
		},
		{
			type: 'link',
			label: 'Contributing',
			href: 'https://github.com/Wave-Play/robo.js/blob/main/CONTRIBUTING.md'
		},
		{
			type: 'link',
			label: 'Discord Community',
			href: 'https://roboplay.dev/discord'
		},
		{
			type: 'category',
			label: 'Plugin Directory',
			link: {
				id: 'plugins/directory',
				type: 'doc'
			},
			items: [
				{
					id: 'plugins/directory',
					label: '✨ Overview',
					type: 'doc'
				},
				'plugins/ai',
				'plugins/ai-voice',
				'plugins/better-stack',
				'plugins/dev',
				'plugins/maintenance',
				'plugins/moderation',
				'plugins/patch',
				'plugins/server',
				'plugins/sync',
				'plugins/trpc'
			]
		},
		{
			type: 'category',
			label: 'Templates',
			link: {
				id: 'templates/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'templates/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				{
					type: 'category',
					label: 'Discord Activities',
					items: [
						{
							type: 'link',
							label: 'Starter Vanilla (JS)',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/discord-activities/vanilla-js'
						},
						{
							type: 'link',
							label: 'Starter Vanilla (TS)',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/discord-activities/vanilla-ts'
						},
						{
							type: 'link',
							label: 'Starter React (JS)',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/discord-activities/react-js'
						},
						{
							type: 'link',
							label: 'Starter React (TS)',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/discord-activities/react-ts'
						},
						{
							type: 'link',
							label: 'Music Player Proxy (TS)',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/discord-activities/react-music-proxy-ts'
						},
						{
							type: 'link',
							label: 'Multiplayer Colyseus (TS)',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/discord-activities/react-colyseus-ts'
						},
						{
							type: 'link',
							label: 'TailwindCSS (JS)',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/discord-activities/react-tailwind-ts'
						},
						{
							type: 'link',
							label: 'TailwindCSS + shadcn/ui (TS)',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/discord-activities/react-tailwind-shadcn-ts'
						}
					]
				},
				{
					type: 'category',
					label: 'Discord Bots',
					items: [
						{
							type: 'link',
							label: 'Starter (JS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/discord-bots/starter-bot-javascript'
						},
						{
							type: 'link',
							label: 'Starter (TS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/discord-bots/starter-bot-typescript'
						},
						{
							type: 'link',
							label: 'MongoDB (TS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/discord-bots/bot-mongodb-ts'
						},
						{
							type: 'link',
							label: 'PostgreSQL (TS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/discord-bots/bot-postgres-ts'
						},
						{
							type: 'link',
							label: 'Prisma (TS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/discord-bots/bot-prisma-ts'
						},
						{
							type: 'link',
							label: 'Purrth Vader (TS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/discord-bots/purrth-vader'
						},
						{
							type: 'link',
							label: 'Economy (TS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/discord-bots/economy-bot'
						}
					]
				},
				{
					type: 'category',
					label: 'Plugins',
					items: [
						{
							type: 'link',
							label: 'Starter (JS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/plugins/starter-plugin-js'
						}
					]
				},
				{
					type: 'category',
					label: 'Web Apps',
					items: [
						{
							type: 'link',
							label: 'Starter (JS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/web-apps/starter-webapp-javascript'
						},
						{
							type: 'link',
							label: 'Starter (TS)',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/web-apps/starter-webapp-typescript'
						}
					]
				}
			]
		}
	]
}

module.exports = sidebars
