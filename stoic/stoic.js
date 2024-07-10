/*// Load environment variables from .env file
require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES] });

const token = process.env.DISCORD_BOT_TOKEN; // Use environment variable for the token
const APPEAL_LINK = 'https://discord.gg/vr6eBGA2'; // Replace with your appeal link

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildBanAdd', async (ban) => {
    const { user, guild } = ban;
    try {
        await user.send(`You have been banned from ${guild.name}. If you wish to appeal, please visit: ${APPEAL_LINK}`);
        console.log(`Sent ban appeal link to ${user.tag}`);
    } catch (error) {
        console.error(`Could not send DM to ${user.tag}.`);
    }
});

client.login(token); // Use the token from the environment variable
*/