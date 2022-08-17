module.exports = class BaseSlashCommand {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
};
