const BaseSubcommandExecutor = require('../../utils/BaseSubcommandExecutor');

module.exports = class PartyRandomSubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group) {
    super(baseCommand, group, 'random');
  }

  run(client, interaction) {
    interaction.reply({ content: 'Party Random Subcommand!' });
  }
};
