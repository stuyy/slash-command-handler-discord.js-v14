const BaseSubcommandExecutor = require('../../../utils/BaseSubcommandExecutor');

module.exports = class PartyGroupBEndSubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group, name) {
    super(baseCommand, group, name);
  }

  run(client, interaction) {
    interaction.reply({ content: 'Party Group B End Subcommand!' });
  }
};
