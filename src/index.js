require('dotenv').config();
const { Client, Routes, Collection } = require('discord.js');
const { registerCommands } = require('./utils/registry');

const { BOT_TOKEN, APP_ID, GUILD_ID } = process.env;
const client = new Client({ intents: [], rest: { version: '10' } });

client.rest.setToken(BOT_TOKEN);

client.on('interactionCreate', (interaction) => {
  if (interaction.isChatInputCommand()) {
    const { commandName } = interaction;
    const cmd = client.slashCommands.get(commandName);
    if (cmd) {
      cmd.run(client, interaction);
    } else {
      interaction.reply({ content: 'This command has no run method.' });
    }
  }
});

async function main() {
  try {
    client.slashCommands = new Collection();
    await registerCommands(client, '../commands');
    console.log(client.slashCommands);
    const slashCommandsJson = client.slashCommands.map((cmd) =>
      cmd.getSlashCommandJSON()
    );
    console.log(slashCommandsJson);
    await client.rest.put(Routes.applicationGuildCommands(APP_ID, GUILD_ID), {
      body: slashCommandsJson,
    });
    const registeredSlashCommands = await client.rest.get(
      Routes.applicationGuildCommands(APP_ID, GUILD_ID)
    );
    console.log(registeredSlashCommands);
    await client.login(BOT_TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();
