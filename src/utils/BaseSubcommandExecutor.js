module.exports = class BaseSubcommandExecutor {
  constructor(baseCommand, group, name) {
    this._baseCommand = baseCommand;
    this._group = group;
    this._name = name;
  }

  get baseCommand() {
    return this._baseCommand;
  }
  get group() {
    return this._group;
  }
  get name() {
    return this._name;
  }
};
