const BaseSubcommandExecutor = require('../../../utils/BaseSubcommandExecutor');

module.exports = class GroupAStartSubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group, name) {
    super(baseCommand, group, name);
  }

  run(client, interaction) {
    interaction.reply({ content: 'Party Group A Start Subcommand!' });
  }
};
