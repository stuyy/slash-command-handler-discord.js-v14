const BaseSubcommandExecutor = require('../../../utils/BaseSubcommandExecutor');

module.exports = class PlayLifeSubcommand extends BaseSubcommandExecutor {
  constructor(baseCommand, group, name) {
    super(baseCommand, group, name);
  }

  run(client, interaction) {
    interaction.reply({ content: 'Play Life Subcommand!' });
  }
};
