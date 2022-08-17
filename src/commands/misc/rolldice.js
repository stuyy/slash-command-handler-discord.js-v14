const BaseSlashCommand = require('../../utils/BaseSlashCommand');
const { SlashCommandBuilder } = require('discord.js');

module.exports = class RollDiceSlashCommand extends BaseSlashCommand {
  constructor() {
    super('rolldice');
  }

  run(client, interaction) {
    return interaction.reply({ content: 'Roll Dice Slash Command' });
  }

  getSlashCommandJSON() {
    return new SlashCommandBuilder()
      .setName(this.name)
      .setDescription('roll dice command')
      .toJSON();
  }
};
