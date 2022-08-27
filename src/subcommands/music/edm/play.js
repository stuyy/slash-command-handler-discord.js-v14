const BaseSubcommandExecutor = require('../../../utils/BaseSubcommandExecutor');

module.exports = class MusicEdmPlaySubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group, name) {
    super(baseCommand, group, name);
  }

  run(client, interaction) {
    interaction.reply({ content: 'Music EDM Play Subcommand!' });
  }
};
