require('dotenv').config();
const { Client, Routes, Collection } = require('discord.js');
const { registerCommands, registerSubcommands } = require('./utils/registry');

const { BOT_TOKEN, APP_ID, GUILD_ID } = process.env;
const client = new Client({ intents: [], rest: { version: '10' } });

client.rest.setToken(BOT_TOKEN);

client.on('interactionCreate', (interaction) => {
  if (interaction.isChatInputCommand()) {
    const { commandName } = interaction;
    const cmd = client.slashCommands.get(commandName);

    const subcommandGroup = interaction.options.getSubcommandGroup(false);
    const subcommandName = interaction.options.getSubcommand(false);

    console.log(commandName);
    console.log(subcommandGroup, subcommandName);
    if (subcommandName) {
      if (subcommandGroup) {
        const subcommandInstance = client.slashSubcommands.get(commandName);
        subcommandInstance.groupCommands
          .get(subcommandGroup)
          .get(subcommandName)
          .run(client, interaction);
      } else {
        const subcommandInstance = client.slashSubcommands.get(commandName);
        subcommandInstance.groupCommands
          .get(subcommandName)
          .run(client, interaction);
      }
      return;
    }

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
    client.slashSubcommands = new Collection();
    await registerCommands(client, '../commands');
    await registerSubcommands(client);
    console.log(client.slashSubcommands);
    const slashCommandsJson = client.slashCommands.map((cmd) =>
      cmd.getSlashCommandJSON()
    );
    const slashSubcommandsJson = client.slashSubcommands.map((cmd) =>
      cmd.getSlashCommandJSON()
    );
    await client.rest.put(Routes.applicationGuildCommands(APP_ID, GUILD_ID), {
      body: [...slashCommandsJson, ...slashSubcommandsJson],
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
