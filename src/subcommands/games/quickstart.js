const BaseSubcommandExecutor = require('../../utils/BaseSubcommandExecutor');

module.exports = class QuickstartSubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group) {
    super(baseCommand, group, 'quickstart');
  }

  run(client, interaction) {
    interaction.reply({ content: 'Quickstart Subcommand!' });
  }
};
