const BaseSubcommandExecutor = require('../../../utils/BaseSubcommandExecutor');

module.exports = class PlayMonopolySubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group, name) {
    super(baseCommand, group, name);
  }

  run(client, interaction) {
    interaction.reply({ content: 'Play Monopoly Subcommand!' });
  }
};
