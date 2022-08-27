const { SlashCommandBuilder } = require('discord.js');
const BaseSlashSubcommand = require('../../utils/BaseSlashSubcommand');

module.exports = class MusicSubcommand extends BaseSlashSubcommand {
  constructor() {
    super(
      'music',
      [
        {
          name: 'edm',
          subcommands: ['play'],
        },
      ],
      ['shuffle']
    );
  }

  getSlashCommandJSON() {
    return new SlashCommandBuilder()
      .setName('music')
      .setDescription('music commands')
      .addSubcommandGroup((group) =>
        group
          .setName('edm')
          .setDescription('Music EDM Commands')
          .addSubcommand((subcommand) =>
            subcommand.setName('play').setDescription('plays an edm song')
          )
      )
      .addSubcommand((subcommand) =>
        subcommand.setName('shuffle').setDescription('shuffles a song')
      );
  }
};
