const BaseSubcommandExecutor = require('../../../utils/BaseSubcommandExecutor');

module.exports = class GroupBStartSubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group, name) {
    super(baseCommand, group, name);
  }

  run(client, interaction) {
    interaction.reply({ content: 'Party Group B Start Subcommand!' });
  }
};
