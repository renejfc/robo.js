import { registerProcessEvents } from './process.js'
import chalk from 'chalk'
import { Client, Collection, Events } from 'discord.js'
import { getConfig, loadConfig } from './config.js'
import { logger } from './logger.js'
import { loadManifest } from '../cli/utils/manifest.js'
import { env } from './env.js'
import { stateLoad } from './process.js'
import {
	executeAutocompleteHandler,
	executeCommandHandler,
	executeContextHandler,
	executeEventHandler
} from './handlers.js'
import { hasProperties } from '../cli/utils/utils.js'
import Portal from './portal.js'
import type { PluginData } from '../types/index.js'

export const Robo = { restart, start, stop }

// Each Robo instance has its own client, exported for convenience
export let client: Client

// A Portal is exported with each Robo to allow for dynamic controls
export let portal: Portal

// Be careful, plugins may contain sensitive data in their config
let plugins: Collection<string, PluginData>

interface StartOptions {
	awaitState?: boolean
	client?: Client
}

async function start(options?: StartOptions) {
	const { awaitState, client: optionsClient } = options ?? {}

	// Important! Register process events before doing anything else
	// This ensures the "ready" signal is sent to the parent process
	registerProcessEvents()

	// Load config and manifest up next!
	// This makes them available globally via getConfig() and getManifest()
	const [config] = await Promise.all([loadConfig(), loadManifest()])
	logger({
		enabled: config?.logger?.enabled,
		level: config?.logger?.level
	}).debug('Starting Robo...')

	// Wait for states to be loaded
	if (awaitState) {
		await stateLoad
	}

	// Load plugin options
	const plugins = loadPluginData()

	// Create the new client instance
	client = optionsClient ?? new Client(config.clientOptions)

	// Load the portal (commands, context, events)
	portal = await Portal.open()

	// Notify lifecycle event handlers
	await executeEventHandler(plugins, '_start', client)

	// Define event handlers
	for (const key of portal.events.keys()) {
		const onlyAuto = portal.events.get(key).every((event) => event.auto)
		client.on(key, async (...args) => {
			if (!onlyAuto) {
				logger.event(`Event received: ${chalk.bold(key)}`)
			}
			logger.trace('Event args:', args)

			// Notify event handler
			executeEventHandler(plugins, key, ...args)
		})
	}

	// Forward command interactions to our fancy handlers
	client.on(Events.InteractionCreate, async (interaction) => {
		if (interaction.isChatInputCommand()) {
			const commandKeys = [interaction.commandName]
			if (hasProperties<{ getSubcommandGroup: () => string }>(interaction.options, ['getSubcommandGroup'])) {
				try {
					commandKeys.push(interaction.options.getSubcommandGroup())
				} catch {
					// Ignore
				}
			}
			if (hasProperties<{ getSubcommand: () => string }>(interaction.options, ['getSubcommand'])) {
				try {
					commandKeys.push(interaction.options.getSubcommand())
				} catch {
					// Ignore
				}
			}
			const commandKey = commandKeys.filter(Boolean).join(' ')
			logger.event(`Received slash command interaction: ${chalk.bold('/' + commandKey)}`)
			logger.trace('Slash command interaction:', interaction.toJSON())
			await executeCommandHandler(interaction, commandKey)
		} else if (interaction.isAutocomplete()) {
			logger.event(`Received autocomplete interaction for: ${chalk.bold(interaction.commandName)}`)
			logger.trace('Autocomplete interaction:', interaction.toJSON())
			await executeAutocompleteHandler(interaction)
		} else if (interaction.isContextMenuCommand()) {
			logger.event(`Received context menu interaction: ${chalk.bold(interaction.commandName)}`)
			logger.trace('Context menu interaction:', interaction.toJSON())
			await executeContextHandler(interaction, interaction.commandName)
		}
	})

	// Log in to Discord with your client's token
	await client.login(env.discord.token)
}

async function stop(exitCode = 0) {
	// Notify lifecycle handler
	await executeEventHandler(plugins, '_stop', client)
	client?.destroy()
	logger.debug(`Stopped Robo at ` + new Date().toLocaleString())
	process.exit(exitCode)
}

async function restart() {
	// Notify lifecycle handler
	await executeEventHandler(plugins, '_restart', client)
	client?.destroy()
	logger.debug(`Restarted Robo at ` + new Date().toLocaleString())
	process.exit(0)
}

function loadPluginData() {
	const config = getConfig()
	const collection = new Collection<string, PluginData>()
	if (!config.plugins) {
		return collection
	}

	for (const plugin of config.plugins) {
		if (typeof plugin === 'string') {
			collection.set(plugin, { name: plugin })
		} else if (Array.isArray(plugin)) {
			const [name, options, metaOptions] = plugin
			collection.set(name, { name, options, metaOptions })
		}
	}

	return collection
}
