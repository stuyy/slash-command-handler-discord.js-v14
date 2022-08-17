const BaseSlashCommand = require('../../utils/BaseSlashCommand');
const { SlashCommandBuilder } = require('discord.js');

module.exports = class PartySlashCommand extends BaseSlashCommand {
  constructor() {
    super('party');
  }

  run(client, interaction) {
    return interaction.reply({ content: 'Party Slash Command' });
  }

  getSlashCommandJSON() {
    return new SlashCommandBuilder()
      .setName(this.name)
      .setDescription('party command')
      .toJSON();
  }
};
