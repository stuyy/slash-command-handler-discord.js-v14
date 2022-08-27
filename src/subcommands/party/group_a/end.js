const BaseSubcommandExecutor = require('../../../utils/BaseSubcommandExecutor');

module.exports = class PartyGroupAEndSubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group, name) {
    super(baseCommand, group, name);
  }

  run(client, interaction) {
    interaction.reply({ content: 'Party Group A End Subcommand!' });
  }
};
