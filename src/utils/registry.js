const path = require('path');
const fs = require('fs/promises');
const { Collection } = require('discord.js');

async function registerCommands(client, dir = '') {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    console.log('File: ', file);
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory())
      await registerCommands(client, path.join(dir, file));
    if (file.endsWith('.js')) {
      const Command = require(path.join(filePath, file));
      const cmd = new Command();
      client.slashCommands.set(cmd.name, cmd);
      console.log(`Registering ${cmd.name}`);
    }
  }
}

async function registerSubcommands(client, dir = '../subcommands') {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    console.log(file);
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory()) {
      const subcommandDirectoryFiles = await fs.readdir(
        path.join(filePath, file)
      );
      const indexFilePos = subcommandDirectoryFiles.indexOf('index.js');
      subcommandDirectoryFiles.splice(indexFilePos, 1);
      try {
        const BaseSubcommand = require(path.join(filePath, file, 'index.js'));
        const subcommand = new BaseSubcommand();
        client.slashSubcommands.set(file, subcommand);
        for (const group of subcommand.groups) {
          for (const command of group.subcommands) {
            const SubcommandClass = require(path.join(
              filePath,
              file,
              group.name,
              command
            ));
            let subcommandGroupMap = subcommand.groupCommands.get(group.name);
            if (subcommandGroupMap) {
              subcommandGroupMap.set(
                command,
                new SubcommandClass(file, group.name, command)
              );
            } else {
              subcommandGroupMap = new Collection();
              subcommandGroupMap.set(
                command,
                new SubcommandClass(file, group.name, command)
              );
            }
            subcommand.groupCommands.set(group.name, subcommandGroupMap);
          }
          const fileIndex = subcommandDirectoryFiles.indexOf(group.name);
          subcommandDirectoryFiles.splice(fileIndex, 1);
        }
        for (const subcommandFile of subcommandDirectoryFiles) {
          const Subcommand = require(path.join(filePath, file, subcommandFile));
          const cmd = new Subcommand(file, null);
          const subcommandInstance = client.slashSubcommands.get(file);
          subcommandInstance.groupCommands.set(cmd.name, cmd);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

module.exports = {
  registerCommands,
  registerSubcommands,
};
