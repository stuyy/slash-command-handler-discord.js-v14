const BaseSlashCommand = require('../utils/BaseSlashCommand');
const { SlashCommandBuilder } = require('discord.js');

module.exports = class StatsSlashCommand extends BaseSlashCommand {
  constructor() {
    super('stats');
  }

  run(client, interaction) {
    return interaction.reply({ content: 'Stats Slash Command' });
  }

  getSlashCommandJSON() {
    return new SlashCommandBuilder()
      .setName(this.name)
      .setDescription('stats command')
      .toJSON();
  }
};
