const { Collection } = require('discord.js');

module.exports = class BaseSlashSubcommand {
  constructor(name, groups, subcommands) {
    this._name = name;
    this._groups = groups;
    this._subcommands = subcommands;
    this._groupCommands = new Collection();
  }

  get name() {
    return this._name;
  }

  get groups() {
    return this._groups;
  }

  get subcommands() {
    return this._subcommands;
  }

  get groupCommands() {
    return this._groupCommands;
  }
};
