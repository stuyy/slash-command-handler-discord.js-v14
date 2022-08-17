const BaseSlashCommand = require('../../utils/BaseSlashCommand');
const { SlashCommandBuilder } = require('discord.js');

module.exports = class MuteSlashCommand extends BaseSlashCommand {
  constructor() {
    super('mute');
  }

  run(client, interaction) {
    return interaction.reply({ content: 'Mute Slash Command' });
  }

  getSlashCommandJSON() {
    return new SlashCommandBuilder()
      .setName(this.name)
      .setDescription('mute command')
      .toJSON();
  }
};
