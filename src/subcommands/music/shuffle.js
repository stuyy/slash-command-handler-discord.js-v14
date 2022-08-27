const BaseSubcommandExecutor = require('../../utils/BaseSubcommandExecutor');

module.exports = class MusicShuffleSubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group) {
    super(baseCommand, group, 'shuffle');
  }

  run(client, interaction) {
    interaction.reply({ content: 'Music Shuffle Subcommand!' });
  }
};
