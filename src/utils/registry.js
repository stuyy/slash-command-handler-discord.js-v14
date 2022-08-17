const path = require('path');
const fs = require('fs/promises');

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

module.exports = {
  registerCommands,
};
