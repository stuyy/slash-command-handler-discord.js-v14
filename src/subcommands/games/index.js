const { SlashCommandBuilder } = require('discord.js');
const BaseSlashSubcommand = require('../../utils/BaseSlashSubcommand');

module.exports = class GamesSubcommand extends BaseSlashSubcommand {
  constructor() {
    super(
      'games',
      [
        {
          name: 'monopoly',
          subcommands: ['play'],
        },
        {
          name: 'life',
          subcommands: ['play'],
        },
        {
          name: 'uno',
          subcommands: ['play'],
        },
      ],
      []
    );
  }

  getSlashCommandJSON() {
    return new SlashCommandBuilder()
      .setName('games')
      .setDescription('games commands')
      .addSubcommandGroup((group) =>
        group
          .setName('monopoly')
          .setDescription('monopoly Commands')
          .addSubcommand((subcommand) =>
            subcommand.setName('play').setDescription('plays monopoly')
          )
      )
      .addSubcommandGroup((group) =>
        group
          .setName('life')
          .setDescription('life Commands')
          .addSubcommand((subcommand) =>
            subcommand.setName('play').setDescription('plays life')
          )
      )
      .addSubcommandGroup((group) =>
        group
          .setName('uno')
          .setDescription('uno Commands')
          .addSubcommand((subcommand) =>
            subcommand.setName('play').setDescription('plays uno')
          )
      )
      .addSubcommand((subcommand) =>
        subcommand.setName('quickstart').setDescription('quickstart game')
      );
  }
};
