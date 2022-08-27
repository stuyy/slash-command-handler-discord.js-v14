const { SlashCommandBuilder } = require('discord.js');
const BaseSlashSubcommand = require('../../utils/BaseSlashSubcommand');

module.exports = class PartySubcommand extends BaseSlashSubcommand {
  constructor() {
    super(
      'party',
      [
        {
          name: 'group_a',
          subcommands: ['start', 'end'],
        },
        {
          name: 'group_b',
          subcommands: ['start', 'end'],
        },
      ],
      ['random']
    );
  }

  getSlashCommandJSON() {
    return new SlashCommandBuilder()
      .setName('party')
      .setDescription('party commands')
      .addSubcommandGroup((group) =>
        group
          .setName('group_a')
          .setDescription('Group A Party Commands')
          .addSubcommand((subcommand) =>
            subcommand.setName('start').setDescription('starts group a party')
          )
          .addSubcommand((subcommand) =>
            subcommand.setName('end').setDescription('ends group a party')
          )
      )
      .addSubcommandGroup((group) =>
        group
          .setName('group_b')
          .setDescription('Group B Party Commands')
          .addSubcommand((subcommand) =>
            subcommand.setName('start').setDescription('starts group a party')
          )
          .addSubcommand((subcommand) =>
            subcommand.setName('end').setDescription('ends group a party')
          )
      )
      .addSubcommand((subcommand) =>
        subcommand.setName('random').setDescription('randomize a party')
      );
  }
};
