import dotenv from 'dotenv'
dotenv.config()

export const env = {
	discord: {
		clientId: process.env.DISCORD_CLIENT_ID,
		guildId: process.env.DISCORD_GUILD_ID,
		token: process.env.DISCORD_TOKEN
	},
	nodeEnv: process.env.NODE_ENV,
	roboplay: {
		api: process.env.ROBOPLAY_API ?? 'https://api.roboplay.dev',
		host: process.env.ROBOPLAY_HOST
	}
}
